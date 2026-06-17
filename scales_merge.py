# -*- coding: utf-8 -*-
"""Fusiona scales-gen-out/<id>.json -> scales-extra.js
- Define cada escala en window.SCALES.
- Cablea cada escala a los temas indicados en su spec (scales-gen-in/<id>.json -> topics).
Valida estructura y, donde se conoce, la suma máxima teórica.
Uso: python scales_merge.py"""
import json, glob, os

EXPECTED_MAX = {"gcs":15,"timi":7,"curb65":5,"qsofa":3,"sirs":4,"perc":8,
                "cha2ds2vasc":9,"hasbled":9,"centor":5,"ranson":11}

def max_sum(s):
    tot = 0
    for it in s.get('items', []):
        if it.get('tipo') == 'binario':
            tot += max(0, it.get('puntos', 0))
        else:
            tot += max((o.get('puntos', 0) for o in it.get('opciones', [])), default=0)
    return tot

scales = {}
wiring = {}   # id -> [topic slugs]
warns = []
for fp in sorted(glob.glob('scales-gen-out/*.json')):
    sid = os.path.splitext(os.path.basename(fp))[0]
    try:
        d = json.load(open(fp, encoding='utf-8'))
    except Exception as e:
        warns.append('%s: JSON inválido (%s)' % (sid, e)); continue
    d['id'] = sid
    tipo = d.get('tipo')
    if tipo == 'suma':
        if not d.get('items') or not d.get('interpretacion'):
            warns.append('%s: suma sin items/interpretacion' % sid); continue
        m = max_sum(d)
        if sid in EXPECTED_MAX and m != EXPECTED_MAX[sid]:
            warns.append('%s: suma máxima %d != esperada %d' % (sid, m, EXPECTED_MAX[sid]))
    elif tipo == 'clasificacion':
        if not d.get('clases'):
            warns.append('%s: clasificacion sin clases' % sid); continue
    elif tipo == 'formula':
        if not d.get('items') or not d.get('formula'):
            warns.append('%s: formula sin items/formula' % sid); continue
    else:
        warns.append('%s: tipo desconocido %r' % (sid, tipo)); continue
    scales[sid] = d
    # topics desde el spec
    try:
        spec = json.load(open('scales-gen-in/%s.json' % sid, encoding='utf-8'))
        wiring[sid] = spec.get('topics', [])
    except Exception:
        wiring[sid] = []

js = []
js.append('/* Generado por scales_merge.py — escalas/calculadoras adicionales y su cableado a temas.')
js.append('   Criterios estándar (GCS, CURB-65, qSOFA, CHA2DS2-VASc, etc.). BORRADOR para revisión médica. */')
js.append('(function () {')
js.append('  var T = window.TOPICS || [];')
js.append('  var S = window.SCALES = window.SCALES || {};')
js.append('  var DEF = ' + json.dumps(scales, ensure_ascii=False, indent=1) + ';')
js.append('  Object.keys(DEF).forEach(function (k) { if (!S[k]) S[k] = DEF[k]; });')
js.append('  var WIRE = ' + json.dumps(wiring, ensure_ascii=False, indent=1) + ';')
js.append('''  T.forEach(function (t) {
    Object.keys(WIRE).forEach(function (sid) {
      if (WIRE[sid].indexOf(t.slug) !== -1) {
        t.escalas = t.escalas || [];
        if (t.escalas.indexOf(sid) === -1) t.escalas.push(sid);
      }
    });
  });''')
js.append('})();')

open('scales-extra.js', 'w', encoding='utf-8').write('\n'.join(js) + '\n')
print('Escalas fusionadas:', len(scales), '| cableadas a temas:', sum(len(v) for v in wiring.values()))
print('Escrito scales-extra.js (%.1f KB)' % (os.path.getsize('scales-extra.js')/1024))
if warns:
    print('AVISOS (%d):' % len(warns))
    for w in warns: print('  -', w)
else:
    print('Sin avisos: estructura y sumas máximas correctas.')
