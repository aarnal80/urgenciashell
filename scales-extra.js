/* Generado por scales_merge.py — escalas/calculadoras adicionales y su cableado a temas.
   Criterios estándar (GCS, CURB-65, qSOFA, CHA2DS2-VASc, etc.). BORRADOR para revisión médica. */
(function () {
  var T = window.TOPICS || [];
  var S = window.SCALES = window.SCALES || {};
  var DEF = {
 "blatchford": {
  "id": "blatchford",
  "nombre": "Glasgow-Blatchford",
  "nombre_largo": "Escala de Glasgow-Blatchford (GBS)",
  "para": "Estratifica el riesgo en la hemorragia digestiva alta e identifica a los pacientes candidatos a manejo ambulatorio.",
  "tipo": "suma",
  "items": [
   {
    "id": "urea",
    "label": "Urea (mmol/L)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "< 6,5",
      "puntos": 0
     },
     {
      "label": "6,5 - 8",
      "puntos": 2
     },
     {
      "label": "8 - 10",
      "puntos": 3
     },
     {
      "label": "10 - 25",
      "puntos": 4
     },
     {
      "label": "≥ 25",
      "puntos": 6
     }
    ]
   },
   {
    "id": "hb",
    "label": "Hemoglobina (g/dL)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "≥ 13",
      "puntos": 0
     },
     {
      "label": "12 - 13",
      "puntos": 1
     },
     {
      "label": "10 - 12",
      "puntos": 3
     },
     {
      "label": "< 10",
      "puntos": 6
     }
    ]
   },
   {
    "id": "tas",
    "label": "Tensión arterial sistólica (mmHg)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "≥ 110",
      "puntos": 0
     },
     {
      "label": "100 - 109",
      "puntos": 1
     },
     {
      "label": "90 - 99",
      "puntos": 2
     },
     {
      "label": "< 90",
      "puntos": 3
     }
    ]
   },
   {
    "id": "fc100",
    "label": "Frecuencia cardiaca ≥ 100 lpm",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "melena",
    "label": "Melena",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "sincope",
    "label": "Síncope",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "hepatopatia",
    "label": "Hepatopatía",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "insuf_cardiaca",
    "label": "Insuficiencia cardiaca",
    "tipo": "binario",
    "puntos": 2
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 0,
    "label": "Muy bajo riesgo",
    "detalle": "Valorar alta y manejo ambulatorio; baja probabilidad de necesitar intervención."
   },
   {
    "min": 1,
    "max": 5,
    "label": "Riesgo bajo-intermedio",
    "detalle": "Valoración hospitalaria; riesgo intermedio de intervención."
   },
   {
    "min": 6,
    "max": null,
    "label": "Riesgo alto",
    "detalle": "Alta probabilidad de requerir intervención (transfusión, endoscopia, cirugía). Manejo hospitalario."
   }
  ],
  "nota": "El ítem de hemoglobina está simplificado a un único parámetro con umbrales ≥13=0, 12-13=1, 10-12=3, <10=6."
 },
 "centor": {
  "id": "centor",
  "nombre": "Centor/McIsaac",
  "nombre_largo": "Criterios de Centor modificados (McIsaac) para faringitis estreptocócica",
  "para": "Estimar la probabilidad de faringitis por estreptococo beta-hemolítico del grupo A y orientar la necesidad de test rápido y antibiótico.",
  "tipo": "suma",
  "items": [
   {
    "id": "sin_tos",
    "label": "Ausencia de tos",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "exudado",
    "label": "Exudado o inflamación amigdalar",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "adenopatias",
    "label": "Adenopatías cervicales anteriores dolorosas",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fiebre",
    "label": "Fiebre > 38 ºC",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edad",
    "label": "Edad",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "3-14 años",
      "puntos": 1
     },
     {
      "label": "15-44 años",
      "puntos": 0
     },
     {
      "label": "≥ 45 años",
      "puntos": -1
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": null,
    "max": 0,
    "label": "Probabilidad muy baja",
    "detalle": "No precisa test rápido ni antibiótico."
   },
   {
    "min": 1,
    "max": 1,
    "label": "Probabilidad baja",
    "detalle": "Manejo sintomático; antibiótico no recomendado de rutina."
   },
   {
    "min": 2,
    "max": 3,
    "label": "Probabilidad intermedia",
    "detalle": "Realizar test rápido de detección de antígeno estreptocócico."
   },
   {
    "min": 4,
    "max": null,
    "label": "Probabilidad alta",
    "detalle": "Valorar antibiótico (idealmente confirmando con test rápido)."
   }
  ],
  "nota": "Criterios de Centor modificados por McIsaac (incluyen la edad). Puntuación de -1 a 5."
 },
 "cha2ds2vasc": {
  "id": "cha2ds2vasc",
  "nombre": "CHA₂DS₂-VASc",
  "nombre_largo": "Escala CHA₂DS₂-VASc de riesgo tromboembólico en fibrilación auricular",
  "para": "Estimar el riesgo tromboembólico en la fibrilación auricular no valvular y decidir la indicación de anticoagulación.",
  "tipo": "suma",
  "items": [
   {
    "id": "icc",
    "label": "Insuficiencia cardiaca o disfunción ventricular izquierda",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "hta",
    "label": "Hipertensión arterial",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edad",
    "label": "Edad",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "< 65 años",
      "puntos": 0
     },
     {
      "label": "65-74 años",
      "puntos": 1
     },
     {
      "label": "≥ 75 años",
      "puntos": 2
     }
    ]
   },
   {
    "id": "diabetes",
    "label": "Diabetes mellitus",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ictus",
    "label": "Ictus, AIT o embolia previa",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "vascular",
    "label": "Enfermedad vascular (IAM, arteriopatía periférica o placa aórtica)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "sexo_femenino",
    "label": "Sexo femenino",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 1,
    "label": "Riesgo bajo",
    "detalle": "0 puntos en varón o 1 punto en mujer (por el sexo): no se recomienda anticoagulación."
   },
   {
    "min": 1,
    "max": 1,
    "label": "Riesgo intermedio",
    "detalle": "1 punto (en varón): valorar individualmente la anticoagulación."
   },
   {
    "min": 2,
    "max": null,
    "label": "Riesgo alto",
    "detalle": "≥ 2 puntos: anticoagulación recomendada."
   }
  ],
  "nota": "El punto por sexo femenino solo cuenta en presencia de otro factor de riesgo. Puntuación máxima 9."
 },
 "curb65": {
  "id": "curb65",
  "nombre": "CURB-65",
  "nombre_largo": "Escala CURB-65 de gravedad de la neumonía adquirida en la comunidad",
  "para": "Estimar la gravedad de la neumonía adquirida en la comunidad y orientar la decisión de ingreso.",
  "tipo": "suma",
  "items": [
   {
    "id": "confusion",
    "label": "Confusión (desorientación de nueva aparición)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "urea",
    "label": "Urea > 7 mmol/L (BUN > 19 mg/dL)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fr",
    "label": "Frecuencia respiratoria ≥ 30/min",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ta",
    "label": "TA sistólica < 90 mmHg o diastólica ≤ 60 mmHg",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edad65",
    "label": "Edad ≥ 65 años",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 1,
    "label": "Riesgo bajo",
    "detalle": "Mortalidad baja. Tratamiento ambulatorio."
   },
   {
    "min": 2,
    "max": 2,
    "label": "Riesgo intermedio",
    "detalle": "Valorar ingreso hospitalario u observación."
   },
   {
    "min": 3,
    "max": null,
    "label": "Riesgo alto",
    "detalle": "Ingreso hospitalario. Con 4-5 puntos, valorar ingreso en UCI."
   }
  ],
  "nota": "Cada ítem suma 1 punto; puntuación total 0-5."
 },
 "fisher": {
  "id": "fisher",
  "nombre": "Fisher modificada",
  "nombre_largo": "Escala de Fisher modificada",
  "para": "Riesgo de vasoespasmo según la cantidad de sangre en la TC en la hemorragia subaracnoidea.",
  "tipo": "clasificacion",
  "clases": [
   {
    "label": "Grado 0",
    "descripcion": "Sin hemorragia subaracnoidea ni hemorragia intraventricular.",
    "detalle": "Riesgo de vasoespasmo mínimo."
   },
   {
    "label": "Grado 1",
    "descripcion": "HSA fina, sin hemorragia intraventricular.",
    "detalle": "Riesgo de vasoespasmo bajo."
   },
   {
    "label": "Grado 2",
    "descripcion": "HSA fina con hemorragia intraventricular bilateral.",
    "detalle": "Riesgo de vasoespasmo moderado."
   },
   {
    "label": "Grado 3",
    "descripcion": "HSA gruesa (>1 mm), sin hemorragia intraventricular.",
    "detalle": "Riesgo de vasoespasmo alto."
   },
   {
    "label": "Grado 4",
    "descripcion": "HSA gruesa con hemorragia intraventricular.",
    "detalle": "Riesgo de vasoespasmo muy alto."
   }
  ],
  "nota": "El riesgo de vasoespasmo aumenta de forma creciente con el grado."
 },
 "gcs": {
  "id": "gcs",
  "nombre": "Glasgow (GCS)",
  "nombre_largo": "Escala de coma de Glasgow",
  "para": "Valorar el nivel de consciencia mediante la suma de la respuesta ocular, verbal y motora.",
  "tipo": "suma",
  "items": [
   {
    "id": "ocular",
    "label": "Respuesta ocular",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Espontánea",
      "puntos": 4
     },
     {
      "label": "A la voz",
      "puntos": 3
     },
     {
      "label": "Al dolor",
      "puntos": 2
     },
     {
      "label": "Ninguna",
      "puntos": 1
     }
    ]
   },
   {
    "id": "verbal",
    "label": "Respuesta verbal",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Orientada",
      "puntos": 5
     },
     {
      "label": "Confusa",
      "puntos": 4
     },
     {
      "label": "Palabras inapropiadas",
      "puntos": 3
     },
     {
      "label": "Sonidos incomprensibles",
      "puntos": 2
     },
     {
      "label": "Ninguna",
      "puntos": 1
     }
    ]
   },
   {
    "id": "motora",
    "label": "Respuesta motora",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Obedece órdenes",
      "puntos": 6
     },
     {
      "label": "Localiza el dolor",
      "puntos": 5
     },
     {
      "label": "Retirada al dolor",
      "puntos": 4
     },
     {
      "label": "Flexión anormal",
      "puntos": 3
     },
     {
      "label": "Extensión",
      "puntos": 2
     },
     {
      "label": "Ninguna",
      "puntos": 1
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": 13,
    "max": 15,
    "label": "Leve",
    "detalle": "Traumatismo craneoencefálico leve. Bajo deterioro de la consciencia."
   },
   {
    "min": 9,
    "max": 12,
    "label": "Moderado",
    "detalle": "Deterioro moderado de la consciencia. Requiere vigilancia estrecha."
   },
   {
    "min": 3,
    "max": 8,
    "label": "Grave",
    "detalle": "Coma. GCS ≤ 8 indica considerar aislamiento de la vía aérea (intubación)."
   }
  ],
  "nota": "Puntuación total de 3 a 15; una puntuación más alta indica mejor nivel de consciencia."
 },
 "hasbled": {
  "id": "hasbled",
  "nombre": "HAS-BLED",
  "nombre_largo": "Escala HAS-BLED de riesgo de sangrado mayor con anticoagulación",
  "para": "Estimar el riesgo de sangrado mayor en pacientes con fibrilación auricular en tratamiento anticoagulante.",
  "tipo": "suma",
  "items": [
   {
    "id": "hta",
    "label": "Hipertensión arterial (TAS > 160 mmHg)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "renal",
    "label": "Función renal alterada",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "hepatica",
    "label": "Función hepática alterada",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ictus",
    "label": "Ictus previo",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "sangrado",
    "label": "Sangrado previo o predisposición al sangrado",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "inr_labil",
    "label": "INR lábil (mal control)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edad",
    "label": "Edad > 65 años",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "farmacos",
    "label": "Fármacos que predisponen al sangrado (antiagregantes o AINE)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "alcohol",
    "label": "Consumo de alcohol",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 2,
    "label": "Riesgo bajo",
    "detalle": "0-2 puntos: riesgo de sangrado bajo."
   },
   {
    "min": 3,
    "max": null,
    "label": "Riesgo alto",
    "detalle": "≥ 3 puntos: riesgo de sangrado alto; precaución y revisión periódica de los factores modificables."
   }
  ],
  "nota": "Puntuación total 0-9. Una puntuación alta no contraindica la anticoagulación, sino que obliga a corregir los factores de riesgo modificables."
 },
 "hunthess": {
  "id": "hunthess",
  "nombre": "Hunt-Hess",
  "nombre_largo": "Escala de Hunt y Hess",
  "para": "Gravedad clínica de la hemorragia subaracnoidea espontánea.",
  "tipo": "clasificacion",
  "clases": [
   {
    "label": "Grado I",
    "descripcion": "Asintomático o cefalea y rigidez de nuca leves.",
    "detalle": "Mejor pronóstico, mortalidad muy baja."
   },
   {
    "label": "Grado II",
    "descripcion": "Cefalea moderada-intensa y rigidez de nuca, sin déficit neurológico (salvo afectación de par craneal).",
    "detalle": "Pronóstico bueno, mortalidad baja."
   },
   {
    "label": "Grado III",
    "descripcion": "Somnolencia o confusión, o déficit focal leve.",
    "detalle": "Pronóstico intermedio, mortalidad moderada."
   },
   {
    "label": "Grado IV",
    "descripcion": "Estupor, hemiparesia moderada o grave.",
    "detalle": "Pronóstico malo, mortalidad elevada."
   },
   {
    "label": "Grado V",
    "descripcion": "Coma profundo, rigidez de descerebración.",
    "detalle": "Peor pronóstico, mortalidad muy alta."
   }
  ],
  "nota": "Clasifica la gravedad clínica de la HSA; a mayor grado, mayor mortalidad."
 },
 "perc": {
  "id": "perc",
  "nombre": "PERC",
  "nombre_largo": "Pulmonary Embolism Rule-out Criteria (PERC)",
  "para": "Regla para descartar tromboembolia pulmonar (TEP) en pacientes con baja probabilidad clínica, sin necesidad de dímero D.",
  "tipo": "suma",
  "items": [
   {
    "id": "edad50",
    "label": "Edad ≥ 50 años",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fc100",
    "label": "Frecuencia cardiaca ≥ 100 lpm",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "sato2",
    "label": "SatO2 < 95%",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "hemoptisis",
    "label": "Hemoptisis",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "estrogenos",
    "label": "Uso de estrógenos",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "tvp_tep_previa",
    "label": "TVP o TEP previa",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "cirugia_trauma",
    "label": "Cirugía o traumatismo en las últimas 4 semanas con hospitalización",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edema_unilateral",
    "label": "Edema unilateral de pierna",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 0,
    "label": "PERC negativo",
    "detalle": "Si la probabilidad clínica es baja, se descarta TEP sin necesidad de dímero D ni pruebas de imagen."
   },
   {
    "min": 1,
    "max": null,
    "label": "PERC positivo",
    "detalle": "No se puede descartar TEP. Continuar el estudio con dímero D o pruebas de imagen según corresponda."
   }
  ],
  "nota": "La regla solo es aplicable en pacientes con baja probabilidad clínica pretest. Todos los criterios deben ser negativos (0 puntos) para descartar TEP."
 },
 "qsofa": {
  "id": "qsofa",
  "nombre": "qSOFA",
  "nombre_largo": "Quick SOFA (cribado rápido de riesgo en sepsis)",
  "para": "Cribado rápido de riesgo de mala evolución en pacientes con sospecha de sepsis fuera de la UCI.",
  "tipo": "suma",
  "items": [
   {
    "id": "fr",
    "label": "Frecuencia respiratoria ≥ 22/min",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "mental",
    "label": "Alteración del estado mental (GCS < 15)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ta",
    "label": "TA sistólica ≤ 100 mmHg",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 1,
    "label": "Riesgo bajo",
    "detalle": "Bajo riesgo de mala evolución. Reevaluar según evolución clínica."
   },
   {
    "min": 2,
    "max": null,
    "label": "Riesgo alto",
    "detalle": "Alto riesgo de mala evolución y mayor mortalidad. Reevaluar y considerar sepsis."
   }
  ],
  "nota": "Cada ítem suma 1 punto; puntuación total 0-3."
 },
 "ranson": {
  "id": "ranson",
  "nombre": "Ranson",
  "nombre_largo": "Criterios de Ranson para la gravedad de la pancreatitis aguda (no biliar)",
  "para": "Estimar la gravedad y el pronóstico (mortalidad) de la pancreatitis aguda no biliar mediante parámetros al ingreso y a las 48 horas.",
  "tipo": "suma",
  "items": [
   {
    "id": "edad55",
    "label": "Edad > 55 años (al ingreso)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "leucocitos",
    "label": "Leucocitos > 16.000 /mm³ (al ingreso)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "glucosa",
    "label": "Glucosa > 200 mg/dL (al ingreso)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ldh",
    "label": "LDH > 350 UI/L (al ingreso)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ast",
    "label": "AST > 250 UI/L (al ingreso)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "hto",
    "label": "Descenso del hematocrito > 10% (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "bun",
    "label": "Aumento del BUN > 5 mg/dL (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "calcio",
    "label": "Calcio < 8 mg/dL (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "pao2",
    "label": "PaO2 < 60 mmHg (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "deficit_bases",
    "label": "Déficit de bases > 4 mEq/L (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "secuestro",
    "label": "Secuestro de líquidos > 6 L (a las 48 h)",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 2,
    "label": "Mortalidad baja (~1%)",
    "detalle": "Pancreatitis leve; bajo riesgo de mortalidad."
   },
   {
    "min": 3,
    "max": 4,
    "label": "Mortalidad ~15%",
    "detalle": "Pancreatitis grave; considerar vigilancia intensiva."
   },
   {
    "min": 5,
    "max": 6,
    "label": "Mortalidad ~40%",
    "detalle": "Pancreatitis grave; ingreso en cuidados intensivos."
   },
   {
    "min": 7,
    "max": null,
    "label": "Mortalidad ~100%",
    "detalle": "Pancreatitis muy grave; pronóstico ominoso."
   }
  ],
  "nota": "Criterios de Ranson para pancreatitis aguda no biliar. Rango 0-11."
 },
 "rutherford": {
  "id": "rutherford",
  "nombre": "Rutherford",
  "nombre_largo": "Clasificación de Rutherford de la isquemia arterial aguda de extremidad",
  "para": "Clasificar clínicamente la isquemia arterial aguda de la extremidad y orientar la actitud terapéutica.",
  "tipo": "clasificacion",
  "clases": [
   {
    "label": "I - Viable",
    "descripcion": "Sin amenaza inmediata; sin déficit sensitivo ni motor; señal Doppler audible.",
    "detalle": "No hay amenaza inmediata para la extremidad. Permite estudio y tratamiento no urgente."
   },
   {
    "label": "IIa - Amenaza marginal",
    "descripcion": "Recuperable si se trata pronto; déficit sensitivo mínimo, sin déficit motor.",
    "detalle": "Recuperable con tratamiento precoz. Revascularización pronta (no emergente inmediata)."
   },
   {
    "label": "IIb - Amenaza inmediata",
    "descripcion": "Déficit sensitivo más allá de los dedos, dolor en reposo y debilidad muscular leve-moderada.",
    "detalle": "Recuperable solo con revascularización inmediata. Urgencia quirúrgica."
   },
   {
    "label": "III - Irreversible",
    "descripcion": "Pérdida tisular mayor o daño nervioso permanente; anestesia, parálisis y rigidez muscular.",
    "detalle": "Daño irreversible. Amputación; la revascularización no recupera la extremidad."
   }
  ],
  "nota": "Clasificación de Rutherford para isquemia arterial aguda de las extremidades."
 },
 "sirs": {
  "id": "sirs",
  "nombre": "SIRS",
  "nombre_largo": "Criterios de síndrome de respuesta inflamatoria sistémica (SIRS)",
  "para": "Identificar la presencia de respuesta inflamatoria sistémica, útil en la sospecha de sepsis.",
  "tipo": "suma",
  "items": [
   {
    "id": "temperatura",
    "label": "Temperatura > 38 ºC o < 36 ºC",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fc",
    "label": "Frecuencia cardiaca > 90 lpm",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fr",
    "label": "Frecuencia respiratoria > 20 rpm o PaCO2 < 32 mmHg",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "leucocitos",
    "label": "Leucocitos > 12.000 o < 4.000/mm³ o > 10% de cayados",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 1,
    "label": "No cumple SIRS",
    "detalle": "No se cumplen los criterios de respuesta inflamatoria sistémica."
   },
   {
    "min": 2,
    "max": null,
    "label": "SIRS presente",
    "detalle": "Se cumplen los criterios de SIRS (≥ 2 criterios). Valorar foco infeccioso y posible sepsis."
   }
  ],
  "nota": "El SIRS requiere ≥ 2 de los 4 criterios. La presencia de SIRS no implica infección; debe interpretarse en el contexto clínico."
 },
 "timi": {
  "id": "timi",
  "nombre": "TIMI (SCASEST)",
  "nombre_largo": "Índice de riesgo TIMI para angina inestable / IAMSEST",
  "para": "Estimar el riesgo de eventos cardiacos adversos a 14 días en la angina inestable y el IAMSEST.",
  "tipo": "suma",
  "items": [
   {
    "id": "edad65",
    "label": "Edad ≥ 65 años",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "factores_riesgo",
    "label": "≥ 3 factores de riesgo de enfermedad coronaria",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "ec_conocida",
    "label": "Enfermedad coronaria conocida (estenosis ≥ 50 %)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "aas",
    "label": "Uso de AAS en los últimos 7 días",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "angina_grave",
    "label": "Angina grave reciente (≥ 2 episodios en 24 h)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "desviacion_st",
    "label": "Desviación del ST ≥ 0,5 mm",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "marcadores",
    "label": "Marcadores cardiacos elevados",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 1,
    "label": "Riesgo bajo",
    "detalle": "Riesgo de eventos a 14 días en torno al 5 %."
   },
   {
    "min": 2,
    "max": 3,
    "label": "Riesgo intermedio",
    "detalle": "Riesgo de eventos a 14 días aproximadamente del 8-13 %."
   },
   {
    "min": 4,
    "max": 5,
    "label": "Riesgo alto",
    "detalle": "Riesgo de eventos a 14 días aproximadamente del 20-26 %."
   },
   {
    "min": 6,
    "max": null,
    "label": "Riesgo muy alto",
    "detalle": "Riesgo de eventos a 14 días en torno al 41 %."
   }
  ],
  "nota": "7 ítems, 1 punto cada uno; puntuación total de 0 a 7."
 },
 "wells_tvp": {
  "id": "wells_tvp",
  "nombre": "Wells (TVP)",
  "nombre_largo": "Escala de Wells para probabilidad clínica de trombosis venosa profunda",
  "para": "Estimar la probabilidad clínica de trombosis venosa profunda (TVP) de miembros inferiores.",
  "tipo": "suma",
  "items": [
   {
    "id": "cancer_activo",
    "label": "Cáncer activo",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "paralisis",
    "label": "Parálisis, paresia o inmovilización reciente de la extremidad inferior",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "encamamiento",
    "label": "Encamamiento > 3 días o cirugía mayor en las últimas 12 semanas",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "dolor_trayecto",
    "label": "Dolor a la palpación en el trayecto venoso profundo",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edema_pierna",
    "label": "Edema de toda la pierna",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "perimetro_pantorrilla",
    "label": "Aumento del perímetro de la pantorrilla > 3 cm respecto a la contralateral",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "edema_fovea",
    "label": "Edema con fóvea unilateral",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "venas_colaterales",
    "label": "Venas colaterales superficiales no varicosas",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "tvp_previa",
    "label": "TVP previa documentada",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "diagnostico_alternativo",
    "label": "Diagnóstico alternativo al menos tan probable como la TVP",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Sí",
      "puntos": -2
     },
     {
      "label": "No",
      "puntos": 0
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": null,
    "max": 1,
    "label": "TVP improbable",
    "detalle": "Probabilidad clínica baja de TVP. Valorar dímero D; si es negativo, descarta TVP con seguridad."
   },
   {
    "min": 2,
    "max": null,
    "label": "TVP probable",
    "detalle": "Probabilidad clínica alta de TVP. Indicada ecografía Doppler de miembros inferiores."
   }
  ],
  "nota": "Puntuación posible de -2 a 9. El punto de corte de 2 separa TVP improbable (< 2) de TVP probable (≥ 2)."
 },
 "westhaven": {
  "id": "westhaven",
  "nombre": "West Haven",
  "nombre_largo": "Criterios de West Haven para encefalopatía hepática",
  "para": "Graduar la gravedad de la encefalopatía hepática.",
  "tipo": "clasificacion",
  "clases": [
   {
    "label": "Grado I",
    "descripcion": "Cambios leves de conducta y atención; asterixis leve.",
    "detalle": "Alteración clínica leve. Suele requerir observación y tratamiento del factor precipitante."
   },
   {
    "label": "Grado II",
    "descripcion": "Letargia, desorientación temporal; asterixis evidente.",
    "detalle": "Encefalopatía moderada. Tratamiento dirigido y vigilancia del nivel de conciencia."
   },
   {
    "label": "Grado III",
    "descripcion": "Somnolencia o estupor, confusión marcada; responde a estímulos.",
    "detalle": "Encefalopatía grave. Considerar ingreso y protección de la vía aérea."
   },
   {
    "label": "Grado IV",
    "descripcion": "Coma; no responde a estímulos.",
    "detalle": "Encefalopatía muy grave. Soporte avanzado y protección de la vía aérea; valorar UCI."
   }
  ],
  "nota": "El grado 0 corresponde a la ausencia de alteración clínica detectable."
 }
};
  Object.keys(DEF).forEach(function (k) { if (!S[k]) S[k] = DEF[k]; });
  var WIRE = {
 "blatchford": [
  "hemorragia_digestiva_alta"
 ],
 "centor": [
  "dolor_faringeo_agudo"
 ],
 "cha2ds2vasc": [
  "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
 ],
 "curb65": [
  "neumonia_adquirida_en_la_comunidad",
  "neumonia_nosocomial"
 ],
 "fisher": [
  "hemorragia_subaracnoidea_espontanea"
 ],
 "gcs": [
  "coma",
  "traumatismo_craneoencefalico"
 ],
 "hasbled": [
  "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
 ],
 "hunthess": [
  "hemorragia_subaracnoidea_espontanea"
 ],
 "perc": [
  "tromboembolia_pulmonar"
 ],
 "qsofa": [
  "sepsis"
 ],
 "ranson": [
  "pancreatitis_aguda"
 ],
 "rutherford": [
  "isquemia_arterial_aguda_de_las_extremidades"
 ],
 "sirs": [
  "sepsis"
 ],
 "timi": [
  "dolor_toracico_agudo",
  "sindrome_coronario_agudo"
 ],
 "wells_tvp": [
  "enfermedad_tromboembolica_venosa"
 ],
 "westhaven": [
  "encefalopatia_hepatica_aguda"
 ]
};
  T.forEach(function (t) {
    Object.keys(WIRE).forEach(function (sid) {
      if (WIRE[sid].indexOf(t.slug) !== -1) {
        t.escalas = t.escalas || [];
        if (t.escalas.indexOf(sid) === -1) t.escalas.push(sid);
      }
    });
  });
})();
