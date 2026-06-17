/* Generado por scales_merge.py — escalas/calculadoras adicionales y su cableado a temas.
   Criterios estándar (GCS, CURB-65, qSOFA, CHA2DS2-VASc, etc.). BORRADOR para revisión médica. */
(function () {
  var T = window.TOPICS || [];
  var S = window.SCALES = window.SCALES || {};
  var DEF = {
 "alvarado": {
  "id": "alvarado",
  "nombre": "Alvarado",
  "nombre_largo": "Escala de Alvarado para apendicitis aguda",
  "para": "Probabilidad de apendicitis aguda.",
  "tipo": "suma",
  "items": [
   {
    "id": "dolor_migratorio",
    "label": "Dolor migratorio a fosa ilíaca derecha",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "anorexia",
    "label": "Anorexia",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "nauseas_vomitos",
    "label": "Náuseas o vómitos",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "dolor_palpacion_fid",
    "label": "Dolor a la palpación en fosa ilíaca derecha",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "blumberg",
    "label": "Blumberg (dolor de rebote)",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "fiebre",
    "label": "Temperatura > 37,3 ºC",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "leucocitosis",
    "label": "Leucocitosis > 10.000",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "desviacion_izquierda",
    "label": "Desviación izquierda (neutrofilia > 75%)",
    "tipo": "binario",
    "puntos": 1
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 4,
    "label": "Baja probabilidad",
    "detalle": "Baja probabilidad de apendicitis aguda."
   },
   {
    "min": 5,
    "max": 6,
    "label": "Probable (observación)",
    "detalle": "Apendicitis probable; se recomienda observación."
   },
   {
    "min": 7,
    "max": null,
    "label": "Alta probabilidad (valorar cirugía)",
    "detalle": "Alta probabilidad de apendicitis aguda; valorar cirugía."
   }
  ],
  "nota": "Puntuación total de 0 a 10 puntos."
 },
 "anion_gap": {
  "id": "anion_gap",
  "nombre": "Anion gap",
  "nombre_largo": "Anion gap (hiato aniónico)",
  "para": "Cribado de acidosis metabólica con anion gap elevado.",
  "tipo": "formula",
  "items": [
   {
    "id": "na",
    "label": "Sodio (Na⁺)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "cl",
    "label": "Cloro (Cl⁻)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "hco3",
    "label": "Bicarbonato (HCO₃⁻)",
    "tipo": "numero",
    "unidad": "mEq/L"
   }
  ],
  "formula": "na-(cl+hco3)",
  "unidad_resultado": "mEq/L",
  "decimales": 0,
  "interpretacion": [
   {
    "min": -50,
    "max": 12,
    "label": "Normal",
    "detalle": "Anion gap normal (8-12 mEq/L). Si acidosis: acidosis sin anion gap (hiperclorémica)."
   },
   {
    "min": 12.0001,
    "max": null,
    "label": "Elevado",
    "detalle": "Acidosis metabólica con anion gap aumentado (cetoacidosis, láctico, tóxicos, urémica). Calcular delta-delta."
   }
  ],
  "nota": "Corregir por albúmina: sumar 2,5 mEq/L por cada 1 g/dL de albúmina < 4. Fuente: MDCalc."
 },
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
 "ca_corr": {
  "id": "ca_corr",
  "nombre": "Calcio corregido",
  "nombre_largo": "Calcio corregido por albúmina",
  "para": "Corrige el calcio total según la albúmina.",
  "tipo": "formula",
  "items": [
   {
    "id": "ca",
    "label": "Calcio total",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "alb",
    "label": "Albúmina",
    "tipo": "numero",
    "unidad": "g/dL"
   }
  ],
  "formula": "ca + 0.8*(4-alb)",
  "unidad_resultado": "mg/dL",
  "decimales": 1,
  "interpretacion": [
   {
    "min": 8.5,
    "max": 10.5,
    "label": "Normal",
    "detalle": "8,5-10,5 mg/dL."
   },
   {
    "min": 10.5001,
    "max": null,
    "label": "Hipercalcemia",
    "detalle": "Calcio corregido elevado."
   },
   {
    "min": -50,
    "max": 8.499,
    "label": "Hipocalcemia",
    "detalle": "Calcio corregido bajo."
   }
  ],
  "nota": "Fuente: MDCalc."
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
 "childpugh": {
  "id": "childpugh",
  "nombre": "Child-Pugh",
  "nombre_largo": "Clasificación de Child-Pugh",
  "para": "Gravedad de la cirrosis hepática.",
  "tipo": "suma",
  "items": [
   {
    "id": "bilirrubina",
    "label": "Bilirrubina (mg/dL)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "< 2",
      "puntos": 1
     },
     {
      "label": "2-3",
      "puntos": 2
     },
     {
      "label": "> 3",
      "puntos": 3
     }
    ]
   },
   {
    "id": "albumina",
    "label": "Albúmina (g/dL)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "> 3,5",
      "puntos": 1
     },
     {
      "label": "2,8-3,5",
      "puntos": 2
     },
     {
      "label": "< 2,8",
      "puntos": 3
     }
    ]
   },
   {
    "id": "inr",
    "label": "INR",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "< 1,7",
      "puntos": 1
     },
     {
      "label": "1,7-2,3",
      "puntos": 2
     },
     {
      "label": "> 2,3",
      "puntos": 3
     }
    ]
   },
   {
    "id": "ascitis",
    "label": "Ascitis",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Ausente",
      "puntos": 1
     },
     {
      "label": "Leve/controlada",
      "puntos": 2
     },
     {
      "label": "A tensión/refractaria",
      "puntos": 3
     }
    ]
   },
   {
    "id": "encefalopatia",
    "label": "Encefalopatía",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Ausente",
      "puntos": 1
     },
     {
      "label": "Grado I-II",
      "puntos": 2
     },
     {
      "label": "Grado III-IV",
      "puntos": 3
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": 5,
    "max": 6,
    "label": "Clase A (bien compensada)",
    "detalle": "Cirrosis bien compensada."
   },
   {
    "min": 7,
    "max": 9,
    "label": "Clase B",
    "detalle": "Compromiso funcional significativo."
   },
   {
    "min": 10,
    "max": null,
    "label": "Clase C (descompensada)",
    "detalle": "Cirrosis descompensada."
   }
  ],
  "nota": "5 ítems puntuados de 1 a 3. Total 5-15."
 },
 "cockcroft": {
  "id": "cockcroft",
  "nombre": "Cockcroft-Gault",
  "nombre_largo": "Aclaramiento de creatinina (Cockcroft-Gault)",
  "para": "Estima el aclaramiento de creatinina para ajuste de fármacos.",
  "tipo": "formula",
  "items": [
   {
    "id": "edad",
    "label": "Edad",
    "tipo": "numero",
    "unidad": "años"
   },
   {
    "id": "peso",
    "label": "Peso",
    "tipo": "numero",
    "unidad": "kg"
   },
   {
    "id": "scr",
    "label": "Creatinina sérica",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "sexo",
    "label": "Sexo",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Varón",
      "valor": 1.0
     },
     {
      "label": "Mujer",
      "valor": 0.85
     }
    ]
   }
  ],
  "formula": "((140-edad)*peso*sexo)/(72*scr)",
  "unidad_resultado": "mL/min",
  "decimales": 0,
  "interpretacion": [
   {
    "min": 90,
    "max": null,
    "label": "Normal (≥90)",
    "detalle": "Función renal normal."
   },
   {
    "min": 60,
    "max": 89.999,
    "label": "Leve ↓ (60-89)",
    "detalle": "Descenso leve."
   },
   {
    "min": 30,
    "max": 59.999,
    "label": "Moderado ↓ (30-59)",
    "detalle": "Ajustar fármacos de eliminación renal."
   },
   {
    "min": 15,
    "max": 29.999,
    "label": "Grave ↓ (15-29)",
    "detalle": "Insuficiencia renal grave."
   },
   {
    "min": -50,
    "max": 14.999,
    "label": "Fallo renal (<15)",
    "detalle": "Valorar diálisis / ajuste estricto."
   }
  ],
  "nota": "Usar peso ajustado si obesidad. Fuente: MDCalc."
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
 "delta_delta": {
  "id": "delta_delta",
  "nombre": "Delta-delta",
  "nombre_largo": "Cociente delta-delta",
  "para": "Detecta trastornos ácido-base mixtos en acidosis con anion gap elevado.",
  "tipo": "formula",
  "items": [
   {
    "id": "na",
    "label": "Sodio (Na⁺)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "cl",
    "label": "Cloro (Cl⁻)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "hco3",
    "label": "Bicarbonato (HCO₃⁻)",
    "tipo": "numero",
    "unidad": "mEq/L"
   }
  ],
  "formula": "((na-(cl+hco3))-12)/(24-hco3)",
  "unidad_resultado": "",
  "decimales": 1,
  "interpretacion": [
   {
    "min": -50,
    "max": 0.4,
    "label": "< 0,4",
    "detalle": "Acidosis metabólica sin anion gap (hiperclorémica) concomitante."
   },
   {
    "min": 0.4001,
    "max": 2,
    "label": "0,4 - 2",
    "detalle": "Acidosis metabólica con anion gap pura."
   },
   {
    "min": 2.0001,
    "max": null,
    "label": "> 2",
    "detalle": "Alcalosis metabólica o acidosis respiratoria crónica concomitante."
   }
  ],
  "nota": "Fuente: MDCalc."
 },
 "fena": {
  "id": "fena",
  "nombre": "FENa",
  "nombre_largo": "Fracción de excreción de sodio",
  "para": "Diferencia fracaso renal prerrenal de necrosis tubular aguda.",
  "tipo": "formula",
  "items": [
   {
    "id": "una",
    "label": "Na⁺ en orina",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "pcr",
    "label": "Creatinina plasmática",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "pna",
    "label": "Na⁺ plasmático",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "ucr",
    "label": "Creatinina en orina",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "(una*pcr)/(pna*ucr)*100",
  "unidad_resultado": "%",
  "decimales": 1,
  "interpretacion": [
   {
    "min": -50,
    "max": 1,
    "label": "Prerrenal",
    "detalle": "FENa < 1% sugiere causa prerrenal."
   },
   {
    "min": 1.0001,
    "max": null,
    "label": "Renal / NTA",
    "detalle": "FENa > 1-2% sugiere necrosis tubular aguda u otra causa renal."
   }
  ],
  "nota": "No válida si diuréticos (usar FEUrea). Fuente: MDCalc."
 },
 "feurea": {
  "id": "feurea",
  "nombre": "FEUrea",
  "nombre_largo": "Fracción de excreción de urea",
  "para": "Diferencia prerrenal de NTA cuando el paciente toma diuréticos.",
  "tipo": "formula",
  "items": [
   {
    "id": "uurea",
    "label": "Urea en orina",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "pcr",
    "label": "Creatinina plasmática",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "purea",
    "label": "Urea plasmática",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "ucr",
    "label": "Creatinina en orina",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "(uurea*pcr)/(purea*ucr)*100",
  "unidad_resultado": "%",
  "decimales": 1,
  "interpretacion": [
   {
    "min": -50,
    "max": 35,
    "label": "Prerrenal",
    "detalle": "FEUrea < 35% sugiere causa prerrenal."
   },
   {
    "min": 35.0001,
    "max": null,
    "label": "Renal / NTA",
    "detalle": "FEUrea > 50% sugiere causa renal."
   }
  ],
  "nota": "Útil con diuréticos. Fuente: MDCalc."
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
 "geneva": {
  "id": "geneva",
  "nombre": "Ginebra revisada",
  "nombre_largo": "Escala de Ginebra revisada para probabilidad clínica de tromboembolia pulmonar",
  "para": "Probabilidad clínica de TEP (alternativa a Wells).",
  "tipo": "suma",
  "items": [
   {
    "id": "edad_mayor_65",
    "label": "Edad mayor de 65 años",
    "tipo": "binario",
    "puntos": 1
   },
   {
    "id": "tvp_tep_previa",
    "label": "TVP o TEP previa",
    "tipo": "binario",
    "puntos": 3
   },
   {
    "id": "cirugia_fractura",
    "label": "Cirugía o fractura en el último mes",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "cancer_activo",
    "label": "Cáncer activo",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "dolor_unilateral_ei",
    "label": "Dolor unilateral en extremidad inferior",
    "tipo": "binario",
    "puntos": 3
   },
   {
    "id": "hemoptisis",
    "label": "Hemoptisis",
    "tipo": "binario",
    "puntos": 2
   },
   {
    "id": "frecuencia_cardiaca",
    "label": "Frecuencia cardíaca",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Menor de 75 lpm",
      "puntos": 0
     },
     {
      "label": "75-94 lpm",
      "puntos": 3
     },
     {
      "label": "95 lpm o más",
      "puntos": 5
     }
    ]
   },
   {
    "id": "dolor_palpacion_edema",
    "label": "Dolor a la palpación venosa profunda y edema unilateral",
    "tipo": "binario",
    "puntos": 4
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 3,
    "label": "Probabilidad baja",
    "detalle": "Baja probabilidad clínica de tromboembolia pulmonar."
   },
   {
    "min": 4,
    "max": 10,
    "label": "Probabilidad intermedia",
    "detalle": "Probabilidad clínica intermedia de tromboembolia pulmonar."
   },
   {
    "min": 11,
    "max": null,
    "label": "Probabilidad alta",
    "detalle": "Alta probabilidad clínica de tromboembolia pulmonar."
   }
  ],
  "nota": "Puntuación máxima teórica: 22 puntos."
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
 "meld": {
  "id": "meld",
  "nombre": "MELD",
  "nombre_largo": "MELD (hepatopatía crónica)",
  "para": "Gravedad de la hepatopatía crónica.",
  "tipo": "formula",
  "items": [
   {
    "id": "bili",
    "label": "Bilirrubina",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "inr",
    "label": "INR",
    "tipo": "numero",
    "unidad": ""
   },
   {
    "id": "cr",
    "label": "Creatinina",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "Math.round(3.78*Math.log(Math.max(bili,1))+11.2*Math.log(Math.max(inr,1))+9.57*Math.log(Math.max(cr,1))+6.43)",
  "unidad_resultado": "",
  "decimales": 0,
  "interpretacion": [
   {
    "min": -50,
    "max": 9,
    "label": "≤ 9",
    "detalle": "Mortalidad a 3 meses ~1,9%."
   },
   {
    "min": 10,
    "max": 19,
    "label": "10-19",
    "detalle": "Mortalidad ~6-20%."
   },
   {
    "min": 20,
    "max": 29,
    "label": "20-29",
    "detalle": "Mortalidad ~20-50%."
   },
   {
    "min": 30,
    "max": null,
    "label": "≥ 30",
    "detalle": "Mortalidad > 50%."
   }
  ],
  "nota": "Valores mínimos de 1 para bili/INR/Cr; Cr máx 4. Fuente: MDCalc."
 },
 "na_corr_glu": {
  "id": "na_corr_glu",
  "nombre": "Na⁺ corregido (glucosa)",
  "nombre_largo": "Sodio corregido por hiperglucemia",
  "para": "Corrige el sodio según la glucemia.",
  "tipo": "formula",
  "items": [
   {
    "id": "na",
    "label": "Sodio medido (Na⁺)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "glu",
    "label": "Glucosa",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "na + 1.6*((glu-100)/100)",
  "unidad_resultado": "mEq/L",
  "decimales": 1,
  "interpretacion": [
   {
    "min": 135,
    "max": 145,
    "label": "Normal",
    "detalle": "Na corregido normal (135-145)."
   },
   {
    "min": 145.0001,
    "max": null,
    "label": "Hipernatremia",
    "detalle": "Na corregido elevado."
   },
   {
    "min": -50,
    "max": 134.999,
    "label": "Hiponatremia",
    "detalle": "Na corregido bajo (hiponatremia verdadera)."
   }
  ],
  "nota": "Factor 1,6 mEq/L por cada 100 mg/dL de glucosa > 100. Fuente: MDCalc."
 },
 "nihss": {
  "id": "nihss",
  "nombre": "NIHSS",
  "nombre_largo": "Escala de Ictus del National Institutes of Health",
  "para": "Gravedad del ictus (déficit neurológico).",
  "tipo": "suma",
  "items": [
   {
    "id": "1a",
    "label": "1a. Nivel de consciencia",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Alerta",
      "puntos": 0
     },
     {
      "label": "Somnoliento (despierta con estímulos menores)",
      "puntos": 1
     },
     {
      "label": "Obnubilado (requiere estímulos repetidos o dolorosos)",
      "puntos": 2
     },
     {
      "label": "Coma (sin respuesta o solo reflejos)",
      "puntos": 3
     }
    ]
   },
   {
    "id": "1b",
    "label": "1b. Preguntas (mes y edad)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Responde ambas correctamente",
      "puntos": 0
     },
     {
      "label": "Responde una correctamente",
      "puntos": 1
     },
     {
      "label": "No responde ninguna correctamente",
      "puntos": 2
     }
    ]
   },
   {
    "id": "1c",
    "label": "1c. Órdenes (abrir/cerrar ojos y mano)",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Realiza ambas órdenes correctamente",
      "puntos": 0
     },
     {
      "label": "Realiza una orden correctamente",
      "puntos": 1
     },
     {
      "label": "No realiza ninguna orden",
      "puntos": 2
     }
    ]
   },
   {
    "id": "2",
    "label": "2. Mirada conjugada",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Normal",
      "puntos": 0
     },
     {
      "label": "Paresia parcial de la mirada",
      "puntos": 1
     },
     {
      "label": "Desviación forzada o paresia total de la mirada",
      "puntos": 2
     }
    ]
   },
   {
    "id": "3",
    "label": "3. Campos visuales",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Sin déficit campimétrico",
      "puntos": 0
     },
     {
      "label": "Hemianopsia parcial",
      "puntos": 1
     },
     {
      "label": "Hemianopsia completa",
      "puntos": 2
     },
     {
      "label": "Hemianopsia bilateral (ceguera cortical)",
      "puntos": 3
     }
    ]
   },
   {
    "id": "4",
    "label": "4. Paresia facial",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Movimientos normales y simétricos",
      "puntos": 0
     },
     {
      "label": "Paresia leve (borramiento surco nasogeniano)",
      "puntos": 1
     },
     {
      "label": "Parálisis parcial (zona inferior de la cara)",
      "puntos": 2
     },
     {
      "label": "Parálisis completa (zonas superior e inferior)",
      "puntos": 3
     }
    ]
   },
   {
    "id": "5a",
    "label": "5a. Motor brazo izquierdo",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "No claudica (mantiene 10 s)",
      "puntos": 0
     },
     {
      "label": "Claudica antes de 10 s sin tocar la cama",
      "puntos": 1
     },
     {
      "label": "Cierto esfuerzo contra gravedad, cae a la cama",
      "puntos": 2
     },
     {
      "label": "No vence la gravedad, cae inmediatamente",
      "puntos": 3
     },
     {
      "label": "Ningún movimiento",
      "puntos": 4
     }
    ]
   },
   {
    "id": "5b",
    "label": "5b. Motor brazo derecho",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "No claudica (mantiene 10 s)",
      "puntos": 0
     },
     {
      "label": "Claudica antes de 10 s sin tocar la cama",
      "puntos": 1
     },
     {
      "label": "Cierto esfuerzo contra gravedad, cae a la cama",
      "puntos": 2
     },
     {
      "label": "No vence la gravedad, cae inmediatamente",
      "puntos": 3
     },
     {
      "label": "Ningún movimiento",
      "puntos": 4
     }
    ]
   },
   {
    "id": "6a",
    "label": "6a. Motor pierna izquierda",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "No claudica (mantiene 5 s)",
      "puntos": 0
     },
     {
      "label": "Claudica antes de 5 s sin tocar la cama",
      "puntos": 1
     },
     {
      "label": "Cierto esfuerzo contra gravedad, cae a la cama",
      "puntos": 2
     },
     {
      "label": "No vence la gravedad, cae inmediatamente",
      "puntos": 3
     },
     {
      "label": "Ningún movimiento",
      "puntos": 4
     }
    ]
   },
   {
    "id": "6b",
    "label": "6b. Motor pierna derecha",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "No claudica (mantiene 5 s)",
      "puntos": 0
     },
     {
      "label": "Claudica antes de 5 s sin tocar la cama",
      "puntos": 1
     },
     {
      "label": "Cierto esfuerzo contra gravedad, cae a la cama",
      "puntos": 2
     },
     {
      "label": "No vence la gravedad, cae inmediatamente",
      "puntos": 3
     },
     {
      "label": "Ningún movimiento",
      "puntos": 4
     }
    ]
   },
   {
    "id": "7",
    "label": "7. Ataxia de miembros",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Ausente",
      "puntos": 0
     },
     {
      "label": "Presente en una extremidad",
      "puntos": 1
     },
     {
      "label": "Presente en dos extremidades",
      "puntos": 2
     }
    ]
   },
   {
    "id": "8",
    "label": "8. Sensibilidad",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Normal",
      "puntos": 0
     },
     {
      "label": "Hipoestesia leve-moderada",
      "puntos": 1
     },
     {
      "label": "Anestesia grave o total",
      "puntos": 2
     }
    ]
   },
   {
    "id": "9",
    "label": "9. Lenguaje",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Normal, sin afasia",
      "puntos": 0
     },
     {
      "label": "Afasia leve-moderada",
      "puntos": 1
     },
     {
      "label": "Afasia grave",
      "puntos": 2
     },
     {
      "label": "Mutismo o afasia global",
      "puntos": 3
     }
    ]
   },
   {
    "id": "10",
    "label": "10. Disartria",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Articulación normal",
      "puntos": 0
     },
     {
      "label": "Disartria leve-moderada",
      "puntos": 1
     },
     {
      "label": "Disartria grave (ininteligible) o mutismo",
      "puntos": 2
     }
    ]
   },
   {
    "id": "11",
    "label": "11. Extinción / inatención",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Sin anomalías",
      "puntos": 0
     },
     {
      "label": "Inatención a una modalidad sensorial",
      "puntos": 1
     },
     {
      "label": "Hemi-inatención grave o a más de una modalidad",
      "puntos": 2
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 0,
    "label": "Sin déficit",
    "detalle": "Sin déficit neurológico detectable."
   },
   {
    "min": 1,
    "max": 4,
    "label": "Ictus leve",
    "detalle": "Déficit neurológico leve."
   },
   {
    "min": 5,
    "max": 15,
    "label": "Ictus moderado",
    "detalle": "Déficit neurológico moderado."
   },
   {
    "min": 16,
    "max": 20,
    "label": "Ictus moderado-grave",
    "detalle": "Déficit neurológico moderado a grave."
   },
   {
    "min": 21,
    "max": null,
    "label": "Ictus grave",
    "detalle": "Déficit neurológico grave (máximo 42)."
   }
  ],
  "nota": "Escala oficial del NIH de 15 ítems. Rango total 0-42; a mayor puntuación, mayor gravedad del déficit neurológico."
 },
 "osm_calc": {
  "id": "osm_calc",
  "nombre": "Osmolaridad calculada",
  "nombre_largo": "Osmolaridad plasmática calculada",
  "para": "Estima la osmolaridad plasmática.",
  "tipo": "formula",
  "items": [
   {
    "id": "na",
    "label": "Sodio (Na⁺)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "glu",
    "label": "Glucosa",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "bun",
    "label": "BUN (urea/2,14)",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "2*na + glu/18 + bun/2.8",
  "unidad_resultado": "mOsm/kg",
  "decimales": 0,
  "interpretacion": [
   {
    "min": 275,
    "max": 295,
    "label": "Normal",
    "detalle": "275-295 mOsm/kg."
   },
   {
    "min": 295.0001,
    "max": null,
    "label": "Elevada",
    "detalle": "Hiperosmolaridad (hiperglucemia, hipernatremia, tóxicos)."
   },
   {
    "min": -50,
    "max": 274.999,
    "label": "Baja",
    "detalle": "Hipoosmolaridad (hiponatremia hipotónica)."
   }
  ],
  "nota": "BUN = urea(mg/dL)/2,14. Fuente: MDCalc."
 },
 "osmolar_gap": {
  "id": "osmolar_gap",
  "nombre": "Gap osmolar",
  "nombre_largo": "Hiato osmolar",
  "para": "Detecta tóxicos osmóticamente activos (alcoholes).",
  "tipo": "formula",
  "items": [
   {
    "id": "osm_med",
    "label": "Osmolaridad medida",
    "tipo": "numero",
    "unidad": "mOsm/kg"
   },
   {
    "id": "na",
    "label": "Sodio (Na⁺)",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "glu",
    "label": "Glucosa",
    "tipo": "numero",
    "unidad": "mg/dL"
   },
   {
    "id": "bun",
    "label": "BUN",
    "tipo": "numero",
    "unidad": "mg/dL"
   }
  ],
  "formula": "osm_med - (2*na + glu/18 + bun/2.8)",
  "unidad_resultado": "mOsm/kg",
  "decimales": 0,
  "interpretacion": [
   {
    "min": -50,
    "max": 10,
    "label": "Normal",
    "detalle": "< 10 mOsm/kg."
   },
   {
    "min": 10.0001,
    "max": null,
    "label": "Elevado",
    "detalle": "Sospecha de intoxicación por metanol, etilenglicol, isopropanol o etanol."
   }
  ],
  "nota": "Fuente: MDCalc."
 },
 "pam": {
  "id": "pam",
  "nombre": "PAM (presión arterial media)",
  "nombre_largo": "Presión arterial media",
  "para": "Estima la presión de perfusión (objetivo en shock).",
  "tipo": "formula",
  "items": [
   {
    "id": "sbp",
    "label": "TA sistólica",
    "tipo": "numero",
    "unidad": "mmHg"
   },
   {
    "id": "dbp",
    "label": "TA diastólica",
    "tipo": "numero",
    "unidad": "mmHg"
   }
  ],
  "formula": "dbp + (sbp-dbp)/3",
  "unidad_resultado": "mmHg",
  "decimales": 0,
  "interpretacion": [
   {
    "min": 65,
    "max": null,
    "label": "≥ 65: adecuada",
    "detalle": "Objetivo de perfusión habitual alcanzado."
   },
   {
    "min": -50,
    "max": 64.999,
    "label": "< 65: hipoperfusión",
    "detalle": "Objetivo en shock/sepsis: PAM ≥ 65 mmHg."
   }
  ],
  "nota": "Fuente: MDCalc."
 },
 "parkland": {
  "id": "parkland",
  "nombre": "Parkland",
  "nombre_largo": "Fórmula de Parkland (quemados)",
  "para": "Estima la fluidoterapia en las primeras 24 h del quemado.",
  "tipo": "formula",
  "items": [
   {
    "id": "peso",
    "label": "Peso",
    "tipo": "numero",
    "unidad": "kg"
   },
   {
    "id": "tbsa",
    "label": "Superficie quemada",
    "tipo": "numero",
    "unidad": "%"
   }
  ],
  "formula": "4*peso*tbsa",
  "unidad_resultado": "mL/24h",
  "decimales": 0,
  "interpretacion": [
   {
    "min": 0,
    "max": null,
    "label": "Cristaloides en 24 h",
    "detalle": "Administrar el 50% en las primeras 8 h desde la quemadura y el 50% en las 16 h siguientes (Ringer lactato)."
   }
  ],
  "nota": "Ajustar a diuresis 0,5-1 mL/kg/h. Solo % de 2.º-3.er grado. Fuente: MDCalc."
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
 "qtc": {
  "id": "qtc",
  "nombre": "QTc (Bazett)",
  "nombre_largo": "QT corregido (Bazett)",
  "para": "Corrige el QT por la frecuencia cardiaca.",
  "tipo": "formula",
  "items": [
   {
    "id": "qt",
    "label": "Intervalo QT",
    "tipo": "numero",
    "unidad": "ms"
   },
   {
    "id": "fc",
    "label": "Frecuencia cardiaca",
    "tipo": "numero",
    "unidad": "lpm"
   }
  ],
  "formula": "qt/Math.sqrt(60/fc)",
  "unidad_resultado": "ms",
  "decimales": 0,
  "interpretacion": [
   {
    "min": -50,
    "max": 440,
    "label": "Normal",
    "detalle": "≤ 440 ms (varón) / ≤ 460 ms (mujer)."
   },
   {
    "min": 440.0001,
    "max": 500,
    "label": "Prolongado",
    "detalle": "Riesgo aumentado; revisar fármacos e iones."
   },
   {
    "min": 500.0001,
    "max": null,
    "label": "Muy prolongado",
    "detalle": "Alto riesgo de torsade de pointes."
   }
  ],
  "nota": "Bazett: QTc = QT/√(RR). Fuente: MDCalc."
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
 "rass": {
  "id": "rass",
  "nombre": "RASS",
  "nombre_largo": "Escala de Agitación-Sedación de Richmond (Richmond Agitation-Sedation Scale)",
  "para": "Nivel de sedación-agitación (Richmond).",
  "tipo": "clasificacion",
  "clases": [
   {
    "label": "+4 Combativo",
    "descripcion": "Combativo",
    "detalle": "Abiertamente combativo o violento; peligro inmediato para el personal."
   },
   {
    "label": "+3 Muy agitado",
    "descripcion": "Muy agitado",
    "detalle": "Tira o se arranca tubos y catéteres; agresivo con el personal."
   },
   {
    "label": "+2 Agitado",
    "descripcion": "Agitado",
    "detalle": "Movimientos frecuentes sin propósito; lucha con el ventilador."
   },
   {
    "label": "+1 Inquieto",
    "descripcion": "Inquieto",
    "detalle": "Ansioso o intranquilo, pero sin movimientos agresivos ni vigorosos."
   },
   {
    "label": "0 Alerta y tranquilo",
    "descripcion": "Alerta y tranquilo",
    "detalle": "Despierto, tranquilo y sin signos de agitación."
   },
   {
    "label": "-1 Somnoliento",
    "descripcion": "Somnoliento",
    "detalle": "No está plenamente alerta, pero despierta de forma sostenida (más de 10 s) a la voz, con contacto ocular."
   },
   {
    "label": "-2 Sedación leve",
    "descripcion": "Sedación leve",
    "detalle": "Despierta brevemente (menos de 10 s) a la voz, con contacto ocular."
   },
   {
    "label": "-3 Sedación moderada",
    "descripcion": "Sedación moderada",
    "detalle": "Movimiento o apertura ocular a la voz, pero sin contacto ocular."
   },
   {
    "label": "-4 Sedación profunda",
    "descripcion": "Sedación profunda",
    "detalle": "No responde a la voz; responde solo con movimiento o apertura ocular al estímulo físico."
   },
   {
    "label": "-5 No despertable",
    "descripcion": "No despertable",
    "detalle": "No responde ni a la voz ni al estímulo físico."
   }
  ],
  "nota": "Evaluar primero observando si el paciente está alerta, inquieto o agitado (puntuaciones de 0 a +4). Si no, llamarle por su nombre y pedirle que abra los ojos y mire al explorador (puntuaciones de -1 a -3). Si no responde a la voz, estimularle físicamente, por ejemplo agitando el hombro o frotando el esternón (puntuaciones de -4 a -5)."
 },
 "rockall": {
  "id": "rockall",
  "nombre": "Rockall",
  "nombre_largo": "Escala de Rockall clínica (pre-endoscopia)",
  "para": "Riesgo de resangrado y mortalidad tras hemorragia digestiva alta.",
  "tipo": "suma",
  "items": [
   {
    "id": "edad",
    "label": "Edad",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Menor de 60 años",
      "puntos": 0
     },
     {
      "label": "60-79 años",
      "puntos": 1
     },
     {
      "label": "80 años o más",
      "puntos": 2
     }
    ]
   },
   {
    "id": "shock",
    "label": "Shock",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Sin shock",
      "puntos": 0
     },
     {
      "label": "Taquicardia (FC ≥ 100, TAS ≥ 100)",
      "puntos": 1
     },
     {
      "label": "Hipotensión (TAS < 100)",
      "puntos": 2
     }
    ]
   },
   {
    "id": "comorbilidad",
    "label": "Comorbilidad",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Ninguna",
      "puntos": 0
     },
     {
      "label": "Cardiopatía isquémica, insuficiencia cardiaca u otra comorbilidad mayor",
      "puntos": 2
     },
     {
      "label": "Insuficiencia renal o hepática, o cáncer diseminado",
      "puntos": 3
     }
    ]
   }
  ],
  "interpretacion": [
   {
    "min": 0,
    "max": 2,
    "label": "Bajo riesgo",
    "detalle": "Riesgo bajo de resangrado y mortalidad."
   },
   {
    "min": 3,
    "max": 5,
    "label": "Riesgo intermedio",
    "detalle": "Riesgo intermedio de resangrado y mortalidad."
   },
   {
    "min": 6,
    "max": null,
    "label": "Alto riesgo",
    "detalle": "Riesgo alto de resangrado y mortalidad."
   }
  ],
  "nota": "Versión clínica pre-endoscopia (3 ítems: edad, shock y comorbilidad). El Rockall completo añade el diagnóstico endoscópico y los estigmas de hemorragia reciente."
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
 "sodio_deficit": {
  "id": "sodio_deficit",
  "nombre": "Déficit de Na⁺",
  "nombre_largo": "Déficit de sodio (hiponatremia)",
  "para": "Estima el sodio a reponer en la hiponatremia.",
  "tipo": "formula",
  "items": [
   {
    "id": "peso",
    "label": "Peso",
    "tipo": "numero",
    "unidad": "kg"
   },
   {
    "id": "na",
    "label": "Sodio actual",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "objetivo",
    "label": "Na⁺ objetivo",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "factor",
    "label": "Agua corporal total",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Varón (0,6)",
      "valor": 0.6
     },
     {
      "label": "Mujer / anciano (0,5)",
      "valor": 0.5
     }
    ]
   }
  ],
  "formula": "peso*factor*(objetivo-na)",
  "unidad_resultado": "mEq",
  "decimales": 0,
  "interpretacion": [
   {
    "min": 0,
    "max": null,
    "label": "Déficit de Na⁺ a reponer",
    "detalle": "No corregir > 8-10 mEq/L en 24 h (riesgo de mielinólisis pontina)."
   }
  ],
  "nota": "Objetivo prudente; reevaluar natremia con frecuencia. Fuente: MDCalc."
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
 "ttkg": {
  "id": "ttkg",
  "nombre": "TTKG",
  "nombre_largo": "Gradiente transtubular de potasio",
  "para": "Valora la respuesta renal en las alteraciones del potasio.",
  "tipo": "formula",
  "items": [
   {
    "id": "uk",
    "label": "K⁺ en orina",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "pk",
    "label": "K⁺ plasmático",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "uosm",
    "label": "Osmolaridad urinaria",
    "tipo": "numero",
    "unidad": "mOsm/kg"
   },
   {
    "id": "posm",
    "label": "Osmolaridad plasmática",
    "tipo": "numero",
    "unidad": "mOsm/kg"
   }
  ],
  "formula": "(uk/pk)/(uosm/posm)",
  "unidad_resultado": "",
  "decimales": 1,
  "interpretacion": [
   {
    "min": -50,
    "max": 4,
    "label": "Bajo (<4)",
    "detalle": "En hiperpotasemia sugiere hipoaldosteronismo; en hipopotasemia, pérdida extrarrenal (adecuado)."
   },
   {
    "min": 4.0001,
    "max": 7,
    "label": "4-7",
    "detalle": "Rango intermedio."
   },
   {
    "min": 7.0001,
    "max": null,
    "label": "Alto (>7)",
    "detalle": "En hipopotasemia sugiere pérdida renal / exceso mineralocorticoide."
   }
  ],
  "nota": "Requiere Uosm > plasma y Na urinario > 25. Fuente: MDCalc."
 },
 "water_deficit": {
  "id": "water_deficit",
  "nombre": "Déficit de agua",
  "nombre_largo": "Déficit de agua libre (hipernatremia)",
  "para": "Estima el agua a reponer en la hipernatremia.",
  "tipo": "formula",
  "items": [
   {
    "id": "peso",
    "label": "Peso",
    "tipo": "numero",
    "unidad": "kg"
   },
   {
    "id": "na",
    "label": "Sodio actual",
    "tipo": "numero",
    "unidad": "mEq/L"
   },
   {
    "id": "factor",
    "label": "Agua corporal total",
    "tipo": "opciones",
    "opciones": [
     {
      "label": "Varón (0,6)",
      "valor": 0.6
     },
     {
      "label": "Mujer / varón anciano (0,5)",
      "valor": 0.5
     },
     {
      "label": "Mujer anciana (0,45)",
      "valor": 0.45
     }
    ]
   }
  ],
  "formula": "peso*factor*((na/140)-1)",
  "unidad_resultado": "L",
  "decimales": 1,
  "interpretacion": [
   {
    "min": -50,
    "max": 0,
    "label": "Sin déficit",
    "detalle": "Na ≤ 140; no hay déficit de agua libre por este cálculo."
   },
   {
    "min": 0.0001,
    "max": null,
    "label": "Déficit de agua libre",
    "detalle": "Reponer en 48-72 h; no descender el Na más de 10-12 mEq/L/día."
   }
  ],
  "nota": "Objetivo de Na 140. Fuente: MDCalc."
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
 "alvarado": [
  "dolor_abdominal_agudo"
 ],
 "anion_gap": [
  "alteraciones_del_equilibrio_acidobasico",
  "cetoacidosis_diabetica"
 ],
 "blatchford": [
  "hemorragia_digestiva_alta"
 ],
 "ca_corr": [
  "hipocalcemia",
  "hipercalcemia"
 ],
 "centor": [
  "dolor_faringeo_agudo"
 ],
 "cha2ds2vasc": [
  "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
 ],
 "childpugh": [
  "encefalopatia_hepatica_aguda",
  "ascitis"
 ],
 "cockcroft": [
  "lesion_renal_aguda",
  "enfermedad_renal_cronica"
 ],
 "curb65": [
  "neumonia_adquirida_en_la_comunidad",
  "neumonia_nosocomial"
 ],
 "delta_delta": [
  "alteraciones_del_equilibrio_acidobasico"
 ],
 "fena": [
  "lesion_renal_aguda"
 ],
 "feurea": [
  "lesion_renal_aguda"
 ],
 "fisher": [
  "hemorragia_subaracnoidea_espontanea"
 ],
 "gcs": [
  "coma",
  "traumatismo_craneoencefalico"
 ],
 "geneva": [
  "tromboembolia_pulmonar"
 ],
 "hasbled": [
  "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
 ],
 "hunthess": [
  "hemorragia_subaracnoidea_espontanea"
 ],
 "meld": [
  "encefalopatia_hepatica_aguda",
  "ascitis"
 ],
 "na_corr_glu": [
  "descompensacion_hiperglucemica_hiperosmolar_no_cetosica",
  "cetoacidosis_diabetica",
  "hiponatremia"
 ],
 "nihss": [
  "ictus"
 ],
 "osm_calc": [
  "hipernatremia",
  "descompensacion_hiperglucemica_hiperosmolar_no_cetosica"
 ],
 "osmolar_gap": [
  "intoxicaciones_agudas_actitud_diagnostica_y_tratamiento_gene"
 ],
 "pam": [
  "shock_acetaldehidico_y_otras_reacciones_similares",
  "sepsis",
  "emergencia_hipertensiva"
 ],
 "parkland": [
  "quemaduras_termicas"
 ],
 "perc": [
  "tromboembolia_pulmonar"
 ],
 "qsofa": [
  "sepsis"
 ],
 "qtc": [
  "intoxicacion_aguda_por_antidepresivos_ciclicos",
  "arritmias_por_alteracion_en_la_conduccion_del_impulso_enferm"
 ],
 "ranson": [
  "pancreatitis_aguda"
 ],
 "rass": [
  "analgesia_sedacion_y_relajacion_muscular_en_urgencias_secuenc"
 ],
 "rockall": [
  "hemorragia_digestiva_alta"
 ],
 "rutherford": [
  "isquemia_arterial_aguda_de_las_extremidades"
 ],
 "sirs": [
  "sepsis"
 ],
 "sodio_deficit": [
  "hiponatremia"
 ],
 "timi": [
  "dolor_toracico_agudo",
  "sindrome_coronario_agudo"
 ],
 "ttkg": [
  "hiperpotasemia",
  "hipopotasemia"
 ],
 "water_deficit": [
  "hipernatremia"
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
