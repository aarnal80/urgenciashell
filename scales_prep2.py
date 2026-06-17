# -*- coding: utf-8 -*-
"""Segunda tanda de calculadoras (estilo MDCalc).
- FÓRMULAS (renal/electrolitos/ácido-base/hepático/cardio): se escriben directas a
  scales-gen-out/ (redactadas a mano por precisión) + su cableado a scales-gen-in/.
- SUMA/CLASIFICACIÓN: se escribe el anclaje a scales-gen-in/ para que las generen agentes.
Uso: python scales_prep2.py
"""
import json, os

app = json.load(open('app-topics.json', encoding='utf-8'))
def rs(p):
    c=[k for k in app if k.startswith(p) or p.startswith(k)]; c.sort(key=len,reverse=True); return c[0] if c else p

os.makedirs('scales-gen-in', exist_ok=True)
os.makedirs('scales-gen-out', exist_ok=True)

# ---------- FÓRMULAS (estructura final) ----------
def N(id,label,unidad): return {"id":id,"label":label,"tipo":"numero","unidad":unidad}
def O(id,label,ops): return {"id":id,"label":label,"tipo":"opciones","opciones":ops}

FORMULAS = [
 {"id":"anion_gap","nombre":"Anion gap","nombre_largo":"Anion gap (hiato aniónico)","para":"Cribado de acidosis metabólica con anion gap elevado.","tipo":"formula",
  "items":[N("na","Sodio (Na⁺)","mEq/L"),N("cl","Cloro (Cl⁻)","mEq/L"),N("hco3","Bicarbonato (HCO₃⁻)","mEq/L")],
  "formula":"na-(cl+hco3)","unidad_resultado":"mEq/L","decimales":0,
  "interpretacion":[{"min":-50,"max":12,"label":"Normal","detalle":"Anion gap normal (8-12 mEq/L). Si acidosis: acidosis sin anion gap (hiperclorémica)."},{"min":12.0001,"max":None,"label":"Elevado","detalle":"Acidosis metabólica con anion gap aumentado (cetoacidosis, láctico, tóxicos, urémica). Calcular delta-delta."}],
  "nota":"Corregir por albúmina: sumar 2,5 mEq/L por cada 1 g/dL de albúmina < 4. Fuente: MDCalc.",
  "topics":[rs("alteraciones_del_equilibrio_acidobasico"),rs("cetoacidosis_diabetica")]},
 {"id":"delta_delta","nombre":"Delta-delta","nombre_largo":"Cociente delta-delta","para":"Detecta trastornos ácido-base mixtos en acidosis con anion gap elevado.","tipo":"formula",
  "items":[N("na","Sodio (Na⁺)","mEq/L"),N("cl","Cloro (Cl⁻)","mEq/L"),N("hco3","Bicarbonato (HCO₃⁻)","mEq/L")],
  "formula":"((na-(cl+hco3))-12)/(24-hco3)","unidad_resultado":"","decimales":1,
  "interpretacion":[{"min":-50,"max":0.4,"label":"< 0,4","detalle":"Acidosis metabólica sin anion gap (hiperclorémica) concomitante."},{"min":0.4001,"max":2,"label":"0,4 - 2","detalle":"Acidosis metabólica con anion gap pura."},{"min":2.0001,"max":None,"label":"> 2","detalle":"Alcalosis metabólica o acidosis respiratoria crónica concomitante."}],
  "nota":"Fuente: MDCalc.","topics":[rs("alteraciones_del_equilibrio_acidobasico")]},
 {"id":"osm_calc","nombre":"Osmolaridad calculada","nombre_largo":"Osmolaridad plasmática calculada","para":"Estima la osmolaridad plasmática.","tipo":"formula",
  "items":[N("na","Sodio (Na⁺)","mEq/L"),N("glu","Glucosa","mg/dL"),N("bun","BUN (urea/2,14)","mg/dL")],
  "formula":"2*na + glu/18 + bun/2.8","unidad_resultado":"mOsm/kg","decimales":0,
  "interpretacion":[{"min":275,"max":295,"label":"Normal","detalle":"275-295 mOsm/kg."},{"min":295.0001,"max":None,"label":"Elevada","detalle":"Hiperosmolaridad (hiperglucemia, hipernatremia, tóxicos)."},{"min":-50,"max":274.999,"label":"Baja","detalle":"Hipoosmolaridad (hiponatremia hipotónica)."}],
  "nota":"BUN = urea(mg/dL)/2,14. Fuente: MDCalc.","topics":[rs("hipernatremia"),rs("descompensacion_hiperglucemica")]},
 {"id":"osmolar_gap","nombre":"Gap osmolar","nombre_largo":"Hiato osmolar","para":"Detecta tóxicos osmóticamente activos (alcoholes).","tipo":"formula",
  "items":[N("osm_med","Osmolaridad medida","mOsm/kg"),N("na","Sodio (Na⁺)","mEq/L"),N("glu","Glucosa","mg/dL"),N("bun","BUN","mg/dL")],
  "formula":"osm_med - (2*na + glu/18 + bun/2.8)","unidad_resultado":"mOsm/kg","decimales":0,
  "interpretacion":[{"min":-50,"max":10,"label":"Normal","detalle":"< 10 mOsm/kg."},{"min":10.0001,"max":None,"label":"Elevado","detalle":"Sospecha de intoxicación por metanol, etilenglicol, isopropanol o etanol."}],
  "nota":"Fuente: MDCalc.","topics":[rs("intoxicaciones_agudas_actitud")]},
 {"id":"na_corr_glu","nombre":"Na⁺ corregido (glucosa)","nombre_largo":"Sodio corregido por hiperglucemia","para":"Corrige el sodio según la glucemia.","tipo":"formula",
  "items":[N("na","Sodio medido (Na⁺)","mEq/L"),N("glu","Glucosa","mg/dL")],
  "formula":"na + 1.6*((glu-100)/100)","unidad_resultado":"mEq/L","decimales":1,
  "interpretacion":[{"min":135,"max":145,"label":"Normal","detalle":"Na corregido normal (135-145)."},{"min":145.0001,"max":None,"label":"Hipernatremia","detalle":"Na corregido elevado."},{"min":-50,"max":134.999,"label":"Hiponatremia","detalle":"Na corregido bajo (hiponatremia verdadera)."}],
  "nota":"Factor 1,6 mEq/L por cada 100 mg/dL de glucosa > 100. Fuente: MDCalc.","topics":[rs("descompensacion_hiperglucemica"),rs("cetoacidosis_diabetica"),rs("hiponatremia")]},
 {"id":"ca_corr","nombre":"Calcio corregido","nombre_largo":"Calcio corregido por albúmina","para":"Corrige el calcio total según la albúmina.","tipo":"formula",
  "items":[N("ca","Calcio total","mg/dL"),N("alb","Albúmina","g/dL")],
  "formula":"ca + 0.8*(4-alb)","unidad_resultado":"mg/dL","decimales":1,
  "interpretacion":[{"min":8.5,"max":10.5,"label":"Normal","detalle":"8,5-10,5 mg/dL."},{"min":10.5001,"max":None,"label":"Hipercalcemia","detalle":"Calcio corregido elevado."},{"min":-50,"max":8.499,"label":"Hipocalcemia","detalle":"Calcio corregido bajo."}],
  "nota":"Fuente: MDCalc.","topics":[rs("hipocalcemia"),rs("hipercalcemia")]},
 {"id":"fena","nombre":"FENa","nombre_largo":"Fracción de excreción de sodio","para":"Diferencia fracaso renal prerrenal de necrosis tubular aguda.","tipo":"formula",
  "items":[N("una","Na⁺ en orina","mEq/L"),N("pcr","Creatinina plasmática","mg/dL"),N("pna","Na⁺ plasmático","mEq/L"),N("ucr","Creatinina en orina","mg/dL")],
  "formula":"(una*pcr)/(pna*ucr)*100","unidad_resultado":"%","decimales":1,
  "interpretacion":[{"min":-50,"max":1,"label":"Prerrenal","detalle":"FENa < 1% sugiere causa prerrenal."},{"min":1.0001,"max":None,"label":"Renal / NTA","detalle":"FENa > 1-2% sugiere necrosis tubular aguda u otra causa renal."}],
  "nota":"No válida si diuréticos (usar FEUrea). Fuente: MDCalc.","topics":[rs("lesion_renal_aguda")]},
 {"id":"feurea","nombre":"FEUrea","nombre_largo":"Fracción de excreción de urea","para":"Diferencia prerrenal de NTA cuando el paciente toma diuréticos.","tipo":"formula",
  "items":[N("uurea","Urea en orina","mg/dL"),N("pcr","Creatinina plasmática","mg/dL"),N("purea","Urea plasmática","mg/dL"),N("ucr","Creatinina en orina","mg/dL")],
  "formula":"(uurea*pcr)/(purea*ucr)*100","unidad_resultado":"%","decimales":1,
  "interpretacion":[{"min":-50,"max":35,"label":"Prerrenal","detalle":"FEUrea < 35% sugiere causa prerrenal."},{"min":35.0001,"max":None,"label":"Renal / NTA","detalle":"FEUrea > 50% sugiere causa renal."}],
  "nota":"Útil con diuréticos. Fuente: MDCalc.","topics":[rs("lesion_renal_aguda")]},
 {"id":"cockcroft","nombre":"Cockcroft-Gault","nombre_largo":"Aclaramiento de creatinina (Cockcroft-Gault)","para":"Estima el aclaramiento de creatinina para ajuste de fármacos.","tipo":"formula",
  "items":[N("edad","Edad","años"),N("peso","Peso","kg"),N("scr","Creatinina sérica","mg/dL"),O("sexo","Sexo",[{"label":"Varón","valor":1.0},{"label":"Mujer","valor":0.85}])],
  "formula":"((140-edad)*peso*sexo)/(72*scr)","unidad_resultado":"mL/min","decimales":0,
  "interpretacion":[{"min":90,"max":None,"label":"Normal (≥90)","detalle":"Función renal normal."},{"min":60,"max":89.999,"label":"Leve ↓ (60-89)","detalle":"Descenso leve."},{"min":30,"max":59.999,"label":"Moderado ↓ (30-59)","detalle":"Ajustar fármacos de eliminación renal."},{"min":15,"max":29.999,"label":"Grave ↓ (15-29)","detalle":"Insuficiencia renal grave."},{"min":-50,"max":14.999,"label":"Fallo renal (<15)","detalle":"Valorar diálisis / ajuste estricto."}],
  "nota":"Usar peso ajustado si obesidad. Fuente: MDCalc.","topics":[rs("lesion_renal_aguda"),rs("enfermedad_renal_cronica")]},
 {"id":"water_deficit","nombre":"Déficit de agua","nombre_largo":"Déficit de agua libre (hipernatremia)","para":"Estima el agua a reponer en la hipernatremia.","tipo":"formula",
  "items":[N("peso","Peso","kg"),N("na","Sodio actual","mEq/L"),O("factor","Agua corporal total",[{"label":"Varón (0,6)","valor":0.6},{"label":"Mujer / varón anciano (0,5)","valor":0.5},{"label":"Mujer anciana (0,45)","valor":0.45}])],
  "formula":"peso*factor*((na/140)-1)","unidad_resultado":"L","decimales":1,
  "interpretacion":[{"min":-50,"max":0,"label":"Sin déficit","detalle":"Na ≤ 140; no hay déficit de agua libre por este cálculo."},{"min":0.0001,"max":None,"label":"Déficit de agua libre","detalle":"Reponer en 48-72 h; no descender el Na más de 10-12 mEq/L/día."}],
  "nota":"Objetivo de Na 140. Fuente: MDCalc.","topics":[rs("hipernatremia")]},
 {"id":"ttkg","nombre":"TTKG","nombre_largo":"Gradiente transtubular de potasio","para":"Valora la respuesta renal en las alteraciones del potasio.","tipo":"formula",
  "items":[N("uk","K⁺ en orina","mEq/L"),N("pk","K⁺ plasmático","mEq/L"),N("uosm","Osmolaridad urinaria","mOsm/kg"),N("posm","Osmolaridad plasmática","mOsm/kg")],
  "formula":"(uk/pk)/(uosm/posm)","unidad_resultado":"","decimales":1,
  "interpretacion":[{"min":-50,"max":4,"label":"Bajo (<4)","detalle":"En hiperpotasemia sugiere hipoaldosteronismo; en hipopotasemia, pérdida extrarrenal (adecuado)."},{"min":4.0001,"max":7,"label":"4-7","detalle":"Rango intermedio."},{"min":7.0001,"max":None,"label":"Alto (>7)","detalle":"En hipopotasemia sugiere pérdida renal / exceso mineralocorticoide."}],
  "nota":"Requiere Uosm > plasma y Na urinario > 25. Fuente: MDCalc.","topics":[rs("hiperpotasemia"),rs("hipopotasemia")]},
 {"id":"pam","nombre":"PAM (presión arterial media)","nombre_largo":"Presión arterial media","para":"Estima la presión de perfusión (objetivo en shock).","tipo":"formula",
  "items":[N("sbp","TA sistólica","mmHg"),N("dbp","TA diastólica","mmHg")],
  "formula":"dbp + (sbp-dbp)/3","unidad_resultado":"mmHg","decimales":0,
  "interpretacion":[{"min":65,"max":None,"label":"≥ 65: adecuada","detalle":"Objetivo de perfusión habitual alcanzado."},{"min":-50,"max":64.999,"label":"< 65: hipoperfusión","detalle":"Objetivo en shock/sepsis: PAM ≥ 65 mmHg."}],
  "nota":"Fuente: MDCalc.","topics":[rs("shock"),rs("sepsis"),rs("emergencia_hipertensiva")]},
 {"id":"parkland","nombre":"Parkland","nombre_largo":"Fórmula de Parkland (quemados)","para":"Estima la fluidoterapia en las primeras 24 h del quemado.","tipo":"formula",
  "items":[N("peso","Peso","kg"),N("tbsa","Superficie quemada","%")],
  "formula":"4*peso*tbsa","unidad_resultado":"mL/24h","decimales":0,
  "interpretacion":[{"min":0,"max":None,"label":"Cristaloides en 24 h","detalle":"Administrar el 50% en las primeras 8 h desde la quemadura y el 50% en las 16 h siguientes (Ringer lactato)."}],
  "nota":"Ajustar a diuresis 0,5-1 mL/kg/h. Solo % de 2.º-3.er grado. Fuente: MDCalc.","topics":[rs("quemaduras_termicas")]},
 {"id":"qtc","nombre":"QTc (Bazett)","nombre_largo":"QT corregido (Bazett)","para":"Corrige el QT por la frecuencia cardiaca.","tipo":"formula",
  "items":[N("qt","Intervalo QT","ms"),N("fc","Frecuencia cardiaca","lpm")],
  "formula":"qt/Math.sqrt(60/fc)","unidad_resultado":"ms","decimales":0,
  "interpretacion":[{"min":-50,"max":440,"label":"Normal","detalle":"≤ 440 ms (varón) / ≤ 460 ms (mujer)."},{"min":440.0001,"max":500,"label":"Prolongado","detalle":"Riesgo aumentado; revisar fármacos e iones."},{"min":500.0001,"max":None,"label":"Muy prolongado","detalle":"Alto riesgo de torsade de pointes."}],
  "nota":"Bazett: QTc = QT/√(RR). Fuente: MDCalc.","topics":[rs("intoxicacion_aguda_por_antidepresivos_ciclicos"),"arritmias_por_alteracion_en_la_conduccion_del_impulso_enferm"]},
 {"id":"meld","nombre":"MELD","nombre_largo":"MELD (hepatopatía crónica)","para":"Gravedad de la hepatopatía crónica.","tipo":"formula",
  "items":[N("bili","Bilirrubina","mg/dL"),N("inr","INR",""),N("cr","Creatinina","mg/dL")],
  "formula":"Math.round(3.78*Math.log(Math.max(bili,1))+11.2*Math.log(Math.max(inr,1))+9.57*Math.log(Math.max(cr,1))+6.43)","unidad_resultado":"","decimales":0,
  "interpretacion":[{"min":-50,"max":9,"label":"≤ 9","detalle":"Mortalidad a 3 meses ~1,9%."},{"min":10,"max":19,"label":"10-19","detalle":"Mortalidad ~6-20%."},{"min":20,"max":29,"label":"20-29","detalle":"Mortalidad ~20-50%."},{"min":30,"max":None,"label":"≥ 30","detalle":"Mortalidad > 50%."}],
  "nota":"Valores mínimos de 1 para bili/INR/Cr; Cr máx 4. Fuente: MDCalc.","topics":[rs("encefalopatia_hepatica"),rs("ascitis")]},
 {"id":"sodio_deficit","nombre":"Déficit de Na⁺","nombre_largo":"Déficit de sodio (hiponatremia)","para":"Estima el sodio a reponer en la hiponatremia.","tipo":"formula",
  "items":[N("peso","Peso","kg"),N("na","Sodio actual","mEq/L"),N("objetivo","Na⁺ objetivo","mEq/L"),O("factor","Agua corporal total",[{"label":"Varón (0,6)","valor":0.6},{"label":"Mujer / anciano (0,5)","valor":0.5}])],
  "formula":"peso*factor*(objetivo-na)","unidad_resultado":"mEq","decimales":0,
  "interpretacion":[{"min":0,"max":None,"label":"Déficit de Na⁺ a reponer","detalle":"No corregir > 8-10 mEq/L en 24 h (riesgo de mielinólisis pontina)."}],
  "nota":"Objetivo prudente; reevaluar natremia con frecuencia. Fuente: MDCalc.","topics":[rs("hiponatremia")]},
]

for f in FORMULAS:
    topics = f.pop('topics')
    json.dump(f, open('scales-gen-out/%s.json' % f['id'],'w',encoding='utf-8'), ensure_ascii=False, indent=1)
    json.dump({"id":f['id'],"nombre":f['nombre'],"topics":topics,"tipo":"formula"},
              open('scales-gen-in/%s.json' % f['id'],'w',encoding='utf-8'), ensure_ascii=False, indent=1)

# ---------- SUMA / CLASIFICACIÓN (anclaje para agentes) ----------
SUM = [
 {"id":"childpugh","nombre":"Child-Pugh","para":"Gravedad de la cirrosis hepática.","topics":[rs("encefalopatia_hepatica"),rs("ascitis")],"tipo":"suma",
  "anclaje":"5 ítems de opciones, 1-3 puntos cada uno. Bilirrubina (mg/dL): <2 =1; 2-3 =2; >3 =3. Albúmina (g/dL): >3,5 =1; 2,8-3,5 =2; <2,8 =3. INR: <1,7 =1; 1,7-2,3 =2; >2,3 =3. Ascitis: ausente =1; leve/controlada =2; a tensión/refractaria =3. Encefalopatía: ausente =1; grado I-II =2; grado III-IV =3. Total 5-15. Interpretacion (menos→más grave): 5-6 'Clase A (bien compensada)', 7-9 'Clase B', 10-15 'Clase C (descompensada)'."},
 {"id":"alvarado","nombre":"Alvarado","para":"Probabilidad de apendicitis aguda.","topics":[rs("dolor_abdominal_agudo")],"tipo":"suma",
  "anclaje":"Binarios: Dolor migratorio a FID +1; Anorexia +1; Náuseas/vómitos +1; Dolor a la palpación en FID +2; Blumberg (dolor de rebote) +1; Tª >37,3 ºC +1; Leucocitosis >10.000 +2; Desviación izquierda (neutrofilia >75%) +1. Total 0-10. Interpretacion: 0-4 'baja probabilidad', 5-6 'probable (observación)', 7-10 'alta probabilidad (valorar cirugía)'."},
 {"id":"nihss","nombre":"NIHSS","para":"Gravedad del ictus (déficit neurológico).","topics":[rs("ictus")],"tipo":"suma",
  "anclaje":"15 ítems de opciones (escala NIH oficial). 1a Nivel de consciencia 0-3; 1b Preguntas (mes y edad) 0-2; 1c Órdenes 0-2; 2 Mirada 0-2; 3 Campos visuales 0-3; 4 Paresia facial 0-3; 5a Motor brazo izq 0-4; 5b Motor brazo dcho 0-4; 6a Motor pierna izq 0-4; 6b Motor pierna dcha 0-4; 7 Ataxia 0-2; 8 Sensibilidad 0-2; 9 Lenguaje 0-3; 10 Disartria 0-2; 11 Extinción/inatención 0-2. Total 0-42. Interpretacion (menos→más grave): 0 'sin déficit', 1-4 'leve', 5-15 'moderado', 16-20 'moderado-grave', 21-42 'grave'. Usa etiquetas oficiales breves para cada opción."},
 {"id":"geneva","nombre":"Ginebra revisada","para":"Probabilidad clínica de TEP (alternativa a Wells).","topics":[rs("tromboembolia_pulmonar")],"tipo":"suma",
  "anclaje":"Ítems de opciones/binarios (Ginebra revisada): Edad >65 +1; TVP/TEP previa +3; Cirugía o fractura <1 mes +2; Cáncer activo +2; Dolor unilateral en extremidad inferior +3; Hemoptisis +2; FC 75-94 +3 / FC ≥95 +5 (ítem de opciones: <75=0, 75-94=+3, ≥95=+5); Dolor a la palpación venosa profunda y edema unilateral +4. Interpretacion: 0-3 'probabilidad baja', 4-10 'intermedia', ≥11 'alta'."},
 {"id":"rockall","nombre":"Rockall","para":"Riesgo de resangrado y mortalidad tras hemorragia digestiva alta.","topics":[rs("hemorragia_digestiva_alta")],"tipo":"suma",
  "anclaje":"Ítems de opciones: Edad <60=0, 60-79=1, ≥80=2. Shock: sin shock=0, taquicardia (FC≥100, TAS≥100)=1, hipotensión (TAS<100)=2. Comorbilidad: ninguna=0, cardiopatía isquémica/IC/otra mayor=2, insuficiencia renal/hepática o cáncer diseminado=3. (Rockall completo añade diagnóstico endoscópico y estigmas, pero usa el clínico pre-endoscopia con estos 3 ítems.) Interpretacion: 0-2 'bajo riesgo', 3-5 'intermedio', ≥6 'alto'."},
 {"id":"rass","nombre":"RASS","para":"Nivel de sedación-agitación (Richmond).","topics":["analgesia_sedacion_y_relajacion_muscular_en_urgencias_secuenc"],"tipo":"clasificacion",
  "anclaje":"10 clases (de mayor a menor, pero ordena la lista de +4 a -5): +4 Combativo; +3 Muy agitado; +2 Agitado; +1 Inquieto; 0 Alerta y tranquilo; -1 Somnoliento (despierta >10 s a la voz); -2 Sedación leve (<10 s a la voz); -3 Sedación moderada (movimiento a la voz, sin contacto ocular); -4 Sedación profunda (responde solo al estímulo físico); -5 No despertable. detalle = interpretación breve."},
]
for sp in SUM:
    json.dump(sp, open('scales-gen-in/%s.json' % sp['id'],'w',encoding='utf-8'), ensure_ascii=False, indent=1)

print('Fórmulas escritas (out+in):', len(FORMULAS))
print('Specs suma/clasificación para agentes:', [s['id'] for s in SUM])
# resolver de RASS y arritmias por si no casan
for s in SUM:
    for t in s['topics']:
        if t not in app: print('  AVISO topic no casa exactamente:', s['id'], '->', t, '(se intentará por prefijo en merge)')
for f in FORMULAS:
    pass
