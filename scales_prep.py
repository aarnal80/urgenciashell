# -*- coding: utf-8 -*-
"""Prepara la especificación de escalas faltantes -> scales-gen-in/<id>.json
Cada spec incluye los criterios estándar (anclaje) para que el agente solo formatee
al esquema SCALES (suma/clasificacion), traduzca al español y fije las bandas.
Uso: python scales_prep.py"""
import json, os

app = json.load(open('app-topics.json', encoding='utf-8'))
def rs(p):
    c=[k for k in app if k.startswith(p) or p.startswith(k)]; c.sort(key=len,reverse=True); return c[0] if c else p

SPECS = [
 {"id":"gcs","nombre":"Glasgow (GCS)","para":"Nivel de consciencia (suma de respuesta ocular, verbal y motora).",
  "topics":[rs("coma"),rs("traumatismo_craneoencefalico")],"tipo":"suma",
  "anclaje":"3 ítems tipo opciones. Ocular(/4): Espontánea 4, A la voz 3, Al dolor 2, Ninguna 1. Verbal(/5): Orientada 5, Confusa 4, Palabras inapropiadas 3, Sonidos incomprensibles 2, Ninguna 1. Motora(/6): Obedece órdenes 6, Localiza dolor 5, Retirada 4, Flexión anormal 3, Extensión 2, Ninguna 1. Total 3-15. OJO: puntuación ALTA = mejor; ordena interpretacion de MENOS grave a MÁS grave: 13-15 leve, 9-12 moderado, 3-8 grave."},
 {"id":"timi","nombre":"TIMI (SCASEST)","para":"Riesgo de eventos a 14 días en angina inestable / IAMSEST.",
  "topics":[rs("dolor_toracico"),"sindrome_coronario_agudo"],"tipo":"suma",
  "anclaje":"7 ítems binarios, 1 punto cada uno: Edad ≥65; ≥3 factores de riesgo de EC; Enfermedad coronaria conocida (estenosis ≥50%); Uso de AAS en los últimos 7 días; Angina grave reciente (≥2 episodios en 24 h); Desviación del ST ≥0,5 mm; Marcadores cardiacos elevados. Total 0-7. Interpretacion: 0-1 riesgo bajo (~5%), 2-3 intermedio, 4-5 alto, 6-7 muy alto (~41%)."},
 {"id":"curb65","nombre":"CURB-65","para":"Gravedad de la neumonía adquirida en la comunidad y decisión de ingreso.",
  "topics":[rs("neumonia_adquirida"),rs("neumonia_nosocomial")],"tipo":"suma",
  "anclaje":"5 ítems binarios, 1 punto cada uno: Confusión (desorientación); Urea >7 mmol/L (BUN >19 mg/dL); FR ≥30/min; TA sistólica <90 o diastólica ≤60 mmHg; Edad ≥65 años. Total 0-5. Interpretacion: 0-1 bajo (ambulatorio), 2 intermedio (valorar ingreso/observación), 3-5 alto (ingreso; 4-5 valorar UCI)."},
 {"id":"qsofa","nombre":"qSOFA","para":"Cribado rápido de riesgo en sospecha de sepsis (fuera de UCI).",
  "topics":[rs("sepsis")],"tipo":"suma",
  "anclaje":"3 ítems binarios, 1 punto cada uno: FR ≥22/min; Alteración del estado mental (GCS <15); TA sistólica ≤100 mmHg. Total 0-3. Interpretacion: 0-1 bajo riesgo, ≥2 alto riesgo de mala evolución (mayor mortalidad; reevaluar y considerar sepsis)."},
 {"id":"sirs","nombre":"SIRS","para":"Criterios de respuesta inflamatoria sistémica.",
  "topics":[rs("sepsis")],"tipo":"suma",
  "anclaje":"4 ítems binarios, 1 punto cada uno: Tª >38 o <36 ºC; FC >90/min; FR >20/min o PaCO2 <32 mmHg; Leucocitos >12.000 o <4.000/mm3 o >10% cayados. Total 0-4. Interpretacion: 0-1 no cumple SIRS, ≥2 SIRS presente."},
 {"id":"wells_tvp","nombre":"Wells (TVP)","para":"Probabilidad clínica de trombosis venosa profunda.",
  "topics":[rs("enfermedad_tromboembolica_venosa")],"tipo":"suma",
  "anclaje":"Ítems binarios +1: Cáncer activo; Parálisis/inmovilización de extremidad inferior; Encamamiento >3 días o cirugía mayor <12 sem; Dolor a la palpación trayecto venoso profundo; Edema de toda la pierna; Aumento perímetro pantorrilla >3 cm; Edema con fóvea unilateral; Venas colaterales superficiales no varicosas; TVP previa documentada. Y un ítem de opciones: 'Diagnóstico alternativo al menos tan probable' = -2 (opciones: Sí -2 / No 0). Interpretacion: <2 improbable, ≥2 probable (orden menos→más grave: ≤1 'TVP improbable', ≥2 'TVP probable')."},
 {"id":"perc","nombre":"PERC","para":"Regla para descartar TEP en pacientes de baja probabilidad sin dímero D.",
  "topics":[rs("tromboembolia_pulmonar")],"tipo":"suma",
  "anclaje":"8 ítems binarios +1 cada uno (todos deben ser NO para descartar): Edad ≥50; FC ≥100; SatO2 <95%; Hemoptisis; Uso de estrógenos; TVP/TEP previa; Cirugía/traumatismo <4 sem con hospitalización; Edema unilateral de pierna. Interpretacion: 0 'PERC negativo: TEP descartado si baja probabilidad', ≥1 'PERC positivo: no se puede descartar, requiere dímero D / imagen'."},
 {"id":"blatchford","nombre":"Glasgow-Blatchford","para":"Riesgo en hemorragia digestiva alta; identifica candidatos a manejo ambulatorio.",
  "topics":[rs("hemorragia_digestiva_alta")],"tipo":"suma",
  "anclaje":"Ítems de opciones: Urea (mmol/L): <6,5=0; 6,5-8=2; 8-10=3; 10-25=4; ≥25=6. Hb varón (g/dL): ≥13=0; 12-13=1; 10-12=3; <10=6. Hb mujer: ≥12=0; 10-12=1; <10=6. TAS (mmHg): ≥110=0; 100-109=1; 90-99=2; <90=3. Ítems binarios: FC ≥100 (+1); Melena (+1); Síncope (+2); Hepatopatía (+2); Insuficiencia cardiaca (+2). Interpretacion: 0 'muy bajo riesgo (valorar alta)', 1-5 'bajo-intermedio', ≥6 'alto riesgo (intervención probable)'. (Para Hb usar un único ítem de opciones combinando umbrales; simplifica a un ítem Hb con tramos ≥13=0,12-13=1,10-12=3,<10=6.)"},
 {"id":"cha2ds2vasc","nombre":"CHA₂DS₂-VASc","para":"Riesgo tromboembólico en fibrilación auricular no valvular (decisión de anticoagulación).",
  "topics":[rs("fibrilacion")],"tipo":"suma",
  "anclaje":"Ítems binarios +1: Insuficiencia cardiaca/disfunción VI; Hipertensión; Diabetes; Enfermedad vascular (IAM, EAP, placa aórtica); Sexo femenino. Binario +2: Ictus/AIT/embolia previa. Ítem opciones Edad: <65=0; 65-74=+1; ≥75=+2. Interpretacion: 0 (varón) o 1 (mujer) 'bajo, no anticoagular'; 1 'intermedio, valorar'; ≥2 'alto, anticoagulación recomendada'."},
 {"id":"hasbled","nombre":"HAS-BLED","para":"Riesgo de sangrado mayor con anticoagulación en fibrilación auricular.",
  "topics":[rs("fibrilacion")],"tipo":"suma",
  "anclaje":"Ítems binarios +1 cada uno: Hipertensión (TAS >160); Función renal alterada; Función hepática alterada; Ictus previo; Sangrado previo o predisposición; INR lábil; Edad >65; Fármacos (antiagregantes/AINE); Alcohol. Total 0-9. Interpretacion: 0-2 'riesgo bajo', ≥3 'riesgo alto (precaución, revisar factores modificables)'."},
 {"id":"centor","nombre":"Centor/McIsaac","para":"Probabilidad de faringitis estreptocócica.",
  "topics":[rs("dolor_faringeo")],"tipo":"suma",
  "anclaje":"Binarios +1: Ausencia de tos; Exudado/inflamación amigdalar; Adenopatías cervicales anteriores dolorosas; Fiebre >38 ºC. Ítem opciones Edad (McIsaac): 3-14 años +1; 15-44 años 0; ≥45 años -1. Interpretacion (orden menos→más): ≤0 'muy baja (no test ni antibiótico)', 1 'baja', 2-3 'intermedia (test rápido)', ≥4 'alta (valorar antibiótico)'."},
 {"id":"ranson","nombre":"Ranson","para":"Gravedad de la pancreatitis aguda (no biliar).",
  "topics":[rs("pancreatitis")],"tipo":"suma",
  "anclaje":"Binarios +1 cada uno. Al ingreso: Edad >55; Leucocitos >16.000; Glucosa >200 mg/dL; LDH >350 UI/L; AST >250 UI/L. A las 48 h: Descenso Hto >10%; Aumento BUN >5 mg/dL; Calcio <8 mg/dL; PaO2 <60 mmHg; Déficit de bases >4 mEq/L; Secuestro de líquidos >6 L. Total 0-11. Interpretacion: 0-2 'mortalidad baja (~1%)', 3-4 'mortalidad ~15%', 5-6 'mortalidad ~40%', ≥7 'mortalidad ~100%'."},
 {"id":"hunthess","nombre":"Hunt-Hess","para":"Gravedad clínica de la hemorragia subaracnoidea.",
  "topics":[rs("hemorragia_subaracnoidea")],"tipo":"clasificacion",
  "anclaje":"5 grados (clases): I Asintomático o cefalea/rigidez leve; II Cefalea moderada-intensa, rigidez de nuca, sin déficit (salvo par craneal); III Somnolencia/confusión o déficit focal leve; IV Estupor, hemiparesia moderada-grave; V Coma profundo, rigidez de descerebración. detalle = pronóstico/mortalidad aproximada creciente."},
 {"id":"fisher","nombre":"Fisher modificada","para":"Riesgo de vasoespasmo según sangre en TC en la HSA.",
  "topics":[rs("hemorragia_subaracnoidea")],"tipo":"clasificacion",
  "anclaje":"Grados (clases): 0 Sin HSA ni HIV; 1 HSA fina, sin HIV; 2 HSA fina con HIV bilateral; 3 HSA gruesa (>1 mm), sin HIV; 4 HSA gruesa con HIV. detalle = riesgo de vasoespasmo creciente."},
 {"id":"westhaven","nombre":"West Haven","para":"Grado de encefalopatía hepática.",
  "topics":[rs("encefalopatia_hepatica")],"tipo":"clasificacion",
  "anclaje":"Grados (clases): I Cambios leves de conducta/atención, asterixis leve; II Letargia, desorientación temporal, asterixis evidente; III Somnolencia/estupor, confusión marcada, responde a estímulos; IV Coma, no responde. (Mínimo/0 = sin alteración clínica)."},
 {"id":"rutherford","nombre":"Rutherford (isquemia aguda)","para":"Categoría clínica de la isquemia arterial aguda de extremidad.",
  "topics":[rs("isquemia_arterial")],"tipo":"clasificacion",
  "anclaje":"Categorías (clases): I Viable (sin amenaza inmediata, sin déficit sensitivo/motor, Doppler audible); IIa Amenaza marginal (recuperable si tratamiento pronto; déficit sensitivo mínimo); IIb Amenaza inmediata (recuperable con revascularización inmediata; déficit sensitivo >dedos, dolor en reposo, debilidad leve-moderada); III Irreversible (pérdida tisular mayor/daño nervioso permanente; anestesia, parálisis, rigidez). detalle = actitud."},
]

os.makedirs('scales-gen-in', exist_ok=True)
ids=[]
for sp in SPECS:
    json.dump(sp, open('scales-gen-in/'+sp['id']+'.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)
    ids.append(sp['id'])
json.dump(ids, open('scales-gen-ids.json','w',encoding='utf-8'), ensure_ascii=False)
print('Specs escritas:', len(ids))
for sp in SPECS:
    print('  %-14s %-26s -> %s' % (sp['id'], sp['nombre'], ', '.join(sp['topics'])))
