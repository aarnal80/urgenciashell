# -*- coding: utf-8 -*-
"""Fusiona wikem-gen-out/<slug>.json -> topics-extra.js (parche de window.TOPICS).
Valida JSON, descarta slugs de enlace inexistentes, conserva HEART y la referencia WikEM.
Uso: python merge_gen.py"""
import json, os, glob

app_topics = json.load(open('app-topics.json', encoding='utf-8'))
valid_slugs = set(app_topics.keys())

def resolve(slug):
    """Resuelve un slug largo al slug real (el pipeline trunca a ~60 car)."""
    if slug in valid_slugs:
        return slug
    cands = [v for v in valid_slugs if slug.startswith(v) or v.startswith(slug)]
    cands.sort(key=len, reverse=True)
    return cands[0] if cands else None

patch = {}
bad = []
for fp in sorted(glob.glob('wikem-gen-out/*.json')):
    slug = os.path.splitext(os.path.basename(fp))[0]
    if slug == 'sindrome_coronario_agudo':
        continue  # SCA se mantiene con la versión aprobada a mano (ddx-demo.js)
    try:
        d = json.load(open(fp, encoding='utf-8'))
    except Exception as e:
        bad.append((slug, 'JSON inválido: %s' % e)); continue
    real = resolve(slug)
    if not real:
        bad.append((slug, 'sin slug de tema correspondiente')); continue
    ddx = d.get('ddx', []) or []
    # validar y limpiar/resolver enlaces de slug
    for g in ddx:
        for it in g.get('items', []):
            if it.get('slug'):
                r = resolve(it['slug'])
                if r and r != real:
                    it['slug'] = r
                else:
                    it.pop('slug', None)
    plan = d.get('plan', []) or []
    entry = {'ddx': ddx, 'plan': plan}
    wt = d.get('wikem_titulo')
    if wt:
        entry['wikem_titulo'] = wt
    patch[real] = entry

# escribir topics-extra.js
HEART = '''  // --- Escala HEART (dolor torácico / infarto) — criterios de WikEM ---
  if (window.SCALES && !window.SCALES.heart) {
    window.SCALES.heart = {
      id: "heart", nombre: "HEART", nombre_largo: "Escala HEART para dolor torácico",
      para: "Riesgo de evento cardiaco mayor (MACE) a 6 semanas en dolor torácico de posible origen coronario.",
      tipo: "suma",
      items: [
        { id:"historia", label:"Historia clínica (anamnesis)", tipo:"opciones", opciones:[{label:"Poco sospechosa",puntos:0},{label:"Moderadamente sospechosa",puntos:1},{label:"Muy sospechosa",puntos:2}] },
        { id:"ecg", label:"ECG", tipo:"opciones", opciones:[{label:"Normal",puntos:0},{label:"Alteración inespecífica de la repolarización",puntos:1},{label:"Descenso significativo del ST",puntos:2}] },
        { id:"edad", label:"Edad", tipo:"opciones", opciones:[{label:"< 45 años",puntos:0},{label:"45-64 años",puntos:1},{label:"≥ 65 años",puntos:2}] },
        { id:"factores", label:"Factores de riesgo (HTA, dislipemia, DM, obesidad, tabaquismo, AF de ECV o enfermedad aterosclerótica conocida)", tipo:"opciones", opciones:[{label:"Ningún factor",puntos:0},{label:"1-2 factores",puntos:1},{label:"≥ 3 factores o enfermedad aterosclerótica conocida",puntos:2}] },
        { id:"troponina", label:"Troponina", tipo:"opciones", opciones:[{label:"≤ límite normal",puntos:0},{label:"1-3× el límite normal",puntos:1},{label:"> 3× el límite normal",puntos:2}] }
      ],
      interpretacion: [
        { min:0, max:3, label:"Riesgo bajo", detalle:"MACE a 6 semanas 0,9-1,7%. Valorar alta precoz con seguimiento." },
        { min:4, max:6, label:"Riesgo moderado", detalle:"MACE 12-16,6%. Ingreso/observación con troponinas seriadas." },
        { min:7, max:10, label:"Riesgo alto", detalle:"MACE 50-65%. Estrategia invasiva precoz (cardiología/cateterismo)." }
      ],
      nota: "Validada para dolor torácico indiferenciado en urgencias. Fuente: WikEM (Six et al.)."
    };
  }
'''

js = []
js.append('/* Generado por merge_gen.py — parche de contenido (ddx + plan + ref WikEM) para window.TOPICS.')
js.append('   Diagnóstico diferencial y plan de trabajo derivados de WikEM + Jiménez Murillo. BORRADOR IA. */')
js.append('(function () {')
js.append('  var T = window.TOPICS || [];')
js.append(HEART)
js.append('  var PATCH = ' + json.dumps(patch, ensure_ascii=False, indent=1) + ';')
js.append('''  T.forEach(function (t) {
    var p = PATCH[t.slug];
    if (p) {
      if (p.ddx && p.ddx.length) t.ddx = p.ddx;
      if (p.plan && p.plan.length) t.plan = p.plan;
      if (p.wikem_titulo) t.wikem_titulo = p.wikem_titulo;
    }
    // cablear HEART a dolor torácico / SCA
    if (t.slug === "sindrome_coronario_agudo" || t.slug === "dolor_toracico_agudo") {
      t.escalas = t.escalas || [];
      if (t.escalas.indexOf("heart") === -1) t.escalas.unshift("heart");
    }
  });
})();''')

open('topics-extra.js', 'w', encoding='utf-8').write('\n'.join(js) + '\n')

con_ddx = sum(1 for s in patch if patch[s]['ddx'])
con_plan = sum(1 for s in patch if patch[s]['plan'])
print('Fusionados:', len(patch), 'temas |', con_ddx, 'con ddx |', con_plan, 'con plan')
if bad:
    print('PROBLEMAS (%d):' % len(bad))
    for s, e in bad: print('  ', s, e)
print('Escrito topics-extra.js (%.1f KB)' % (os.path.getsize('topics-extra.js')/1024))
