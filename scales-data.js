// Generado por build_app_data.py — no editar a mano.
window.SCALES = {
  "crusade": {
    "id": "crusade",
    "nombre": "CRUSADE",
    "nombre_largo": "Escala CRUSADE de riesgo hemorrágico",
    "para": "Estimación del riesgo de sangrado mayor intrahospitalario en el SCA.",
    "tipo": "suma",
    "items": [
      {
        "id": "hematocrito",
        "label": "Hematocrito basal (%)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "< 31",
            "puntos": 9
          },
          {
            "label": "31-33,9",
            "puntos": 7
          },
          {
            "label": "34-36,9",
            "puntos": 3
          },
          {
            "label": "37-39,9",
            "puntos": 2
          },
          {
            "label": "≥ 40",
            "puntos": 0
          }
        ]
      },
      {
        "id": "clcr",
        "label": "Aclaramiento de creatinina (mL/min, Cockcroft-Gault)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "≤ 15",
            "puntos": 39
          },
          {
            "label": "15-30",
            "puntos": 35
          },
          {
            "label": "30-60",
            "puntos": 28
          },
          {
            "label": "60-90",
            "puntos": 17
          },
          {
            "label": "90-120",
            "puntos": 7
          },
          {
            "label": "> 120",
            "puntos": 0
          }
        ]
      },
      {
        "id": "fc",
        "label": "Frecuencia cardíaca (lat/min)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "≤ 70",
            "puntos": 0
          },
          {
            "label": "71-80",
            "puntos": 1
          },
          {
            "label": "81-90",
            "puntos": 3
          },
          {
            "label": "91-100",
            "puntos": 6
          },
          {
            "label": "101-110",
            "puntos": 8
          },
          {
            "label": "111-120",
            "puntos": 10
          },
          {
            "label": "≥ 121",
            "puntos": 11
          }
        ]
      },
      {
        "id": "sexo",
        "label": "Sexo",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "Hombre",
            "puntos": 0
          },
          {
            "label": "Mujer",
            "puntos": 8
          }
        ]
      },
      {
        "id": "ic",
        "label": "Signos de insuficiencia cardíaca al ingreso",
        "tipo": "binario",
        "puntos": 7
      },
      {
        "id": "vascular",
        "label": "Enfermedad vascular (arteriopatía periférica o ictus previo)",
        "tipo": "binario",
        "puntos": 6
      },
      {
        "id": "diabetes",
        "label": "Diabetes mellitus",
        "tipo": "binario",
        "puntos": 6
      },
      {
        "id": "pas",
        "label": "Presión arterial sistólica (mmHg)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "≤ 90",
            "puntos": 10
          },
          {
            "label": "91-100",
            "puntos": 8
          },
          {
            "label": "101-120",
            "puntos": 5
          },
          {
            "label": "121-180",
            "puntos": 1
          },
          {
            "label": "181-200",
            "puntos": 3
          },
          {
            "label": "≥ 201",
            "puntos": 5
          }
        ]
      }
    ],
    "interpretacion": [
      {
        "min": 0,
        "max": 20,
        "label": "Riesgo muy bajo",
        "detalle": ""
      },
      {
        "min": 21,
        "max": 30,
        "label": "Riesgo bajo",
        "detalle": ""
      },
      {
        "min": 31,
        "max": 40,
        "label": "Riesgo moderado",
        "detalle": ""
      },
      {
        "min": 41,
        "max": 50,
        "label": "Riesgo alto",
        "detalle": ""
      },
      {
        "min": 51,
        "max": null,
        "label": "Riesgo muy alto",
        "detalle": ""
      }
    ],
    "nota": "Aclaramiento de creatinina por la fórmula de Cockcroft-Gault. Enfermedad vascular = antecedente de arteriopatía periférica o ictus."
  },
  "grace": {
    "id": "grace",
    "nombre": "GRACE",
    "nombre_largo": "Escala GRACE de riesgo isquémico en el síndrome coronario agudo",
    "para": "Estratificación del riesgo isquémico en el SCASEST (mortalidad intrahospitalaria).",
    "tipo": "suma",
    "items": [
      {
        "id": "edad",
        "label": "Edad (años)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "< 40",
            "puntos": 0
          },
          {
            "label": "40-49",
            "puntos": 18
          },
          {
            "label": "50-59",
            "puntos": 36
          },
          {
            "label": "60-69",
            "puntos": 55
          },
          {
            "label": "70-79",
            "puntos": 73
          },
          {
            "label": "> 80",
            "puntos": 91
          }
        ]
      },
      {
        "id": "fc",
        "label": "Frecuencia cardíaca (lat/min)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "< 70",
            "puntos": 0
          },
          {
            "label": "70-89",
            "puntos": 7
          },
          {
            "label": "90-109",
            "puntos": 13
          },
          {
            "label": "110-149",
            "puntos": 23
          },
          {
            "label": "150-199",
            "puntos": 36
          },
          {
            "label": "> 200",
            "puntos": 46
          }
        ]
      },
      {
        "id": "pas",
        "label": "Presión arterial sistólica (mmHg)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "< 80",
            "puntos": 63
          },
          {
            "label": "80-99",
            "puntos": 58
          },
          {
            "label": "100-119",
            "puntos": 47
          },
          {
            "label": "120-139",
            "puntos": 37
          },
          {
            "label": "140-159",
            "puntos": 26
          },
          {
            "label": "160-199",
            "puntos": 11
          },
          {
            "label": "> 200",
            "puntos": 0
          }
        ]
      },
      {
        "id": "creatinina",
        "label": "Creatinina (mg/dL)",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "0-0,39",
            "puntos": 2
          },
          {
            "label": "0,40-0,80",
            "puntos": 5
          },
          {
            "label": "0,81-1,19",
            "puntos": 8
          },
          {
            "label": "1,20-1,59",
            "puntos": 11
          },
          {
            "label": "1,60-2,00",
            "puntos": 14
          },
          {
            "label": "2,01-4,01",
            "puntos": 23
          },
          {
            "label": "> 4,01",
            "puntos": 31
          }
        ]
      },
      {
        "id": "killip",
        "label": "Clase Killip",
        "tipo": "opciones",
        "opciones": [
          {
            "label": "Clase I",
            "puntos": 0
          },
          {
            "label": "Clase II",
            "puntos": 21
          },
          {
            "label": "Clase III",
            "puntos": 43
          },
          {
            "label": "Clase IV",
            "puntos": 64
          }
        ]
      },
      {
        "id": "parada",
        "label": "Parada cardíaca en el ingreso",
        "tipo": "binario",
        "puntos": 43
      },
      {
        "id": "troponinas",
        "label": "Troponinas elevadas",
        "tipo": "binario",
        "puntos": 15
      },
      {
        "id": "st",
        "label": "Desviación del segmento ST",
        "tipo": "binario",
        "puntos": 30
      }
    ],
    "interpretacion": [
      {
        "min": 0,
        "max": 108,
        "label": "Riesgo bajo",
        "detalle": "Mortalidad intrahospitalaria < 1%"
      },
      {
        "min": 109,
        "max": 140,
        "label": "Riesgo intermedio",
        "detalle": "Mortalidad intrahospitalaria 1-3%"
      },
      {
        "min": 141,
        "max": null,
        "label": "Riesgo alto",
        "detalle": "Mortalidad intrahospitalaria > 3%"
      }
    ],
    "nota": "Bandas de mortalidad intrahospitalaria para el SCASEST."
  },
  "killip": {
    "id": "killip",
    "nombre": "Killip",
    "nombre_largo": "Clasificación de Killip",
    "para": "Clasificación de la situación hemodinámica en el SCACEST (infarto con elevación del ST).",
    "tipo": "clasificacion",
    "clases": [
      {
        "label": "Clase I",
        "descripcion": "Ausencia de signos y síntomas de insuficiencia cardíaca izquierda.",
        "detalle": "Sin insuficiencia cardíaca."
      },
      {
        "label": "Clase II",
        "descripcion": "Crepitantes en bases pulmonares, tercer ruido o ritmo de galope, aumento de la presión venosa yugular.",
        "detalle": "Insuficiencia cardíaca leve-moderada."
      },
      {
        "label": "Clase III",
        "descripcion": "Edema agudo de pulmón.",
        "detalle": "Insuficiencia cardíaca grave."
      },
      {
        "label": "Clase IV",
        "descripcion": "Shock cardiogénico.",
        "detalle": "Máxima gravedad hemodinámica."
      }
    ],
    "nota": "Clasificación clínica: se asigna la clase según la exploración, no se suman puntos."
  },
  "spesi": {
    "id": "spesi",
    "nombre": "sPESI",
    "nombre_largo": "Pulmonary Embolism Severity Index simplificado",
    "para": "Estratificación pronóstica de la TEP confirmada (mortalidad a 30 días).",
    "tipo": "suma",
    "fuente": "Jiménez D, Aujesky D, Moores L, et al. Arch Intern Med. 2010;170(15):1383-1389.",
    "items": [
      {
        "id": "edad",
        "label": "Edad > 80 años",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "cancer",
        "label": "Historia de cáncer",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "cardiopulmonar",
        "label": "Historia de enfermedad cardiopulmonar crónica",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "fc",
        "label": "Frecuencia cardíaca ≥ 110 lat/min",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "pas",
        "label": "Presión arterial sistólica < 100 mmHg",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "spo2",
        "label": "SpO2 arterial < 90%",
        "tipo": "binario",
        "puntos": 1
      }
    ],
    "interpretacion": [
      {
        "min": 0,
        "max": 0,
        "label": "Bajo riesgo",
        "detalle": "0 puntos: mortalidad baja; puede valorarse manejo ambulatorio o estancia corta según el entorno."
      },
      {
        "min": 1,
        "max": null,
        "label": "Alto riesgo",
        "detalle": "≥ 1 punto: requiere ingreso; reestratificar con biomarcadores y función del ventrículo derecho."
      }
    ]
  },
  "wells": {
    "id": "wells",
    "nombre": "Wells (TEP)",
    "nombre_largo": "Modelo de probabilidad clínica de Wells simplificado para TEP",
    "para": "Probabilidad clínica pretest de TEP, para decidir dímero D o imagen.",
    "tipo": "suma",
    "items": [
      {
        "id": "tvp",
        "label": "Síntomas o signos clínicos de TVP",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "alternativo",
        "label": "Diagnóstico alternativo menos probable que TEP",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "etv",
        "label": "Antecedente de enfermedad tromboembólica venosa (ETV)",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "fc",
        "label": "Frecuencia cardíaca > 100 lat/min",
        "tipo": "binario",
        "puntos": 1
      },
      {
        "id": "inmovilizacion",
        "label": "Cirugía en el último mes o inmovilización ≥ 3 días",
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
        "id": "cancer",
        "label": "Cáncer en tratamiento activo o paliativo en los últimos 6 meses",
        "tipo": "binario",
        "puntos": 1
      }
    ],
    "interpretacion": [
      {
        "min": 0,
        "max": 1,
        "label": "TEP improbable",
        "detalle": "≤ 1 punto (prevalencia ~11%): solicitar dímero D; si es negativo, descarta TEP."
      },
      {
        "min": 2,
        "max": null,
        "label": "TEP probable",
        "detalle": "> 1 punto (prevalencia ~36%): solicitar prueba de imagen (angio-TC)."
      }
    ],
    "nota": "Modelo simplificado (cada criterio 1 punto), dicotómico improbable/probable."
  }
};
