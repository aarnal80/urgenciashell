/* Generado por merge_gen.py — parche de contenido (ddx + plan + ref WikEM) para window.TOPICS.
   Diagnóstico diferencial y plan de trabajo derivados de WikEM + Jiménez Murillo. BORRADOR IA. */
(function () {
  var T = window.TOPICS || [];
  // --- Escala HEART (dolor torácico / infarto) — criterios de WikEM ---
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

  var PATCH = {
 "agitacion_psicomotriz": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia capilar baja; revierte con glucosa; SIEMPRE descartar primero",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Hipoxia",
      "clave": "SatO2 baja, cianosis; agitación que cede con oxígeno"
     },
     {
      "dx": "Infección SNC (encefalitis/meningitis)",
      "clave": "fiebre, cefalea, meningismo, focalidad",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Intoxicación simpaticomimética",
      "clave": "taquicardia, HTA, midriasis, diaforesis; cocaína/anfetaminas",
      "slug": "intoxicacion_aguda_por_cocaina"
     },
     {
      "dx": "Abstinencia alcohólica/delirium tremens",
      "clave": "temblor, alucinaciones, hiperactividad autonómica tras cese de OH"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Delirium (síndrome confusional agudo)",
      "clave": "inicio agudo, curso fluctuante, inatención; descompensa enfermedad médica oculta",
      "slug": "coma"
     },
     {
      "dx": "Alteración hidroelectrolítica",
      "clave": "Na/Ca alterados; descartar con bioquímica"
     },
     {
      "dx": "Crisis tirotóxica",
      "clave": "fiebre, taquicardia, bocio, temblor",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Crisis epiléptica (estado postictal/parcial complejo)",
      "clave": "automatismos, amnesia del episodio",
      "slug": "crisis_epilepticas"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Psicosis/manía primaria",
      "clave": "<40 a, antecedentes psiquiátricos, exploración y constantes normales"
     },
     {
      "dx": "Trastorno de personalidad / situacional",
      "clave": "factor desencadenante claro, sin organicidad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Garantiza la seguridad (primeros minutos)",
    "detalle": "Entorno seguro, retira objetos peligrosos, personal suficiente. Glucemia capilar y constantes (TA, FC, SatO2, Tª) a TODO paciente agitado."
   },
   {
    "paso": "Intenta desescalada verbal",
    "detalle": "Tono calmado, escucha, ofrece opciones; primera línea siempre que sea posible."
   },
   {
    "paso": "Si fracasa, sedación farmacológica según causa",
    "sub": [
     {
      "t": "Agitación psiquiátrica/desconocida cooperante → vía oral (olanzapina 10 mg o risperidona)."
     },
     {
      "nivel": "emergente",
      "t": "Agitación intensa no cooperante → haloperidol 5 mg + lorazepam/midazolam IM; vigila vía aérea."
     },
     {
      "nivel": "critico",
      "t": "Intoxicación por simpaticomiméticos/abstinencia → benzodiacepinas de elección (midazolam/diazepam); EVITA neurolépticos como único agente."
     }
    ]
   },
   {
    "paso": "Contención física si riesgo inmediato",
    "detalle": "Solo si fracasa lo anterior; pauta médica, vigilancia continua, retirada precoz. Profilaxis con HBPM si >24 h."
   },
   {
    "paso": "Estudia organicidad cuando esté seguro",
    "detalle": "Si >40 a sin antecedentes, inicio agudo, constantes alteradas o focalidad: bioquímica, tóxicos, ECG, TC craneal y valora punción lumbar."
   },
   {
    "paso": "Da tiamina si sospecha de alcoholismo",
    "detalle": "Tiamina 100 mg IV antes de la glucosa para prevenir encefalopatía de Wernicke."
   },
   {
    "paso": "Destino",
    "detalle": "Causa orgánica → ingreso/tratamiento dirigido. Origen psiquiátrico filiado → interconsulta psiquiatría."
   }
  ],
  "wikem_titulo": "Agitated or combative patient"
 },
 "alteraciones_del_equilibrio_acidobasico": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Acidosis láctica (shock/sepsis)",
      "clave": "anion gap alto, lactato elevado, hipoperfusión; busca el origen del shock",
      "slug": "shock"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "anion gap alto, hiperglucemia, cetonemia, Kussmaul",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Acidosis respiratoria por fallo ventilatorio",
      "clave": "pCO2 alta, somnolencia, hipoventilación (EPOC, sedantes, opiáceos)",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Intoxicación por tóxicos con anion gap",
      "clave": "gap osmolar elevado (metanol, etilenglicol), salicilatos",
      "slug": "intoxicaciones_agudas_actitud_diagnostica_y_tratamiento_gene"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Acidosis metabólica de la lesión renal aguda",
      "clave": "creatinina elevada, anion gap alto o hiperclorémica",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Alcalosis metabólica por vómitos/diuréticos",
      "clave": "HCO3 alto, hipopotasemia, cloro urinario bajo",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Alcalosis respiratoria psicógena",
      "clave": "hiperventilación, parestesias periorales, espasmo carpopedal; única que suele resolverse sin ingreso",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Obtén gasometría y descarta hipoxemia",
    "detalle": "GAB (o venosa para bicarbonato), pulsioximetría. Monitor y vía si paciente inestable."
   },
   {
    "paso": "Identifica el trastorno primario",
    "detalle": "Mira pH (acidosis/alcalosis), después HCO3 y pCO2 para decidir si es metabólico o respiratorio. Valora si la compensación es adecuada."
   },
   {
    "paso": "Calcula el anion gap y el delta gap",
    "detalle": "AG = Na − (Cl + HCO3), normal 12 ± 3. Corrige por albúmina. El delta gap desenmascara trastornos mixtos ocultos."
   },
   {
    "paso": "Solicita pruebas según el patrón",
    "detalle": "Lactato, glucemia/cetonas, función renal, osmolaridad y gap osmolar (sospecha de tóxicos), cloro urinario en alcalosis metabólica."
   },
   {
    "paso": "Trata la causa, no el número",
    "sub": [
     {
      "nivel": "critico",
      "t": "Acidosis grave pH <7,0 (CAD) o pH <7,20 con shock/irritabilidad miocárdica → bicarbonato sódico 1 M; corrige déficit base."
     },
     {
      "nivel": "critico",
      "t": "Acidosis respiratoria pH <7,10 que no responde → soporte ventilatorio (VMNI/IOT); bicarbonato solo como puente."
     },
     {
      "nivel": "emergente",
      "t": "Alcalosis metabólica → SSF + cloruro potásico; acetazolamida si sobrecarga de volumen."
     }
    ]
   },
   {
    "paso": "Maneja la alcalosis respiratoria psicógena",
    "detalle": "Tranquiliza, control respiratorio; lorazepam si ansiedad marcada. Vigila la hipocalcemia funcional (tetania)."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si pH <7,2 o >7,55, trastorno mixto o causa que requiera hospitalización. UCI si pH <7,1 o >7,6, inestabilidad o necesidad de diálisis. Alta con seguimiento en trastorno leve y causa corregible."
   }
  ],
  "wikem_titulo": "Acid-base disorders"
 },
 "angioedema": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Anafilaxia",
      "clave": "angioedema con broncoespasmo, hipotensión o afectación multisistémica; responde a adrenalina",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Edema de glotis / obstrucción de vía aérea",
      "clave": "estridor, disfonía, disfagia, sialorrea; emergencia, asegurar vía aérea"
     },
     {
      "dx": "Shock",
      "clave": "hipotensión por extravasación al tercer espacio",
      "slug": "shock"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Angioedema bradicinérgico (hereditario/IECA)",
      "clave": "sin habones, no responde a adrenalina/antihistamínicos/corticoides; precisa icatibant o C1-inhibidor"
     },
     {
      "dx": "Crisis asmática",
      "clave": "disnea con sibilancias sin edema facial; broncoespasmo aislado",
      "slug": "ataque_de_asma"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Urticaria / reacción alérgica",
      "clave": "habones pruriginosos sin edema profundo; histaminérgica",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Crisis de ansiedad",
      "clave": "sensación de cierre de garganta sin edema objetivable ni estridor",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "Síndrome escombroide",
      "clave": "flushing y síntomas tras pescado mal conservado; transitorio"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la vía aérea de inmediato",
    "detalle": "Busca estridor, disfonía, disfagia, sialorrea. Monitor, SatO2, TA. Postura semisentada. Prepara material de vía aérea difícil si edema progresivo."
   },
   {
    "paso": "Asegura la vía aérea si compromiso",
    "sub": [
     {
      "nivel": "critico",
      "t": "Estridor o edema laríngeo progresivo → intubación precoz (idealmente con fibrobroncoscopio); cricotirotomía si fracaso"
     }
    ]
   },
   {
    "paso": "Diferencia el mecanismo",
    "detalle": "Histaminérgico (con habones/prurito, alérgico) vs bradicinérgico (sin habones, IECA o hereditario, dolor abdominal). El tratamiento difiere por completo."
   },
   {
    "paso": "Trata el angioedema histaminérgico/anafilaxia",
    "sub": [
     {
      "nivel": "critico",
      "t": "Anafilaxia → adrenalina IM 0,5 mg (0,01 mg/kg) en cara anterolateral del muslo, repetible cada 5-15 min"
     },
     {
      "t": "Añade dexclorfeniramina 5 mg IV + metilprednisolona/hidrocortisona IV"
     }
    ]
   },
   {
    "paso": "Trata el angioedema bradicinérgico",
    "sub": [
     {
      "nivel": "emergente",
      "t": "AEH/por IECA que no responde → icatibant 30 mg SC o concentrado de C1-inhibidor; alternativa plasma; suspende el IECA"
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Alta tras 4-6 h si no hay edema de vía aérea y mejora (edema limitado a cara/labios). Observación 24 h si se administró adrenalina. Ingreso si afectación laríngea o bradicinérgico grave."
   }
  ],
  "wikem_titulo": "Angioedema"
 },
 "ascitis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Peritonitis bacteriana espontánea",
      "clave": "fiebre/dolor/deterioro de conciencia; PMN en líquido ascítico >250/µL"
     },
     {
      "dx": "Síndrome hepatorrenal",
      "clave": "oliguria y ascenso de creatinina en cirrótico sin otra causa renal",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Rotura/estrangulación de hernia umbilical",
      "clave": "salida de líquido o hernia incarcerada; urgencia quirúrgica"
     },
     {
      "dx": "Insuficiencia respiratoria por hidrotórax/ascitis a tensión",
      "clave": "disnea, SatO2<92%; precisa paracentesis evacuadora"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Insuficiencia cardíaca derecha",
      "clave": "ingurgitación yugular, edemas, hepatomegalia congestiva",
      "slug": "insuficiencia_cardiaca"
     },
     {
      "dx": "Hepatocarcinoma",
      "clave": "ascitis de debut en cirrótico conocido; descartar con imagen y AFP"
     },
     {
      "dx": "Carcinomatosis peritoneal / neoplasia ovárica",
      "clave": "ascitis en mujer sin hepatopatía = neoplasia ginecológica hasta descartar"
     },
     {
      "dx": "Peritonitis tuberculosa",
      "clave": "ascitis con linfocitosis, ADA elevada; contexto de riesgo"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cirrosis con ascitis no complicada",
      "clave": "GASA ≥1,1; estigmas de hepatopatía crónica"
     },
     {
      "dx": "Obstrucción intestinal / globo vesical",
      "clave": "distensión que simula ascitis; matidez no cambiante, timpanismo",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Síndrome nefrótico",
      "clave": "proteinuria, hipoalbuminemia, edemas; GASA bajo",
      "slug": "sindrome_nefrotico"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora estabilidad y descarta complicación",
    "detalle": "Constantes, abdomen, grado de ascitis y disnea. Busca signos de PBE, SHR o compromiso respiratorio."
   },
   {
    "paso": "Realiza paracentesis diagnóstica",
    "detalle": "Exploración clave. Recuento celular (PBE si PMN>250/µL), bioquímica (GASA, proteínas, glucosa, LDH), cultivo en frascos de hemocultivo y citología si sospecha tumoral."
   },
   {
    "paso": "Solicita analítica e imagen",
    "detalle": "Hemograma, función renal e iones, coagulación, LFT, lipasa. Ecografía abdominal (cuantifica ascitis, descarta hepatocarcinoma y trombosis portal)."
   },
   {
    "paso": "Trata la ascitis complicada",
    "sub": [
     {
      "nivel": "critico",
      "t": "PBE → cefotaxima IV + albúmina (1,5 g/kg día 1 y 1 g/kg día 3); evita aminoglucósidos"
     },
     {
      "nivel": "critico",
      "t": "Ascitis a tensión con disnea → paracentesis evacuadora con reposición de albúmina (8 g/L extraído por encima de 5 L)"
     },
     {
      "nivel": "emergente",
      "t": "Síndrome hepatorrenal → albúmina + terlipresina"
     }
    ]
   },
   {
    "paso": "Maneja la ascitis no complicada",
    "detalle": "Restricción de sodio; diuréticos: espironolactona 100 mg/día (máx 400) ± furosemida 40 mg/día (máx 160), ratio 100:40. Restricción hídrica solo si hiponatremia."
   },
   {
    "paso": "Evita nefrotóxicos",
    "detalle": "Contraindicados AINE y aminoglucósidos en la ascitis cirrótica por riesgo de deterioro renal."
   },
   {
    "paso": "Decide destino",
    "detalle": "PBE, SHR, ascitis refractaria o compromiso respiratorio → ingreso. Ascitis conocida, PBE descartada y bien drenada → manejo ambulatorio con seguimiento."
   }
  ],
  "wikem_titulo": "Ascites"
 },
 "ataque_de_asma": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Anafilaxia",
      "clave": "inicio tras alérgeno, urticaria, angioedema, hipotensión; adrenalina IM",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Obstrucción de vía aérea superior / cuerpo extraño",
      "clave": "estridor, disfonía, inicio súbito; sibilancia localizada o fija"
     },
     {
      "dx": "Neumotórax a tensión",
      "clave": "dolor brusco, hipoventilación unilateral, timpanismo",
      "slug": "neumotorax_espontaneo"
     },
     {
      "dx": "Edema agudo de pulmón (asma cardial)",
      "clave": "crepitantes bilaterales, ortopnea, B-líneas en POCUS",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "EPOC agudizada",
      "clave": "fumador, mayor edad, hipercapnia, antecedente de EPOC",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; sibilancias hasta en 25%",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre, sibilancia focal, crepitantes, infiltrado",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Disfunción de cuerdas vocales",
      "clave": "estridor inspiratorio, a menudo confundido con asma refractaria"
     },
     {
      "dx": "ERGE / aspiración",
      "clave": "pirosis, tos nocturna, relación con la ingesta",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Broncoespasmo farmacológico",
      "clave": "betabloqueante, AAS/AINE; relación temporal con el fármaco"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Clasifica la gravedad de la crisis (primeros minutos)",
    "detalle": "SatO2, FR, uso de musculatura accesoria, capacidad de hablar, nivel de conciencia y PEF/FEV1. El criterio más grave marca la categoría."
   },
   {
    "paso": "Oxígeno y broncodilatadores de inicio",
    "detalle": "O2 para SatO2 94-98%. Salbutamol 2,5-5 mg nebulizado (o cámara) repetido, asociado a bromuro de ipratropio 0,5 mg en crisis moderada-grave."
   },
   {
    "paso": "Corticoide sistémico precoz",
    "detalle": "Prednisona 40-60 mg VO o hidrocortisona 100-200 mg IV; administrar en la primera hora en toda crisis moderada-grave."
   },
   {
    "paso": "Intensifica si crisis grave o mala respuesta",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Grave/refractaria → salbutamol nebulizado continuo + sulfato de magnesio 1,5-2 g IV en 20 min."
     },
     {
      "nivel": "critico",
      "t": "Riesgo vital (tórax silente, bradicardia, hipotensión, deterioro de conciencia, hipercapnia) → avisar UCI; valorar adrenalina y secuencia rápida de intubación."
     }
    ]
   },
   {
    "paso": "Reevalúa la respuesta a los 30-60 min",
    "detalle": "Repite PEF/FEV1 y SatO2. Respuesta favorable: PEF o FEV1 >45% del teórico con incremento ≥50 L/min sobre el basal. Gasometría si fatiga o sospecha de hipercapnia (CO2>45 anormal)."
   },
   {
    "paso": "Decide el destino",
    "sub": [
     {
      "t": "Buena respuesta mantenida (PEF >70%, asintomático) → alta con corticoide oral 5-7 días y ajuste de inhaladores."
     },
     {
      "nivel": "emergente",
      "t": "Respuesta parcial o factores de riesgo → observación/ingreso. Riesgo vital o hipercapnia → UCI."
     }
    ]
   }
  ],
  "wikem_titulo": "Acute asthma exacerbation"
 },
 "botulismo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome de Guillain-Barré (variante Miller-Fisher)",
      "clave": "parálisis ascendente, arreflexia, disociación albúmino-citológica en LCR (botulismo es descendente)"
     },
     {
      "dx": "Crisis miasténica",
      "clave": "debilidad fluctuante con fatigabilidad, ptosis/diplopía, mejora con anticolinesterásicos"
     },
     {
      "dx": "Intoxicación por organofosforados",
      "clave": "síndrome colinérgico: miosis, sialorrea, broncorrea, fasciculaciones (botulismo da midriasis)",
      "slug": "intoxicacion_aguda_por_insecticidas_organofosforados_carbama"
     },
     {
      "dx": "Ictus de tronco",
      "clave": "déficit focal de inicio brusco, signos de vía larga, nivel de conciencia variable",
      "slug": "ictus"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Síndrome de Lambert-Eaton",
      "clave": "debilidad proximal que mejora con la actividad, hiporreflexia, neoplasia (pulmón)"
     },
     {
      "dx": "Parálisis por garrapata",
      "clave": "parálisis ascendente; búsqueda y retirada de la garrapata revierte el cuadro"
     },
     {
      "dx": "Difteria",
      "clave": "membrana faríngea, parálisis bulbar; no vacunados"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Asegura y vigila la vía aérea",
    "sub": [
     {
      "nivel": "critico",
      "t": "capacidad vital descendente, disnea o hipercapnia → intubación orotraqueal y ventilación mecánica (la hipercapnia es tardía y preludio de parada)"
     },
     {
      "t": "parálisis bulbar/disfagia → protección de vía aérea por riesgo de aspiración"
     }
    ]
   },
   {
    "paso": "Monitoriza la función respiratoria",
    "detalle": "Espirometría seriada / capacidad vital y gasometría; anticipa el fallo respiratorio antes de que aparezca la hipercapnia."
   },
   {
    "paso": "Administra antitoxina precozmente",
    "detalle": "Antitoxina botulínica equina heptavalente (A-G) lo antes posible, sin esperar confirmación; inmunoglobulina botulínica humana en lactantes."
   },
   {
    "paso": "Notifica y coordina con Salud Pública/laboratorio",
    "detalle": "Enfermedad de declaración obligatoria URGENTE; obtén suero, heces y restos alimentarios para detección de toxina."
   },
   {
    "paso": "Trata según la forma clínica",
    "detalle": "Alimentario: valorar descontaminación digestiva (carbón activado) si ingesta reciente y sin íleo. De heridas: desbridamiento + penicilina G o metronidazol (evita aminoglucósidos, agravan el bloqueo)."
   },
   {
    "paso": "Soporte general",
    "detalle": "Cuidados de UCI, nutrición, profilaxis de TVP y de úlceras por presión durante la parálisis prolongada."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso en UCI en todos los casos; valorar consulta a Enfermedades Infecciosas."
   }
  ],
  "wikem_titulo": "Botulism"
 },
 "casi_ahogamiento": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipotermia asociada",
      "clave": "agua fría; bradicardia, arritmia; protege SNC si precede a la hipoxia",
      "slug": "patologia_inducida_por_el_frio_hipotermia_accidental_y_conge"
     },
     {
      "dx": "Traumatismo cervical/craneal por zambullida",
      "clave": "antecedente de salto o trauma; inmoviliza columna y valora TC"
     },
     {
      "dx": "Arritmia / síncope causante de la inmersión",
      "clave": "síndrome de QT largo, cardiopatía; valorar causa precipitante",
      "slug": "sincope"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Edema agudo de pulmón por inmersión",
      "clave": "disnea e hipoxia tras inmersión sin gran aspiración; nadadores/buceadores"
     },
     {
      "dx": "Emergencia por buceo (barotrauma/embolia gaseosa)",
      "clave": "si descompresión; clínica neurológica o torácica tras inmersión profunda",
      "slug": "disbarismos_mal_de_altura_y_enfermedades_relacionadas"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Neumonía por broncoaspiración",
      "clave": "fiebre y deterioro respiratorio tardío (>24 h); infiltrado nuevo",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "ABC con control cervical",
    "detalle": "O2 alto flujo; intubación si hipoxia refractaria o bajo nivel de conciencia. Monitor, SatO2, glucemia, Tª central. Inmoviliza columna solo si historia/signos de trauma."
   },
   {
    "paso": "Maneja la PCR y la hipotermia conjuntamente",
    "sub": [
     {
      "nivel": "critico",
      "t": "PCR → RCP; asistolia y AESP son los ritmos más frecuentes"
     },
     {
      "nivel": "critico",
      "t": "Tª <28 °C → recalienta antes de dar por ineficaz la desfibrilación; prolonga la reanimación"
     }
    ]
   },
   {
    "paso": "Soporte respiratorio",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Hipoxia con trabajo respiratorio → VMNI/CPAP con PEEP; intubación y ventilación protectora si fracaso"
     },
     {
      "t": "Corrige acidosis láctica; valora bicarbonato si pH muy bajo"
     }
    ]
   },
   {
    "paso": "Pruebas y vigilancia",
    "detalle": "Rx tórax al ingreso y a las 4 h; gasometría arterial; ECG. No hay diferencia de manejo entre agua dulce y salada. Vigila edema cerebral si deterioro neurológico."
   },
   {
    "paso": "Trata complicaciones",
    "detalle": "No antibiótico profiláctico de rutina; iniciar si datos de infección/aspiración. Vigila lesión renal aguda (necrosis tubular) y CID."
   },
   {
    "paso": "Destino",
    "detalle": "Alta tras 4-6 h de observación si estado mental normal, SatO2 >95% en aire ambiente y Rx/exploración respiratoria normales. Ingresa al resto; UCI si inestable o bajo nivel de conciencia."
   }
  ],
  "wikem_titulo": "Submersion injury"
 },
 "cefaleas": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemorragia subaracnoidea",
      "clave": "cefalea 'en trueno', máxima en segundos; rigidez de nuca",
      "slug": "hemorragia_subaracnoidea_espontanea"
     },
     {
      "dx": "Meningitis / encefalitis",
      "clave": "fiebre, rigidez de nuca, fotofobia, alteración de conciencia",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Hemorragia intracraneal / ictus",
      "clave": "focalidad neurológica, HTA, anticoagulación",
      "slug": "ictus"
     },
     {
      "dx": "Intoxicación por monóxido de carbono",
      "clave": "cefalea en varios convivientes, exposición a combustión; carboxihemoglobina"
     },
     {
      "dx": "Trombosis venosa cerebral",
      "clave": "cefalea progresiva, crisis, focalidad; protrombótica/puerperio"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Arteritis de células gigantes",
      "clave": ">50 años, dolor temporal, claudicación mandibular, VSG alta; riesgo de ceguera"
     },
     {
      "dx": "Glaucoma agudo",
      "clave": "ojo rojo doloroso, midriasis media fija, visión borrosa con halos",
      "slug": "diagnostico_diferencial_del_ojo_rojo"
     },
     {
      "dx": "Emergencia hipertensiva",
      "clave": "HTA grave con afectación de órgano diana (visual, neurológica)",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Preeclampsia/eclampsia",
      "clave": "gestante >20 sem con HTA, proteinuria, cefalea y fotopsias",
      "slug": "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Migraña",
      "clave": "hemicraneal, pulsátil, náuseas, foto/fonofobia; episodios recurrentes"
     },
     {
      "dx": "Cefalea tensional",
      "clave": "opresiva, bilateral 'en casco', sin cortejo vegetativo"
     },
     {
      "dx": "Cefalea en racimos",
      "clave": "periorbitaria intensa, unilateral, con lagrimeo/rinorrea; en salvas"
     },
     {
      "dx": "Sinusitis aguda",
      "clave": "dolor facial, congestión nasal, empeora al inclinarse"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Identifica signos de alarma",
    "detalle": "Inicio súbito 'en trueno', focalidad, fiebre con meningismo, papiledema, alteración de conciencia, edad >50 con cefalea nueva, inmunodepresión o anticoagulación, vómitos en escopetazo."
   },
   {
    "paso": "Estabiliza y monitoriza si grave",
    "detalle": "Constantes incluida TA, glucemia y SatO2; vía venosa si afectación. Valora carboxihemoglobina si sospecha de intoxicación por CO."
   },
   {
    "paso": "Decide neuroimagen y punción lumbar",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sospecha de HSA → TC craneal urgente; si normal y alta sospecha → punción lumbar (xantocromía)"
     },
     {
      "nivel": "critico",
      "t": "Sospecha de meningitis → hemocultivos y antibiótico empírico precoz, no demores por la TC/PL"
     }
    ]
   },
   {
    "paso": "Solicita pruebas dirigidas",
    "detalle": "VSG/PCR urgentes si sospecha de arteritis de la temporal (>50 años) e inicia corticoides sin esperar a la biopsia. Tonometría si ojo rojo doloroso."
   },
   {
    "paso": "Trata la cefalea primaria",
    "detalle": "Migraña moderada-grave: triptán (sumatriptán) + antiemético (metoclopramida) ± AINE. Cefalea en racimos: oxígeno alto flujo + sumatriptán SC. Tensional: paracetamol/AINE."
   },
   {
    "paso": "Reevalúa la respuesta",
    "detalle": "Si no mejora con tratamiento o persiste la duda diagnóstica, amplía estudio; estatus migrañoso refractario puede precisar ingreso."
   },
   {
    "paso": "Decide destino",
    "detalle": "Alta si etiología benigna filiada, exploración neurológica normal, tolera VO y sin signos de alarma, con seguimiento. Ingreso si causa secundaria grave, déficit persistente o estatus migrañoso refractario."
   }
  ],
  "wikem_titulo": "Headache"
 },
 "cervicalgia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Fractura/luxación cervical",
      "clave": "antecedente traumático, dolor axial, déficit neurológico; inmovilizar",
      "slug": "fracturas_y_luxaciones_de_pelvis_y_de_columna_vertebral"
     },
     {
      "dx": "Compresión medular / mielopatía",
      "clave": "déficit motor-sensitivo, alteración de la marcha, disfunción esfinteriana"
     },
     {
      "dx": "Disección de arteria vertebral/carótida",
      "clave": "cervicalgia + cefalea súbita, Horner o focalidad; trauma o manipulación cervical",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Absceso epidural espinal",
      "clave": "fiebre, dolor intenso, ADVP/inmunodepresión, déficit progresivo",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor en cara anterior del cuello/mandíbula, cortejo vegetativo; ECG",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Radiculopatía cervical",
      "clave": "dolor irradiado a miembro superior, Spurling positivo, parestesias en dermatoma"
     },
     {
      "dx": "Espondilodiscitis / osteomielitis vertebral",
      "clave": "dolor + fiebre, elevación de reactantes; ADVP, bacteriemia"
     },
     {
      "dx": "Meningitis",
      "clave": "rigidez de nuca con fiebre, cefalea, fotofobia",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Arteritis de la temporal",
      "clave": "mayores de 50 a, cefalea, claudicación mandibular, VSG alta"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cervicalgia mecánica / espondilosis",
      "clave": "dolor con el movimiento, contractura, sin déficit ni red flags (80%)"
     },
     {
      "dx": "Latigazo cervical",
      "clave": "dolor diferido tras accidente, sin déficit neurológico"
     },
     {
      "dx": "Tortícolis / reacción distónica",
      "clave": "contractura aguda con postura forzada; valorar fármacos"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Descarta causas graves (red flags)",
    "detalle": "Trauma, déficit neurológico, fiebre, síndrome constitucional/antecedente oncológico, dolor anterior con cortejo vegetativo. Si trauma → inmoviliza el cuello."
   },
   {
    "paso": "Explora la columna cervical y la neurología",
    "detalle": "Movilidad, puntos dolorosos, fuerza/sensibilidad/reflejos en MMSS, marcha; test de Spurling para radiculopatía."
   },
   {
    "paso": "Solicita pruebas solo si hay alarma",
    "sub": [
     {
      "nivel": "critico",
      "t": "déficit neurológico progresivo o sospecha de compresión/absceso → RM cervical urgente"
     },
     {
      "t": "trauma con criterios (NEXUS/Canadian C-spine) → TC cervical; sospecha infección/tumor → analítica con reactantes"
     }
    ]
   },
   {
    "paso": "Trata el dolor y la contractura",
    "detalle": "AINE (dexketoprofeno, naproxeno) o paracetamol de 1.ª línea; relajante muscular (diazepam 5-10 mg/6-8 h o metocarbamol) en espasmo; tramadol si dolor moderado-intenso."
   },
   {
    "paso": "Indica medidas no farmacológicas",
    "detalle": "Calor local, movilización precoz; evita el collarín prolongado. Considera infiltración de puntos gatillo en espasmo del trapecio."
   },
   {
    "paso": "Decide destino",
    "detalle": "Cervicalgia mecánica sin alarma → alta con tratamiento ambulatorio y pautas. Radiculopatía motora o mielopatía → ingreso/valoración por especialista."
   },
   {
    "paso": "Da instrucciones de alarma",
    "detalle": "Reconsulta si aparece debilidad, dificultad para la marcha, alteración esfinteriana, fiebre o dolor incoercible."
   }
  ],
  "wikem_titulo": "Neck pain"
 },
 "cetoacidosis_diabetica": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Descompensación hiperosmolar (SHH)",
      "clave": "glucemia >600, osm alta, sin acidosis ni cetosis intensa; más en DM2",
      "slug": "descompensacion_hiperglucemica_hiperosmolar_no_cetosica"
     },
     {
      "dx": "Sepsis",
      "clave": "fiebre, hipotensión, foco; precipitante más frecuente de la CAD",
      "slug": "sepsis"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "desencadenante; descartar con ECG y troponinas",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Acidosis láctica / otras acidosis con anion gap",
      "clave": "lactato elevado; tóxicos (salicilatos, metanol) sin cetonemia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "CAD euglucémica",
      "clave": "acidosis y cetonemia con glucemia normal/baja; iSGLT2, embarazo, ayuno"
     },
     {
      "dx": "Cetoacidosis alcohólica",
      "clave": "consumo de OH, ayuno, vómitos; glucemia normal o baja"
     },
     {
      "dx": "Abdomen agudo",
      "clave": "la propia CAD da dolor abdominal; vigila si no cede al corregir",
      "slug": "dolor_abdominal_agudo"
     },
     {
      "dx": "Pancreatitis aguda",
      "clave": "dolor epigástrico irradiado, lipasa elevada; causa y consecuencia",
      "slug": "pancreatitis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "DM1 de novo",
      "clave": "hasta 20% debuta como CAD; HbA1c orientativa"
     },
     {
      "dx": "Omisión de insulina",
      "clave": "causa más frecuente en DM1 conocida; valorar coste/acceso/fallo de bomba"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y confirma el diagnóstico",
    "detalle": "Constantes, monitor, 2 vías, glucemia capilar. Pide gasometría venosa, BMP con anion gap, beta-hidroxibutirato, iones, hemograma y ECG. Diagnóstico: hiperglucemia + cetonemia + acidosis con anion gap. Si hay bomba de insulina, apágala y retira el catéter."
   },
   {
    "paso": "Fluidoterapia inicial",
    "detalle": "SSF 0,9% 15-20 mL/kg (1-1,5 L) en la 1ª hora; ajusta según Na corregido y estado cardiovascular."
   },
   {
    "paso": "Corrige el potasio ANTES o junto a la insulina",
    "sub": [
     {
      "nivel": "critico",
      "t": "K <3,3 mEq/L → repón potasio y NO inicies insulina hasta ≥3,3"
     },
     {
      "t": "K 3,3-5,2 → añade ClK 20-30 mEq por litro de suero y mantén insulina"
     },
     {
      "t": "K >5,2 → no repongas; recontrola en 2 h"
     }
    ]
   },
   {
    "paso": "Insulina en perfusión",
    "detalle": "Insulina rápida IV 0,1 U/kg/h (con K >3,3). Cuando glucemia <200-250 mg/dL, añade suero glucosado 5% y reduce el ritmo, manteniendo la perfusión hasta cerrar el anion gap."
   },
   {
    "paso": "Reserva el bicarbonato y repón magnesio",
    "detalle": "Bicarbonato solo si pH <7,0 (o <7,2 con inestabilidad). Corrige hipomagnesemia; fosfato solo si muy bajo o sintomático."
   },
   {
    "paso": "Busca y trata el desencadenante",
    "detalle": "Sedimento/urocultivo, Rx tórax, hemocultivos si fiebre; ECG/troponina si dolor torácico; test de embarazo en mujer fértil; HbA1c."
   },
   {
    "paso": "Destino",
    "sub": [
     {
      "nivel": "emergente",
      "t": "CAD moderada-grave (pH <7,24), alteración de conciencia o inestabilidad → UCI/cama monitorizada con insulina IV"
     },
     {
      "t": "CAD leve resuelta (anion gap cerrado, tolera VO, K normal) con causa clara y buen seguimiento → valorar alta con educación en reglas de días de enfermedad"
     }
    ]
   }
  ],
  "wikem_titulo": "Diabetic ketoacidosis"
 },
 "colico_nefritico": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Aneurisma/disección de aorta abdominal",
      "clave": "varón >60a, dolor desgarrante, masa pulsátil, asimetría de pulsos/hipotensión",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Pielonefritis obstructiva / urosepsis",
      "clave": "cólico + fiebre y mal estado general; emergencia que precisa derivación urgente",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Embarazo ectópico (mujer)",
      "clave": "amenorrea, dolor pélvico, β-hCG positiva, posible inestabilidad"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Infarto renal",
      "clave": "dolor lumbar brusco, FA/cardiopatía embolígena, LDH muy elevada"
     },
     {
      "dx": "Apendicitis / diverticulitis",
      "clave": "dolor migratorio en FID o FII, fiebre, defensa abdominal"
     },
     {
      "dx": "Torsión testicular (varón joven)",
      "clave": "dolor escrotal brusco irradiado a fosa; reflejo cremastérico abolido",
      "slug": "sindrome_escrotal_agudo"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Pielonefritis no obstructiva",
      "clave": "fiebre, puñopercusión positiva, piuria con nitritos"
     },
     {
      "dx": "Lumbalgia musculoesquelética",
      "clave": "dolor mecánico, reproducible a la palpación, sin síntomas urinarios"
     },
     {
      "dx": "Cólico biliar",
      "clave": "dolor en hipocondrio derecho tras comida grasa, Murphy positivo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma sospecha clínica",
    "detalle": "Dolor cólico lumbar irradiado a genitales + síntomas vegetativos + microhematuria (2 de 3 criterios). Tira reactiva de orina."
   },
   {
    "paso": "Analgesia precoz y enérgica",
    "detalle": "AINE de primera línea: dexketoprofeno 50 mg IV o diclofenaco 75 mg IM. Metamizol 2 g IV alternativo. Antiemético (metoclopramida 10 mg IV) si vómitos."
   },
   {
    "paso": "Identifica banderas rojas",
    "sub": [
     {
      "nivel": "critico",
      "t": "Fiebre + cólico (pielonefritis obstructiva/urosepsis) → hemocultivos, antibiótico IV y derivación urgente a Urología para desobstrucción (catéter doble J o nefrostomía)."
     },
     {
      "nivel": "emergente",
      "t": "Monorreno, trasplantado, obstrucción bilateral o LRA → eco urgente y valoración urológica."
     }
    ]
   },
   {
    "paso": "Elige la prueba de imagen",
    "detalle": "TC sin contraste = patrón de referencia. Ecografía si embarazo, monorreno, fiebre o insuficiencia renal."
   },
   {
    "paso": "Analítica si hay datos de alarma",
    "detalle": "Función renal e iones, hemograma y PCR si fiebre. β-hCG en mujer fértil. Sedimento y urocultivo."
   },
   {
    "paso": "Tratamiento expulsivo y destino",
    "detalle": "Tamsulosina 0,4 mg/24h si cálculo distal <10 mm. Alta con AINE pautado y filtrado de orina si dolor controlado. Ingreso si dolor refractario, infección obstructiva, LRA o monorreno."
   }
  ],
  "wikem_titulo": "Urolithiasis"
 },
 "coma": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia capilar baja; revierte con glucosa; siempre descartar primero",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Hemorragia intracraneal / HSA",
      "clave": "focalidad, anisocoria, cefalea súbita; TC craneal",
      "slug": "hemorragia_subaracnoidea_espontanea"
     },
     {
      "dx": "Ictus de tronco/hemisférico extenso",
      "clave": "focalidad neurológica, desviación oculocefálica",
      "slug": "ictus"
     },
     {
      "dx": "Intoxicación por opiáceos",
      "clave": "miosis puntiforme, bradipnea; responde a naloxona",
      "slug": "intoxicacion_aguda_por_opiaceos_y_derivados"
     },
     {
      "dx": "Meningoencefalitis",
      "clave": "fiebre, rigidez de nuca, alteración mental; punción lumbar",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Estatus epiléptico no convulsivo / postcrítico",
      "clave": "fluctuación, automatismos sutiles; EEG diagnóstico",
      "slug": "crisis_epilepticas"
     },
     {
      "dx": "Encefalopatía hepática",
      "clave": "hepatopatía, asterixis, fetor; amonio elevado",
      "slug": "encefalopatia_hepatica_aguda"
     },
     {
      "dx": "Trastornos hidroelectrolíticos (Na, Ca)",
      "clave": "hipo/hipernatremia, hipercalcemia; corregir según gravedad",
      "slug": "hiponatremia"
     },
     {
      "dx": "Encefalopatía de Wernicke",
      "clave": "etilismo/desnutrición; oftalmoplejía, ataxia; tiamina urgente"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Encefalopatía tóxico-metabólica (delirium)",
      "clave": "curso fluctuante, ancianos, factor precipitante (infección, fármacos)",
      "slug": "sepsis"
     },
     {
      "dx": "Causa psiquiátrica (psicosis, catatonía)",
      "clave": "exclusión de organicidad; exploración neurológica normal",
      "slug": "agitacion_psicomotriz"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "ABC y protección de vía aérea",
    "detalle": "O2, monitorización, vía venosa. Si Glasgow ≤8 o no protege vía aérea → intubación endotraqueal."
   },
   {
    "paso": "Administra el cóctel del coma empírico",
    "detalle": "Glucosa hipertónica (50 mL al 50%) si hipoglucemia; tiamina 100 mg IV antes/con la glucosa; naloxona 0,4-2 mg IV si sospecha opiáceos."
   },
   {
    "paso": "Exploración neurológica focalizada",
    "detalle": "Glasgow, pupilas, reflejos oculocefálicos/oculovestibulares, patrón respiratorio y respuesta motora para localizar la lesión."
   },
   {
    "paso": "Solicita analítica y tóxicos",
    "detalle": "Glucemia, iones, función renal/hepática, amonio, gasometría, hemograma, tóxicos en orina y niveles si procede."
   },
   {
    "paso": "Neuroimagen y punción lumbar según orientación",
    "sub": [
     {
      "nivel": "critico",
      "t": "focalidad, anisocoria o signos de herniación → TC craneal urgente; manitol y control de PaCO2 si HTIC"
     },
     {
      "nivel": "emergente",
      "t": "fiebre + rigidez de nuca → hemocultivos, antibiótico empírico + aciclovir y punción lumbar tras TC"
     }
    ]
   },
   {
    "paso": "Trata la causa y decide destino",
    "detalle": "Corrige el factor identificado. Ingreso en UCI si Glasgow ≤12, intubado o inestable; alta solo si causa benigna resuelta y entorno seguro."
   }
  ],
  "wikem_titulo": "Altered mental status"
 },
 "crisis_addisoniana": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Shock séptico",
      "clave": "foco infeccioso, fiebre, lactato alto; es el dx erróneo más frecuente y a la vez el precipitante más común",
      "slug": "sepsis"
     },
     {
      "dx": "Shock hipovolémico",
      "clave": "pérdidas evidentes, responde a volumen (la crisis adrenal NO responde sin corticoides)",
      "slug": "shock"
     },
     {
      "dx": "Coma mixedematoso",
      "clave": "hipotermia, bradicardia, hiponatremia, antecedente de hipotiroidismo",
      "slug": "crisis_mixedematosa"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "hiperglucemia, cetonuria, acidosis con anion gap; aquí hay hipoglucemia",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Crisis tirotóxica",
      "clave": "fiebre, taquicardia, agitación, bocio; hipertensión más que hipotensión",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Abdomen agudo",
      "clave": "dolor con Blumberg que la crisis puede remedar; vigila si no cede con corticoides",
      "slug": "dolor_abdominal_agudo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce y trata sin esperar confirmación",
    "detalle": "Sospecha ante hipotensión refractaria + hiponatremia + hiperpotasemia + hipoglucemia. Monitor, 2 vías, glucemia capilar. Extrae cortisol y ACTH basales SIN demorar el tratamiento."
   },
   {
    "paso": "Administra glucocorticoide URGENTE",
    "detalle": "Hidrocortisona 100 mg IV en bolo, después 50 mg/6 h IV o 200 mg/24 h en perfusión. Si el diagnóstico no está hecho, usa dexametasona 4 mg IV (no interfiere con el test de ACTH)."
   },
   {
    "paso": "Expande volumen y corrige glucemia",
    "detalle": "SSF 0,9% 1.000 mL en la primera hora; alterna con glucosado 5% si hipoglucemia. Reevalúa según respuesta y comorbilidad cardíaca."
   },
   {
    "paso": "Corrige las alteraciones electrolíticas",
    "detalle": "La hiperpotasemia y la hiponatremia suelen mejorar con hidrocortisona y sueroterapia. Trata la hiperpotasemia si hay cambios en el ECG."
   },
   {
    "paso": "Busca y trata el factor precipitante",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sepsis/infección → hemocultivos, sistemático de orina, Rx tórax, lactato y antibioterapia empírica precoz."
     },
     {
      "nivel": "emergente",
      "t": "Sospecha de hemorragia adrenal bilateral (caída de Hto + dolor + CID) → TC abdominal y soporte."
     }
    ]
   },
   {
    "paso": "No precisas mineralocorticoide en agudo",
    "detalle": "A dosis altas la hidrocortisona ya tiene efecto mineralocorticoide. Añade fludrocortisona oral solo al bajar a dosis de mantenimiento."
   },
   {
    "paso": "Destino",
    "detalle": "UCI si inestabilidad hemodinámica o alteración del nivel de conciencia; cama monitorizada en casos leves. Interconsulta a Endocrinología y educación en dosis de estrés antes del alta."
   }
  ],
  "wikem_titulo": "Adrenal crisis"
 },
 "crisis_asmatica_infantil": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Aspiración de cuerpo extraño",
      "clave": "inicio súbito, atragantamiento, sibilancias/hipoventilación unilateral; sin antecedente de asma"
     },
     {
      "dx": "Anafilaxia",
      "clave": "broncoespasmo + habones/edema/hipotensión tras alérgeno; respuesta a adrenalina",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Cardiopatía / insuficiencia cardíaca",
      "clave": "sibilancias con soplo, hepatomegalia, mala perfusión; lactante con fallo de medro"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Bronquiolitis vírica",
      "clave": "<2 a, primer episodio, pródromo catarral, crepitantes y sibilancias difusas"
     },
     {
      "dx": "Obstrucción de vía aérea grande (anillo vascular, laringomalacia)",
      "clave": "estridor/sibilancia persistente desde lactante; ruidos posicionales"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre, hipoventilación focal, crepitantes; mala respuesta a broncodilatador",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Disfunción de cuerdas vocales",
      "clave": "estridor inspiratorio, no mejora con broncodilatador; espirometría/laringoscopia"
     },
     {
      "dx": "Reflujo gastroesofágico",
      "clave": "tos y sibilancias tras tomas, regurgitación; lactante"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora la gravedad (primeros minutos)",
    "detalle": "Pulmonary Score + SatO2: leve (PS 0-3, >94%), moderada (PS 4-6, 91-94%), grave (PS 7-9, <91%). Monitoriza y administra O2 si SatO2 <94%."
   },
   {
    "paso": "Inicia broncodilatador de acción corta",
    "detalle": "Salbutamol con MDI + cámara (2-10 pulsaciones según peso/gravedad) o nebulizado; vía inhalatoria de elección. Repite hasta 3 tandas en la primera hora."
   },
   {
    "paso": "Escalona según gravedad",
    "sub": [
     {
      "t": "Moderada-grave → añade bromuro de ipratropio inhalado y corticoide sistémico (prednisolona/prednisona oral 1-2 mg/kg; metilprednisolona IV si no tolera)."
     },
     {
      "nivel": "emergente",
      "t": "Grave sin respuesta → sulfato de magnesio IV 40 mg/kg (máx 2 g) en 20 min."
     },
     {
      "nivel": "critico",
      "t": "Inminencia de parada respiratoria → adrenalina IM, avisar UCIP, valorar VMNI/intubación."
     }
    ]
   },
   {
    "paso": "Reevalúa la respuesta",
    "detalle": "Repite PS y SatO2 tras cada tanda. La Rx tórax NO es rutinaria: solo si auscultación asimétrica, fiebre inexplicada, dolor torácico o sospecha de complicación (neumotórax)."
   },
   {
    "paso": "Vigila el agotamiento",
    "detalle": "PaCO2 >45 mmHg en asmático (típicamente hipocápnico) sugiere fallo respiratorio inminente. Cianosis, bradicardia o consciencia disminuida = alarma."
   },
   {
    "paso": "Destino",
    "detalle": "Buena respuesta y SatO2 estable → alta con salbutamol y corticoide oral 3-5 días + plan escrito. Grave persistente, hipoxia o agotamiento → ingreso/UCIP."
   }
  ],
  "wikem_titulo": "Acute asthma exacerbation (peds)"
 },
 "crisis_de_ansiedad": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor torácico opresivo, factores de riesgo; ECG y troponinas",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Arritmia",
      "clave": "palpitaciones con síncope/mareo; alteración del ritmo en ECG"
     },
     {
      "dx": "Anafilaxia",
      "clave": "urticaria, angioedema, broncoespasmo, hipotensión tras exposición",
      "slug": "urticaria_y_anafilaxia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Crisis tirotóxica/hipertiroidismo",
      "clave": "taquicardia, temblor, bocio, intolerancia al calor",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia baja, sudoración, temblor; revierte con glucosa",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Intoxicación/abstinencia (cocaína, OH)",
      "clave": "contexto de consumo; agitación autonómica",
      "slug": "intoxicacion_aguda_por_cocaina"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Síndrome de hiperventilación",
      "clave": "parestesias periorales/distales, tetania, alcalosis respiratoria"
     },
     {
      "dx": "Trastorno de pánico/ansiedad primario",
      "clave": "episodios recurrentes, pico <10 min; diagnóstico de exclusión"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Descarta organicidad primero",
    "detalle": "Constantes con SatO2, glucemia capilar y ECG. Es un diagnóstico de exclusión: descarta SCA, TEP, arritmia, hipoglucemia e hipertiroidismo."
   },
   {
    "paso": "Aplica medidas generales de soporte",
    "detalle": "Ambiente tranquilo, tranquilización, reeducación respiratoria. NO uses bolsa para reinhalación (riesgo si hay hipoxia o isquemia)."
   },
   {
    "paso": "Si persiste, ansiolítico oral",
    "sub": [
     {
      "t": "agitación/angustia moderada → lorazepam 1-2 mg VO o alprazolam 0,5-1 mg VO"
     },
     {
      "t": "componente somático predominante (taquicardia, temblor) → valorar propranolol si no hay contraindicación"
     }
    ]
   },
   {
    "paso": "Reevalúa la respuesta",
    "detalle": "La falta de respuesta al ansiolítico debe reorientar hacia causa orgánica subyacente."
   },
   {
    "paso": "Detecta criterios de derivación psiquiátrica",
    "detalle": "Síntomas psicóticos, riesgo de suicidio o clínica grave/compleja → interconsulta urgente."
   },
   {
    "paso": "Alta con plan ambulatorio",
    "detalle": "Educación sobre el cuadro, evitar cafeína/tóxicos. Tratamiento de continuidad con ISRS/ISRN y seguimiento por su médico/salud mental."
   }
  ],
  "wikem_titulo": "Panic attack"
 },
 "crisis_epilepticas": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Estatus epiléptico",
      "clave": "crisis ≥5 min o sin recuperación entre crisis; emergencia tiempo-dependiente"
     },
     {
      "dx": "Hemorragia/lesión intracraneal",
      "clave": "primera crisis con focalidad, cefalea o trauma; TC craneal",
      "slug": "ictus"
     },
     {
      "dx": "Meningoencefalitis",
      "clave": "fiebre, rigidez de nuca, alteración mental",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Eclampsia",
      "clave": "embarazo >20 sem, HTA, proteinuria; tratar con sulfato de magnesio",
      "slug": "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia capilar baja; revierte con glucosa",
      "slug": "hipoglucemia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Trastornos hidroelectrolíticos",
      "clave": "hipo/hipernatremia, hipocalcemia, hipomagnesemia; corregir",
      "slug": "hiponatremia"
     },
     {
      "dx": "Abstinencia alcohólica",
      "clave": "etilista, crisis a las 7-48 h del cese; descartar otras causas",
      "slug": "sindrome_de_abstinencia_alcoholica"
     },
     {
      "dx": "Intoxicación (cocaína, ATC, INH, litio, teofilina)",
      "clave": "contexto tóxico; crisis refractarias a benzodiacepinas",
      "slug": "intoxicacion_aguda_por_cocaina"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Crisis en epiléptico conocido / mala adherencia",
      "clave": "abandono o niveles bajos de anticomicial"
     },
     {
      "dx": "Crisis psicógena no epiléptica",
      "clave": "movimientos asincrónicos, ojos cerrados resistentes, sin acidosis postcrítica"
     },
     {
      "dx": "Síncope convulsivo",
      "clave": "pródromos, recuperación rápida sin confusión postcrítica",
      "slug": "sincope"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Protege al paciente y la vía aérea",
    "detalle": "Decúbito lateral, O2, evita lesiones. Monitor, vía venosa, glucemia capilar inmediata."
   },
   {
    "paso": "Corrige causas reversibles inmediatas",
    "detalle": "Glucosa si hipoglucemia (con tiamina 100 mg IV en etilista). Sulfato de magnesio si eclampsia."
   },
   {
    "paso": "Trata la crisis activa con benzodiacepinas (1ª línea)",
    "sub": [
     {
      "nivel": "critico",
      "t": "crisis ≥5 min → diazepam 10 mg IV (o midazolam 10 mg IM si no hay vía); repetir una vez si persiste"
     }
    ]
   },
   {
    "paso": "Si persiste, segunda línea anticomicial",
    "sub": [
     {
      "nivel": "critico",
      "t": "estatus establecido → levetiracetam 60 mg/kg, valproato 40 mg/kg o fenitoína 20 mg/kg IV"
     }
    ]
   },
   {
    "paso": "Estatus refractario",
    "sub": [
     {
      "nivel": "critico",
      "t": "sin respuesta a 1ª y 2ª línea → intubación, sedación (midazolam/propofol/tiopental) e ingreso en UCI"
     }
    ]
   },
   {
    "paso": "Estudio etiológico tras estabilizar",
    "detalle": "Analítica con iones, función renal/hepática, niveles de fármacos, tóxicos. TC craneal y punción lumbar si primera crisis con focalidad, fiebre o inmunodepresión."
   },
   {
    "paso": "Decide destino",
    "detalle": "Epiléptico conocido recuperado → alta con ajuste de tratamiento. Primera crisis, estatus o causa aguda no resuelta → ingreso/observación y Neurología."
   }
  ],
  "wikem_titulo": "Seizure"
 },
 "crisis_mixedematosa": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis",
      "clave": "precipitante y mimetizador más frecuente; fiebre/hipotermia, hipotensión",
      "slug": "sepsis"
     },
     {
      "dx": "Crisis addisoniana",
      "clave": "hipotensión, hiponatremia, hiperpotasemia; puede coexistir",
      "slug": "crisis_addisoniana"
     },
     {
      "dx": "Hipotermia primaria (ambiental)",
      "clave": "exposición al frío sin clínica de hipotiroidismo",
      "slug": "patologia_inducida_por_el_frio_hipotermia_accidental_y_conge"
     },
     {
      "dx": "Intoxicación por opiáceos/sedantes",
      "clave": "miosis, depresión respiratoria; responde a naloxona",
      "slug": "intoxicacion_aguda_por_opiaceos_y_derivados"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Ictus / patología intracraneal",
      "clave": "focalidad neurológica, inicio brusco",
      "slug": "ictus"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia baja; coexiste y agrava el cuadro",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Insuficiencia cardíaca / taponamiento",
      "clave": "hipotensión, derrame pericárdico; ecocardiograma",
      "slug": "insuficiencia_cardiaca"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hiponatremia de otra causa",
      "clave": "alteración de conciencia con Na bajo sin hipotiroidismo grave",
      "slug": "hiponatremia"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza la vía aérea y la ventilación",
    "sub": [
     {
      "nivel": "critico",
      "t": "hipoventilación con hipercapnia → valora intubación y ventilación precoces"
     }
    ]
   },
   {
    "paso": "Monitoriza y extrae analítica antes de tratar",
    "detalle": "Monitor, vías, glucemia. Pide TSH, T4 libre, BMP (Na, glucosa), cortisol basal, gasometría, hemograma, ECG y cultivos. NO esperes el perfil hormonal para iniciar el tratamiento."
   },
   {
    "paso": "Administra hidrocortisona ANTES de la hormona tiroidea",
    "detalle": "Hidrocortisona 100 mg IV (extrayendo antes cortisol) para cubrir una insuficiencia suprarrenal concomitante y evitar crisis addisoniana."
   },
   {
    "paso": "Inicia hormona tiroidea sin demora",
    "detalle": "Levotiroxina IV en dosis de carga seguida de mantenimiento; valora añadir T3 en casos graves. Tratamiento empírico ante alta sospecha clínica."
   },
   {
    "paso": "Corrige hipotermia, hiponatremia e hipoglucemia",
    "detalle": "Recalentamiento pasivo (evita el activo agresivo por riesgo de vasodilatación/hipotensión). Suero glucosado 5% y salino; corrige Na de forma lenta. Soporte hemodinámico cauto (escasa respuesta a inotrópicos)."
   },
   {
    "paso": "Busca y trata el desencadenante",
    "detalle": "Cribado infeccioso (sepsis es lo más frecuente), descarta IAM silente (troponina, ECG) y revisa fármacos depresores. Antibiótico empírico si sospecha de infección."
   },
   {
    "paso": "Ingreso en UCI",
    "detalle": "Todos los pacientes en UCI con monitorización seriada de TSH, T4, iones, glucosa y cortisol; ajuste a levotiroxina oral al estabilizar."
   }
  ],
  "wikem_titulo": "Myxedema coma"
 },
 "crisis_tirotoxica": {
  "ddx": [
   {
    "nivel": "critico",
    "grupo": "Crítico · amenaza vital",
    "items": [
     {
      "dx": "Sepsis / shock séptico",
      "clave": "Fiebre + taquicardia + alteración mental; foco infeccioso, hipotensión, lactato elevado",
      "slug": "sepsis"
     },
     {
      "dx": "Feocromocitoma / crisis catecolaminérgica",
      "clave": "HTA paroxística, cefalea, sudoración, palpitaciones; tiroides normal",
      "slug": null
     },
     {
      "dx": "Intoxicación simpaticomimética (cocaína, anfetaminas)",
      "clave": "Agitación, midriasis, HTA; consumo reciente, sin bocio ni oftalmopatía",
      "slug": "intoxicacion_aguda_por_cocaina"
     }
    ]
   },
   {
    "nivel": "emergente",
    "grupo": "Emergente",
    "items": [
     {
      "dx": "Síndrome neuroléptico maligno / hipertermia maligna",
      "clave": "Rigidez, hipertermia, CK alta; antipsicóticos o anestesia reciente",
      "slug": null
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "Hiperglucemia, acidosis con anion gap, cetonuria, deshidratación",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Abstinencia alcohólica / delirium tremens",
      "clave": "Temblor, taquicardia, agitación, alucinaciones; cese de alcohol",
      "slug": null
     }
    ]
   },
   {
    "nivel": "no_emergente",
    "grupo": "No emergente",
    "items": [
     {
      "dx": "Tirotoxicosis no complicada",
      "clave": "Hipermetabolismo SIN disfunción orgánica ni fiebre alta (escala Burch-Wartofsky baja)",
      "slug": null
     },
     {
      "dx": "Crisis de ansiedad / pánico",
      "clave": "Taquicardia y temblor autolimitados, sin fiebre ni alteración de conciencia mantenida",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Tratar de forma empírica ante la sospecha, sin esperar a la analítica tiroidea",
    "detalle": "Diagnóstico clínico (escala de Burch-Wartofsky ≥45). Avisar a UCI: el ingreso es obligatorio."
   },
   {
    "paso": "Estabilizar ABC y monitorización continua",
    "detalle": "O2, vía venosa, ECG, telemetría, sondaje. Sueroterapia SSF alternando con glucosado al 5% por las pérdidas y el hipercatabolismo."
   },
   {
    "paso": "Bloquear los efectos adrenérgicos con betabloqueante",
    "sub": [
     {
      "t": "Sin insuficiencia cardíaca → propranolol 1-2 mg IV lento, repetir cada 15 min hasta FC <100, luego 60-80 mg VO/4-6 h"
     },
     {
      "t": "Insuficiencia cardíaca o broncoespasmo → esmolol 250-500 mcg/kg IV en bolo, luego 50-100 mcg/kg/min en perfusión",
      "nivel": "emergente"
     }
    ]
   },
   {
    "paso": "Inhibir la síntesis hormonal con antitiroideo",
    "detalle": "Propiltiouracilo 500-1000 mg VO/SNG de carga, luego 250 mg/4 h (de elección, bloquea conversión T4→T3); alternativa tiamazol/metimazol 20-25 mg/6 h."
   },
   {
    "paso": "Bloquear la liberación hormonal con yodo, SIEMPRE ≥1 h tras el antitiroideo",
    "detalle": "Solución de yoduro potásico (Lugol/SSKI) 5 gotas (250 mg)/6 h VO. Nunca antes del tiamazol (efecto Jod-Basedow). Si alergia al yodo: litio 300 mg/8 h."
   },
   {
    "paso": "Cubrir la insuficiencia suprarrenal relativa con corticoide",
    "detalle": "Hidrocortisona 300 mg IV en bolo y 100 mg/8 h; o dexametasona 4 mg/6 h (también frenan la conversión T4→T3)."
   },
   {
    "paso": "Control de hipertermia y tratar el desencadenante",
    "detalle": "Paracetamol y medidas físicas (evitar AAS, desplaza T4 de proteínas). Buscar y tratar infección, IAM, CAD, suspensión del antitiroideo, cirugía o sobrecarga de yodo."
   }
  ],
  "wikem_titulo": "Thyroid storm"
 },
 "derrame_pleural": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Empiema / derrame paraneumónico complicado",
      "clave": "fiebre, pus en toracocentesis; pH <7,20, glucosa <40; precisa tubo de tórax",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Hemotórax",
      "clave": "hto líquido/suero >0,5; antecedente traumático o disección; valorar toracotomía",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; derrame pequeño en 30% de TEP",
      "slug": "tromboembolia_pulmonar"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Insuficiencia cardíaca (trasudado)",
      "clave": "bilateral, predominio derecho; cardiomegalia, ortopnea; responde a diuréticos",
      "slug": "insuficiencia_cardiaca"
     },
     {
      "dx": "Neoplasia pleuropulmonar",
      "clave": "exudado, frecuentemente hemático; síndrome constitucional; recidiva tras evacuación"
     },
     {
      "dx": "Rotura esofágica (Boerhaave)",
      "clave": "vómitos, dolor torácico, enfisema subcutáneo; derrame izquierdo con amilasa alta",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cirrosis / síndrome nefrótico",
      "clave": "trasudado por hipoalbuminemia; ascitis, edemas; hidrotórax hepático derecho",
      "slug": "ascitis"
     },
     {
      "dx": "Pancreatitis",
      "clave": "exudado izquierdo, amilasa pleural elevada; dolor epigástrico irradiado",
      "slug": "pancreatitis_aguda"
     },
     {
      "dx": "Conectivopatía (LES, AR)",
      "clave": "exudado linfocitario; manifestaciones sistémicas; ANA/FR"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y valora repercusión",
    "detalle": "Rx tórax PA/lateral (o en decúbito lateral); SatO2, FR, TA. Ecografía torácica para cuantificar y guiar punción."
   },
   {
    "paso": "Trata la insuficiencia respiratoria",
    "sub": [
     {
      "nivel": "critico",
      "t": "SatO2 <90% o disnea de reposo → toracocentesis evacuadora urgente; máx 1.000-1.500 mL para evitar edema de reexpansión."
     },
     {
      "t": "Interrumpe la extracción si aparece tos, dolor torácico o más disnea durante el procedimiento."
     }
    ]
   },
   {
    "paso": "Caracteriza el líquido (toracocentesis diagnóstica)",
    "detalle": "Criterios de Light: proteínas, LDH, glucosa, pH, recuento, citología, ADA y cultivos. Distingue trasudado de exudado."
   },
   {
    "paso": "Identifica los que requieren drenaje",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Empiema o paraneumónico complicado (pH <7,20, glucosa <40, pus) → tubo de toracostomía + antibioterapia."
     },
     {
      "nivel": "emergente",
      "t": "Hemotórax >300 mL → tubo de tórax; toracotomía si débito >200 mL/h x3 h o >1.500 mL inicial."
     }
    ]
   },
   {
    "paso": "Trata la causa de base",
    "detalle": "IC → diuréticos (resuelve >75% en 2-3 días). Cirrosis/nefrótico → manejo etiológico. Neoplásico → valorar pleurodesis."
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso para todo derrame nuevo de tamaño no mínimo. Alta solo en trasudado pequeño conocido y controlado."
   }
  ],
  "wikem_titulo": "Pleural effusion"
 },
 "descompensacion_hiperglucemica_hiperosmolar_no_cetosica": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Cetoacidosis diabética",
      "clave": "acidosis con anion gap, cetonemia; más en DM1 y curso más rápido",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Sepsis",
      "clave": "fiebre, hipotensión, foco; desencadenante muy frecuente del SHH",
      "slug": "sepsis"
     },
     {
      "dx": "Acidosis láctica",
      "clave": "hipoperfusión, lactato elevado, pH <7,2 por shock/deshidratación"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "CAD euglucémica",
      "clave": "acidosis con cetonas y glucemia poco elevada; iSGLT2, embarazo, ayuno"
     },
     {
      "dx": "Ictus / ACV",
      "clave": "focalidad neurológica; puede ser causa o consecuencia del coma",
      "slug": "ictus"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "desencadenante frecuente; ECG y troponinas",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Hiperglucemia de estrés",
      "clave": "glucemia elevada por enfermedad aguda sin criterios de SHH"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hiperglucemia inducida por fármacos",
      "clave": "corticoides, tiazidas, antipsicóticos atípicos, fenitoína"
     },
     {
      "dx": "DM2 de novo / mal control",
      "clave": "hasta 35% de SHH es la primera manifestación de la enfermedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y monitoriza",
    "detalle": "Constantes, monitor ECG, 2 vías, glucemia, gasometría, osmolaridad e iones. Sondaje vesical para control de diuresis. Confirma SHH: glucemia >600, osm >320, pH ≥7,30, HCO3 >15, cetonas ausentes/leves."
   },
   {
    "paso": "Reposición hídrica agresiva (pilar del tratamiento)",
    "detalle": "SSF 0,9% 1 L en la 1ª hora; déficit medio 8-12 L, repón el 50% en las primeras 12 h. Cambia a salino 0,45% si Na corregido alto. Cautela en cardiópata/nefrópata."
   },
   {
    "paso": "Corrige el potasio ANTES de la insulina",
    "sub": [
     {
      "nivel": "critico",
      "t": "K <3,3 mEq/L → repón potasio y NO inicies insulina hasta corregir"
     },
     {
      "t": "K 3,3-5,5 con diuresis → añade ClK al suero (20-30 mEq/L) y mantén insulina"
     },
     {
      "t": "K ≥5,5 o anuria → no repongas potasio; recontrola"
     }
    ]
   },
   {
    "paso": "Inicia insulina tras la fluidoterapia inicial",
    "detalle": "Insulina rápida IV en perfusión 0,1 U/kg/h (con K >3,3). Objetivo de descenso de glucemia 50-75 mg/dL/h. Añade suero glucosado cuando glucemia <250-300 mg/dL."
   },
   {
    "paso": "Repón magnesio/fosfato y trata el desencadenante",
    "detalle": "Corrige hipomagnesemia (ayuda al K) y fosfato solo si <1. Busca y trata infección, IAM o ictus. Profilaxis tromboembólica con HBPM."
   },
   {
    "paso": "Vigila complicaciones",
    "detalle": "Glucemia e iones horarios al inicio. Cuidado con el edema cerebral (sobre todo jóvenes) si la corrección es demasiado rápida."
   },
   {
    "paso": "Destino",
    "detalle": "La mayoría requiere ingreso en UCI por la elevada mortalidad."
   }
  ],
  "wikem_titulo": "Hyperosmolar hyperglycemic state"
 },
 "diagnostico_diferencial_del_ojo_rojo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza visual",
    "nivel": "critico",
    "items": [
     {
      "dx": "Glaucoma agudo de ángulo cerrado",
      "clave": "dolor intenso 'en clavo' con náuseas, midriasis media fija, edema corneal y PIO muy alta; derivación inmediata"
     },
     {
      "dx": "Queratitis (herpética o por lentes de contacto)",
      "clave": "dolor, fotofobia, defecto que tiñe con fluoresceína; hipoestesia corneal en herpes; no dar corticoides sin diagnóstico"
     },
     {
      "dx": "Uveítis anterior aguda / iridociclitis",
      "clave": "dolor, fotofobia, hiperemia ciliar periquerática, Tyndall en cámara anterior, miosis"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Escleritis",
      "clave": "dolor profundo intenso, vasos esclerales que no blanquean con fenilefrina; asociada a enfermedad sistémica reumática"
     },
     {
      "dx": "Celulitis orbitaria",
      "clave": "ojo rojo con proptosis, dolor al movimiento ocular, diplopía y afectación general"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Conjuntivitis (vírica/bacteriana/alérgica)",
      "clave": "hiperemia conjuntival difusa (rojo ladrillo), secreción/legañas, visión y PIO normales",
      "slug": "conjuntivitis"
     },
     {
      "dx": "Hemorragia subconjuntival",
      "clave": "mancha roja homogénea, indolora, visión normal; descartar HTA o coagulopatía si recurrente"
     },
     {
      "dx": "Epiescleritis",
      "clave": "enrojecimiento sectorial, molestia leve, blanquea con fenilefrina; benigna"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Anamnesis y valoración inicial dirigida",
    "detalle": "Indaga dolor, fotofobia, secreción, uso de lentes de contacto, trauma y afectación de la visión. Toma agudeza visual en ambos ojos: su descenso orienta a patología grave."
   },
   {
    "paso": "Caracteriza el patrón de hiperemia",
    "detalle": "Conjuntival (rojo ladrillo, fondos de saco → procesos benignos) vs ciliar/periquerática (rojo vinoso → procesos graves: glaucoma, uveítis, queratitis)."
   },
   {
    "paso": "Explora con lámpara de hendidura, fluoresceína y tonometría",
    "sub": [
     {
      "nivel": "critico",
      "t": "PIO muy elevada + midriasis media fija + edema corneal → glaucoma agudo: derivación oftalmológica inmediata"
     },
     {
      "nivel": "critico",
      "t": "Captación con fluoresceína (dendrita/úlcera) → queratitis: NO corticoides tópicos; valoración oftalmológica"
     }
    ]
   },
   {
    "paso": "Inicia tratamiento del glaucoma agudo si se confirma",
    "detalle": "Reducir PIO: acetazolamida (oral/IV) ± manitol 20% IV, hipotensores tópicos y analgesia/antieméticos, mientras se traslada al oftalmólogo."
   },
   {
    "paso": "Trata los cuadros benignos",
    "detalle": "Conjuntivitis bacteriana: colirio antibiótico; vírica: medidas higiénicas y lágrimas; alérgica: antihistamínico tópico. Hemorragia subconjuntival: tranquilizar y controlar TA."
   },
   {
    "paso": "Decide destino",
    "detalle": "Derivación oftalmológica urgente en glaucoma agudo, queratitis, uveítis, escleritis o celulitis orbitaria. Manejo ambulatorio en conjuntivitis, epiescleritis y hemorragia subconjuntival, con reconsulta si empeora la visión o el dolor."
   }
  ],
  "wikem_titulo": "Ocular and periocular diagnoses"
 },
 "disbarismos_mal_de_altura_y_enfermedades_relacionadas": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Edema cerebral de altitud (EAC-A)",
      "clave": "ataxia y alteración del estado mental en altura; muerte en 24 h sin descenso"
     },
     {
      "dx": "Edema pulmonar de altitud (EAP-A)",
      "clave": "disnea de reposo, crepitantes, cianosis en altura; descenso inmediato"
     },
     {
      "dx": "Enfermedad por descompresión / embolia gaseosa",
      "clave": "déficit neurológico o dolor torácico tras buceo; cámara hiperbárica"
     },
     {
      "dx": "Intoxicación por monóxido de carbono",
      "clave": "cefalea en refugio con estufa/combustión; SatO2 normal engañosa"
     },
     {
      "dx": "Infección del SNC (meningitis/encefalitis)",
      "clave": "fiebre, rigidez, focalidad; O2 no mejora la cefalea",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Mal agudo de montaña leve",
      "clave": "cefalea + síntomas GI/fatiga/insomnio tras subir >2.500 m; Lake Louise 3-4"
     },
     {
      "dx": "Migraña",
      "clave": "cefalea recurrente conocida; O2 no la alivia, a diferencia del MAM"
     },
     {
      "dx": "Deshidratación / agotamiento",
      "clave": "esfuerzo y aporte hídrico escaso; el MAM no mejora solo con líquidos"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "clínica neuroglucopénica; glucemia capilar baja",
      "slug": "hipoglucemia"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora gravedad y descarta formas mortales",
    "detalle": "Exploración neurológica y cerebelosa (EAC-A) y auscultación pulmonar (EAP-A). Aplica Lake Louise. Monitor, SatO2, glucemia, Tª."
   },
   {
    "paso": "Descenso y oxígeno si forma grave",
    "sub": [
     {
      "nivel": "critico",
      "t": "EAC-A o EAP-A → descenso inmediato de altitud + O2; cámara hiperbárica portátil si no es posible descender"
     }
    ]
   },
   {
    "paso": "Tratamiento farmacológico según cuadro",
    "sub": [
     {
      "t": "MAM leve → acetazolamida 250 mg/12 h + analgesia (ibuprofeno/paracetamol) + antiemético"
     },
     {
      "nivel": "critico",
      "t": "EAC-A → dexametasona 8 mg inicial y 4 mg/6 h"
     },
     {
      "nivel": "critico",
      "t": "EAP-A → nifedipino 30 mg liberación prolongada; valora tadalafilo/salmeterol; reposo y abrigo"
     }
    ]
   },
   {
    "paso": "Maneja el disbarismo por buceo",
    "sub": [
     {
      "nivel": "critico",
      "t": "Enfermedad por descompresión o embolia gaseosa → O2 100%, decúbito, cristaloides y traslado URGENTE a cámara hiperbárica"
     }
    ]
   },
   {
    "paso": "Soporte general",
    "detalle": "Hidratación con cristaloides (no corrige el MAM por sí sola), reposo y evitar nuevos ascensos hasta resolución. No usar sedantes que enmascaren deterioro."
   },
   {
    "paso": "Destino",
    "detalle": "MAM leve → tratamiento ambulatorio sintomático. EAC-A/EAP-A/disbarismo grave → observación, ingreso y coordinación con unidad hiperbárica o descenso."
   }
  ],
  "wikem_titulo": "Acute mountain sickness"
 },
 "disnea_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Neumotórax a tensión",
      "clave": "hipoventilación unilateral, timpanismo, desviación traqueal, hipotensión; descompresión inmediata",
      "slug": "neumotorax_espontaneo"
     },
     {
      "dx": "Anafilaxia / angioedema",
      "clave": "estridor, urticaria, hipotensión tras alérgeno; adrenalina IM",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "hipotensión, ingurgitación yugular, tonos apagados, pulso paradójico",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Edema agudo de pulmón cardiogénico",
      "clave": "crepitantes bilaterales, ortopnea, B-líneas en POCUS",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Crisis asmática",
      "clave": "sibilancias, espiración alargada, antecedente de asma",
      "slug": "ataque_de_asma"
     },
     {
      "dx": "EPOC agudizada",
      "clave": "fumador, aumento de esputo/purulencia, hipercapnia",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos productiva, crepitantes focales, infiltrado",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Cetoacidosis diabética / acidosis metabólica",
      "clave": "taquipnea de Kussmaul, hiperglucemia, anion gap",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Intoxicación por CO / salicilatos",
      "clave": "contexto, cefalea, acúfenos; SatO2 normal engañosa en CO"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Derrame pleural",
      "clave": "matidez, hipoventilación basal, semiología de líquido",
      "slug": "derrame_pleural"
     },
     {
      "dx": "Anemia",
      "clave": "palidez, disnea de esfuerzo progresiva, Hb baja"
     },
     {
      "dx": "Crisis de ansiedad / hiperventilación",
      "clave": "parestesias, alcalosis respiratoria; diagnóstico de exclusión",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la vía aérea y la gravedad (primeros minutos)",
    "detalle": "Monitor, SatO2, FR, TA, FC. Busca red flags: estridor, tiraje, cianosis, bajo nivel de conciencia, FR>30 o <10."
   },
   {
    "paso": "Oxigenoterapia titulada",
    "detalle": "O2 para SatO2 >94% (objetivo 88-92% si EPOC/retenedor de CO2). Gafas, mascarilla, alto flujo o VMNI según respuesta."
   },
   {
    "paso": "Pruebas de primera línea a pie de cama",
    "detalle": "ECG, gasometría arterial, radiografía de tórax y POCUS (pulmón/cardíaco/VCI). Analítica con hemograma, dímero-D si sospecha TEP."
   },
   {
    "paso": "Trata las amenazas vitales inmediatas",
    "sub": [
     {
      "nivel": "critico",
      "t": "Neumotórax a tensión → descompresión con aguja y tubo de tórax."
     },
     {
      "nivel": "critico",
      "t": "Anafilaxia → adrenalina 0,5 mg IM (1:1000) en cara anterolateral del muslo."
     },
     {
      "nivel": "critico",
      "t": "Taponamiento → pericardiocentesis ecoguiada."
     },
     {
      "nivel": "critico",
      "t": "TEP de alto riesgo → fibrinólisis sistémica si inestable."
     }
    ]
   },
   {
    "paso": "Trata la causa más probable",
    "detalle": "EAP: nitroglicerina + VMNI + furosemida. Asma/EPOC: salbutamol+ipratropio nebulizado y corticoide sistémico. Neumonía: antibiótico precoz + fluidos. TEP: anticoagulación."
   },
   {
    "paso": "Reevalúa y decide soporte ventilatorio",
    "sub": [
     {
      "nivel": "emergente",
      "t": "EAP o EPOC con acidosis respiratoria → VMNI (BiPAP) precoz."
     },
     {
      "nivel": "critico",
      "t": "Fatiga, deterioro de conciencia o hipoxia refractaria → intubación y ventilación mecánica."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "UCI si inestabilidad, VMNI con fracaso o IR inminente. Planta si requiere O2/tratamiento IV. Alta si causa leve resuelta y SatO2 estable."
   }
  ],
  "wikem_titulo": "Acute dyspnea"
 },
 "dolor_abdominal_agudo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Aneurisma de aorta abdominal roto",
      "clave": "dolor abdominal/lumbar brusco, masa pulsátil, hipotensión; anciano con factores vasculares",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Perforación de víscera hueca",
      "clave": "abdomen 'en tabla', dolor súbito; neumoperitoneo en Rx"
     },
     {
      "dx": "Isquemia mesentérica",
      "clave": "dolor desproporcionado a la exploración; acidosis con lactato; FA o arteriopatía"
     },
     {
      "dx": "Embarazo ectópico roto",
      "clave": "mujer fértil, amenorrea, dolor + shock; test de gestación positivo, líquido libre"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Apendicitis aguda",
      "clave": "dolor periumbilical que migra a FID, Blumberg, febrícula, anorexia"
     },
     {
      "dx": "Obstrucción intestinal",
      "clave": "dolor cólico, distensión, vómitos, cierre intestinal; niveles hidroaéreos",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Colecistitis / colangitis",
      "clave": "dolor en HCD, Murphy; fiebre e ictericia (tríada de Charcot) en colangitis"
     },
     {
      "dx": "Pancreatitis aguda",
      "clave": "dolor epigástrico irradiado en cinturón, vómitos; amilasa/lipasa elevadas",
      "slug": "pancreatitis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cólico nefrítico",
      "clave": "dolor lumbar cólico irradiado a genitales, inquietud; hematuria",
      "slug": "colico_nefritico"
     },
     {
      "dx": "Gastroenteritis aguda",
      "clave": "dolor difuso cólico con diarrea y vómitos; exploración blanda",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Diverticulitis",
      "clave": "dolor en FII, febrícula; defensa localizada en anciano"
     },
     {
      "dx": "Dolor abdominal inespecífico",
      "clave": "causa más frecuente (40%); exploración benigna que mejora con observación"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la estabilidad y descarta abdomen catastrófico",
    "sub": [
     {
      "nivel": "critico",
      "t": "Taquicardia/hipotensión, abdomen en tabla o palidez sin sangrado externo → reanimación, ecografía a pie de cama (FAST, aorta) y cirugía urgente."
     }
    ]
   },
   {
    "paso": "Pide test de embarazo y constantes",
    "detalle": "Test de gestación OBLIGATORIO en toda mujer en edad fértil. Monitoriza TA, FC, Tª; descarta hemorragia, sepsis y perforación por las constantes."
   },
   {
    "paso": "Administra analgesia precoz",
    "detalle": "No enmascara los hallazgos: paracetamol 1 g IV o metamizol; opiáceos (morfina/fentanilo) si dolor intenso. Antiemético (metoclopramida u ondansetrón)."
   },
   {
    "paso": "Orienta el estudio por localización",
    "detalle": "Analítica con lipasa y función hepática, sistemático de orina. Ecografía/TC según cuadrante. Lactato y gasometría si sospecha de isquemia o sepsis."
   },
   {
    "paso": "Trata la causa e inicia antibiótico si procede",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Sepsis, perforación o apendicitis → antibioterapia de amplio espectro precoz y dieta absoluta."
     }
    ]
   },
   {
    "paso": "Consulta a cirugía y decide destino",
    "detalle": "Cirugía urgente: peritonitis, perforación, isquemia intestinal, AAA roto, ectópico roto. Alta solo con exploración benigna que mejora, seguimiento fiable e instrucciones de reconsulta (cuidado: apendicitis y obstrucción son los diagnósticos más fallados)."
   }
  ],
  "wikem_titulo": "Abdominal pain"
 },
 "dolor_faringeo_agudo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Epiglotitis",
      "clave": "odinofagia intensa con fiebre, babeo, voz gangosa y postura en trípode; vía aérea en riesgo",
      "slug": "disnea_laringea"
     },
     {
      "dx": "Angina de Ludwig",
      "clave": "celulitis del suelo de la boca, edema sublingual y desplazamiento lingual; compromiso de vía aérea"
     },
     {
      "dx": "Absceso retrofaríngeo",
      "clave": "disfagia progresiva, rigidez/tortícolis, abombamiento de pared faríngea posterior; afectación general grave"
     },
     {
      "dx": "Síndrome de Lemierre",
      "clave": "faringitis seguida de fiebre alta y tromboflebitis de la yugular interna; sepsis",
      "slug": "sepsis"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Absceso periamigdalino",
      "clave": "trismo, voz gangosa, desviación de úvula y abombamiento periamigdalino unilateral; precisa drenaje"
     },
     {
      "dx": "Mononucleosis infecciosa (VEB)",
      "clave": "exudado, adenopatías generalizadas, esplenomegalia; exantema con ampicilina; evitar amoxicilina"
     },
     {
      "dx": "Difteria",
      "clave": "membranas grisáceas adherentes que sangran al desprenderse; no vacunados"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Faringitis viral",
      "clave": "la más frecuente; tos, rinorrea, sin exudado; autolimitada"
     },
     {
      "dx": "Faringitis estreptocócica (EBHGA)",
      "clave": "exudado, adenopatía cervical dolorosa, fiebre >38 °C, ausencia de tos (Centor)"
     },
     {
      "dx": "Angioedema con afectación faríngea",
      "clave": "edema sin exudado, puede afectar lengua/labios; valorar vía aérea",
      "slug": "angioedema"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Descarta primero las formas con riesgo vital",
    "sub": [
     {
      "nivel": "critico",
      "t": "Estridor, babeo, trípode, disnea o trismo intenso → sospecha epiglotitis/Ludwig/absceso: NO explorar agresivamente, asegurar vía aérea y avisar ORL/anestesia"
     },
     {
      "nivel": "critico",
      "t": "Abombamiento faríngeo posterior con tortícolis y mal estado → absceso retrofaríngeo: TC cervical e ingreso urgente"
     }
    ]
   },
   {
    "paso": "Aplica criterios de Centor",
    "detalle": "Exudado amigdalino, adenopatía cervical anterior dolorosa, fiebre >38 °C y ausencia de tos. Puntuación ≥3 → test rápido de antígeno (TDRAE)/cultivo y valorar antibiótico."
   },
   {
    "paso": "Trata la faringitis estreptocócica confirmada/probable",
    "detalle": "Fenoximetilpenicilina o amoxicilina 500 mg/8-12 h 10 días; alergia a penicilina: azitromicina o clindamicina. Penicilina G benzatina IM como alternativa de adherencia."
   },
   {
    "paso": "Sospecha y maneja la mononucleosis",
    "detalle": "Si adenopatías generalizadas y esplenomegalia: serología/Paul-Bunnell, evita ampicilina/amoxicilina, reposo y abstención deportiva por riesgo de rotura esplénica."
   },
   {
    "paso": "Pauta tratamiento sintomático",
    "detalle": "Analgesia/antitérmicos (paracetamol, ibuprofeno); valorar corticoide (dexametasona) en odinofagia intensa. Hidratación. La mayoría de las faringitis virales solo precisan medidas sintomáticas."
   },
   {
    "paso": "Decide destino",
    "detalle": "Alta con tratamiento ambulatorio en faringitis no complicada. Ingreso y/o drenaje quirúrgico en absceso periamigdalino/retrofaríngeo, angina de Ludwig, epiglotitis o mononucleosis con complicaciones."
   }
  ],
  "wikem_titulo": "Pharyngitis"
 },
 "dolor_toracico_agudo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor opresivo retroesternal, irradiado, cortejo vegetativo; cambios del ST, troponina",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica (síndrome aórtico agudo)",
      "clave": "dolor brusco, desgarrante, migratorio; asimetría de pulsos/TA, soplo de IAo",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Neumotórax a tensión",
      "clave": "disnea brusca, hipofonesis unilateral, IY, desviación traqueal",
      "slug": "neumotorax_espontaneo"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "tonos apagados, IY, pulso paradójico; derrame en eco",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Perforación esofágica (Boerhaave)",
      "clave": "dolor tras vómitos intensos, enfisema subcutáneo, neumomediastino",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pericarditis aguda",
      "clave": "dolor pleurítico que mejora al inclinarse; roce; ST cóncavo difuso con descenso del PR",
      "slug": "pericarditis_aguda"
     },
     {
      "dx": "Miocarditis",
      "clave": "dolor torácico con troponina elevada y antecedente viral; puede simular SCA",
      "slug": "miocarditis_aguda"
     },
     {
      "dx": "Dolor torácico por cocaína",
      "clave": "consumo reciente, taquicardia, HTA, agitación",
      "slug": "intoxicacion_aguda_por_cocaina"
     },
     {
      "dx": "Pancreatitis aguda",
      "clave": "dolor epigástrico irradiado a espalda, vómitos; lipasa elevada",
      "slug": "pancreatitis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Dolor osteomuscular / costocondritis",
      "clave": "reproducible a la palpación, mecánico, sin cortejo vegetativo"
     },
     {
      "dx": "ERGE / espasmo esofágico",
      "clave": "relación con la ingesta, pirosis; puede simular angina",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Crisis de ansiedad / hiperventilación",
      "clave": "parestesias, opresión, contexto ansioso; diagnóstico de exclusión",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "Neumonía / pleuritis",
      "clave": "dolor pleurítico, fiebre, tos; condensación en Rx",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Triaje y monitorización inmediata",
    "detalle": "Monitor, TA en ambos brazos, SatO2, vía. ECG de 12 derivaciones en <10 min desde la llegada."
   },
   {
    "paso": "Evalúa el ECG y descarta SCACEST",
    "sub": [
     {
      "nivel": "critico",
      "t": "Elevación del ST o BCRI nuevo → activa código infarto y reperfusión urgente."
     },
     {
      "nivel": "emergente",
      "t": "ECG no diagnóstico con clínica sospechosa → troponina seriada y monitorización."
     }
    ]
   },
   {
    "paso": "Anamnesis y exploración orientadas a las causas vitales",
    "detalle": "Características del dolor, factores de riesgo, asimetría de pulsos/TA (disección), signos de TVP (TEP), enfisema subcutáneo (Boerhaave), IY (taponamiento)."
   },
   {
    "paso": "Solicita pruebas según sospecha",
    "detalle": "Rx tórax, troponina seriada (0 h y 1-3 h alta sensibilidad), hemograma y bioquímica. Dímero-D/angio-TC si sospecha de TEP (Wells/PERC); angio-TC aórtica si disección; eco POCUS."
   },
   {
    "paso": "Trata la causa identificada",
    "detalle": "SCA: AAS, anticoagulación, cardiología. TEP: anticoagulación (fibrinólisis si masiva). Disección: control de FC y TA, cirugía urgente si tipo A. Neumotórax a tensión: descompresión. Taponamiento: pericardiocentesis."
   },
   {
    "paso": "Control del dolor con cautela",
    "detalle": "Nitroglicerina para dolor isquémico (evitar en IAM de VD, hipotensión o uso reciente de inhibidores de PDE5). Evita AINE si se sospecha SCA."
   },
   {
    "paso": "Decide el destino",
    "detalle": "UCI/monitorizado si causa vital. Observación si HEART intermedio con troponinas pendientes. Alta si HEART bajo (0-3) con troponinas negativas y causa no cardíaca clara, con seguimiento."
   }
  ],
  "wikem_titulo": "Acute chest pain"
 },
 "edema_agudo_de_pulmon_cardiogenico": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Edema agudo de pulmón no cardiogénico (SDRA)",
      "clave": "infiltrados bilaterales sin cardiomegalia ni FEVI baja; desencadenante (sepsis, aspiración)",
      "slug": "sepsis"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, hipoxia, dolor pleurítico; sobrecarga de VD, sin crepitantes húmedos difusos",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "causa frecuente de EAP; dolor torácico, cambios del ST, troponina",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Emergencia hipertensiva (EAP simpático)",
      "clave": "PAS muy alta de inicio brusco; respuesta rápida a vasodilatadores",
      "slug": "emergencia_hipertensiva"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Neumonía / aspiración",
      "clave": "fiebre, condensación focal, esputo purulento; no edema simétrico",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "EPOC/asma agudizada",
      "clave": "sibilancias y espiración alargada predominantes; antecedente respiratorio",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Sobrecarga de volumen iatrogénica / diálisis omitida",
      "clave": "sueroterapia excesiva o IRC sin diálisis; oligoanuria",
      "slug": "lesion_renal_aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza de inmediato (emergencia)",
    "detalle": "Sentar al paciente con piernas colgando. Monitor, TA, SatO2, vía. O2 alto flujo. Avisa a UCI precozmente."
   },
   {
    "paso": "Inicia VNI sin demora",
    "detalle": "CPAP/BiPAP con PEEP 8 cmH2O, titular rápido hasta 10-12. Reduce el trabajo respiratorio y la precarga/postcarga."
   },
   {
    "paso": "Trata según la presión arterial",
    "sub": [
     {
      "nivel": "emergente",
      "t": "PAS >160 mmHg → nitroglicerina IV a dosis altas (bolo y perfusión 100 mcg/min titulando); SL en lo que se prepara la perfusión."
     },
     {
      "t": "PAS 90-160 mmHg (normotenso) → nitroglicerina a dosis menores + furosemida IV 20-40 mg."
     },
     {
      "nivel": "critico",
      "t": "PAS <90 mmHg (hipotensión) → contraindicada NTG; inotropos (dobutamina) o noradrenalina y considera shock cardiogénico/UCI."
     }
    ]
   },
   {
    "paso": "Diurético y valoración de volemia",
    "detalle": "Furosemida IV; ten en cuenta que muchos pacientes están más redistribuidos que sobrecargados (reevalúa la volemia repetidamente)."
   },
   {
    "paso": "Solicita pruebas y busca el precipitante",
    "detalle": "ECG (descarta SCA/arritmia), troponina, gasometría, Rx tórax (puede ser normal en EAP súbito), eco POCUS (líneas B, FEVI, vena cava)."
   },
   {
    "paso": "Trata la causa de base",
    "detalle": "Reperfusión si SCA; control de frecuencia si FA rápida (digital útil en este contexto); diálisis si fracaso renal."
   },
   {
    "paso": "Valora intubación e ingreso",
    "sub": [
     {
      "nivel": "critico",
      "t": "PaO2 <50 con O2>=50% y CPAP, PaCO2 >50 con pH <7,20 o FR >40 → ventilación mecánica invasiva."
     },
     {
      "t": "Ingreso hospitalario en todos; UCI si no mejora con tratamiento inicial."
     }
    ]
   }
  ],
  "wikem_titulo": "Flash pulmonary edema"
 },
 "emergencia_hipertensiva": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Disección aórtica",
      "clave": "dolor desgarrante a espalda, asimetría de pulsos/TA; exige bajar PAS rápido a 100-120 mmHg",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Ictus isquémico / hemorragia intracraneal",
      "clave": "focalidad, cefalea, alteración de conciencia; precaución extrema al bajar TA",
      "slug": "ictus"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor torácico, cambios ECG, troponina; nitroglicerina de elección",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Edema agudo de pulmón",
      "clave": "disnea, crepitantes, ortopnea; nitroglicerina + diurético",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Eclampsia / preeclampsia grave",
      "clave": "gestante, proteinuria, cefalea, convulsiones; labetalol/hidralazina + sulfato de Mg",
      "slug": "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia"
     },
     {
      "dx": "Lesión renal aguda / GN aguda",
      "clave": "oliguria, hematuria, creatinina elevada",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Crisis catecolaminérgica (feocromocitoma, cocaína)",
      "clave": "crisis paroxística, sudoración, taquicardia; fentolamina, NO betabloqueo aislado",
      "slug": "intoxicacion_aguda_por_cocaina"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Urgencia hipertensiva / HTA asintomática",
      "clave": "cifras altas SIN daño de órgano; tratamiento oral gradual, no IV",
      "slug": "urgencia_hipertensiva"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma daño agudo de órgano diana",
    "detalle": "Monitor ECG, TA, SatO2, vía venosa. Exploración neurológica, fondo de ojo, auscultación. La HTA grave SIN daño de órgano NO es emergencia (no usar IV)."
   },
   {
    "paso": "Solicita estudio dirigido al órgano afectado",
    "detalle": "ECG, troponina, hemograma con frotis (esquistocitos), función renal, sistemático de orina, Rx tórax (mediastino ancho). TC craneal / eco / angio-TC según clínica."
   },
   {
    "paso": "Inicia antihipertensivo IV titulable",
    "detalle": "Objetivo general: reducir PAM 20-25% en la 1ª hora, luego a 160/100 en 2-6 h. Labetalol bolo 20 mg (doblar c/10 min, máx 300) o perfusión; nicardipino/urapidil. Nitroglicerina si SCA o EAP."
   },
   {
    "paso": "Ajusta el fármaco al escenario clínico",
    "sub": [
     {
      "nivel": "critico",
      "t": "Disección aórtica → betabloqueo (esmolol/labetalol) PRIMERO, luego vasodilatador; PAS objetivo 100-120 mmHg."
     },
     {
      "nivel": "critico",
      "t": "Crisis catecolaminérgica → fentolamina o urapidil; NUNCA betabloqueo solo."
     },
     {
      "nivel": "emergente",
      "t": "Ictus → no bajar TA salvo umbrales específicos; descenso muy cauto."
     },
     {
      "nivel": "emergente",
      "t": "Eclampsia → labetalol o hidralazina + sulfato de magnesio."
     }
    ]
   },
   {
    "paso": "Evita el descenso excesivo",
    "detalle": "Reduce de forma controlada para no provocar hipoperfusión cerebral/coronaria/renal. Nitroprusiato solo si fallan otros (riesgo de toxicidad por cianuro)."
   },
   {
    "paso": "Destino",
    "detalle": "Todo paciente con emergencia hipertensiva ingresa: UCI o área monitorizada para titulación IV y vigilancia hemodinámica estrecha."
   }
  ],
  "wikem_titulo": "Hypertensive emergency"
 },
 "encefalopatia_hepatica_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia capilar baja; siempre descartar primero ante todo deterioro de conciencia",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Hematoma subdural / hemorragia intracraneal",
      "clave": "focalidad, traumatismo previo, anticoagulación; TC craneal"
     },
     {
      "dx": "Sepsis / PBE",
      "clave": "fiebre, hipotensión; en ascítico paracentesis con PMN>250",
      "slug": "sepsis"
     },
     {
      "dx": "Edema cerebral (insuficiencia hepática fulminante)",
      "clave": "riesgo de herniación; deterioro rápido del nivel de conciencia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Hiponatremia / hipernatremia",
      "clave": "alteración del sodio como desencadenante o causa de confusión",
      "slug": "hiponatremia"
     },
     {
      "dx": "Intoxicación por benzodiacepinas",
      "clave": "sedación, miosis; aclaramiento hepático reducido",
      "slug": "intoxicacion_aguda_por_benzodiacepinas_e_hipnoticos_no_benzo"
     },
     {
      "dx": "Encefalopatía de Wernicke",
      "clave": "oftalmoplejía, ataxia, confusión en enol; dar tiamina"
     },
     {
      "dx": "Lesión renal aguda / uremia",
      "clave": "elevación de creatinina y urea; síndrome hepatorrenal",
      "slug": "lesion_renal_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hemorragia digestiva alta (desencadenante)",
      "clave": "melenas/hematemesis; aumenta la carga nitrogenada",
      "slug": "hemorragia_digestiva_alta"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Asegura vía aérea y descarta causas inmediatas",
    "detalle": "Valora protección de vía aérea si bajo nivel de conciencia. Glucemia capilar urgente. Es un diagnóstico de exclusión."
   },
   {
    "paso": "Gradúa con West-Haven y monitoriza",
    "detalle": "Grados I-IV. Grado III-IV: vigilancia estrecha, valora UCI y ventilación mecánica si coma profundo."
   },
   {
    "paso": "Solicita estudio del desencadenante",
    "detalle": "Hemograma, bioquímica con iones y función renal, amoníaco, LFT, coagulación, sistemático de orina, Rx tórax. Paracentesis diagnóstica si ascitis (descartar PBE). TC craneal y/o PL si dudas."
   },
   {
    "paso": "Identifica y corrige el factor desencadenante",
    "sub": [
     {
      "nivel": "emergente",
      "t": "HDA → estabiliza, IBP, valora endoscopia"
     },
     {
      "nivel": "emergente",
      "t": "PBE → cefotaxima IV + albúmina"
     },
     {
      "t": "Corrige hipopotasemia/hiponatremia, retira sedantes y diuréticos, trata estreñimiento"
     }
    ]
   },
   {
    "paso": "Inicia tratamiento específico",
    "detalle": "Lactulosa 20-30 g VO/SNG cada 6-8 h (objetivo 2-3 deposiciones blandas/día) o en enema (300 ml en 700 ml de agua) si bajo nivel de conciencia. Rifaximina 400 mg/8 h como complemento."
   },
   {
    "paso": "Soporte general",
    "detalle": "No restrinjas proteínas de forma prolongada; aporta nutrición. Glucosa 10%/salino para evitar hipoglucemia. Evita benzodiacepinas; flumazenilo solo si sospecha de sobredosis."
   },
   {
    "paso": "Decide destino",
    "detalle": "Grado I con buen soporte → alta/observación. Grado II → ingreso (salvo encefalopatía conocida y por lo demás estable). Grados III-IV → ingreso, valora UCI; en fallo hepático fulminante, contacta con unidad de trasplante."
   }
  ],
  "wikem_titulo": "Hepatic encephalopathy"
 },
 "endocarditis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis de otro foco",
      "clave": "foco identificable, hipotensión distributiva; sin soplo nuevo ni estigmas embólicos",
      "slug": "sepsis"
     },
     {
      "dx": "Meningitis / encefalitis",
      "clave": "fiebre, cefalea, rigidez de nuca, alteración del nivel de conciencia",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Ictus / hemorragia intracraneal",
      "clave": "focalidad neurológica brusca; puede ser embolia séptica de la propia EI",
      "slug": "ictus"
     },
     {
      "dx": "IAM",
      "clave": "dolor opresivo, cambios ECG, troponina; sin fiebre mantenida ni soplo nuevo",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pielonefritis aguda",
      "clave": "fiebre, puñopercusión positiva, síndrome miccional, piuria",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos, condensación radiológica; el foco explica la bacteriemia",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Pericarditis aguda",
      "clave": "dolor pleurítico, roce, ST difuso; sin vegetaciones en eco",
      "slug": "pericarditis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Síndrome viral inespecífico",
      "clave": "fiebre autolimitada sin foco ni soplo; reevaluar si persiste",
      "slug": "sindrome_febril_sin_foco_en_pacientes_no_inmunodeprimidos"
     },
     {
      "dx": "Fiebre por fármacos / neoplasia",
      "clave": "fiebre sin foco infeccioso, relación temporal con fármaco o síndrome constitucional"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Sospéchala en todo febril con factores de riesgo",
    "detalle": "Soplo nuevo, ADVP, válvula protésica, marcapasos/DAI, bacteriemia por S. aureus. Busca estigmas periféricos (Janeway, Osler, hemorragias en astilla)."
   },
   {
    "paso": "Extrae hemocultivos ANTES del antibiótico",
    "detalle": "3 tandas de hemocultivos de venopunciones distintas. Hemograma, bioquímica, PCR, NT-proBNP, sistemático de orina. ECG (busca BAV nuevo = absceso perivalvular)."
   },
   {
    "paso": "Solicita ecocardiografía",
    "detalle": "ETT inicial; ETE si alta sospecha o ETT no concluyente (más sensible para vegetaciones, abscesos y prótesis). Aplica criterios de Duke modificados."
   },
   {
    "paso": "Inicia antibioterapia empírica precoz tras cultivos",
    "detalle": "Válvula nativa: cloxacilina + ampicilina + gentamicina (o vancomicina/daptomicina si alergia/SARM). Protésica precoz: vancomicina + gentamicina + rifampicina. Ajusta a antibiograma."
   },
   {
    "paso": "Detecta complicaciones que indican cirugía urgente",
    "sub": [
     {
      "nivel": "critico",
      "t": "IC aguda por regurgitación grave o shock cardiogénico → cirugía cardíaca urgente."
     },
     {
      "nivel": "critico",
      "t": "Embolia cerebral con focalidad → NO fibrinólisis IV; valora con neurología/cirugía."
     },
     {
      "nivel": "emergente",
      "t": "Bacteriemia persistente, vegetaciones >10 mm o embolias de repetición → valoración quirúrgica precoz."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso de todo caso sospechoso. Avisa a cardiología y cirugía cardíaca ante complicaciones. UCI si inestabilidad o sepsis grave."
   }
  ],
  "wikem_titulo": "Endocarditis"
 },
 "enfermedad_inflamatoria_intestinal": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Megacolon tóxico",
      "clave": "colon transverso >6 cm, fiebre, taquicardia, distensión y abdomen tóxico"
     },
     {
      "dx": "Perforación intestinal",
      "clave": "neumoperitoneo, peritonismo brusco; cirugía urgente"
     },
     {
      "dx": "Isquemia mesentérica",
      "clave": "dolor desproporcionado a la exploración; acidosis láctica",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Hemorragia digestiva baja masiva",
      "clave": "rectorragia abundante con repercusión hemodinámica",
      "slug": "hemorragia_digestiva_media_y_baja"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Colitis por C. difficile",
      "clave": "diarrea tras antibióticos/ingreso; toxina o GDH positiva"
     },
     {
      "dx": "Apendicitis aguda",
      "clave": "dolor migratorio a FID, Blumberg; puede simular brote ileocecal"
     },
     {
      "dx": "Obstrucción intestinal",
      "clave": "vómitos, distensión, ausencia de tránsito; frecuente en EC estenosante",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Absceso intraabdominal",
      "clave": "masa dolorosa con sepsis, típico de EC"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Gastroenteritis infecciosa",
      "clave": "diarrea aguda autolimitada; coprocultivo, contexto epidémico",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Cáncer de colon",
      "clave": "cambio del hábito, anemia ferropénica, síndrome constitucional en >50 años"
     },
     {
      "dx": "Colitis isquémica",
      "clave": "dolor y rectorragia en anciano vasculópata; afecta ángulo esplénico"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa estabilidad y gravedad del brote",
    "detalle": "Constantes, hidratación, abdomen. Aplica Truelove-Witts (CU): >6 deposiciones sanguinolentas/día + taquicardia/fiebre/Hb<10,5/PCR>30 = brote grave."
   },
   {
    "paso": "Solicita analítica e imagen",
    "detalle": "Hemograma, PCR, ionograma, función renal, gasometría si grave. Coprocultivo y toxina C. difficile. Rx simple de abdomen para descartar dilatación colónica/neumoperitoneo."
   },
   {
    "paso": "Reanima y corrige",
    "detalle": "Sueroterapia IV, corrige hipopotasemia e hipomagnesemia (favorecen megacolon). Transfunde si Hb<7-8. Profilaxis de ETV con HBPM."
   },
   {
    "paso": "Descarta complicación quirúrgica",
    "sub": [
     {
      "nivel": "critico",
      "t": "Megacolon tóxico / perforación / hemorragia masiva → cirugía urgente + antibióticos de amplio espectro IV"
     },
     {
      "nivel": "emergente",
      "t": "Absceso → TC abdominal, drenaje y antibioterapia, valora retraso de biológicos"
     }
    ]
   },
   {
    "paso": "Inicia tratamiento del brote",
    "detalle": "Brote grave: corticoides IV (metilprednisolona 1 mg/kg/día o equivalente). Brote leve-moderado de CU: mesalazina oral/tópica. Evita opiáceos y antidiarreicos (riesgo de megacolon)."
   },
   {
    "paso": "Reevalúa respuesta a corticoides",
    "detalle": "En CU grave, al 3.er día: >8 deposiciones o PCR>45 = corticorrefractariedad → terapia de rescate (ciclosporina o infliximab) o valoración quirúrgica."
   },
   {
    "paso": "Decide destino",
    "detalle": "Brote grave, complicación o intolerancia oral → ingreso (UCI si inestable/séptico). Brote leve con buen soporte → alta con tratamiento y control por Digestivo."
   }
  ],
  "wikem_titulo": "Crohn's disease"
 },
 "enfermedad_tromboembolica_venosa": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hemoptisis, hipoxia o hipotensión en paciente con TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Fascitis necrosante",
      "clave": "dolor desproporcionado, crepitación, ampollas, toxicidad sistémica rápida",
      "slug": "lesiones_elementales"
     },
     {
      "dx": "Isquemia arterial aguda",
      "clave": "frialdad, palidez, AUSENCIA de pulsos; en flegmasía cerúlea coexiste con TVP masiva",
      "slug": "isquemia_arterial_aguda_de_las_extremidades"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Celulitis",
      "clave": "eritema caliente bien delimitado, fiebre, puerta de entrada; eco sin trombo",
      "slug": "lesiones_elementales"
     },
     {
      "dx": "Síndrome compartimental",
      "clave": "dolor intenso al estiramiento pasivo, tensión; antecedente de trauma o reperfusión"
     },
     {
      "dx": "Quiste de Baker roto",
      "clave": "dolor brusco en pantorrilla, equimosis en maléolo (signo de la media luna); eco diferencia"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Tromboflebitis superficial",
      "clave": "cordón venoso indurado, eritematoso y doloroso superficial; eco para ver proximidad al cayado"
     },
     {
      "dx": "Rotura de gemelo / tendón de Aquiles",
      "clave": "dolor súbito en esfuerzo, hematoma; sin signos inflamatorios sistémicos"
     },
     {
      "dx": "Insuficiencia venosa / linfedema",
      "clave": "edema crónico, fóvea, cambios cutáneos; bilateral o de larga evolución"
     },
     {
      "dx": "Edema bilateral (IC, renal, hepático)",
      "clave": "edema simétrico con fóvea; orienta a causa sistémica",
      "slug": "insuficiencia_cardiaca"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estima la probabilidad pretest (Wells)",
    "detalle": "Valora factores de riesgo, asimetría, edema, dolor a la palpación del trayecto venoso, signo de Homans. Clasifica probabilidad baja/intermedia/alta."
   },
   {
    "paso": "Aplica el algoritmo dímero D + ecografía",
    "sub": [
     {
      "t": "Probabilidad baja + dímero D negativo → excluye TVP, no más pruebas."
     },
     {
      "t": "Probabilidad alta o dímero D positivo → ecografía de compresión/Doppler."
     }
    ]
   },
   {
    "paso": "Anticoagula ante TVP confirmada o alta sospecha",
    "detalle": "Inicio precoz. ACOD de elección en TVP no oncológica (apixabán, rivaroxabán). HBPM/fondaparinux a dosis terapéuticas si cáncer, embarazo o función renal límite. Analgesia y deambulación precoz."
   },
   {
    "paso": "Detecta la TVP grave / complicada",
    "sub": [
     {
      "nivel": "critico",
      "t": "Flegmasía cerúlea/alba dolens (edema masivo, cianosis, shock) → valorar fibrinólisis/trombectomía urgente, riesgo de gangrena."
     },
     {
      "nivel": "critico",
      "t": "Signos de TEP o inestabilidad hemodinámica → manejar como TEP, considerar fibrinólisis."
     }
    ]
   },
   {
    "paso": "Maneja la trombosis venosa superficial",
    "detalle": "Eco para medir distancia al cayado. Trombo a <3 cm del cayado safeno-femoral/poplíteo o safena completa → anticoagulación a dosis plenas; resto → fondaparinux/HBPM profiláctica."
   },
   {
    "paso": "Destino",
    "detalle": "TVP no complicada, estable → manejo ambulatorio con anticoagulación y seguimiento. Ingreso si flegmasía, TEP asociado, alto riesgo de sangrado o comorbilidad."
   }
  ],
  "wikem_titulo": "Deep venous thrombosis"
 },
 "epistaxis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Epistaxis posterior con shock hipovolémico",
      "clave": "sangrado abundante hacia orofaringe, hipotensión y taquicardia; no cede con taponamiento anterior",
      "slug": "shock"
     },
     {
      "dx": "Coagulopatía / paciente anticoagulado",
      "clave": "sangrado persistente o difuso; antecedente de anticoagulantes o diátesis hemorrágica",
      "slug": "estudio_de_la_coagulacion"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Emergencia hipertensiva asociada",
      "clave": "epistaxis con TA muy elevada y sintomatología; dificulta el control del sangrado",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Traumatismo facial / nasal",
      "clave": "antecedente de golpe; valorar fractura y descartar hematoma septal",
      "slug": "traumatismos_maxilofaciales"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Epistaxis anterior idiopática (área de Kiesselbach)",
      "clave": "la más frecuente; punto sangrante anterior accesible, autolimitada"
     },
     {
      "dx": "Tumor nasosinusal / angiofibroma juvenil",
      "clave": "epistaxis recidivante unilateral, obstrucción nasal; varón joven en el angiofibroma"
     },
     {
      "dx": "Malformación arteriovenosa / telangiectasias (Rendu-Osler)",
      "clave": "epistaxis de repetición, telangiectasias mucocutáneas, historia familiar"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora primero el estado hemodinámico",
    "detalle": "Constantes, signos de hipovolemia. Si inestable: dos vías de grueso calibre, cristaloides, cruzar sangre. Hemograma y coagulación si sangrado intenso o anticoagulado."
   },
   {
    "paso": "Aplica medidas iniciales de control",
    "detalle": "Paciente sentado e inclinado hacia delante; sonarse para retirar coágulos; compresión digital firme de alas nasales 10-15 min. Vasoconstrictor tópico (oximetazolina/adrenalina) ± anestésico."
   },
   {
    "paso": "Localiza el punto sangrante",
    "detalle": "Rinoscopia anterior con espéculo en orientación superior-inferior y buena iluminación. Diferencia anterior (Kiesselbach) de posterior (sangrado hacia faringe)."
   },
   {
    "paso": "Escala el tratamiento según localización",
    "sub": [
     {
      "t": "Punto anterior visible → cauterización con nitrato de plata (no bilateral en septum por riesgo de perforación)"
     },
     {
      "t": "No cede o no se ve foco → taponamiento anterior (gasa orillada o esponja expansible); cobertura antibiótica si se mantiene >48 h"
     },
     {
      "nivel": "critico",
      "t": "Epistaxis posterior o fracaso del taponamiento anterior → taponamiento posterior/neumático y valoración ORL urgente"
     }
    ]
   },
   {
    "paso": "Corrige factores precipitantes",
    "detalle": "Controla la TA si está elevada; revierte/ajusta anticoagulación según fármaco y gravedad; considera ácido tranexámico tópico. Transfunde si Hb <9 g/dL con repercusión."
   },
   {
    "paso": "Decide destino",
    "detalle": "Alta tras hemostasia estable en epistaxis anterior controlada, con instrucciones y revisión para retirada del taponamiento. Ingreso/ORL en epistaxis posterior, inestabilidad, coagulopatía no controlada o sospecha tumoral."
   }
  ],
  "wikem_titulo": "Epistaxis"
 },
 "epoc_agudizada": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Edema agudo de pulmón cardiogénico",
      "clave": "crepitantes bilaterales, ortopnea, B-líneas; \"asma cardial\"",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita desproporcionada, dolor pleurítico, hipoxia refractaria",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Neumotórax",
      "clave": "dolor brusco, hipoventilación unilateral; frecuente en EPOC con bullas",
      "slug": "neumotorax_espontaneo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Neumonía",
      "clave": "fiebre, esputo purulento, crepitantes focales, infiltrado nuevo",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Crisis asmática",
      "clave": "menor edad, atopia, reversibilidad; solapamiento ACO",
      "slug": "ataque_de_asma"
     },
     {
      "dx": "Arritmia (FA, taquicardia auricular multifocal)",
      "clave": "palpitaciones, irregularidad; común en EPOC e hipoxia",
      "slug": "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor opresivo, cambios del ST/troponina",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Derrame pleural",
      "clave": "matidez, hipoventilación basal",
      "slug": "derrame_pleural"
     },
     {
      "dx": "Infección respiratoria de vías altas",
      "clave": "rinorrea, odinofagia, sin infiltrado ni hipoxia significativa"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la gravedad (primeros minutos)",
    "detalle": "SatO2, FR, nivel de conciencia, uso de musculatura accesoria, estabilidad hemodinámica. Busca encefalopatía hipercápnica (somnolencia, asterixis)."
   },
   {
    "paso": "Oxigenoterapia controlada",
    "detalle": "O2 con objetivo SatO2 88-92% (Venturi 24-28%) para evitar hipercapnia. Gasometría arterial si SatO2<90% o sospecha de retención de CO2."
   },
   {
    "paso": "Broncodilatadores y corticoide sistémico",
    "detalle": "Salbutamol 2,5-5 mg + ipratropio 0,5 mg nebulizados, repetidos. Prednisona 40 mg VO/día 5 días (o metilprednisolona/hidrocortisona IV si no tolera VO)."
   },
   {
    "paso": "Antibiótico si criterios de Anthonisen",
    "detalle": "Indicado si aumentan disnea, volumen Y purulencia del esputo (≥2 criterios) o ventilación mecánica. Empírico: amoxicilina-clavulánico o levofloxacino; cubrir Pseudomonas (cipro/cefepima/pipe-tazo) si EPOC grave o factores de riesgo."
   },
   {
    "paso": "Soporte ventilatorio según gasometría",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Acidosis respiratoria pH 7,25-7,35 con hipercapnia → VMNI (BiPAP) precoz."
     },
     {
      "nivel": "critico",
      "t": "pH<7,25, deterioro de conciencia, fatiga o fracaso de VMNI → intubación y ventilación mecánica; avisar UCI."
     }
    ]
   },
   {
    "paso": "Decide el destino",
    "sub": [
     {
      "t": "Leve con buena respuesta y soporte domiciliario adecuado → alta con pauta de corticoide y broncodilatadores."
     },
     {
      "nivel": "emergente",
      "t": "Disnea de reposo marcada, hipoxia/hipercapnia respecto a basal, comorbilidad o arritmia nueva → ingreso; UCI si inestabilidad o VMNI fallida."
     }
    ]
   }
  ],
  "wikem_titulo": "COPD exacerbation"
 },
 "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Eclampsia",
      "clave": "convulsiones o coma en gestante hipertensa; pródromos: cefalea, clonus, alteraciones visuales"
     },
     {
      "dx": "Síndrome HELLP",
      "clave": "epigastralgia/dolor en HCD + hemólisis, GOT/GPT altas y plaquetas <100.000"
     },
     {
      "dx": "PTT / SHU",
      "clave": "trombopenia + anemia hemolítica microangiopática + fallo renal/neurológico; LDH muy alta"
     },
     {
      "dx": "Hígado graso agudo del embarazo",
      "clave": "náuseas, ictericia, hipoglucemia, coagulopatía en 3.er trimestre"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hipertensión crónica",
      "clave": "HTA conocida o detectada antes de la semana 20; sin proteinuria de novo"
     },
     {
      "dx": "Hipertensión gestacional",
      "clave": "HTA de novo >20 semanas SIN proteinuria ni daño orgánico"
     },
     {
      "dx": "Feocromocitoma",
      "clave": "crisis hipertensivas paroxísticas con cefalea, sudoración y palpitaciones"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma la HTA y busca criterios de gravedad",
    "detalle": "PA con manguito adecuado, paciente sentada, 2 tomas. Gravedad: PAS >160 o PAD >110. Pregunta por cefalea, epigastralgia, alteraciones visuales, clonus."
   },
   {
    "paso": "Solicita el estudio de preeclampsia",
    "detalle": "Hemograma con plaquetas, función renal y ácido úrico, GOT/GPT, LDH, haptoglobina y frotis (hemólisis), coagulación/fibrinógeno y D-dímero si sospecha de CID, cociente proteína/creatinina en orina."
   },
   {
    "paso": "Controla la HTA grave de forma urgente",
    "sub": [
     {
      "nivel": "critico",
      "t": "PAS ≥160 o PAD ≥110 → labetalol IV (20 mg, repetir/doblar) o hidralazina IV o nifedipino oral; objetivo PAS 140-155 / PAD 90-105 sin descensos bruscos."
     }
    ]
   },
   {
    "paso": "Previene y trata las convulsiones",
    "sub": [
     {
      "nivel": "critico",
      "t": "Eclampsia o preeclampsia grave → sulfato de magnesio IV: 4-6 g en 20 min y 1-2 g/h; vigila reflejos, diuresis y FR. Antídoto: gluconato cálcico."
     }
    ]
   },
   {
    "paso": "Monitoriza a madre y feto y consulta a Obstetricia",
    "detalle": "Monitorización fetal continua/RCTG, balance hídrico, vigilancia de signos de gravedad. Avisa a Obstetricia en TODOS los casos sospechosos."
   },
   {
    "paso": "Destino y tratamiento definitivo",
    "detalle": "Ingreso en paritorio. El tratamiento curativo es finalizar la gestación: con criterios de gravedad, parto tras estabilización materna; sin gravedad y <37 sem, manejo expectante. Control de PA ≥72 h posparto."
   }
  ],
  "wikem_titulo": "Preeclampsia"
 },
 "gastroenteritis_aguda_en_la_infancia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis",
      "clave": "aspecto séptico, mal estado general, relleno capilar lento; fiebre y deshidratación",
      "slug": "sepsis"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "poliuria-polidipsia, respiración de Kussmaul, dolor abdominal, glucemia alta",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Meningitis",
      "clave": "vómitos con cefalea/irritabilidad, signos meníngeos, fontanela abombada",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Isquemia/invaginación intestinal",
      "clave": "dolor cólico intenso, heces \"en jalea de grosella\", masa abdominal, letargia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Apendicitis",
      "clave": "dolor migratorio a FID, defensa, fiebre; vómitos tras el dolor"
     },
     {
      "dx": "Síndrome hemolítico-urémico",
      "clave": "diarrea sanguinolenta previa + palidez, oligoanuria, ictericia"
     },
     {
      "dx": "Obstrucción intestinal / íleo",
      "clave": "vómitos biliosos, distensión, ausencia de deposición/gas",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Torsión testicular/ovárica",
      "clave": "dolor agudo escrotal o anexial con vómitos reflejos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "GEA vírica (rotavirus)",
      "clave": "diarrea + vómitos ± fiebre, autolimitada; 6-24 meses, buen estado entre tomas"
     },
     {
      "dx": "Infección urinaria",
      "clave": "fiebre con vómitos sin foco digestivo claro; tira de orina",
      "slug": "infecciones_urinarias_bajas_cistitis_y_uretritis"
     },
     {
      "dx": "GEA bacteriana invasiva",
      "clave": "fiebre alta, diarrea sanguinolenta, viaje a zona de riesgo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora el estado general y el grado de deshidratación",
    "detalle": "TEP, relleno capilar, turgencia, mucosas, diuresis, peso. Estima % de pérdida: leve (<5%), moderada (5-10%), grave (>10%)."
   },
   {
    "paso": "Rehidrata según gravedad",
    "sub": [
     {
      "t": "Leve-moderada → rehidratación oral con SRO hipotónica, ~30-50 mL/kg en 4 h + reposición de pérdidas; de elección."
     },
     {
      "nivel": "critico",
      "t": "Shock/deshidratación grave → bolo IV de SSF 20 mL/kg, repetir según respuesta; monitoriza."
     },
     {
      "t": "Vómitos que impiden la SRO → ondansetrón 0,15 mg/kg y reintentar SRO a pequeños sorbos."
     }
    ]
   },
   {
    "paso": "Limita las pruebas complementarias",
    "detalle": "GEA típica no requiere analítica. Considera iones/gasometría si deshidratación grave o IV; coprocultivo solo si fiebre alta, sangre en heces, viaje, inmunodepresión o >10 deposiciones/24 h."
   },
   {
    "paso": "Reintroduce la alimentación precozmente",
    "detalle": "Dieta normal para la edad tras rehidratar (no dietas restrictivas); mantén lactancia materna. Evita zumos azucarados."
   },
   {
    "paso": "Reserva el antibiótico para casos seleccionados",
    "detalle": "Solo en sospecha de bacteriemia, <3 meses, GEA bacteriana invasiva o inmunodeprimidos (p. ej. azitromicina/cefotaxima). Evita antidiarreicos."
   },
   {
    "paso": "Destino",
    "detalle": "La mayoría se va de alta tras tolerancia oral, con SRO y signos de alarma. Ingreso si shock, deshidratación grave, vómitos incoercibles, sospecha quirúrgica o SHU."
   }
  ],
  "wikem_titulo": "Acute gastroenteritis"
 },
 "hematuria": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Aneurisma de aorta abdominal (fístula/erosión)",
      "clave": "varón >60a, dolor lumbar/abdominal, masa pulsátil, hipotensión",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Glomerulonefritis aguda con sobrecarga",
      "clave": "hematíes dismórficos/cilindros hemáticos, HTA, edemas, oliguria; riesgo de EAP y uremia",
      "slug": "sindrome_nefritico_agudo"
     },
     {
      "dx": "Hematuria por coagulopatía/anticoagulación",
      "clave": "anticoagulados, INR elevado, hematuria masiva con coágulos y anemización"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pielonefritis / ITU",
      "clave": "fiebre, puñopercusión positiva, síndrome miccional; nitritos y leucocituria",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Litiasis ureteral",
      "clave": "dolor cólico lumbar irradiado a genitales, microhematuria, síntomas vegetativos",
      "slug": "colico_nefritico"
     },
     {
      "dx": "Retención por coágulos vesicales",
      "clave": "globo vesical doloroso, coágulos gruesos, no orina pese a esfuerzo",
      "slug": "retencion_aguda_de_orina"
     },
     {
      "dx": "Hematuria postraumática",
      "clave": "traumatismo lumbar/pélvico previo; valorar lesión renal o vesical"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Tumor vesical (carcinoma urotelial)",
      "clave": "hematuria macroscópica indolora en >40a/fumador; coágulos gruesos vesicales"
     },
     {
      "dx": "Hiperplasia benigna de próstata",
      "clave": "varón mayor, clínica obstructiva miccional previa, sangrado leve"
     },
     {
      "dx": "Cistitis",
      "clave": "disuria, polaquiuria, hematuria terminal; tira con nitritos",
      "slug": "infecciones_urinarias_bajas_cistitis_y_uretritis"
     },
     {
      "dx": "Pseudohematuria (alimentos/fármacos/mioglobina)",
      "clave": "tira positiva sin hematíes en sedimento: rifampicina, remolacha, rabdomiólisis"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma la hematuria y valora repercusión",
    "detalle": "Tira reactiva + sedimento (confirma hematíes). Constantes, valora palidez/inestabilidad. Sondaje vesical de tres vías si coágulos."
   },
   {
    "paso": "Estabiliza si hay inestabilidad o anemización",
    "sub": [
     {
      "nivel": "critico",
      "t": "Shock hipovolémico → 2 vías gruesas, cristaloides, cruzar y transfundir; reversión de anticoagulación si procede."
     },
     {
      "nivel": "emergente",
      "t": "Retención por coágulos → sonda de tres vías y lavado vesical continuo; si no se aclara, avisa a Urología."
     }
    ]
   },
   {
    "paso": "Solicita pruebas dirigidas",
    "detalle": "Hemograma, coagulación, función renal e iones. Urocultivo si sospecha infecciosa. Sedimento con hematíes dismórficos/cilindros orienta a glomerular."
   },
   {
    "paso": "Distingue origen glomerular de urológico",
    "sub": [
     {
      "t": "Glomerular (hematíes dismórficos, proteinuria, cilindros, HTA) → manejo nefrológico; vigila sobrecarga y emergencia hipertensiva."
     },
     {
      "t": "Urológico (coágulos, hematuria monosintomática) → estudio urológico (eco/TC, cistoscopia diferida)."
     }
    ]
   },
   {
    "paso": "Trata la causa",
    "detalle": "Antibiótico si ITU/pielonefritis. Analgesia si cólico. Hidratación abundante para evitar nuevos coágulos."
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso si inestabilidad, anemia grave (Hb <7), retención por coágulos persistente, insuficiencia renal o sospecha de glomerulonefritis. Alta con derivación a Urología en >40a para descartar neoplasia."
   }
  ],
  "wikem_titulo": "Hematuria"
 },
 "hemoptisis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemoptisis masiva / hemorragia alveolar difusa",
      "clave": ">100 mL/h o >600 mL/24h, o inestabilidad; riesgo de asfixia, no de exanguinación",
      "slug": "sepsis"
     },
     {
      "dx": "Tromboembolia pulmonar con infarto",
      "clave": "disnea súbita, dolor pleurítico, hemoptisis escasa, factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Cáncer de pulmón",
      "clave": ">40 años, fumador, síndrome constitucional, hemoptisis recidivante"
     },
     {
      "dx": "Tuberculosis",
      "clave": "tos crónica, fiebre, sudoración nocturna, contexto epidemiológico"
     },
     {
      "dx": "Neumonía / absceso pulmonar",
      "clave": "fiebre, esputo purulento, infiltrado o cavitación",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Insuficiencia cardíaca / estenosis mitral",
      "clave": "esputo rosado espumoso, ortopnea, soplo diastólico",
      "slug": "insuficiencia_cardiaca"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Bronquitis / bronquiectasias",
      "clave": "causa más frecuente de hemoptisis leve; esputo crónico abundante"
     },
     {
      "dx": "Pseudohemoptisis (epistaxis / hematemesis)",
      "clave": "sangre de origen ORL o digestivo; pH ácido en hematemesis, alcalino en hemoptisis",
      "slug": "epistaxis"
     },
     {
      "dx": "Coagulopatía / antiagregación-anticoagulación",
      "clave": "fármacos antitrombóticos, trombopenia, uremia"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la gravedad y estabiliza (primeros minutos)",
    "detalle": "Monitor, SatO2, TA, FC. Cuantifica el volumen y el ritmo del sangrado. Dos vías de grueso calibre, analítica con hemograma y coagulación, pruebas cruzadas."
   },
   {
    "paso": "Confirma que es hemoptisis verdadera",
    "detalle": "Diferencia de hematemesis (pH ácido, restos alimentarios) y epistaxis. Exploración ORL básica."
   },
   {
    "paso": "Protege la vía aérea en hemoptisis masiva",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sangrado masivo o asfixia → decúbito lateral sobre el pulmón sangrante, aspiración, intubación con tubo ≥8 mm; valorar intubación selectiva del pulmón sano."
     },
     {
      "nivel": "critico",
      "t": "Inestabilidad o Hto <27% → transfusión de hematíes."
     }
    ]
   },
   {
    "paso": "Corrige la coagulación y frena el sangrado",
    "detalle": "Revierte anticoagulación; vitamina K / plasma fresco si coagulopatía. Ácido tranexámico: nebulizado 500 mg/8h o IV. Antitusígeno (codeína) para reducir el esfuerzo tusivo."
   },
   {
    "paso": "Localiza el origen con imagen",
    "detalle": "Radiografía de tórax inicial (normal hasta en 30%). Angio-TC de tórax con contraste para localizar el sangrado y orientar tratamiento; broncoscopia si gross hemoptysis."
   },
   {
    "paso": "Tratamiento definitivo y destino",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Hemorragia amenazante → embolización de arterias bronquiales (de elección), técnicas endoscópicas o cirugía. Ingreso/UCI."
     },
     {
      "t": "Hemoptisis escasa, <40 años, no fumador, radiografía normal → alta con estudio ambulatorio; si riesgo de neoplasia, valorar con neumología antes del alta."
     }
    ]
   }
  ],
  "wikem_titulo": "Hemoptysis"
 },
 "hemorragia_digestiva_alta": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Varices esofagogástricas",
      "clave": "hepatópata conocido, estigmas de hipertensión portal; sangrado masivo, mayor mortalidad",
      "slug": "encefalopatia_hepatica_aguda"
     },
     {
      "dx": "Fístula aortoentérica",
      "clave": "antecedente de aneurisma/prótesis aórtica; hemorragia 'centinela' previa a la masiva",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Rotura esofágica (Boerhaave)",
      "clave": "vómitos, dolor torácico, enfisema subcutáneo; no es sangrado típico pero amenaza vital",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Úlcera péptica gastroduodenal",
      "clave": "causa más frecuente; epigastralgia, AINE/H. pylori; sangrado activo en endoscopia"
     },
     {
      "dx": "Desgarro de Mallory-Weiss",
      "clave": "hematemesis tras vómitos/arcadas repetidas; suele autolimitarse"
     },
     {
      "dx": "Lesión de Dieulafoy / angiodisplasia",
      "clave": "sangrado arterial brusco sin úlcera; diagnóstico endoscópico"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Gastritis / esofagitis erosiva",
      "clave": "sangrado leve, posos de café; AINE, alcohol o reflujo",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Neoplasia gastroesofágica",
      "clave": "síndrome constitucional, anemia crónica; sangrado intermitente"
     },
     {
      "dx": "Falsa HDA (epistaxis deglutida, hemoptisis, dieta)",
      "clave": "sangre de ORL/respiratorio o hierro/bismuto/remolacha; no hay foco digestivo",
      "slug": "hemoptisis"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza (ABC)",
    "detalle": "2 vías de grueso calibre, monitor, O2 si precisa. Cristaloides (SSF/Ringer). Cruza y reserva. Hb seriada, coagulación, urea/creatinina, función hepática."
   },
   {
    "paso": "Transfunde y corrige coagulopatía",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestabilidad o Hb <7 (umbral 8 si cardiopatía) → concentrados de hematíes; objetivo restrictivo Hb 7-9."
     },
     {
      "t": "Revierte anticoagulación: vitamina K, CCP; idarucizumab si dabigatrán. Plaquetas si <50.000 y sangrado activo."
     }
    ]
   },
   {
    "paso": "Inicia tratamiento farmacológico precoz",
    "detalle": "IBP IV en bolo + perfusión (omeprazol/esomeprazol). Procinético (eritromicina o metoclopramida) para vaciar el estómago antes de endoscopia."
   },
   {
    "paso": "Cubre la sospecha de origen varicoso",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Hepatópata → vasoactivo (terlipresina o somatostatina) + ceftriaxona profiláctica precoz."
     }
    ]
   },
   {
    "paso": "Estratifica el riesgo y programa endoscopia",
    "detalle": "Glasgow-Blatchford: ≤1 → bajo riesgo, valorar ambulatorio. Endoscopia digestiva alta diagnóstica y terapéutica en <24 h (urgente <12 h si varices o inestabilidad)."
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso (UCI si inestabilidad o hemorragia varicosa). Alta selectiva solo en bajo riesgo con endoscopia ambulatoria asegurada."
   }
  ],
  "wikem_titulo": "Undifferentiated upper gastrointestinal bleeding"
 },
 "hemorragia_digestiva_media_y_baja": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemorragia digestiva alta enmascarada",
      "clave": "hematoquecia por HDA masiva con tránsito rápido; urea/creatinina >100; descartar SIEMPRE primero",
      "slug": "hemorragia_digestiva_alta"
     },
     {
      "dx": "Fístula aortoentérica",
      "clave": "antecedente de aneurisma o prótesis aórtica; mortalidad casi 100% sin tratar",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Isquemia mesentérica / colitis isquémica",
      "clave": "dolor desproporcionado, acidosis con lactato; anciano con factores vasculares"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Enfermedad diverticular",
      "clave": "causa más frecuente de HDB; rectorragia indolora abundante en anciano"
     },
     {
      "dx": "Angiodisplasia / ectasia vascular",
      "clave": "sangrado recurrente indoloro; anciano, valvulopatía aórtica, insuficiencia renal"
     },
     {
      "dx": "Colitis (infecciosa o EII)",
      "clave": "diarrea sanguinolenta con fiebre, dolor cólico; brote conocido",
      "slug": "enfermedad_inflamatoria_intestinal"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hemorroides / fisura anal",
      "clave": "sangre roja que mancha el papel, al final de la defecación; dolor en fisura"
     },
     {
      "dx": "Neoplasia colorrectal / pólipos",
      "clave": "sangrado intermitente, anemia, cambio del ritmo intestinal; síndrome constitucional"
     },
     {
      "dx": "Divertículo de Meckel",
      "clave": "hemorragia indolora en joven; gammagrafía con pertecnetato"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y descarta origen alto",
    "detalle": "2 vías gruesas, monitor, cristaloides. Tacto rectal e inspección anal. Urea/creatinina >100 o aspirado/SNG con sangre → trata como HDA y haz endoscopia alta."
   },
   {
    "paso": "Calcula el índice de shock y transfunde",
    "sub": [
     {
      "nivel": "critico",
      "t": "Índice de shock >1 (inestable) o Hb <7 (umbral 8 si cardiopatía, objetivo 10) → concentrados de hematíes."
     },
     {
      "t": "Corrige coagulación y plaquetas según fármacos y cifras."
     }
    ]
   },
   {
    "paso": "Dieta absoluta y pruebas",
    "detalle": "NPO ante posible endoscopia/cirugía. CBC con Hb seriada, coagulación, pruebas cruzadas. ECG si riesgo coronario."
   },
   {
    "paso": "Localiza el sangrado según estabilidad",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Inestable → angio-TC urgente; si extravasación → arteriografía + embolización por radiología intervencionista."
     },
     {
      "t": "Estable → colonoscopia (diagnóstica y terapéutica de elección) en 12-24 h, tras preparación."
     }
    ]
   },
   {
    "paso": "Escala a cirugía si fracasa",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hemorragia masiva persistente con estudio negativo o fallo de endoscopia/embolización → laparotomía exploradora."
     }
    ]
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso si inestabilidad, transfusión, comorbilidad o anciano. Alta solo en sangrado leve autolimitado de causa anal/banal con seguimiento."
   }
  ],
  "wikem_titulo": "Undifferentiated lower gastrointestinal bleeding"
 },
 "hemorragia_subaracnoidea_espontanea": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemorragia intracerebral",
      "clave": "focalidad, HTA marcada, deterioro de conciencia; TC",
      "slug": "ictus"
     },
     {
      "dx": "Meningoencefalitis",
      "clave": "fiebre, rigidez de nuca, alteración mental; punción lumbar",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Disección arterial cervical (vertebral/carótida)",
      "clave": "cervicalgia/cefalea, Horner o déficit focal tras esfuerzo cervical",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Trombosis venosa cerebral",
      "clave": "cefalea progresiva, crisis, estado protrombótico/puerperio"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Emergencia hipertensiva / encefalopatía",
      "clave": "TA muy elevada con afectación de órgano diana",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Síndrome de vasoconstricción cerebral reversible (RCVS)",
      "clave": "cefaleas 'en trueno' recurrentes, desencadenantes vasoactivos"
     },
     {
      "dx": "Apoplejía hipofisaria",
      "clave": "cefalea súbita + oftalmoplejía + déficit visual",
      "slug": "apoplejia_hipofisaria"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Migraña",
      "clave": "episodios previos similares, aura, fotofobia; instauración no instantánea",
      "slug": "cefaleas"
     },
     {
      "dx": "Cefalea tensional / en racimos",
      "clave": "patrón conocido, sin signos de alarma",
      "slug": "cefaleas"
     },
     {
      "dx": "Arteritis de la temporal",
      "clave": ">50 años, claudicación mandibular, VSG alta",
      "slug": "perdida_brusca_de_la_vision"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y protege la vía aérea",
    "detalle": "ABC, monitor, O2, vía venosa. Si Glasgow ≤8 → intubación. Reposo, cabecero a 30º, ambiente tranquilo."
   },
   {
    "paso": "Realiza TC craneal urgente sin contraste",
    "sub": [
     {
      "nivel": "critico",
      "t": "TC positiva → confirma HSA, valorar angio-TC y avisar a Neurocirugía/Neurorradiología"
     },
     {
      "t": "TC negativa con alta sospecha (>6 h) → punción lumbar buscando xantocromía"
     }
    ]
   },
   {
    "paso": "Controla la TA para prevenir resangrado",
    "detalle": "Objetivo PAS <160 mmHg con labetalol o urapidil IV; evita hipotensión que comprometa la perfusión."
   },
   {
    "paso": "Trata el dolor y los síntomas",
    "detalle": "Analgesia (paracetamol, metamizol; morfina si precisa), antieméticos (metoclopramida), evitar valsalva con laxantes."
   },
   {
    "paso": "Inicia neuroprotección y profilaxis",
    "detalle": "Nimodipino 60 mg/4 h VO para prevenir vasoespasmo. Profilaxis de crisis si indicado (levetiracetam)."
   },
   {
    "paso": "Vigila y trata complicaciones",
    "detalle": "Resangrado, hidrocefalia (valorar drenaje ventricular), vasoespasmo (días 5-14) e hiponatremia."
   },
   {
    "paso": "Traslada e ingresa",
    "detalle": "Todo HSA aneurismática confirmada → ingreso en UCI y centro con Neurocirugía. HSA descartada (TC + PL negativas) → alta con seguimiento."
   }
  ],
  "wikem_titulo": "Aneurysmal subarachnoid hemorrhage"
 },
 "hipercalcemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Crisis hipercalcémica",
      "clave": "Ca > 14-15 mg/dL; estupor/coma, deshidratación grave, fallo renal y cardíaco"
     },
     {
      "dx": "Hipercalcemia maligna",
      "clave": "neoplasia conocida (pulmón, mama, mieloma, linfoma); síndrome constitucional, instauración rápida"
     },
     {
      "dx": "Toxicidad digitálica potenciada",
      "clave": "paciente digitalizado; la hipercalcemia agrava arritmias por digoxina",
      "slug": "intoxicacion_aguda_por_digitalicos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hiperparatiroidismo primario",
      "clave": "causa ambulatoria más frecuente; PTH alta o inapropiadamente normal; suele crónica/leve"
     },
     {
      "dx": "Intoxicación por vitamina D / síndrome leche-alcalinos",
      "clave": "ingesta de suplementos o antiácidos; PTH suprimida"
     },
     {
      "dx": "Enfermedad granulomatosa (sarcoidosis)",
      "clave": "adenopatías, afectación pulmonar; calcitriol elevado"
     },
     {
      "dx": "Diuréticos tiazídicos / litio",
      "clave": "fármaco causal en la anamnesis; hipercalcemia leve reversible"
     },
     {
      "dx": "Tirotoxicosis",
      "clave": "clínica de hipertiroidismo; recambio óseo aumentado",
      "slug": "crisis_tirotoxica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma la hipercalcemia",
    "detalle": "Calcio total corregido por albúmina (o calcio iónico). Solicita PTH, fósforo, función renal, iones y ECG."
   },
   {
    "paso": "Valora gravedad y repercusión",
    "detalle": "Estima volemia y nivel de conciencia. ECG: QT corto, bradiarritmias, bloqueos. Sospecha crisis si Ca > 14 mg/dL o sintomática."
   },
   {
    "paso": "Hidrata de forma intensiva",
    "detalle": "Suero salino fisiológico 0,9% 200-300 mL/h ajustado a diuresis y función cardíaca; corrige la depleción de volumen (pilar inicial del tratamiento)."
   },
   {
    "paso": "Aumenta la calciuria con precaución",
    "detalle": "Furosemida SOLO tras restaurar volemia y si hay riesgo de sobrecarga; vigila hipopotasemia/hipomagnesemia."
   },
   {
    "paso": "Inhibe la resorción ósea",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Hipercalcemia grave/maligna → calcitonina 4 UI/kg SC/IM cada 12 h (efecto rápido) + bifosfonato IV (ácido zoledrónico 4 mg o pamidronato 60-90 mg, efecto en 2-4 días)."
     },
     {
      "t": "Hipercalcemia por linfoma/granulomatosis/vitamina D → corticoides (prednisona 40-60 mg/día)."
     }
    ]
   },
   {
    "paso": "Considera diálisis",
    "detalle": "Si insuficiencia renal o cardíaca que impide hidratar con seguridad, o hipercalcemia refractaria potencialmente mortal."
   },
   {
    "paso": "Destino",
    "detalle": "Sin cambios ECG → planta. Con cambios ECG → telemetría/monitorización. Crisis hipercalcémica → UCI. Trata la causa de base."
   }
  ],
  "wikem_titulo": "Hypercalcemia"
 },
 "hiperfosfatemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome de lisis tumoral",
      "clave": "neoplasia/quimioterapia reciente; hiperfosfatemia + hipocalcemia + hiperK + hiperuricemia",
      "slug": "hiperpotasemia"
     },
     {
      "dx": "Rabdomiólisis",
      "clave": "orina oscura, CK muy elevada; liberación masiva de fosfato muscular",
      "slug": "rabdomiolisis"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Lesión renal aguda / ERC avanzada",
      "clave": "FG < 30 mL/min; causa más frecuente; descenso de excreción renal",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Hipocalcemia secundaria por precipitación cálcica",
      "clave": "tetania, convulsiones, QT largo por sales de fosfato cálcico",
      "slug": "hipocalcemia"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hipoparatiroidismo / seudohipoparatiroidismo",
      "clave": "PTH baja o resistencia; hiperfosfatemia con hipocalcemia"
     },
     {
      "dx": "Intoxicación por vitamina D",
      "clave": "suplementos; hipercalcemia asociada"
     },
     {
      "dx": "Abuso de laxantes/enemas con fosfato",
      "clave": "anamnesis de fosfosoda; hiperfosfatemia aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y busca la causa",
    "detalle": "Fosfato > 4,5 mg/dL. Solicita Ca, función renal, K, ácido úrico y LDH. Si hipocalcemia + hiperK + hiperuricemia, sospecha lisis tumoral."
   },
   {
    "paso": "Valora repercusión por hipocalcemia",
    "detalle": "ECG (QT largo), signos de Chvostek/Trousseau, convulsiones. Monitoriza si hay síntomas o compromiso vital."
   },
   {
    "paso": "Favorece la eliminación renal si función conservada",
    "sub": [
     {
      "t": "Función renal conservada → hidratación con suero salino fisiológico para forzar fosfaturia; puede asociarse acetazolamida o diurético de asa."
     },
     {
      "nivel": "emergente",
      "t": "Insuficiencia renal grave o hiperfosfatemia con riesgo vital → hemodiálisis."
     }
    ]
   },
   {
    "paso": "Reduce la absorción intestinal",
    "detalle": "Quelantes del fósforo orales con las comidas (carbonato cálcico/sevelámero) en formas crónicas o por aporte digestivo."
   },
   {
    "paso": "Trata la hipocalcemia sintomática",
    "detalle": "Calcio IV solo si tetania/convulsiones/arritmia; precaución por riesgo de calcificación metastásica con producto Ca×P elevado."
   },
   {
    "paso": "Trata la causa de base",
    "detalle": "Protocolo de lisis tumoral (hidratación, rasburicasa/alopurinol), manejo de la LRA o ajuste en ERC."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si hay compromiso de funciones vitales, lisis tumoral o LRA; seguimiento nefrológico en formas crónicas."
   }
  ],
  "wikem_titulo": "Hyperphosphatemia"
 },
 "hipermagnesemia": {
  "ddx": [
   {
    "nivel": "emergente",
    "grupo": "Causa subyacente / emergente",
    "items": [
     {
      "dx": "Insuficiencia renal (aguda o crónica)",
      "clave": "Causa casi obligada; aclaramiento <30 mL/min, incapaz de eliminar el Mg aportado",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Aporte exógeno masivo de magnesio",
      "clave": "Antiácidos, laxantes/enemas con Mg, sales de Epsom, Mg IV (preeclampsia)",
      "slug": null
     },
     {
      "dx": "Cetoacidosis diabética / catabolismo celular",
      "clave": "Salida de Mg intracelular; hiperglucemia, acidosis, deshidratación",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "nivel": "no_emergente",
    "grupo": "Imita la clínica (debilidad / hiporreflexia / bradiarritmia)",
    "items": [
     {
      "dx": "Hiperpotasemia",
      "clave": "Debilidad y cambios ECG similares; T picudas, suele coexistir en el renal",
      "slug": "hiperpotasemia"
     },
     {
      "dx": "Intoxicación por litio",
      "clave": "Temblor, ataxia, alteración mental; antecedente de toma de litio",
      "slug": "intoxicacion_aguda_por_litio"
     },
     {
      "dx": "Botulismo / síndrome de Guillain-Barré",
      "clave": "Parálisis flácida descendente o ascendente, sin trastorno iónico",
      "slug": "botulismo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Suspender de inmediato todo aporte exógeno de magnesio",
    "detalle": "Antiácidos, laxantes, enemas y perfusiones con Mg. Confirmar con Mg sérico (tóxico >3,5 mg/dL)."
   },
   {
    "paso": "Monitorizar y valorar gravedad por ECG y clínica",
    "detalle": "ECG (PR largo, QRS ancho ≥5 mg/dL; BAV completo >15 mg/dL), reflejos osteotendinosos, frecuencia respiratoria, función renal e iones."
   },
   {
    "paso": "Administrar calcio IV urgente si cardiotoxicidad, parálisis o depresión respiratoria",
    "detalle": "Antagoniza la membrana de forma inmediata. Gluconato cálcico 10% 15-30 mL IV en 5 min, o cloruro cálcico 10% 5-10 mL IV (vía central). Repetible.",
    "nivel": "critico"
   },
   {
    "paso": "Forzar la eliminación renal en formas leves-moderadas con función renal conservada",
    "detalle": "SSF IV + furosemida 20-40 mg IV para aumentar la excreción urinaria de Mg; vigilar volemia e iones."
   },
   {
    "paso": "Indicar hemodiálisis en insuficiencia renal grave o Mg muy elevado",
    "sub": [
     {
      "t": "Mg >8 mg/dL, fracaso renal o clínica refractaria → hemodiálisis urgente",
      "nivel": "critico"
     },
     {
      "t": "Inestabilidad hemodinámica → soporte y diálisis sin demora",
      "nivel": "critico"
     }
    ]
   },
   {
    "paso": "Soporte ventilatorio si insuficiencia respiratoria",
    "detalle": "Vigilar Mg >10 mg/dL (apnea); preparar IOT y ventilación mecánica."
   },
   {
    "paso": "Corregir factores que potencian la cardiotoxicidad",
    "detalle": "Tratar hiperpotasemia, acidosis metabólica y revisar la digital concomitante."
   }
  ],
  "wikem_titulo": "Hypermagnesemia"
 },
 "hipernatremia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipernatremia hipovolémica con shock",
      "clave": "deshidratación grave, hipotensión; corrige primero la volemia",
      "slug": "shock"
     },
     {
      "dx": "Hemorragia/trombosis cerebral por contracción encefálica",
      "clave": "focalidad neurológica, hipernatremia aguda grave",
      "slug": "ictus"
     },
     {
      "dx": "Hipernatremia aguda grave (>160 mEq/L)",
      "clave": "alteración del nivel de conciencia, convulsiones, alta mortalidad",
      "slug": "coma"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Diabetes insípida central",
      "clave": "poliuria, orina diluida; responde a desmopresina",
      "slug": "apoplejia_hipofisaria"
     },
     {
      "dx": "Pérdidas digestivas / por el calor",
      "clave": "diarrea, vómitos, golpe de calor, fiebre con pérdida de agua libre",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Diuresis osmótica",
      "clave": "hiperglucemia, manitol, glucosuria; poliuria",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Déficit de acceso al agua",
      "clave": "anciano, demencia, encamado sin acceso a líquidos; mecanismo de la sed ausente",
      "slug": "coma"
     },
     {
      "dx": "Sobrecarga iatrogénica de sodio",
      "clave": "sueros hipertónicos o bicarbonato IV en el ingreso",
      "slug": "alteraciones_del_equilibrio_acidobasico"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y valora gravedad/cronicidad",
    "detalle": "Na >145; estima si es aguda (<48 h, sintomática) o crónica. Monitor y vía si inestable o Na muy elevado."
   },
   {
    "paso": "Valora el estado de volumen y la causa",
    "detalle": "Hipovolémica (pérdidas), euvolémica (DI, pérdidas insensibles) o hipervolémica (aporte de sodio). Excreción fraccional de sodio ayuda a la etiología."
   },
   {
    "paso": "Estabiliza la perfusión primero",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestabilidad/shock hipovolémico → SSF 0,9% hasta corregir el déficit de perfusión, antes de bajar el sodio."
     }
    ]
   },
   {
    "paso": "Calcula y repón el déficit de agua libre",
    "detalle": "Una vez estable, pasa a hipotónico 0,45% o glucosado 5% según vía. Reponer también las pérdidas en curso."
   },
   {
    "paso": "Controla la velocidad de corrección",
    "detalle": "No bajes el Na más de 10-15 mEq/L/día (~0,5-1 mEq/L/h). En hipernatremia grave (>170) controla Na cada 2 h, objetivo no <150 en las primeras 48-72 h. Vigila convulsiones por edema cerebral."
   },
   {
    "paso": "Trata la causa específica",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Diabetes insípida central → desmopresina (DDAVP)."
     },
     {
      "t": "DI nefrogénica → retira el fármaco causal, tiazida/restricción de sodio."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Ajusta a la causa y la gravedad; ingreso en hipernatremia grave, sintomática o sin posibilidad de control hídrico ambulatorio. En pediatría >180 valora diálisis peritoneal."
   }
  ],
  "wikem_titulo": "Hypernatremia"
 },
 "hiperpotasemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Lesión renal aguda / ERC reagudizada",
      "clave": "creatinina elevada, oligoanuria; causa orgánica más frecuente",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Rabdomiólisis",
      "clave": "CK muy alta, mioglobinuria, antecedente de aplastamiento o inmovilización",
      "slug": "rabdomiolisis"
     },
     {
      "dx": "Síndrome de lisis tumoral",
      "clave": "hiperpotasemia + hiperfosfatemia + hiperuricemia tras quimioterapia",
      "slug": "hiperfosfatemia"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "hiperglucemia, acidosis; K plasmático alto con déficit corporal",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Fármacos (IECA, ARA-II, espironolactona)",
      "clave": "causa más frecuente, sobre todo con insuficiencia renal",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Insuficiencia suprarrenal",
      "clave": "hiponatremia + hiperpotasemia + hipotensión",
      "slug": "crisis_addisoniana"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Pseudohiperpotasemia",
      "clave": "muestra hemolizada o torniquete prolongado; repite la analítica",
      "slug": "hematimetria"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "ECG urgente y monitorización",
    "detalle": "Busca T picudas, PR largo, ensanchamiento del QRS y pérdida de onda P. Riesgo vital incluso con ECG normal; cuidado con el signo de Littmann (falso bigeminismo)."
   },
   {
    "paso": "Estabiliza la membrana cardíaca",
    "sub": [
     {
      "nivel": "critico",
      "t": "Cambios ECG o K >7,0 → gluconato cálcico 10% 10 mL IV en 2-3 min, repetible; precaución si toma digoxina."
     }
    ]
   },
   {
    "paso": "Introduce el potasio en la célula",
    "detalle": "Insulina rápida 10 UI IV + glucosado (vigila hipoglucemia); salbutamol nebulizado 10-20 mg; bicarbonato sódico solo si acidosis metabólica significativa."
   },
   {
    "paso": "Elimina potasio del organismo",
    "detalle": "Furosemida si diuresis conservada; resinas de intercambio (poliestireno sulfonato, patiromer, ciclosilicato). Diálisis urgente si fracaso renal o refractariedad."
   },
   {
    "paso": "Confirma y descarta pseudohiperpotasemia",
    "detalle": "Repite el K si el valor es inesperado. BMP con creatinina y bicarbonato, gasometría, y según sospecha CK, ácido úrico, fósforo, cortisol."
   },
   {
    "paso": "Identifica y trata la causa",
    "detalle": "Retira IECA/ARA-II/diuréticos ahorradores; trata la rabdomiólisis, la lisis tumoral o la insuficiencia suprarrenal."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si K >6,0, cambios ECG, fracaso renal o causa activa. UCI si grave (>7,0), cambios ECG o refractaria. Telemetría continua en todo ingresado."
   }
  ],
  "wikem_titulo": "Hyperkalemia"
 },
 "hipocalcemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipocalcemia grave sintomática",
      "clave": "tetania, laringoespasmo, convulsiones, QT largo; Ca < 7,5 mg/dL"
     },
     {
      "dx": "Síndrome de lisis tumoral",
      "clave": "neoplasia/quimioterapia reciente; hiperK + hiperfosfatemia + hiperuricemia + hipoCa"
     },
     {
      "dx": "Hipomagnesemia grave",
      "clave": "bloquea la respuesta al calcio; alcoholismo, diuréticos, malabsorción",
      "slug": "hipomagnesemia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pancreatitis aguda grave",
      "clave": "dolor epigástrico irradiado a espalda; amilasa/lipasa altas; saponificación cálcica",
      "slug": "pancreatitis_aguda"
     },
     {
      "dx": "Sepsis",
      "clave": "fiebre/foco infeccioso, hipotensión; hipocalcemia ionizada frecuente",
      "slug": "sepsis"
     },
     {
      "dx": "Rabdomiólisis",
      "clave": "orina oscura, CK muy elevada; secuestro de calcio en músculo lesionado",
      "slug": "rabdomiolisis"
     },
     {
      "dx": "Transfusión masiva (quelación por citrato)",
      "clave": "politransfundido reciente; hipocalcemia ionizada aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hipoparatiroidismo (postquirúrgico tiroideo)",
      "clave": "cirugía cervical reciente; PTH baja; tetania subaguda"
     },
     {
      "dx": "Déficit de vitamina D",
      "clave": "malnutrición/malabsorción, escasa exposición solar; hipocalcemia crónica leve"
     },
     {
      "dx": "Alcalosis respiratoria por hiperventilación",
      "clave": "crisis de ansiedad, parestesias periorales; Ca total normal, ionizado bajo",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y corrige el calcio",
    "detalle": "Mide calcio total y, si es posible, calcio iónico. Corrige por albúmina: Ca corregido = Ca total + 0,8 × (4 − albúmina g/dL). Solicita Mg, fósforo, función renal, PTH."
   },
   {
    "paso": "Haz ECG y monitoriza",
    "detalle": "Busca QT largo y arritmias. Monitorización continua si hay síntomas o Ca < 7,5 mg/dL."
   },
   {
    "paso": "Decide la vía según gravedad/síntomas",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sintomática (tetania, laringoespasmo, convulsiones, QT largo) o Ca < 7,5 → gluconato cálcico 10% 10-20 mL IV diluido en 100 mL SG5% en 10-20 min, seguido de perfusión."
     },
     {
      "t": "Asintomática/leve → calcio oral (carbonato cálcico 1-2 g/día) + vitamina D (calcitriol 0,25-0,5 µg/día)."
     }
    ]
   },
   {
    "paso": "Corrige la hipomagnesemia en paralelo",
    "detalle": "Si Mg bajo, sulfato de magnesio IV; sin corregir el Mg el calcio no responde."
   },
   {
    "paso": "Trata la causa subyacente",
    "detalle": "Pancreatitis, sepsis, lisis tumoral, hipoparatiroidismo o déficit de vitamina D según corresponda."
   },
   {
    "paso": "Precauciones farmacológicas",
    "detalle": "Cuidado con calcio IV en pacientes digitalizados (riesgo de stone heart): administrar lento y monitorizado. Evita furosemida y fenotiazinas."
   },
   {
    "paso": "Destino",
    "detalle": "Ingresa a todo paciente sintomático o con hipocalcemia grave. Alta con tratamiento oral y seguimiento si es leve/asintomática y reversible."
   }
  ],
  "wikem_titulo": "Hypocalcemia"
 },
 "hipofosfatemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome de realimentación",
      "clave": "reinicio nutricional en desnutrido/alcohólico; caída brusca de fósforo, K y Mg"
     },
     {
      "dx": "Cetoacidosis diabética en tratamiento",
      "clave": "insulina + glucosa desplazan fósforo al interior celular; descenso durante el tratamiento",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Alcalosis respiratoria por hiperventilación",
      "clave": "crisis de ansiedad, sepsis; redistribución intracelular del fósforo",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "Sepsis",
      "clave": "foco infeccioso + hipotensión; hipofosfatemia frecuente",
      "slug": "sepsis"
     },
     {
      "dx": "Síndrome del hueso hambriento",
      "clave": "tras paratiroidectomía; hipocalcemia + hipofosfatemia mantenidas"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Alcoholismo / desnutrición crónica",
      "clave": "baja ingesta y pérdidas; corregir con tiamina y reposición progresiva"
     },
     {
      "dx": "Quelantes / antiácidos con aluminio o magnesio",
      "clave": "fármaco causal; disminuyen la absorción intestinal de fosfato"
     },
     {
      "dx": "Pérdida renal (Fanconi, déficit de vitamina D, diuresis osmótica)",
      "clave": "fosfaturia inapropiada; glucosuria u otros marcadores tubulares"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y clasifica",
    "detalle": "Fosfato sérico: leve 2-2,5 / moderada 1-2 / grave < 1 mg/dL. Descarta seudohipofosfatemia (mieloma, hiperbilirrubinemia, manitol). Solicita Ca, Mg, K y función renal."
   },
   {
    "paso": "Busca síntomas de gravedad",
    "detalle": "Debilidad muscular respiratoria, arritmias, alteración de conciencia, rabdomiólisis o hemólisis; más probables con fósforo < 1,5 mg/dL o descenso rápido."
   },
   {
    "paso": "Decide la vía de reposición",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Grave (< 1 mg/dL) o sintomática → fosfato IV (monosódico/monopotásico) 2,5-5 mg/kg en 6 h, con monitorización."
     },
     {
      "t": "Leve-moderada y vía oral disponible → fosfato oral 1-2 g/día repartido."
     }
    ]
   },
   {
    "paso": "Monitoriza durante la reposición IV",
    "detalle": "Vigila Ca (riesgo de hipocalcemia y calcificación), K y función renal; ECG si arritmias. Evita reposición rápida con fallo renal."
   },
   {
    "paso": "Corrige déficits asociados",
    "detalle": "Repón potasio y magnesio en paralelo; en alcohólicos administra tiamina antes de la glucosa."
   },
   {
    "paso": "Trata la causa y previene",
    "detalle": "En riesgo de realimentación, reintroduce nutrición de forma gradual con suplementación profiláctica de fósforo."
   }
  ],
  "wikem_titulo": "Hypophosphatemia"
 },
 "hipoglucemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis",
      "clave": "fiebre/hipotermia, hipotensión, foco infeccioso; hipoglucemia como signo de gravedad",
      "slug": "sepsis"
     },
     {
      "dx": "Insuficiencia suprarrenal (crisis addisoniana)",
      "clave": "hipotensión, hiponatremia, hiperpotasemia, hiperpigmentación",
      "slug": "crisis_addisoniana"
     },
     {
      "dx": "Fallo hepático fulminante",
      "clave": "ictericia, coagulopatía, encefalopatía",
      "slug": "encefalopatia_hepatica_aguda"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Sobredosis de secretagogos (sulfonilureas/glinidas)",
      "clave": "hipoglucemia prolongada y recurrente; alta sospecha de recaída"
     },
     {
      "dx": "Exceso de insulina exógena",
      "clave": "diabético insulinizado; péptido C suprimido"
     },
     {
      "dx": "Cetoacidosis alcohólica / OH",
      "clave": "consumo de alcohol, ayuno, cetosis; déficit de glucógeno"
     },
     {
      "dx": "Crisis mixedematosa",
      "clave": "hipotermia, bradicardia, alteración de conciencia, hiponatremia",
      "slug": "crisis_mixedematosa"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Insulinoma",
      "clave": "hipoglucemias de ayuno recurrentes; insulina y péptido C elevados (tríada de Whipple)"
     },
     {
      "dx": "Hipoglucemia reactiva/postcirugía (bypass)",
      "clave": "síntomas posprandiales tras cirugía bariátrica/gástrica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma con glucemia capilar",
    "detalle": "Tira reactiva inmediata. Glucemia ≤70 mg/dL con clínica compatible (tríada de Whipple). Extrae muestra venosa si etiología no clara."
   },
   {
    "paso": "Corrige según nivel de conciencia",
    "sub": [
     {
      "t": "consciente y tolera VO → 15-20 g de hidratos rápidos (glucosa pura oral), repite a los 15 min si persiste"
     },
     {
      "nivel": "critico",
      "t": "bajo nivel de conciencia/no tolera VO → glucosa hipertónica 50% 50 mL IV (1 ampolla); reevalúa a los minutos"
     },
     {
      "t": "sin acceso venoso → glucagón 1 mg SC/IM (menos eficaz en hepatópata, desnutrido o alcohólico)"
     }
    ]
   },
   {
    "paso": "Administra tiamina si alcoholismo/desnutrición",
    "detalle": "Tiamina 100 mg IV antes o con la glucosa para prevenir Wernicke."
   },
   {
    "paso": "Mantén aporte y vigila recurrencia",
    "detalle": "Tras revertir, comida con hidratos complejos. Perfusión de glucosa 10% si recurre; vigilancia estrecha de glucemias seriadas."
   },
   {
    "paso": "Busca el desencadenante",
    "detalle": "Diabético con causa clara y no grave: poco estudio. Si grave o causa incierta: bioquímica, función hepática/renal, tóxicos, ECG y estudio de foco infeccioso."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "emergente",
      "t": "sulfonilureas/glinidas, insulina de acción prolongada o causa no aclarada → ingreso/observación prolongada (octreotida en sulfonilureas refractarias)"
     },
     {
      "t": "reversión rápida, causa banal identificada, tolera comida y buen soporte → alta tras ≥4 h de observación sin recurrencia"
     }
    ]
   }
  ],
  "wikem_titulo": "Hypoglycemia"
 },
 "hipomagnesemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Torsades de pointes / arritmia ventricular",
      "clave": "QT largo, síncope arrítmico; Mg IV es el tratamiento de elección",
      "slug": "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
     },
     {
      "dx": "Intoxicación digitálica",
      "clave": "paciente digitalizado; la hipomagnesemia potencia la toxicidad",
      "slug": "intoxicacion_aguda_por_digitalicos"
     },
     {
      "dx": "Crisis convulsivas / tetania",
      "clave": "Mg <1,2 mg/dL, hiperexcitabilidad neuromuscular grave",
      "slug": "crisis_epilepticas"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Hipopotasemia o hipocalcemia refractarias",
      "clave": "no se corrigen sin reponer antes el magnesio",
      "slug": "hipopotasemia"
     },
     {
      "dx": "Pérdidas digestivas (diarrea)",
      "clave": "diarrea prolongada, malabsorción",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Pancreatitis aguda",
      "clave": "dolor abdominal, amilasa/lipasa altas; déficit asociado",
      "slug": "pancreatitis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Alcoholismo / malnutrición",
      "clave": "contexto enólico, déficit nutricional; muy frecuente",
      "slug": "sindrome_de_abstinencia_alcoholica"
     },
     {
      "dx": "Pérdida renal por fármacos (diuréticos)",
      "clave": "furosemida, tiazidas, IBP de uso crónico",
      "slug": "hipopotasemia"
     },
     {
      "dx": "Diabetes mellitus tipo 2 / post-CAD",
      "clave": "diuresis osmótica, déficit acumulado",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Sospecha y confirma",
    "detalle": "Mide el magnesio (Mg <1,8 mg/dL) ante hipopotasemia/hipocalcemia refractarias, torsades o intoxicación digitálica resistente. No está en el perfil básico, pídelo expresamente."
   },
   {
    "paso": "Realiza ECG",
    "detalle": "Busca QT largo, ensanchamiento del QRS y ondas U: marcadores de riesgo arrítmico. Monitoriza si hay clínica cardíaca."
   },
   {
    "paso": "Trata la arritmia grave de inmediato",
    "sub": [
     {
      "nivel": "critico",
      "t": "Torsades/FV/TV → sulfato de magnesio 2 g IV en bolo (1-2 min en parada), repetible."
     }
    ]
   },
   {
    "paso": "Repón según gravedad y síntomas",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Mg <1,2 o sintomático → sulfato de magnesio 4 g IV en 2 h (2 g IV en 1 h si 1,2-1,7 sintomático)."
     },
     {
      "t": "Asintomático con tolerancia oral → magnesio oral (óxido de magnesio 400 mg o lactato de magnesio)."
     }
    ]
   },
   {
    "paso": "Corrige los déficits asociados",
    "detalle": "Repón a la vez potasio, calcio y fósforo; comprueba la función renal antes de dosis altas de Mg para evitar hipermagnesemia."
   },
   {
    "paso": "Trata la causa",
    "detalle": "Suspende o ajusta diuréticos/IBP, trata la diarrea, apoya en el alcoholismo y la malnutrición."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso/monitorización si inestabilidad hemodinámica, arritmia o clínica grave; alta con suplemento oral y control si déficit leve y causa corregible."
   }
  ],
  "wikem_titulo": "Hypomagnesemia"
 },
 "hiponatremia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hiponatremia aguda sintomática (<48 h)",
      "clave": "convulsiones, coma, edema cerebral; precisa salino hipertónico urgente",
      "slug": "crisis_epilepticas"
     },
     {
      "dx": "Insuficiencia suprarrenal / déficit de glucocorticoides",
      "clave": "hipotensión, hiperpotasemia, hipoglucemia asociadas",
      "slug": "crisis_addisoniana"
     },
     {
      "dx": "Hiponatremia hipovolémica por shock/pérdidas",
      "clave": "signos de depleción de volumen, taquicardia, hipotensión",
      "slug": "shock"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "SIADH",
      "clave": "euvolemia, Na urinario >20-40, osmolaridad urinaria alta; descarta fármacos, tumor, neumopatía",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Hiponatremia hipervolémica (ICC, cirrosis, S. nefrótico)",
      "clave": "edemas, ascitis; Na urinario <20",
      "slug": "insuficiencia_cardiaca"
     },
     {
      "dx": "Hipotiroidismo grave",
      "clave": "clínica de hipofunción tiroidea, bradicardia, hipotermia",
      "slug": "crisis_mixedematosa"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Pseudohiponatremia / hiponatremia por hiperglucemia",
      "clave": "corrige 2,4 mEq/L por cada 100 mg/dL de glucosa >100; osmolaridad normal o alta",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Hiponatremia tiazídica",
      "clave": "diurético reciente, euvolemia/hipovolemia leve",
      "slug": "urgencia_hipertensiva"
     },
     {
      "dx": "Polidipsia psicógena / potomanía",
      "clave": "ingesta hídrica masiva, osmolaridad urinaria muy baja",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma y mide la gravedad",
    "detalle": "Repite natremia; clasifica leve (125-135), moderada (115-125), grave (<115 o sintomática). Glucemia para descartar pseudohiponatremia."
   },
   {
    "paso": "Valora síntomas neurológicos",
    "detalle": "Busca confusión, cefalea, vómitos, convulsiones o disminución del nivel de conciencia: marcan la urgencia más que la cifra."
   },
   {
    "paso": "Determina el estado de volumen",
    "detalle": "Hipovolemia, euvolemia o hipervolemia; con osmolaridad plasmática y urinaria y Na urinario. Define el tratamiento."
   },
   {
    "paso": "Trata según síntomas y volemia",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sintomática grave (convulsión/coma) → salino hipertónico 3%: bolo 100-150 mL en 10-20 min, repetible; objetivo subir Na 4-6 mEq/L."
     },
     {
      "nivel": "emergente",
      "t": "Hipovolémica → SSF 0,9%. Hipervolémica → restricción hídrica + furosemida. Euvolémica/SIADH → restricción hídrica ± tolvaptán."
     }
    ]
   },
   {
    "paso": "Controla la velocidad de corrección",
    "detalle": "No superes 8-10 mEq/L en 24 h (6 mEq/L si alto riesgo: alcoholismo, malnutrición, hipopotasemia). Con tolvaptán suspende si sube >5 mEq/L en 8 h."
   },
   {
    "paso": "Vigila la sobrecorrección",
    "detalle": "Controles seriados de natremia cada 2-4 h en formas graves. Si te pasas, frena con suero glucosado 5% ± desmopresina."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si sintomática o Na <125. UCI/área de monitorización estrecha si síntomas graves o corrección con hipertónico."
   }
  ],
  "wikem_titulo": "Hyponatremia"
 },
 "hipopotasemia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Arritmia ventricular / torsades",
      "clave": "QT largo, ondas U, K <2,5; riesgo de FV",
      "slug": "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "K total bajo pese a valor inicial normal/alto; cae con la insulina",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Intoxicación digitálica",
      "clave": "paciente digitalizado; la hipopotasemia potencia la toxicidad",
      "slug": "intoxicacion_aguda_por_digitalicos"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pérdidas digestivas (vómitos, diarrea)",
      "clave": "causa más frecuente; cloro urinario y estado ácido-base orientan",
      "slug": "nauseas_vomitos_y_diarrea"
     },
     {
      "dx": "Hipomagnesemia asociada",
      "clave": "hipopotasemia refractaria a la reposición si no se corrige el Mg",
      "slug": "hipomagnesemia"
     },
     {
      "dx": "Fármacos (diuréticos, salbutamol, insulina)",
      "clave": "anamnesis farmacológica; redistribución o pérdida renal",
      "slug": "ataque_de_asma"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hiperaldosteronismo",
      "clave": "HTA + hipopotasemia + alcalosis metabólica",
      "slug": "urgencia_hipertensiva"
     },
     {
      "dx": "Acidosis tubular renal",
      "clave": "acidosis metabólica hiperclorémica con K bajo",
      "slug": "alteraciones_del_equilibrio_acidobasico"
     },
     {
      "dx": "Parálisis periódica tirotóxica",
      "clave": "varón joven asiático, debilidad aguda, hipertiroidismo",
      "slug": "crisis_tirotoxica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Realiza ECG inmediato",
    "detalle": "Busca ondas U, aplanamiento de T, QT largo y extrasistolia. Imprescindible, sobre todo en cardiopatía o paciente digitalizado."
   },
   {
    "paso": "Confirma y clasifica",
    "detalle": "Leve (3-3,5), moderada (2,5-2,9), grave (<2,5). BMP con bicarbonato, glucosa, creatinina; recuerda el gran déficit corporal que esconde."
   },
   {
    "paso": "Mide el magnesio SIEMPRE",
    "detalle": "La hipopotasemia es refractaria si hay hipomagnesemia. Repón Mg simultáneamente (sulfato de magnesio IV)."
   },
   {
    "paso": "Repón potasio según gravedad y vía",
    "sub": [
     {
      "nivel": "critico",
      "t": "Grave/sintomática o cambios ECG → cloruro potásico IV 10-20 mEq/h por vía central con monitorización; nunca en bolo."
     },
     {
      "nivel": "emergente",
      "t": "Moderada con tolerancia oral → cloruro potásico oral; objetivo K >4,0 (>4,5 si cardiopatía o digital)."
     }
    ]
   },
   {
    "paso": "Identifica y corrige la causa",
    "detalle": "Suspende o ajusta diuréticos, trata vómitos/diarrea, revisa la digoxina; investiga causa endocrina si no se explica."
   },
   {
    "paso": "Monitoriza",
    "detalle": "Telemetría continua si K <3,0 o cambios ECG; controles seriados de potasio durante la reposición."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si K <2,5, sintomática, cambios ECG, arritmia o pérdidas mantenidas. Alta si leve (3,0-3,5), asintomática, causa corregible y ECG normal, con recheck en 24-48 h."
   }
  ],
  "wikem_titulo": "Hypokalemia"
 },
 "ictericia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Colangitis aguda",
      "clave": "tríada de Charcot (fiebre, ictericia, dolor en HCD); pentada con shock y confusión"
     },
     {
      "dx": "Insuficiencia hepática fulminante",
      "clave": "ictericia + encefalopatía + coagulopatía (act. protrombina <50%)",
      "slug": "encefalopatia_hepatica_aguda"
     },
     {
      "dx": "Hepatitis isquémica (hígado de shock)",
      "clave": "transaminasas muy altas tras hipotensión/sepsis",
      "slug": "shock"
     },
     {
      "dx": "HELLP / hígado graso del embarazo",
      "clave": "gestante con HTA, plaquetopenia, hemólisis y citólisis",
      "slug": "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Coledocolitiasis",
      "clave": "causa más frecuente de obstrucción no tumoral; cólico biliar y colestasis"
     },
     {
      "dx": "Colecistitis aguda",
      "clave": "Murphy positivo, fiebre, dolor en HCD"
     },
     {
      "dx": "Hepatitis aguda (vírica/tóxica)",
      "clave": "citólisis marcada; antecedente de fármacos (paracetamol, isoniazida) o virus"
     },
     {
      "dx": "Anemia hemolítica",
      "clave": "hiperbilirrubinemia indirecta, LDH alta, haptoglobina baja, reticulocitosis"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Neoplasia de cabeza de páncreas / colangiocarcinoma",
      "clave": "ictericia progresiva indolora, vesícula de Courvoisier, síndrome constitucional"
     },
     {
      "dx": "Síndrome de Gilbert",
      "clave": "hiperbilirrubinemia indirecta leve con ayuno/estrés; resto normal"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora gravedad y signos de alarma",
    "detalle": "Constantes; busca fiebre con escalofríos (colangitis), encefalopatía, coagulopatía o sangrado. Test de embarazo en mujer fértil."
   },
   {
    "paso": "Caracteriza el patrón bioquímico",
    "detalle": "Bilirrubina total y fraccionada (directa vs indirecta), AST/ALT, fosfatasa alcalina y GGT, albúmina, coagulación. Diferencia colestasis de citólisis y patrón obstructivo de hepatocelular."
   },
   {
    "paso": "Completa el estudio según el patrón",
    "detalle": "Indirecto → hemograma, reticulocitos, LDH, haptoglobina (hemólisis). Directo → ecografía abdominal (de elección; vía biliar dilatada = obstrucción). Añade lipasa, panel de hepatitis y niveles tóxicos (paracetamol) si procede."
   },
   {
    "paso": "Trata la urgencia obstructiva/séptica",
    "sub": [
     {
      "nivel": "critico",
      "t": "Colangitis aguda → antibióticos IV de amplio espectro + drenaje biliar urgente (CPRE)"
     },
     {
      "nivel": "emergente",
      "t": "Coledocolitiasis sin colangitis → ingreso y programar CPRE"
     }
    ]
   },
   {
    "paso": "Maneja la causa hepatocelular",
    "detalle": "Suspende fármacos hepatotóxicos; N-acetilcisteína si intoxicación por paracetamol. Soporte y vigilancia de coagulopatía/encefalopatía en hepatitis grave."
   },
   {
    "paso": "Recuerda el manejo etiológico",
    "detalle": "La hiperbilirrubinemia en sí no requiere tratamiento específico en el adulto; la actitud depende de la enfermedad de base."
   },
   {
    "paso": "Decide destino",
    "detalle": "Colangitis, insuficiencia hepatocelular, coagulopatía o sospecha de neoplasia obstructiva → ingreso. Ictericia indirecta leve (Gilbert) o causa benigna filiada → alta con estudio ambulatorio."
   }
  ],
  "wikem_titulo": "Jaundice"
 },
 "ictus": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemorragia intracraneal / HSA",
      "clave": "cefalea súbita, vómitos, deterioro de conciencia; TC diferencia de isquémico",
      "slug": "hemorragia_subaracnoidea_espontanea"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "glucemia capilar baja; gran imitador de ictus, revierte con glucosa",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Trombosis de senos venosos cerebrales",
      "clave": "cefalea progresiva, crisis, estado protrombótico/puerperio"
     },
     {
      "dx": "Crisis con parálisis de Todd",
      "clave": "déficit postcrítico transitorio tras crisis presenciada",
      "slug": "crisis_epilepticas"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Meningoencefalitis",
      "clave": "fiebre, alteración mental, signos meníngeos",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Hiponatremia / encefalopatía metabólica",
      "clave": "alteración del nivel de conciencia, sin focalidad clara; analítica",
      "slug": "hiponatremia"
     },
     {
      "dx": "Hematoma subdural/epidural",
      "clave": "antecedente traumático, anticoagulación, deterioro fluctuante"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Migraña con aura / complicada",
      "clave": "déficit progresivo, cefalea típica, episodios previos",
      "slug": "cefaleas"
     },
     {
      "dx": "Parálisis de Bell",
      "clave": "paresia facial periférica que afecta frente; sin otra focalidad"
     },
     {
      "dx": "Vértigo periférico / laberintitis",
      "clave": "vértigo aislado con HINTS tranquilizador, sin otros déficits",
      "slug": "vertigo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Activa Código Ictus y registra la hora de inicio",
    "detalle": "Tiempo de última vez visto normal. ABC, O2 si SatO2 <94%, monitor, vía venosa, glucemia capilar inmediata."
   },
   {
    "paso": "Evalúa el déficit y solicita neuroimagen urgente",
    "detalle": "NIHSS y exploración neurológica. TC craneal urgente (puerta-TC mínimo) para diferenciar isquémico de hemorrágico."
   },
   {
    "paso": "Corrige factores que contraindican o agravan",
    "detalle": "Glucemia (corregir si <50 o >400). Si PAS >185 o PAD >105 antes de fibrinólisis → labetalol/urapidil/nicardipino IV."
   },
   {
    "paso": "Decide la estrategia según TC y tiempo",
    "sub": [
     {
      "nivel": "critico",
      "t": "isquémico <4,5 h sin contraindicación → fibrinólisis IV (alteplasa), puerta-aguja <60 min"
     },
     {
      "nivel": "critico",
      "t": "oclusión de gran vaso → activar trombectomía mecánica en centro de referencia"
     },
     {
      "nivel": "critico",
      "t": "hemorrágico → control estricto de TA, revertir anticoagulación y valorar Neurocirugía"
     }
    ]
   },
   {
    "paso": "Vigila complicaciones de la reperfusión",
    "detalle": "Si cefalea súbita, HTA, vómitos o deterioro durante rtPA → detener infusión y TC urgente. Angioedema lingual → manejo de vía aérea."
   },
   {
    "paso": "Medidas generales y prevención",
    "detalle": "Normotermia (paracetamol si fiebre), normoglucemia, posición y profilaxis. AAS solo en isquémico tras descartar hemorragia y fuera de ventana de fibrinólisis."
   },
   {
    "paso": "Ingreso en Unidad de Ictus",
    "detalle": "Ingresar todo ictus agudo/subagudo. AIT: estudio y neuroimagen en <24 h por alto riesgo precoz."
   }
  ],
  "wikem_titulo": "Stroke (main)"
 },
 "infecciones_urinarias_bajas_cistitis_y_uretritis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Pielonefritis / urosepsis",
      "clave": "fiebre >38°C, escalofríos, dolor lumbar, mal estado general; ITU alta, no baja",
      "slug": "pielonefritis_aguda"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Prostatitis aguda (varón)",
      "clave": "fiebre, próstata tensa y dolorosa al tacto rectal, síndrome miccional",
      "slug": "prostatitis_aguda"
     },
     {
      "dx": "Litiasis infectada / cólico",
      "clave": "dolor cólico lumbar, microhematuria; descarta obstrucción",
      "slug": "colico_nefritico"
     },
     {
      "dx": "Enfermedad inflamatoria pélvica (mujer)",
      "clave": "dolor anexial, dolor a la movilización cervical, flujo; descarta ITS"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Uretritis (gonocócica/clamidia)",
      "clave": "disuria con exudado uretral, conducta de riesgo; tratar como ITS",
      "slug": "infecciones_de_transmision_sexual"
     },
     {
      "dx": "Vaginitis / vulvovaginitis",
      "clave": "prurito y leucorrea, disuria externa, sin polaquiuria ni urgencia"
     },
     {
      "dx": "Cistitis intersticial / hematúrica",
      "clave": "clínica recurrente con cultivos negativos o sangrado vesical"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma ITU baja y clasifícala",
    "detalle": "Polaquiuria, disuria, tenesmo, dolor suprapúbico. Tira reactiva (nitritos + leucocituria) basta en cistitis no complicada. Sedimento y urocultivo si complicada, varón, embarazo o recidiva."
   },
   {
    "paso": "Descarta ITU alta y complicaciones",
    "sub": [
     {
      "nivel": "critico",
      "t": "Fiebre, escalofríos o dolor lumbar → reclasifica como pielonefritis: hemograma, hemocultivos y antibiótico sistémico."
     },
     {
      "nivel": "emergente",
      "t": "Varón con clínica → valora prostatitis (tacto rectal) antes de etiquetar de cistitis simple."
     }
    ]
   },
   {
    "paso": "Trata la cistitis no complicada (mujer)",
    "detalle": "Fosfomicina trometamol 3 g VO dosis única, o nitrofurantoína 100 mg/12h 5 días. Evita fluoroquinolonas de primera línea."
   },
   {
    "paso": "Trata la cistitis complicada / varón",
    "detalle": "Cefixima 400 mg/24h o ciprofloxacino 500 mg/12h 7-14 días, según riesgo y resistencias locales. Urocultivo previo siempre."
   },
   {
    "paso": "Trata la uretritis si se sospecha",
    "detalle": "Ceftriaxona 1 g IM dosis única + azitromicina 1 g VO (cobertura gonococo y clamidia). Estudio y tratamiento de pareja."
   },
   {
    "paso": "Control sintomático y destino",
    "detalle": "Fenazopiridina o AINE para la disuria. Alta con tratamiento y revisión por su médico. Ingreso solo si cistitis hemorrágica grave, enfisematosa o absceso uretral."
   }
  ],
  "wikem_titulo": "Acute cystitis"
 },
 "insuficiencia_cardiaca": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor torácico, cambios del ST, troponina; causa precipitante frecuente de IC aguda",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, hipoxia, dolor pleurítico; sobrecarga de VD en eco",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "IY, pulso paradójico, tonos apagados; derrame en eco",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Emergencia hipertensiva",
      "clave": "PAS muy elevada con EAP; mejora al bajar la TA",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Disfunción valvular aguda",
      "clave": "soplo nuevo (insuf. mitral/aórtica), endocarditis o rotura de cuerda"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos productiva, condensación; puede simular o precipitar IC",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "EPOC agudizada",
      "clave": "sibilancias, espiración alargada, hipercapnia; antecedente de tabaquismo",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Sepsis",
      "clave": "foco infeccioso, fiebre, hipotensión; descompensa la IC de base",
      "slug": "sepsis"
     },
     {
      "dx": "Sobrecarga de volumen / fracaso renal",
      "clave": "diálisis omitida, oligoanuria, edemas; BNP elevado por insuficiencia renal",
      "slug": "lesion_renal_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Anemia",
      "clave": "palidez, astenia; descompensa por aumento de demanda. Hemograma"
     },
     {
      "dx": "Tirotoxicosis",
      "clave": "taquicardia, FA, temblor, pérdida de peso; precipitante de IC",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Incumplimiento terapéutico/dietético",
      "clave": "abandono de diuréticos o transgresión salina; causa muy frecuente de descompensación"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora gravedad y estabiliza (ABC)",
    "detalle": "Monitor, TA, SatO2, vía. Sentar al paciente. O2 si SatO2 <90%. Identifica EAP, shock o arritmia con inestabilidad."
   },
   {
    "paso": "Solicita pruebas dirigidas",
    "detalle": "ECG, Rx tórax, hemograma, bioquímica con función renal e iones, troponina y BNP/NT-proBNP. Eco POCUS (líneas B, FEVI, vena cava)."
   },
   {
    "paso": "Trata la congestión",
    "detalle": "Furosemida IV 20-40 mg (o 2,5x la dosis oral habitual si crónica). Vasodilatadores (nitroglicerina) si TA conservada y congestión marcada."
   },
   {
    "paso": "Adapta según el perfil hemodinámico",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hipotensión/hipoperfusión (shock cardiogénico) → inotropos (dobutamina), valora noradrenalina y UCI."
     },
     {
      "nivel": "emergente",
      "t": "PAS elevada con EAP → vasodilatadores IV precoces y VNI (CPAP)."
     },
     {
      "t": "Normotenso congestivo → diurético IV y optimización oral."
     }
    ]
   },
   {
    "paso": "Busca y trata el factor precipitante",
    "detalle": "SCA, arritmia (FA rápida → control de frecuencia/cardioversión si inestable), infección, anemia, incumplimiento, crisis hipertensiva."
   },
   {
    "paso": "Optimiza el tratamiento de base",
    "detalle": "En IC-FEr reintroduce/ajusta cuádruple terapia: betabloqueante, ARM, INRA (sacubitril-valsartán) e iSGLT2 cuando esté estable."
   },
   {
    "paso": "Decide el destino",
    "detalle": "UCI/coronaria si inestabilidad o EAP refractario. Planta si descompensación que cede. Alta solo si estable, sin congestión y con seguimiento."
   }
  ],
  "wikem_titulo": "Congestive heart failure"
 },
 "intoxicacion_aguda_por_antidepresivos_ciclicos": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Intoxicación por otros bloqueadores de canales de sodio",
      "clave": "antiarrítmicos Ia/Ic, carbamazepina, difenhidramina; QRS ancho, mismo tratamiento con bicarbonato"
     },
     {
      "dx": "Intoxicación por cocaína",
      "clave": "QRS ancho con simpaticomimético: HTA, taquicardia, agitación, dolor torácico",
      "slug": "intoxicacion_aguda_por_cocaina"
     },
     {
      "dx": "Otras causas de taquicardia de complejo ancho",
      "clave": "TV vs taquicardia supraventricular aberrada; valora hiperpotasemia y SCA"
     },
     {
      "dx": "Síndrome serotoninérgico",
      "clave": "si coingesta de serotoninérgicos: clonus, hiperreflexia, hipertermia, agitación"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Toxicidad anticolinérgica",
      "clave": "midriasis, piel seca y caliente, retención urinaria, delirium; sin QRS ancho",
      "slug": "intoxicacion_aguda_por_anticolinergicos_y_antihistaminicos"
     },
     {
      "dx": "Intoxicación mixta / coingesta",
      "clave": "frecuente; cribar paracetamol y salicilatos siempre"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y monitoriza (primeros minutos)",
    "detalle": "Monitor ECG continuo, TA, SatO2; dos vías. Vía aérea si bajo nivel de conciencia. ECG de 12 derivaciones INMEDIATO y repetido cada 15-30 min las primeras 2 h."
   },
   {
    "paso": "Valora el riesgo por el ECG",
    "sub": [
     {
      "nivel": "critico",
      "t": "QRS >0,16 s u onda R en aVR >3 mm → alto riesgo de arritmia ventricular: alcaliniza ya"
     },
     {
      "nivel": "emergente",
      "t": "QRS >0,10 s o QTc >0,40 s → alto riesgo de convulsiones: monitoriza y prepara bicarbonato"
     }
    ]
   },
   {
    "paso": "Alcaliniza con bicarbonato sódico",
    "detalle": "Bicarbonato 1 M 1-2 mEq/kg IV en bolo si QRS >0,10 s, hipotensión o arritmia; repite hasta estrechar QRS. Objetivo pH 7,45-7,55."
   },
   {
    "paso": "Descontaminación digestiva",
    "detalle": "Carbón activado 1 g/kg si vía aérea protegida y <2 h desde ingesta (absorción lenta). Lavado orogástrico solo en ingesta masiva muy reciente."
   },
   {
    "paso": "Trata complicaciones",
    "sub": [
     {
      "t": "Hipotensión refractaria → cristaloides, luego noradrenalina; emulsión lipídica al 20% 1,5 mL/kg si shock o PCR refractarios"
     },
     {
      "nivel": "emergente",
      "t": "Convulsiones → benzodiacepinas (midazolam); evita fenitoína"
     },
     {
      "t": "Corrige hipopotasemia e hipoxia (empeoran la cardiotoxicidad)"
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "UCI si QRS ancho, arritmia, convulsión, hipotensión o alteración de conciencia. Cama monitorizada y alta si asintomático con ECG normal (QRS <100 ms) tras 6 h. Valoración psiquiátrica tras estabilización médica."
   }
  ],
  "wikem_titulo": "Tricyclic antidepressant toxicity"
 },
 "intoxicacion_aguda_por_benzodiacepinas_e_hipnoticos_no_benzo": {
  "ddx": [
   {
    "nivel": "critico",
    "grupo": "Crítico · depresión SNC tratable de otro modo",
    "items": [
     {
      "dx": "Intoxicación por opiáceos",
      "clave": "Miosis puntiforme + depresión respiratoria; responde a naloxona",
      "slug": "intoxicacion_aguda_por_opiaceos_y_derivados"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "Coma reversible; glucemia capilar baja, descartar siempre primero",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Alcoholes tóxicos (metanol, etilenglicol)",
      "clave": "Acidosis con anion gap y gap osmolar; visión borrosa / fracaso renal",
      "slug": null
     }
    ]
   },
   {
    "nivel": "emergente",
    "grupo": "Emergente · otros sedantes-hipnóticos",
    "items": [
     {
      "dx": "Barbitúricos",
      "clave": "Sedación profunda, hipotensión, ampollas cutáneas, hipotermia",
      "slug": null
     },
     {
      "dx": "GHB / baclofeno",
      "clave": "Coma con despertar brusco fluctuante; bradicardia, recuperación rápida",
      "slug": null
     },
     {
      "dx": "Intoxicación etílica aguda",
      "clave": "Aliento enólico, ataxia, disartria; etanolemia elevada",
      "slug": "intoxicacion_etilica_aguda_cetoacidosis_alcoholica_encefalop"
     }
    ]
   },
   {
    "nivel": "no_emergente",
    "grupo": "No emergente",
    "items": [
     {
      "dx": "Estado postcrítico",
      "clave": "Somnolencia tras crisis comicial presenciada, recuperación progresiva",
      "slug": "crisis_epilepticas"
     },
     {
      "dx": "Hipnóticos Z (zolpidem, zopiclona)",
      "clave": "Clínica más leve y breve que benzodiacepinas; UDS de BZD negativo",
      "slug": null
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Asegurar ABC: la prioridad es la vía aérea y la ventilación",
    "detalle": "O2, monitorización, glucemia capilar inmediata. Soporte ventilatorio si hipoventilación; IOT y ventilación mecánica si depresión respiratoria refractaria."
   },
   {
    "paso": "Considerar descontaminación digestiva si ingesta reciente y vía aérea protegida",
    "detalle": "Carbón activado dosis única (1 g/kg) solo si <1-2 h y consciente/protegido; no inducir emesis. No en disminución de conciencia sin aislar la vía aérea."
   },
   {
    "paso": "Solicitar estudio dirigido a la co-intoxicación",
    "detalle": "Tóxicos en orina (recordar que lorazepam, clonazepam y midazolam dan falsos negativos), paracetamol y salicilatos, ECG (QT) y gasometría si depresión respiratoria."
   },
   {
    "paso": "Usar flumazenilo con cautela y de forma muy seleccionada",
    "detalle": "Flumazenilo 0,3 mg IV en 30 s, repetir 0,3 mg/min hasta despertar (máx. 2 mg); si reaparece sedación, perfusión 0,1-0,4 mg/h."
   },
   {
    "paso": "NO administrar flumazenilo si hay riesgo convulsivo o de arritmia",
    "sub": [
     {
      "t": "Sospecha de co-ingesta de antidepresivos tricíclicos o proconvulsivantes, dependencia crónica de BZD o epilepsia → NO dar flumazenilo (riesgo de convulsiones)",
      "nivel": "emergente"
     },
     {
      "t": "QRS ancho o antecedente convulsivo → manejo de soporte sin antagonista",
      "nivel": "emergente"
     }
    ]
   },
   {
    "paso": "Tratamiento de soporte como base del manejo",
    "detalle": "Sueroterapia, posición de seguridad, vigilar broncoaspiración; la mayoría se recupera solo con soporte."
   },
   {
    "paso": "Observación y disposición",
    "detalle": "Vigilancia mínima 6 h; alta si asintomático y sin co-intoxicación. Valoración psiquiátrica si gesto autolítico."
   }
  ],
  "wikem_titulo": "Benzodiazepine toxicity"
 },
 "intoxicacion_aguda_por_cocaina": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo por cocaína",
      "clave": "dolor torácico, vasoespasmo/trombosis; SCA incluso en jóvenes sin factores de riesgo",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor desgarrante irradiado a espalda, asimetría de pulsos/TA; favorecida por HTA grave",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Ictus isquémico o hemorrágico",
      "clave": "focalidad neurológica o alteración persistente de conciencia",
      "slug": "ictus"
     },
     {
      "dx": "Hipertermia con rabdomiólisis",
      "clave": "agitación, hipertermia, CK elevada, fracaso renal; alto riesgo de muerte",
      "slug": "rabdomiolisis"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Otros simpaticomiméticos (anfetaminas, MDMA, catinonas)",
      "clave": "toxíndrome idéntico; orientar por anamnesis",
      "slug": "intoxicacion_aguda_por_anfetaminas_y_drogas_de_diseno"
     },
     {
      "dx": "Body packer/stuffer",
      "clave": "síndrome adrenérgico grave u obstrucción intestinal; convulsiones refractarias"
     },
     {
      "dx": "Síndrome anticolinérgico",
      "clave": "piel seca y caliente (vs. sudoración en cocaína), retención urinaria"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Crisis de ansiedad / abstinencia",
      "clave": "taquicardia y agitación sin hipertermia ni datos de daño orgánico"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Monitoriza y estabiliza",
    "detalle": "Monitor ECG, TA, SatO2, temperatura. Vía venosa y sueroterapia (depleción hidrosalina frecuente). Glucemia capilar. O2 si hipoxemia."
   },
   {
    "paso": "Sedación con benzodiacepinas como pilar",
    "detalle": "Diazepam 5-10 mg IV o lorazepam 2 mg IV cada 5 min según agitación. Evita haloperidol (baja umbral convulsivo, arritmias, hipertermia). NUNCA contención física sin sedación."
   },
   {
    "paso": "Trata la urgencia hipertensiva sin betabloqueantes",
    "sub": [
     {
      "nivel": "emergente",
      "t": "HTA grave → benzodiacepinas y fentolamina 2,5-5 mg IV (o nitroprusiato/nitroglicerina). Betabloqueantes CONTRAINDICADOS (HTA paradójica)."
     }
    ]
   },
   {
    "paso": "Maneja el dolor torácico como SCA",
    "detalle": "ECG seriado, troponina. AAS, nitroglicerina y benzodiacepinas; fentolamina si vasoespasmo. ICP si SCACEST."
   },
   {
    "paso": "Corrige las arritmias y el QRS ancho",
    "sub": [
     {
      "nivel": "critico",
      "t": "QRS ancho/hipotensión → bicarbonato sódico 1 M IV en bolo."
     }
    ]
   },
   {
    "paso": "Enfría la hipertermia y trata rabdomiólisis",
    "detalle": "Enfriamiento activo agresivo si Tª elevada; sueroterapia abundante, vigilar CK y función renal. Sedación profunda."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Disfunción orgánica (isquemia, ICC, rabdomiólisis) o body packer sintomático → ingreso/UCI; valorar cirugía."
     },
     {
      "t": "Sin complicaciones tras observación → alta; valoración psiquiátrica/deshabituación."
     }
    ]
   }
  ],
  "wikem_titulo": "Cocaine toxicity"
 },
 "intoxicacion_aguda_por_digitalicos": {
  "ddx": [
   {
    "nivel": "critico",
    "grupo": "Crítico · bradiarritmia / arritmia con shock",
    "items": [
     {
      "dx": "Intoxicación por betabloqueantes o antagonistas del calcio",
      "clave": "Bradicardia e hipotensión; verapamilo/diltiazem además vasodilatan, glucemia útil para diferenciar",
      "slug": "intoxicacion_aguda_por_bloqueadores"
     },
     {
      "dx": "Hiperpotasemia",
      "clave": "Ondas T picudas, QRS ancho, bradicardia; marcador de gravedad en la propia digital",
      "slug": "hiperpotasemia"
     },
     {
      "dx": "Síndrome coronario agudo / bloqueo AV isquémico",
      "clave": "Dolor torácico, cambios ST dinámicos, troponina elevada",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "nivel": "no_emergente",
    "grupo": "Otras causas / imitadores",
    "items": [
     {
      "dx": "Intoxicación por glucósidos vegetales (adelfa, dedalera)",
      "clave": "Misma clínica que digoxina; antecedente de ingesta de plantas, digoxinemia puede ser detectable",
      "slug": null
     },
     {
      "dx": "Enfermedad del nodo sinusal / bloqueo AV intrínseco",
      "clave": "Bradiarritmia crónica sin niveles tóxicos ni clínica digestiva/visual",
      "slug": null
     },
     {
      "dx": "TV bidireccional de otra causa (aconitina, TV catecolaminérgica)",
      "clave": "Eje QRS alternante sin contexto digitálico",
      "slug": null
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Monitorización continua y ECG urgente",
    "detalle": "Telemetría mínimo 12-24 h. La toxicidad ES arritmia (cualquier tipo); el 'efecto digital' (ST en cubeta) NO es tóxico. Vía venosa, O2."
   },
   {
    "paso": "Solicitar digoxinemia e iones clave",
    "detalle": "Digoxinemia ≥6 h tras la última dosis (terapéutica 0,8-2 ng/mL). BMP: potasio (crítico), creatinina, magnesio y calcio. Tras Fab los niveles dejan de ser útiles."
   },
   {
    "paso": "Corregir alteraciones iónicas que potencian la toxicidad",
    "sub": [
     {
      "t": "Hipopotasemia → reponer KCl IV con monitorización (la hipoK agrava la toxicidad)",
      "nivel": "emergente"
     },
     {
      "t": "Hipomagnesemia → sulfato de magnesio IV",
      "nivel": "emergente"
     },
     {
      "t": "Hiperpotasemia en intoxicación digitálica → tratar; EVITAR calcio IV (riesgo de 'corazón de piedra'), priorizar Fab",
      "nivel": "critico"
     }
    ]
   },
   {
    "paso": "Administrar anticuerpos antidigital (fragmentos Fab) si riesgo vital",
    "detalle": "Indicaciones: arritmia ventricular grave, bradiarritmia refractaria a atropina, K >5 mEq/L con toxicidad, parada cardíaca o digoxinemia ≥10 ng/mL. Empírico inestable: 10-20 viales. Por nivel: viales = (digoxinemia ng/mL × peso kg) / 100. Por dosis ingerida: viales = mg ingeridos × 0,8 / 0,5.",
    "nivel": "critico"
   },
   {
    "paso": "Tratar la bradiarritmia mientras se prepara el Fab",
    "detalle": "Atropina 0,5-1 mg IV (puede repetirse). Marcapasos transcutáneo/transvenoso con cautela (riesgo de arritmia ventricular); evitar isoproterenol."
   },
   {
    "paso": "Tratar la taquiarritmia ventricular",
    "detalle": "Fab es de elección. Coadyuvantes: lidocaína o fenitoína; sulfato de Mg. Evitar antiarrítmicos clase IA (quinidina) y la cardioversión salvo inestabilidad (riesgo de FV refractaria)."
   },
   {
    "paso": "Descontaminación y disposición",
    "detalle": "Carbón activado en dosis múltiples si ingesta reciente y vía protegida (la hemodiálisis NO elimina digoxina). Ingreso monitorizado; UCI si arritmia, inestabilidad o administración de Fab."
   }
  ],
  "wikem_titulo": "Digoxin toxicity"
 },
 "intoxicacion_aguda_por_litio": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome serotoninérgico",
      "clave": "hipertermia, clonus, hiperreflexia, agitación; fármacos serotoninérgicos"
     },
     {
      "dx": "Síndrome neuroléptico maligno",
      "clave": "rigidez en tubo de plomo, hipertermia, CK alta; neurolépticos"
     },
     {
      "dx": "Crisis tirotóxica",
      "clave": "hipertermia, taquiarritmia, agitación; bocio, exoftalmos",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Lesión estructural del SNC",
      "clave": "focalidad neurológica; descartar con TC si dudas"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Otras intoxicaciones por metales pesados",
      "clave": "clínica neurológica/GI; antecedente de exposición"
     },
     {
      "dx": "Uremia",
      "clave": "alteración mental, asterixis, función renal muy alterada"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Intoxicación etílica o por sedantes-hipnóticos",
      "clave": "depresión del SNC con constantes estables; anamnesis",
      "slug": "intoxicacion_etilica_aguda_cetoacidosis_alcoholica_encefalop"
     },
     {
      "dx": "Hipotiroidismo",
      "clave": "litio crónico → hipotiroidismo; bradipsiquia, TSH alta"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y monitoriza",
    "detalle": "ABCDE, monitor ECG (QT, bradicardia, patrón Brugada), vía venosa. Valora si intoxicación aguda, aguda sobre crónica o crónica (la crónica es más grave a igual litemia)."
   },
   {
    "paso": "Hidratación con suero salino isotónico",
    "detalle": "Repón volumen con SSF 0,9%: restaura la natremia y la perfusión renal, principal vía de eliminación. Corrige la depleción de sodio/agua que aumenta la reabsorción de litio."
   },
   {
    "paso": "Descontaminación digestiva",
    "detalle": "El carbón activado NO adsorbe litio. En preparados de liberación retardada/litemia ascendente: irrigación intestinal total con polietilenglicol (único método con beneficio demostrado)."
   },
   {
    "paso": "Solicita pruebas y litemias seriadas",
    "detalle": "Litemia cada 2-4 h (NO tubo con litio-heparina). Función renal, sodio, calcio, TSH, ECG, paracetamol y salicilatos. Recuerda el rebote a las 6-8 h tras hemodiálisis."
   },
   {
    "paso": "Indica hemodiálisis si criterios",
    "sub": [
     {
      "nivel": "critico",
      "t": "Disfunción neurológica (confusión, convulsiones), hipertermia, arritmias graves o litemia >4-5 mEq/L → hemodiálisis urgente."
     },
     {
      "nivel": "emergente",
      "t": "Fracaso renal o litemia >4 mEq/L con clínica → rebaja el umbral de diálisis."
     }
    ]
   },
   {
    "paso": "Evita fármacos que aumentan la litemia",
    "detalle": "Suspende tiazidas, AINE, IECA/ARA-II. Trata las convulsiones con benzodiacepinas (midazolam)."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Síntomas neurológicos, litemia >1,5 mEq/L, liberación retardada o necesidad de diálisis → ingreso."
     },
     {
      "t": "Asintomático tras 4-6 h con dos litemias en descenso y función renal estable → alta; valoración psiquiátrica si intencionada."
     }
    ]
   }
  ],
  "wikem_titulo": "Lithium toxicity"
 },
 "intoxicacion_aguda_por_opiaceos_y_derivados": {
  "ddx": [
   {
    "nivel": "critico",
    "grupo": "Crítico · coma con depresión respiratoria",
    "items": [
     {
      "dx": "Hipoglucemia",
      "clave": "Coma reversible; glucemia capilar baja, descartar de entrada",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Intoxicación por benzodiacepinas / sedantes",
      "clave": "Depresión SNC pero pupilas normales y respiración menos deprimida; sin respuesta a naloxona",
      "slug": "intoxicacion_aguda_por_benzodiacepinas_e_hipnoticos_no_benzo"
     },
     {
      "dx": "Hemorragia protuberancial / ictus",
      "clave": "Miosis bilateral + coma pero focalidad neurológica, NO responde a naloxona",
      "slug": "ictus"
     }
    ]
   },
   {
    "nivel": "emergente",
    "grupo": "Emergente · imitan la miosis o el coma",
    "items": [
     {
      "dx": "Intoxicación por clonidina",
      "clave": "Miosis, bradicardia, hipotensión, depresión SNC; respuesta parcial/escasa a naloxona",
      "slug": null
     },
     {
      "dx": "Intoxicación por organofosforados",
      "clave": "Miosis + síndrome colinérgico (sialorrea, broncorrea, fasciculaciones)",
      "slug": "intoxicacion_aguda_por_insecticidas_organofosforados_carbama"
     },
     {
      "dx": "Intoxicación por CO",
      "clave": "Cefalea, coma, contexto de inhalación; carboxihemoglobina elevada",
      "slug": null
     }
    ]
   },
   {
    "nivel": "no_emergente",
    "grupo": "No emergente",
    "items": [
     {
      "dx": "Estado postcrítico",
      "clave": "Somnolencia tras crisis presenciada, sin miosis puntiforme, recuperación progresiva",
      "slug": "crisis_epilepticas"
     },
     {
      "dx": "Intoxicación por xilacina",
      "clave": "Sedación que NO responde a naloxona en consumidor de opioides adulterados",
      "slug": null
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Asegurar ABC: ventilar primero, antídoto después",
    "detalle": "Apertura de vía aérea, ventilar con bolsa-mascarilla y O2; la causa de muerte es la parada respiratoria. Monitorización y glucemia capilar inmediata."
   },
   {
    "paso": "Administrar naloxona titulada según la depresión respiratoria",
    "detalle": "0,04-0,4 mg IV (IM/SC/intranasal si no hay vía), repetir cada 2-3 min doblando dosis hasta FR >10-12 rpm. Objetivo: ventilación adecuada, no plena consciencia (evitar abstinencia)."
   },
   {
    "paso": "Iniciar perfusión continua de naloxona si reaparece la depresión",
    "detalle": "Frecuente con opioides de vida media larga (metadona, buprenorfina, liberación prolongada). Perfusión horaria = 2/3 de la dosis de bolo eficaz/h, ajustando a la respuesta."
   },
   {
    "paso": "Reevaluar si NO hay respuesta a naloxona",
    "sub": [
     {
      "t": "Sin respuesta tras dosis total de 10 mg → replantear diagnóstico, buscar co-intoxicación o causa no opioide (xilacina, clonidina)",
      "nivel": "emergente"
     },
     {
      "t": "Coma persistente → IOT y ventilación mecánica",
      "nivel": "critico"
     }
    ]
   },
   {
    "paso": "Buscar y tratar complicaciones y toxicidades específicas",
    "sub": [
     {
      "t": "Convulsiones (meperidina, tramadol, tapentadol) → benzodiacepina IV (lorazepam)",
      "nivel": "emergente"
     },
     {
      "t": "QT largo / torsades (metadona, loperamida) → sulfato de magnesio IV, corregir iones",
      "nivel": "emergente"
     },
     {
      "t": "Edema agudo de pulmón no cardiogénico → O2 y soporte ventilatorio",
      "nivel": "emergente"
     }
    ]
   },
   {
    "paso": "Estudio dirigido a la co-ingesta",
    "detalle": "Clínico de base; UDS (fentanilo y sintéticos no se detectan). Si sospecha de co-intoxicación: paracetamol, salicilatos, ECG, Rx tórax, gasometría y CK si inmovilización prolongada."
   },
   {
    "paso": "Observación y disposición",
    "detalle": "Vigilar mínimo 4-6 h tras la última dosis de naloxona (más con opioides de acción prolongada). UCI si perfusión de naloxona, ventilación mecánica o inestabilidad. Valoración psiquiátrica si gesto autolítico."
   }
  ],
  "wikem_titulo": "Opioid toxicity"
 },
 "intoxicacion_aguda_por_paracetamol": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hepatitis isquémica (hígado de shock)",
      "clave": "transaminasas masivamente elevadas tras hipotensión/shock"
     },
     {
      "dx": "Intoxicación por Amanita phalloides",
      "clave": "diarrea coleriforme tardía tras ingesta de setas, fallo hepático a los días",
      "slug": "intoxicacion_aguda_por_setas"
     },
     {
      "dx": "Intoxicación por salicilatos (coingesta)",
      "clave": "taquipnea, acidosis con anion gap, tinnitus; cribar siempre",
      "slug": "intoxicacion_aguda_por_salicilatos_y_otros_antiinflamatorios"
     },
     {
      "dx": "Insuficiencia hepática aguda de otra causa",
      "clave": "coagulopatía y encefalopatía; valorar criterios de trasplante"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Hepatitis alcohólica",
      "clave": "consumo crónico, AST/ALT >2:1, ictericia"
     },
     {
      "dx": "Hepatitis vírica",
      "clave": "pródromos, factores de riesgo, serologías positivas"
     },
     {
      "dx": "Hepatotoxicidad por otros fármacos",
      "clave": "anamnesis farmacológica; descartar coingestas"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Enfermedad de Wilson (presentación aguda)",
      "clave": "joven, hemólisis con Coombs negativo, anillos de Kayser-Fleischer"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Anamnesis y estratificación temporal",
    "detalle": "Determina dosis (tóxica >125 mg/kg), hora de ingesta, ingesta única o escalonada y factores de riesgo (alcoholismo, malnutrición, inductores P450). Vía venosa."
   },
   {
    "paso": "Descontaminación si procede",
    "detalle": "Carbón activado 1 g/kg si ingesta <1-2 h y vía aérea protegida. No retrasa ni contraindica la NAC."
   },
   {
    "paso": "Determina paracetamolemia y aplica el nomograma",
    "sub": [
     {
      "t": "Extrae nivel a las 4 h post-ingesta (o ya, si >4 h) y representa en el nomograma de Rumack-Matthew."
     },
     {
      "nivel": "emergente",
      "t": "Por encima de la línea de tratamiento, ingesta escalonada o tiempo incierto → inicia NAC."
     }
    ]
   },
   {
    "paso": "Inicia N-acetilcisteína precozmente",
    "detalle": "Máxima eficacia <8 h; no la retrases esperando niveles si la ingesta es de riesgo. Pauta IV (p. ej. 150 mg/kg en 1 h, luego 50 mg/kg/4 h y 100 mg/kg/16 h) o protocolo local. Antiemético (ondansetrón) si vómitos."
   },
   {
    "paso": "Solicita analítica completa y reevalúa",
    "detalle": "AST/ALT, INR/TP (mejor marcador pronóstico), creatinina, bicarbonato, glucosa, lactato, fósforo, gasometría, salicilatos. Cualquier elevación de transaminasas obliga a NAC."
   },
   {
    "paso": "Identifica fallo hepático y criterios de trasplante",
    "sub": [
     {
      "nivel": "critico",
      "t": "Encefalopatía III-IV con pH <7,30 o lactato >3, INR >7 o TP >100 s, creatinina >3,3 → contacta con unidad de trasplante."
     },
     {
      "nivel": "critico",
      "t": "Paracetamolemia >700 µg/mL con fallo renal, coma y acidosis → hemodiálisis."
     }
    ]
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Fallo hepático (coagulopatía, encefalopatía, acidosis, fracaso renal) → UCI."
     },
     {
      "t": "Nivel bajo el umbral a ≥4 h con AST/ALT, INR y creatinina normales → alta tras observación; valoración psiquiátrica si intencionada."
     }
    ]
   }
  ],
  "wikem_titulo": "Acetaminophen toxicity"
 },
 "intoxicacion_aguda_por_salicilatos_y_otros_antiinflamatorios": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis",
      "clave": "taquipnea, acidosis metabólica y alteración del estado mental similares; buscar foco",
      "slug": "sepsis"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "acidosis con anion gap, hiperglucemia, cetonuria",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Intoxicación por metanol/etilenglicol",
      "clave": "anion y osmolar gap altos; visión borrosa (metanol), cristaluria (glicol)"
     },
     {
      "dx": "Intoxicación por paracetamol (coingesta)",
      "clave": "frecuente coingesta; cribar niveles siempre",
      "slug": "intoxicacion_aguda_por_paracetamol"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Intoxicación por teofilina",
      "clave": "vómitos, taquicardia, convulsiones, acidosis; rasgos solapados"
     },
     {
      "dx": "Intoxicación por hierro",
      "clave": "vómitos/diarrea, acidosis, radiopacos en abdomen, hipotensión"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Otras acidosis con anion gap (MUDPILES)",
      "clave": "uremia, acidosis láctica; orientar por contexto y analítica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y monitoriza",
    "detalle": "ABCDE, vía venosa, monitor. Sueroterapia para corregir depleción. Glucemia capilar (puede haber neuroglucopenia con glucemia sérica normal: dar glucosa si clínica neurológica)."
   },
   {
    "paso": "Descontaminación si procede",
    "detalle": "Carbón activado 1 g/kg si ingesta reciente y vía aérea protegida; valorar dosis repetidas. Considerar bezoar o comprimidos con cubierta entérica (absorción retardada)."
   },
   {
    "paso": "Solicita pruebas y niveles seriados",
    "detalle": "Salicilemia (tóxico >30 mg/dL, grave >90) repetida cada 2 h hasta descenso claro. Gasometría, iones, anion gap, glucosa, función renal/hepática, lactato, paracetamol."
   },
   {
    "paso": "Alcaliniza con bicarbonato sódico",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Acidemia/niveles tóxicos → bicarbonato sódico IV (bolo + perfusión) para pH urinario 7,5-8 y pH sérico ~7,45-7,55; favorece eliminación renal."
     }
    ]
   },
   {
    "paso": "Repón potasio y evita la intubación innecesaria",
    "detalle": "Mantén potasio normal (imprescindible para alcalinizar la orina). Evita intubar salvo necesidad: la hipoventilación empeora la acidosis y dispara la toxicidad al SNC."
   },
   {
    "paso": "Indica hemodiálisis si criterios de gravedad",
    "sub": [
     {
      "nivel": "critico",
      "t": "Nivel >90-100 mg/dL, acidosis refractaria, alteración del SNC, edema pulmonar o fracaso renal → hemodiálisis urgente."
     }
    ]
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Nivel >50 mg/dL, acidemia, alteración mental, edema pulmonar o fallo renal → UCI."
     },
     {
      "t": "Toxicidad moderada con niveles en descenso → cama monitorizada; valoración psiquiátrica si intencionada."
     }
    ]
   }
  ],
  "wikem_titulo": "Salicylate toxicity"
 },
 "intoxicaciones_agudas_actitud_diagnostica_y_tratamiento_gene": {
  "ddx": [
   {
    "grupo": "Crítico · toxíndromes con amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome simpaticomimético",
      "clave": "HTA, taquicardia, hipertermia, midriasis, agitación, sudoración (cocaína, anfetaminas)",
      "slug": "intoxicacion_aguda_por_cocaina"
     },
     {
      "dx": "Síndrome opioide",
      "clave": "miosis puntiforme, bradipnea, coma; responde a naloxona",
      "slug": "intoxicacion_aguda_por_opiaceos_y_derivados"
     },
     {
      "dx": "Síndrome colinérgico",
      "clave": "SLUDGE, miosis, broncorrea, fasciculaciones, bradicardia (organofosforados)"
     },
     {
      "dx": "Acidosis metabólica con anion gap (MUDPILES)",
      "clave": "taquipnea, anion gap alto; metanol, etilenglicol, salicilatos, cetoacidosis"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "coma/convulsión con glucemia baja; insulina, sulfonilureas; tratable de inmediato",
      "slug": "hipoglucemia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Síndrome anticolinérgico",
      "clave": "piel seca y roja, midriasis, retención, delirio, hipertermia, taquicardia"
     },
     {
      "dx": "Intoxicación por monóxido de carbono / cianuro",
      "clave": "cefalea, coma, acidosis láctica; exposición a humo, lactato alto"
     },
     {
      "dx": "Síndrome serotoninérgico / NMS",
      "clave": "hipertermia, rigidez, clonus, alteración autonómica; fármacos serotoninérgicos/neurolépticos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Síndrome sedante-hipnótico",
      "clave": "depresión SNC con constantes estables (benzodiacepinas, alcohol)"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "ABCDE y monitorización",
    "detalle": "Asegura vía aérea, ventilación y circulación. Monitor ECG, TA, SatO2, temperatura y glucemia capilar inmediata. Vía venosa."
   },
   {
    "paso": "Aplica el coma cocktail ante coma/agitación inexplicada (DONT)",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hipoglucemia → glucosa 50% IV (precedida o acompañada de tiamina 100 mg en alcohólico/malnutrido)."
     },
     {
      "nivel": "critico",
      "t": "Sospecha de opioide (miosis + bradipnea) → naloxona 0,2-0,4 mg IV, repetir hasta 2 mg."
     }
    ]
   },
   {
    "paso": "Identifica el toxíndrome",
    "detalle": "Examina pupilas, piel, constantes, ruidos respiratorios y nivel de conciencia para encuadrar el síndrome. Recoge anamnesis: tóxico, dosis, hora, coingestas."
   },
   {
    "paso": "Solicita pruebas dirigidas",
    "detalle": "Gasometría con anion gap y gap osmolar, glucosa, iones, función renal/hepática, CK, ECG (QRS/QT). Niveles de paracetamol y salicilatos sistemáticos en sobredosis intencionada."
   },
   {
    "paso": "Descontaminación si está indicada",
    "detalle": "Carbón activado 1 g/kg si ingesta <1-2 h y vía aérea protegida. Irrigación intestinal total en fármacos de liberación retardada/metales. Evita inducir el vómito."
   },
   {
    "paso": "Administra el antídoto específico",
    "detalle": "NAC (paracetamol), naloxona (opioides), flumazenilo (benzodiacepinas, con cautela), atropina/pralidoxima (organofosforados), bicarbonato (QRS ancho). Consulta toxicología."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestabilidad, depresión SNC, acidosis o arritmia → UCI/observación monitorizada."
     },
     {
      "t": "Asintomático tras observación adecuada y niveles seguros → alta con valoración psiquiátrica si intencionada."
     }
    ]
   }
  ],
  "wikem_titulo": "Toxicology (main)"
 },
 "isquemia_arterial_aguda_de_las_extremidades": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Flegmasía cerúlea dolens (TVP masiva)",
      "clave": "edema masivo cianótico de toda la extremidad, ABOLICIÓN de pulsos por oclusión venosa; eco confirma TVP",
      "slug": "enfermedad_tromboembolica_venosa"
     },
     {
      "dx": "Síndrome compartimental",
      "clave": "dolor desproporcionado al estiramiento pasivo, tensión a la palpación; tras reperfusión o trauma"
     },
     {
      "dx": "Lesión arterial traumática",
      "clave": "antecedente traumático, hemorragia o hematoma expansivo, ausencia de pulso distal"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Trombosis venosa profunda",
      "clave": "dolor, edema, calor unilateral; pulsos CONSERVADOS, sin palidez ni frialdad",
      "slug": "enfermedad_tromboembolica_venosa"
     },
     {
      "dx": "Ateroembolismo (síndrome del dedo azul)",
      "clave": "cianosis digital con pulsos distales presentes; livedo, fuente proximal",
      "slug": "complicaciones_del_sindrome_varicoso"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Arteriopatía periférica crónica",
      "clave": "claudicación progresiva, frialdad crónica; sin instauración brusca"
     },
     {
      "dx": "Fenómeno de Raynaud / vasoespasmo",
      "clave": "palidez-cianosis-rubor episódico desencadenado por frío, reversible"
     },
     {
      "dx": "Celulitis",
      "clave": "eritema caliente, fiebre, sin déficit de pulsos ni de movilidad",
      "slug": "lesiones_elementales"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce las 6 P y cronometra",
    "detalle": "Dolor, palidez, parestesias, parálisis, ausencia de pulsos, poiquilotermia (frialdad). La ventana para salvar la extremidad es de 4-6 h: el tiempo es tejido."
   },
   {
    "paso": "Explora pulsos y señal Doppler",
    "detalle": "Palpa y compara pulsos bilaterales; Doppler arterial y venoso. Clasifica por Rutherford (I, IIa, IIb, III). Eco/angio-TC no deben retrasar el tratamiento."
   },
   {
    "paso": "Anticoagula de inmediato",
    "detalle": "Heparina sódica IV: bolo 80 U/kg → perfusión 18 U/kg/h. AAS. Analgesia potente (morfina). Mantén la extremidad en declive, protegida y caliente; no aplicar calor directo."
   },
   {
    "paso": "Avisa a cirugía vascular y decide según Rutherford",
    "sub": [
     {
      "nivel": "emergente",
      "t": "I-IIa (viable) → anticoagulación; revascularización programada/diferida."
     },
     {
      "nivel": "critico",
      "t": "IIb (amenaza inmediata, parálisis/déficit sensitivo) → revascularización URGENTE (embolectomía/trombectomía/trombólisis intraarterial)."
     },
     {
      "nivel": "critico",
      "t": "III (irreversible: anestesia, rigidez, flictenas) → amputación."
     }
    ]
   },
   {
    "paso": "Distingue embolia de trombosis",
    "detalle": "Embolia (FA, prótesis, IAM) → embolectomía. Trombosis sobre placa/injerto → trombólisis intraarterial o trombectomía. Radiología intervencionista si demora vascular."
   },
   {
    "paso": "Vigila la reperfusión y el destino",
    "detalle": "Tras revascularizar, vigila síndrome compartimental, rabdomiólisis e hiperpotasemia. Ingreso en vascular/UCI según gravedad."
   }
  ],
  "wikem_titulo": "Acute arterial ischemia"
 },
 "lesion_renal_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "LRA posrenal por obstrucción bilateral completa",
      "clave": "anuria brusca; globo vesical o hidronefrosis en ecografía; reversible si se desobstruye",
      "slug": "retencion_aguda_de_orina"
     },
     {
      "dx": "Hiperpotasemia grave secundaria",
      "clave": "riesgo de arritmia fatal; ondas T picudas, QRS ancho",
      "slug": "hiperpotasemia"
     },
     {
      "dx": "Glomerulonefritis rápidamente progresiva",
      "clave": "oliguria, HTA, edemas, cilindros hemáticos y proteinuria",
      "slug": "sindrome_nefritico_agudo"
     },
     {
      "dx": "Síndrome hepatorrenal tipo 1",
      "clave": "cirrosis con ascitis; deterioro rápido sin causa renal aparente"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "LRA prerrenal (hipoperfusión)",
      "clave": "la más frecuente; deshidratación, hemorragia, shock; FeNa < 1%, responde a volumen",
      "slug": "shock"
     },
     {
      "dx": "Necrosis tubular aguda",
      "clave": "forma parenquimatosa habitual; isquemia o nefrotóxicos; FeNa > 1%, cilindros granulosos"
     },
     {
      "dx": "Rabdomiólisis",
      "clave": "orina oscura, CK muy elevada; mioglobinuria nefrotóxica",
      "slug": "rabdomiolisis"
     },
     {
      "dx": "Nefritis intersticial aguda",
      "clave": "fármaco reciente, fiebre, eosinofiluria; a veces exantema"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "LRA posrenal por hiperplasia/tumor prostático",
      "clave": "varón mayor, síntomas miccionales; sondaje resuelve",
      "slug": "retencion_aguda_de_orina"
     },
     {
      "dx": "Reagudización de enfermedad renal crónica",
      "clave": "creatinina previa elevada, riñones pequeños en ecografía",
      "slug": "enfermedad_renal_cronica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa estado de volemia y constantes",
    "detalle": "TA, FC, diuresis, signos de deshidratación o sobrecarga. Vía venosa y monitorización si inestable. Sonda vesical para cuantificar diuresis."
   },
   {
    "paso": "Solicita analítica y ECG urgentes",
    "detalle": "Función renal, iones (descartar hiperK), gasometría (acidosis), hemograma, coagulación, sistemático de orina con sedimento e iones en orina (FeNa). ECG inmediato."
   },
   {
    "paso": "Trata de inmediato las complicaciones vitales",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hiperpotasemia con cambios ECG → gluconato cálcico IV + insulina-glucosa + salbutamol nebulizado; valora resinas/diálisis."
     },
     {
      "nivel": "emergente",
      "t": "Acidosis grave (pH < 7,20) → bicarbonato sódico 1 M IV."
     },
     {
      "nivel": "emergente",
      "t": "Edema agudo de pulmón/sobrecarga refractaria → furosemida IV y considera diálisis urgente."
     }
    ]
   },
   {
    "paso": "Haz ecografía abdominal",
    "detalle": "Prueba clave: descarta obstrucción (hidronefrosis, globo vesical) y valora tamaño renal para diferenciar de ERC."
   },
   {
    "paso": "Clasifica y trata según el tipo",
    "sub": [
     {
      "t": "Prerrenal → reposición de volemia con suero salino (o hemoderivados si sangrado)."
     },
     {
      "t": "Posrenal → desobstrucción urgente (sondaje vesical, talla suprapúbica o nefrostomía); vigila diuresis posobstructiva."
     },
     {
      "t": "Parenquimatosa → trata la causa, retira nefrotóxicos y ajusta fármacos."
     }
    ]
   },
   {
    "paso": "Identifica indicaciones de diálisis urgente",
    "detalle": "Hiperpotasemia o acidosis refractarias, sobrecarga de volumen refractaria, uremia grave (pericarditis, encefalopatía) o intoxicaciones dializables."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso de la mayoría de las LRA. UCI/nefrología si criterios de diálisis o inestabilidad."
   }
  ],
  "wikem_titulo": "Acute kidney injury"
 },
 "lumbalgia_aguda_lumbociatica": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome de cola de caballo",
      "clave": "anestesia en silla de montar, retención/incontinencia, déficit bilateral; urgencia quirúrgica"
     },
     {
      "dx": "Absceso epidural espinal",
      "clave": "fiebre, dolor a la percusión, UDVP/inmunodepresión; déficit progresivo"
     },
     {
      "dx": "Aneurisma de aorta abdominal roto/sintomático",
      "clave": "dolor lumbar/abdominal súbito, masa pulsátil, hipotensión, >60 años",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Compresión medular metastásica",
      "clave": "cáncer conocido, dolor nocturno progresivo, déficit motor; RM urgente"
     },
     {
      "dx": "Espondilodiscitis / osteomielitis vertebral",
      "clave": "fiebre, dolor inflamatorio persistente, VSG/PCR altas, factores de riesgo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Fractura vertebral",
      "clave": "traumatismo, osteoporosis/corticoides, dolor mecánico tras esfuerzo"
     },
     {
      "dx": "Pielonefritis aguda",
      "clave": "fiebre, puñopercusión renal positiva, síndrome miccional, piuria",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Cólico nefrítico / nefrolitiasis",
      "clave": "dolor cólico en fosa renal irradiado a genitales, hematuria, inquietud"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hernia discal con lumbociática",
      "clave": "dolor radicular L4-S1, Lasègue positivo, sin red flags"
     },
     {
      "dx": "Lumbalgia mecánica (esguince/contractura)",
      "clave": "mejora en reposo, sin síntomas sistémicos ni déficit; causa más frecuente"
     },
     {
      "dx": "Estenosis del canal lumbar",
      "clave": "claudicación neurógena que mejora al flexionar el tronco, anciano"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Triángulo de evaluación inicial",
    "detalle": "Busca activamente red flags: déficit neurológico, fiebre, cáncer, trauma, anticoagulación, edad >50/<20. Exploración neurológica de MMII y reflejos."
   },
   {
    "paso": "Descarta cola de caballo y compresión medular",
    "sub": [
     {
      "nivel": "critico",
      "t": "Anestesia en silla de montar, retención urinaria o déficit bilateral → tacto rectal (tono), residuo posmiccional y RM urgente + neurocirugía."
     }
    ]
   },
   {
    "paso": "Solicita pruebas solo si hay red flags",
    "detalle": "Sin red flags NO está indicada imagen. Si las hay: analítica con VSG/PCR, hemograma; RM (preferente) o TC según sospecha. Hemocultivos si fiebre."
   },
   {
    "paso": "Analgesia escalonada",
    "detalle": "Paracetamol 1 g/6 h y/o AINE (ibuprofeno 600 mg/8 h, dexketoprofeno 25 mg/8 h). Metamizol 575 mg/8 h si precisa. Tramadol como rescate."
   },
   {
    "paso": "Recomienda actividad y evita reposo prolongado",
    "detalle": "Mantener actividad según tolerancia; relajante muscular (tizanidina) en ciclo corto si contractura. Evitar reposo en cama estricto."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Cola de caballo, compresión medular, absceso o AAA → ingreso urgente / quirófano."
     },
     {
      "t": "Lumbalgia mecánica o ciática sin red flags → alta con analgesia y control por su médico; pautar signos de alarma."
     }
    ]
   }
  ],
  "wikem_titulo": "Lower back pain"
 },
 "miocarditis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "el más importante a descartar; dolor opresivo, ST/troponina con coronarias patológicas; en miocarditis coronarias normales",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia, sobrecarga derecha; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "tonos apagados, IY, pulso paradójico; eco con derrame y colapso de cavidades",
      "slug": "taponamiento_cardiaco"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pericarditis / miopericarditis",
      "clave": "dolor pleurítico que mejora al inclinarse, roce, ST cóncavo difuso; solapamiento clínico",
      "slug": "pericarditis_aguda"
     },
     {
      "dx": "Miocardiopatía de Takotsubo",
      "clave": "mujer posmenopáusica tras estrés; balonización apical, coronarias normales",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Sepsis de otro origen",
      "clave": "foco infeccioso, fiebre, hipotensión distributiva; sin disfunción ventricular primaria",
      "slug": "sepsis"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos, condensación radiológica; dolor pleurítico sin elevación de troponina",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Monitoriza y descarta SCA primero",
    "detalle": "Monitor ECG continuo (alto riesgo arrítmico), TA, SatO2, vía venosa. ECG seriado y troponina; valora angio si sospecha de SCA."
   },
   {
    "paso": "Solicita pruebas de apoyo diagnóstico",
    "detalle": "Troponina, CK-MB, hemograma, PCR, NT-proBNP, serologías virales. Rx tórax. Eco para evaluar FEVI y derrame. RM cardíaca es la técnica no invasiva de elección."
   },
   {
    "paso": "Trata el soporte y la causa",
    "detalle": "Manejo como insuficiencia cardíaca si hay disfunción VI. Antitérmicos (paracetamol, metamizol). Evita AINE en miocarditis franca. Reposo y abstención de ejercicio."
   },
   {
    "paso": "Vigila y trata las arritmias / bloqueos",
    "sub": [
     {
      "nivel": "critico",
      "t": "Arritmia ventricular sostenida o BAV completo → soporte avanzado, considera marcapasos transitorio."
     }
    ]
   },
   {
    "paso": "Identifica la miocarditis fulminante",
    "sub": [
     {
      "nivel": "critico",
      "t": "Shock cardiogénico / inestabilidad → soporte inotrópico-vasopresor y traslado a centro con soporte circulatorio mecánico (ECMO/balón)."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso de todo caso sospechoso en cama monitorizada. UCI si inestabilidad, arritmias o FEVI reducida. Cardiología precoz."
   }
  ],
  "wikem_titulo": "Myocarditis"
 },
 "monoartritis_agudas_y_poliartritis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Artritis séptica",
      "clave": "monoartritis caliente, fiebre, líquido >50.000 leucocitos PMN; daño articular en horas"
     },
     {
      "dx": "Hemartros con coagulopatía",
      "clave": "derrame hemático, anticoagulación/hemofilia; corregir hemostasia antes de puncionar"
     },
     {
      "dx": "Artritis gonocócica diseminada",
      "clave": "joven sexualmente activo, fiebre, tenosinovitis, pústulas, poliartralgia migratoria"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Artritis microcristalina (gota/pseudogota)",
      "clave": "inicio nocturno, 1ª MTF o rodilla; cristales urato/pirofosfato; muy frecuente"
     },
     {
      "dx": "Osteomielitis con extensión articular",
      "clave": "dolor óseo focal, fiebre, RM con afectación medular ósea adyacente"
     },
     {
      "dx": "Bursitis/celulitis periarticular",
      "clave": "inflamación superficial extraarticular; movilidad pasiva conservada"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Artritis reactiva",
      "clave": "oligoartritis tras infección GI/genitourinaria; conjuntivitis, uretritis"
     },
     {
      "dx": "Brote de artritis reumatoide",
      "clave": "poliartritis simétrica de pequeñas articulaciones, rigidez matutina prolongada"
     },
     {
      "dx": "Artritis vírica",
      "clave": "poliartritis autolimitada, exantema, pródromos virales (parvovirus, hepatitis)"
     },
     {
      "dx": "Enfermedad de Lyme",
      "clave": "monoartritis de rodilla, eritema migratorio, picadura de garrapata"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa y estabiliza",
    "detalle": "Constantes y búsqueda de sepsis. Identifica factores de riesgo: UDVP, prótesis, inmunodepresión, diabetes. Si fiebre + monoartritis, trata como séptica hasta descartar."
   },
   {
    "paso": "Artrocentesis sin demora",
    "detalle": "Punción de todo derrame articular ANTES de antibiótico. Enviar: recuento celular y diferencial, Gram, cultivo y estudio de cristales. >50.000 leucocitos (90% PMN) sugiere infección."
   },
   {
    "paso": "Solicita analítica e imagen",
    "detalle": "Hemograma, VSG, PCR, procalcitonina, hemocultivos (positivos ~50%), ácido úrico, función renal. Radiografía; ecografía para guiar punción. NAAT gonococo si se sospecha."
   },
   {
    "paso": "Antibioterapia empírica si sospecha de séptica",
    "sub": [
     {
      "nivel": "critico",
      "t": "Articulación nativa → vancomicina 15-20 mg/kg IV + ceftriaxona 2 g IV tras la punción."
     },
     {
      "nivel": "emergente",
      "t": "Prótesis articular → vancomicina + cefepima o meropenem y avisar a traumatología."
     }
    ]
   },
   {
    "paso": "Trata la causa no infecciosa",
    "detalle": "Microcristalina: AINE (naproxeno, indometacina) o colchicina; corticoide intraarticular o sistémico si contraindicación. Analgesia e inmovilización."
   },
   {
    "paso": "Interconsulta a traumatología",
    "detalle": "Lavado articular (artroscópico o abierto) en artritis séptica; las infecciones de prótesis requieren cirugía urgente."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "critico",
      "t": "Séptica confirmada o sospechada → ingreso para antibiótico IV y lavado."
     },
     {
      "t": "Microcristalina/reactiva sin criterios de ingreso → alta con tratamiento y control reumatológico."
     }
    ]
   }
  ],
  "wikem_titulo": "Septic arthritis"
 },
 "nauseas_vomitos_y_diarrea": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo / IAM",
      "clave": "vómitos con dolor torácico o ECG alterado; sospecha en diabéticos y ancianos",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "vómitos, dolor abdominal, polidipsia; hiperglucemia, acidosis y cetonas",
      "slug": "cetoacidosis_diabetica"
     },
     {
      "dx": "Hemorragia intracraneal / HTIC",
      "clave": "vómitos sin náusea previa con cefalea progresiva o focalidad neurológica",
      "slug": "hemorragia_subaracnoidea_espontanea"
     },
     {
      "dx": "Isquemia mesentérica",
      "clave": "dolor desproporcionado, acidosis con lactato; FA o arteriopatía"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Obstrucción intestinal",
      "clave": "vómitos, distensión, dolor cólico y cierre intestinal; niveles hidroaéreos",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "GEA inflamatoria",
      "clave": "diarrea con fiebre, sangre y moco; riesgo de bacteriemia y sepsis"
     },
     {
      "dx": "Colitis por C. difficile",
      "clave": "diarrea grave tras antibiótico reciente; dolor abdominal, fiebre; riesgo de megacolon"
     },
     {
      "dx": "Intoxicación medicamentosa (digoxina, AAS, paracetamol)",
      "clave": "vómitos con fármaco sospechoso; pide niveles",
      "slug": "intoxicacion_aguda_por_digitalicos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "GEA no inflamatoria (vírica/enterotoxina)",
      "clave": "diarrea acuosa sin fiebre ni sangre; autolimitada, manejo sintomático"
     },
     {
      "dx": "Diarrea del viajero",
      "clave": "deposiciones acuosas tras viaje reciente a zona endémica"
     },
     {
      "dx": "Vómitos del embarazo / hiperémesis",
      "clave": "mujer fértil con amenorrea; test de gestación positivo"
     },
     {
      "dx": "Vértigo periférico / laberintitis",
      "clave": "náuseas con giro de objetos y nistagmo; sin focalidad",
      "slug": "vertigo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Identifica causas graves de entrada",
    "sub": [
     {
      "nivel": "critico",
      "t": "Dolor torácico/ECG alterado, focalidad neurológica con cefalea, dolor abdominal desproporcionado o hiperglucemia con acidosis → estudio dirigido urgente (ECG, TC craneal, glucemia/cetonas, lactato)."
     }
    ]
   },
   {
    "paso": "Valora el estado de hidratación y constantes",
    "detalle": "TA, FC, ortostatismo, diuresis y signos de hipoperfusión. Descarta shock hipovolémico (cólera, deshidratación grave)."
   },
   {
    "paso": "Repón líquidos y electrolitos",
    "sub": [
     {
      "t": "Formas leves → rehidratación oral (solución hiposmolar OMS 245 mOsm/L)."
     },
     {
      "nivel": "emergente",
      "t": "Deshidratación moderada-grave o intolerancia oral → sueroterapia IV (Ringer/SSF) y corrige K+ y otros iones."
     }
    ]
   },
   {
    "paso": "Trata los síntomas",
    "detalle": "Antieméticos: metoclopramida u ondansetrón 4 mg IV. Antitérmico/analgésico (paracetamol, metamizol). Loperamida o racecadotrilo solo en diarrea no inflamatoria, NO si fiebre o sangre."
   },
   {
    "paso": "Indica antibiótico solo cuando proceda",
    "detalle": "GEA inflamatoria grave/sepsis → ciprofloxacino o azitromicina. C. difficile → vancomicina oral o fidaxomicina (retira el antibiótico desencadenante)."
   },
   {
    "paso": "Solicita pruebas según sospecha y decide destino",
    "detalle": "Hemograma, bioquímica, test de embarazo, niveles de tóxicos si procede. Alta si no hay causa emergente y tolera líquidos; ingreso si deshidratación grave, vómitos incoercibles o causa grave."
   }
  ],
  "wikem_titulo": "Nausea and vomiting"
 },
 "neumonia_adquirida_en_la_comunidad": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / shock séptico",
      "clave": "hipotensión, taquicardia, lactato elevado, disfunción orgánica",
      "slug": "sepsis"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Edema agudo de pulmón cardiogénico",
      "clave": "crepitantes bilaterales, ortopnea, B-líneas; sin fiebre",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "EPOC agudizada",
      "clave": "fumador, sibilancias, aumento de esputo sin infiltrado claro",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Neumonía aspirativa",
      "clave": "deterioro de conciencia, disfagia, infiltrado en zonas declives"
     },
     {
      "dx": "Derrame pleural / empiema",
      "clave": "matidez, hipoventilación, derrame >1 cm en decúbito lateral",
      "slug": "derrame_pleural"
     },
     {
      "dx": "COVID-19 / gripe",
      "clave": "contexto epidemiológico, infiltrados bilaterales, mialgias",
      "slug": "enfermedad_por_el_sars_cov_2_covid_19_y_variantes_relacionad"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Bronquitis aguda",
      "clave": "tos sin infiltrado radiológico, sin hipoxia"
     },
     {
      "dx": "Neoplasia pulmonar",
      "clave": "síndrome constitucional, infiltrado/atelectasia persistente"
     },
     {
      "dx": "Tuberculosis",
      "clave": "tos crónica, sudoración nocturna, infiltrado apical/cavitado"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico y valora la gravedad (primeros minutos)",
    "detalle": "Tríada fiebre + clínica respiratoria + infiltrado. Monitor, SatO2, TA, FC. Calcula CURB-65/PSI y aplica criterios de UCI (mayores: VM, vasopresores)."
   },
   {
    "paso": "Pruebas iniciales",
    "detalle": "Radiografía de tórax (o ecografía pulmonar), hemograma, bioquímica con BUN/glucosa, lactato si sospecha de sepsis. Hemocultivos, antígenos urinarios y cultivo de esputo solo si NAC grave/ingreso en UCI."
   },
   {
    "paso": "Oxígeno y fluidos",
    "detalle": "O2 para SatO2 >92%. Fluidoterapia con cristaloides si hipotensión/hipoperfusión; reevaluar respuesta."
   },
   {
    "paso": "Antibioterapia empírica precoz (<4 h)",
    "sub": [
     {
      "t": "Ambulatorio → amoxicilina-clavulánico o levofloxacino/moxifloxacino."
     },
     {
      "t": "Ingreso en planta → betalactámico (ceftriaxona/cefotaxima) + macrólido, o monoterapia con fluoroquinolona respiratoria."
     },
     {
      "nivel": "emergente",
      "t": "UCI → betalactámico + macrólido o fluoroquinolona; añadir cobertura de Pseudomonas (pipe-tazo/cefepima) o SARM (vancomicina/linezolid) si factores de riesgo."
     }
    ]
   },
   {
    "paso": "Trata la sepsis si la hay",
    "sub": [
     {
      "nivel": "critico",
      "t": "Shock séptico → bundle de sepsis: antibiótico inmediato, cristaloides 30 mL/kg, noradrenalina si hipotensión persistente; lactato seriado."
     }
    ]
   },
   {
    "paso": "Decide el destino",
    "detalle": "PSI I-II / CURB-65 0-1 → alta con antibiótico oral y seguimiento 48-72 h. PSI III-IV / CURB-65 2 → planta. PSI V o criterios mayores/≥3 menores → UCI."
   }
  ],
  "wikem_titulo": "Pneumonia (main)"
 },
 "neumonia_nosocomial": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / shock séptico",
      "clave": "hipotensión, taquicardia, lactato elevado, disfunción orgánica",
      "slug": "sepsis"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; paciente encamado",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Edema agudo de pulmón cardiogénico",
      "clave": "sobrecarga de volumen, crepitantes bilaterales, B-líneas; sin fiebre",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     },
     {
      "dx": "SDRA",
      "clave": "infiltrados bilaterales, hipoxemia grave PaO2/FiO2 baja no cardiogénica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Neumonía aspirativa",
      "clave": "deterioro de conciencia, disfagia, sondas; infiltrado en zonas declives"
     },
     {
      "dx": "Atelectasia",
      "clave": "hipoventilación, infiltrado sin fiebre franca, post-encamamiento/cirugía"
     },
     {
      "dx": "Derrame pleural / empiema",
      "clave": "matidez, hipoventilación; valorar toracocentesis",
      "slug": "derrame_pleural"
     },
     {
      "dx": "Infarto pulmonar",
      "clave": "dolor pleurítico, hemoptisis, contexto de inmovilización"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Fiebre de origen no pulmonar (flebitis, ITU, infección de catéter)",
      "clave": "buscar otros focos nosocomiales antes de asumir neumonía",
      "slug": "sindrome_febril_sin_foco_en_pacientes_no_inmunodeprimidos"
     },
     {
      "dx": "Reacción/fiebre medicamentosa",
      "clave": "relación temporal con fármaco, sin infiltrado convincente"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico (primeros minutos)",
    "detalle": "Infiltrado nuevo tras >48 h de ingreso + fiebre + secreciones purulentas + leucocitosis. Distingue forma precoz (<5.º día) de tardía (≥5.º día, multirresistencia). Monitor, SatO2, TA, FC."
   },
   {
    "paso": "Pruebas iniciales",
    "detalle": "Radiografía de tórax, hemograma, bioquímica, gasometría, lactato. Hemocultivos y cultivo de secreciones respiratorias (mejor aspirado traqueal en intubados) ANTES del antibiótico, sin demorarlo."
   },
   {
    "paso": "Estratifica el riesgo de multirresistencia",
    "detalle": "Puntuación PES y factores de riesgo (forma tardía, antibioterapia previa, ventilación mecánica, colonización conocida) para decidir la amplitud de la cobertura empírica."
   },
   {
    "paso": "Antibioterapia empírica precoz (<4 h)",
    "sub": [
     {
      "t": "Precoz sin factores de riesgo → ceftriaxona o ertapenem / amoxicilina-clavulánico."
     },
     {
      "nivel": "emergente",
      "t": "Tardía o riesgo de multirresistencia → antipseudomónico (pipe-tazo, cefepima o meropenem) ± aminoglucósido/quinolona; añadir vancomicina o linezolid si riesgo de SARM."
     }
    ]
   },
   {
    "paso": "Oxígeno, fluidos y soporte",
    "sub": [
     {
      "t": "O2 para SatO2 >92%; fluidoterapia si hipoperfusión."
     },
     {
      "nivel": "critico",
      "t": "Shock séptico → bundle de sepsis: cristaloides, noradrenalina, lactato seriado; valorar VM."
     }
    ]
   },
   {
    "paso": "Decide el destino",
    "detalle": "Formas graves (VM, FiO2>35%, shock séptico, progresión multilobar, acidosis metabólica, CID) → UCI. Resto → ingreso en planta con reevaluación y desescalada según cultivos."
   }
  ],
  "wikem_titulo": "Pneumonia (main)"
 },
 "neumotorax_espontaneo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Neumotórax a tensión",
      "clave": "hipotensión, ingurgitación yugular, desviación traqueal contralateral; descomprimir SIN esperar Rx"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita e hipoxia con Rx normal; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor opresivo, cortejo vegetativo; cambios en el ECG",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor desgarrante irradiado a espalda; asimetría de pulsos/TA",
      "slug": "sindrome_aortico_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Hemoneumotórax espontáneo",
      "clave": "nivel hidroaéreo en Rx; débito hemático alto por drenaje; valorar cirugía"
     },
     {
      "dx": "Crisis asmática / EPOC agudizada",
      "clave": "sibilancias, espiración alargada; antecedente obstructivo",
      "slug": "epoc_agudizada"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos productiva, condensación en Rx",
      "slug": "neumonia_adquirida_en_la_comunidad"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Pleuritis / derrame pleural",
      "clave": "dolor pleurítico, hipofonesis con matidez (no timpanismo)",
      "slug": "derrame_pleural"
     },
     {
      "dx": "Dolor musculoesquelético / fractura costal",
      "clave": "dolor reproducible a la palpación; antecedente de esfuerzo o traumatismo"
     },
     {
      "dx": "Crisis de ansiedad",
      "clave": "hiperventilación, parestesias; exploración y Rx normales",
      "slug": "crisis_de_ansiedad"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Descarta tensión de inmediato",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestabilidad + signos de tensión → toracocentesis descompresiva urgente (2.º espacio línea medioclavicular o 5.º línea axilar media) SIN esperar imagen, seguida de drenaje."
     }
    ]
   },
   {
    "paso": "Estabiliza y oxigena",
    "detalle": "Monitor, vía venosa, O2 a alto flujo (mascarilla con reservorio): acelera la reabsorción del aire pleural. Analgesia (paracetamol/metamizol; morfina si dolor intenso)."
   },
   {
    "paso": "Confirma con imagen",
    "detalle": "Rx tórax en inspiración y bipedestación (línea pleural visceral sin trama distal). Ecografía/TC si dudas o sospecha de hemoneumotórax."
   },
   {
    "paso": "Decide manejo según tamaño y tipo",
    "sub": [
     {
      "t": "NE primario pequeño (<2-3 cm) y asintomático → observación + O2, control radiológico."
     },
     {
      "nivel": "emergente",
      "t": "NE grande, sintomático o secundario (EPOC) → drenaje torácico (tubo o catéter pleural)."
     }
    ]
   },
   {
    "paso": "Vigila el hemoneumotórax",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Débito >700 mL en 1.ª hora o >200 mL/h durante 2 h → cirugía urgente."
     }
    ]
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso para NE secundario, drenado o complicado. NE primario pequeño en observación → alta con control si estable, evitar vuelos/buceo."
   }
  ],
  "wikem_titulo": "Spontaneous pneumothorax"
 },
 "obstruccion_intestinal": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Estrangulación / isquemia de asa",
      "clave": "dolor continuo intenso, fiebre, peritonismo, acidosis láctica; cirugía urgente"
     },
     {
      "dx": "Perforación intestinal",
      "clave": "neumoperitoneo, abdomen en tabla, shock séptico"
     },
     {
      "dx": "Vólvulo",
      "clave": "dolor brusco, distensión masiva; imagen en 'grano de café' (sigma) o asa fija"
     },
     {
      "dx": "Isquemia mesentérica",
      "clave": "dolor desproporcionado, fibrilación auricular; lactato elevado"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Hernia incarcerada",
      "clave": "masa herniaria irreductible, dolorosa; explora todos los orificios"
     },
     {
      "dx": "Obstrucción de colon",
      "clave": "distensión, marco cólico dilatado; descartar neoplasia obstructiva"
     },
     {
      "dx": "Brote estenosante de Crohn",
      "clave": "antecedente de EII, dolor cólico y vómitos",
      "slug": "enfermedad_inflamatoria_intestinal"
     },
     {
      "dx": "Pancreatitis aguda",
      "clave": "dolor epigástrico irradiado a espalda; lipasa ≥3x",
      "slug": "pancreatitis_aguda"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Íleo paralítico",
      "clave": "postoperatorio, fármacos, alteraciones iónicas; silencio abdominal sin dolor cólico"
     },
     {
      "dx": "Seudoobstrucción colónica (Ogilvie)",
      "clave": "dilatación masiva de colon sin obstáculo mecánico, paciente encamado"
     },
     {
      "dx": "Impactación fecal",
      "clave": "anciano estreñido; ampolla rectal ocupada al tacto"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa estabilidad y signos de alarma",
    "detalle": "Constantes, abdomen (peritonismo, masa herniaria), tacto rectal. Dolor continuo intenso + fiebre + peritonismo = estrangulación hasta demostrar lo contrario."
   },
   {
    "paso": "Coloca SNG y dieta absoluta",
    "detalle": "Descompresión con sonda nasogástrica en aspiración, suspende ingesta. Sonda vesical para control de diuresis."
   },
   {
    "paso": "Reanima con fluidos y corrige iones",
    "detalle": "Suero fisiológico/Ringer lactato IV; repón pérdidas y corrige hipopotasemia y alcalosis por vómitos. Analgesia."
   },
   {
    "paso": "Solicita pruebas",
    "detalle": "Hemograma, bioquímica, gasometría con lactato (acidosis = isquemia), coagulación. Rx simple de abdomen; TC abdominal con contraste para nivel, causa y signos de sufrimiento de asa."
   },
   {
    "paso": "Decide manejo según hallazgos",
    "sub": [
     {
      "nivel": "critico",
      "t": "Estrangulación, isquemia, perforación o vólvulo → cirugía urgente + antibióticos de amplio espectro (piperacilina-tazobactam o meropenem)"
     },
     {
      "nivel": "emergente",
      "t": "Hernia incarcerada → intento de reducción/cirugía; obstrucción mecánica completa → valoración quirúrgica"
     }
    ]
   },
   {
    "paso": "Maneja conservadoramente si procede",
    "detalle": "Obstrucción simple por bridas sin signos de gravedad: SNG, fluidos y observación 24-48 h con exploraciones seriadas; valora contraste hidrosoluble (gastrografín) diagnóstico-terapéutico."
   },
   {
    "paso": "Ingresa siempre",
    "detalle": "Todo paciente con obstrucción ingresa con interconsulta a Cirugía. UCI si séptico, inestable o peritonítico; reevaluación abdominal cada 4-8 h."
   }
  ],
  "wikem_titulo": "Small bowel obstruction"
 },
 "otalgia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Otitis externa maligna (necrosante)",
      "clave": "diabético/inmunodeprimido; dolor intenso, tejido de granulación en CAE; riesgo de osteomielitis de base de cráneo"
     },
     {
      "dx": "Mastoiditis",
      "clave": "tumefacción retroauricular dolorosa, pabellón desplazado; tras otitis media",
      "slug": "otitis"
     },
     {
      "dx": "Tumor de orofaringe/hipofaringe (otalgia refleja)",
      "clave": "fumador/enólico, otalgia con disfagia o disfonía y otoscopia normal; derivación ORL urgente"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Absceso periamigdalino",
      "clave": "otalgia refleja con trismo, voz gangosa y abombamiento amigdalino unilateral",
      "slug": "dolor_faringeo_agudo"
     },
     {
      "dx": "Herpes zóster ótico (Ramsay Hunt)",
      "clave": "vesículas en CAE/pabellón + parálisis facial periférica",
      "slug": "paralisis_facial_periferica_idiopatica"
     },
     {
      "dx": "Pericondritis auricular",
      "clave": "pabellón rojo, caliente y doloroso respetando el lóbulo; tras trauma/piercing"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Otitis media aguda",
      "clave": "otalgia con fiebre, hipoacusia; tímpano abombado e hiperémico",
      "slug": "otitis"
     },
     {
      "dx": "Otitis externa",
      "clave": "dolor al traccionar el trago, CAE edematoso; antecedente de baños",
      "slug": "otitis"
     },
     {
      "dx": "Faringoamigdalitis (otalgia refleja)",
      "clave": "causa más frecuente, sobre todo en niños; otoscopia normal",
      "slug": "dolor_faringeo_agudo"
     },
     {
      "dx": "Disfunción de la ATM (síndrome de Costen)",
      "clave": "dolor preauricular al masticar, chasquido articular; otoscopia normal"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Anamnesis y otoscopia dirigidas",
    "detalle": "Diferencia otodinia (patología ótica, otoscopia patológica) de otalgia refleja (otoscopia normal). Valora factores de riesgo oncológico (tabaco, alcohol, piorrea) y diabetes/inmunosupresión."
   },
   {
    "paso": "Exploración orofaríngea y cervicofacial completa",
    "detalle": "Si la otoscopia es normal, explora orofaringe, dientes, ATM, parótida, cuello y laringe para localizar el origen referido."
   },
   {
    "paso": "Identifica y descarta red flags",
    "sub": [
     {
      "nivel": "critico",
      "t": "Diabético con dolor desproporcionado y granulación en CAE → sospecha otitis externa maligna: TC, antibiótico antipseudomónico IV e ingreso ORL"
     },
     {
      "nivel": "critico",
      "t": "Tumefacción retroauricular → mastoiditis: antibiótico IV y valoración ORL urgente"
     },
     {
      "nivel": "emergente",
      "t": "Otalgia refleja persistente en adulto >40 años con disfagia/disfonía → derivación ORL urgente para descartar neoplasia"
     }
    ]
   },
   {
    "paso": "Trata la causa específica",
    "detalle": "Otitis media: amoxicilina; otitis externa: gotas tópicas con antibiótico ± corticoide y limpieza; faringoamigdalitis según etiología; síndrome de Costen: AINE y medidas posturales."
   },
   {
    "paso": "Pauta analgesia",
    "detalle": "AINE de primera línea (ibuprofeno 600 mg/8 h o naproxeno); paracetamol asociado si precisa. Protección gástrica con omeprazol si riesgo."
   },
   {
    "paso": "Decide destino",
    "detalle": "Mayoría: alta con tratamiento ambulatorio y reconsulta si empeora. Ingreso/derivación ORL urgente en otitis externa maligna, mastoiditis, complicaciones supuradas o sospecha tumoral."
   }
  ],
  "wikem_titulo": "Ear diagnoses"
 },
 "pancreatitis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Úlcera péptica perforada",
      "clave": "dolor epigástrico brusco, abdomen en tabla, neumoperitoneo",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Aneurisma de aorta abdominal roto/fisurado",
      "clave": "dolor abdominal-lumbar, masa pulsátil, hipotensión"
     },
     {
      "dx": "Isquemia mesentérica",
      "clave": "dolor desproporcionado, acidosis láctica; vasculópata",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Infarto agudo de miocardio (cara inferior)",
      "clave": "dolor epigástrico, cortejo vegetativo; ECG y troponina",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Colangitis aguda",
      "clave": "tríada de Charcot: fiebre, ictericia y dolor en HCD; vía biliar dilatada"
     },
     {
      "dx": "Colecistitis aguda",
      "clave": "Murphy positivo, dolor en HCD, fiebre"
     },
     {
      "dx": "Obstrucción intestinal",
      "clave": "vómitos, distensión, ausencia de tránsito",
      "slug": "obstruccion_intestinal"
     },
     {
      "dx": "Cetoacidosis diabética",
      "clave": "hiperglucemia, acidosis, cetonuria; puede elevar amilasa",
      "slug": "cetoacidosis_diabetica"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Gastritis / ERGE",
      "clave": "epigastralgia, pirosis, relación con ingesta",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Cólico biliar simple",
      "clave": "dolor en HCD postprandial autolimitado, sin fiebre ni colestasis"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico (criterios de Atlanta)",
    "detalle": "Dos de tres: dolor típico, lipasa/amilasa ≥3x el límite superior, hallazgos en imagen. La ecografía busca litiasis/vía biliar como etiología."
   },
   {
    "paso": "Estratifica la gravedad",
    "detalle": "BISAP, hematocrito, urea, PCR, calcio. Valora fallo orgánico (Marshall ≥2). PCR>190, urea>72 o BISAP≥3 = alto riesgo."
   },
   {
    "paso": "Reanima con fluidos de forma controlada",
    "detalle": "Ringer lactato 5-10 ml/kg/h ('menos es más'), guiado por diuresis y hematocrito; evita sobrecarga. Monitoriza."
   },
   {
    "paso": "Analgesia y soporte",
    "detalle": "Analgesia escalonada: metamizol/dexketoprofeno y opioides si precisa (fentanilo/tramadol). Antieméticos. Inicia nutrición enteral precoz en cuanto la tolere; no dejar en ayuno prolongado."
   },
   {
    "paso": "Trata la causa y complicaciones",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Pancreatitis biliar con colangitis u obstrucción → CPRE urgente (<24-72 h)"
     },
     {
      "nivel": "emergente",
      "t": "Necrosis infectada (gas en TC, procalcitonina alta) → antibióticos (meropenem/piperacilina-tazobactam) y valorar drenaje"
     }
    ]
   },
   {
    "paso": "No uses antibióticos profilácticos",
    "detalle": "Antibioterapia solo ante infección confirmada o sospecha de colangitis/necrosis infectada. Profilaxis de ETV con HBPM."
   },
   {
    "paso": "Decide destino",
    "detalle": "Forma grave o con fallo orgánico → UCI. Forma leve sin criterios de gravedad → planta para hidratación, analgesia y reintroducción de dieta."
   }
  ],
  "wikem_titulo": "Acute pancreatitis"
 },
 "patologia_esofagica_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Perforación esofágica / Boerhaave",
      "clave": "dolor brusco cervical/retroesternal, enfisema subcutáneo, fiebre; neumomediastino; urgencia quirúrgica"
     },
     {
      "dx": "Impactación con obstrucción de vía aérea",
      "clave": "incapacidad para tragar la saliva, sofocación, cianosis; endoscopia inmediata"
     },
     {
      "dx": "Pila de botón u objeto punzocortante impactado",
      "clave": "riesgo de quemadura/perforación; extracción endoscópica inmediata"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "el dolor esofágico puede simular angina; cortejo vegetativo y cambios en ECG",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Impactación alimentaria esofágica",
      "clave": "disfagia brusca tras ingesta, sialorrea; suele subyacer esofagitis eosinofílica o estenosis"
     },
     {
      "dx": "Esofagitis infecciosa (Candida, VHS, CMV)",
      "clave": "odinofagia en inmunodeprimido (VIH CD4<100, trasplante); placas blancas o úlceras"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "ERGE / espasmo esofágico",
      "clave": "pirosis, regurgitación, relación con la ingesta; responde a IBP"
     },
     {
      "dx": "Esofagitis medicamentosa ('por pastilla')",
      "clave": "odinofagia tras doxiciclina, AINE, bifosfonatos, hierro o KCl sin agua/decúbito"
     },
     {
      "dx": "Esofagitis eosinofílica",
      "clave": "varón joven atópico, disfagia recurrente e impactaciones; eosinofilia en biopsia"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora la vía aérea y la deglución",
    "sub": [
     {
      "nivel": "critico",
      "t": "Incapacidad para tragar secreciones u obstrucción de vía aérea → endoscopia inmediata; protege la vía aérea."
     }
    ]
   },
   {
    "paso": "Descarta perforación",
    "sub": [
     {
      "nivel": "critico",
      "t": "Dolor intenso + enfisema subcutáneo/fiebre → Rx tórax y TC con contraste hidrosoluble; cirugía y antibióticos de amplio espectro; mortalidad sube si se demora >24 h."
     }
    ]
   },
   {
    "paso": "Maneja la impactación de cuerpo extraño",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Punzocortante o pila de botón → endoscopia inmediata."
     },
     {
      "t": "Bolo alimentario sin signos de alarma → endoscopia en <24 h; puede ensayarse glucagón 1 mg IV mientras se prepara."
     }
    ]
   },
   {
    "paso": "Trata según la causa",
    "detalle": "ERGE → IBP (omeprazol/pantoprazol). Candida → fluconazol 200 mg carga y 100-200 mg/día 7-14 días. VHS → aciclovir; CMV → ganciclovir/foscarnet. Eosinofílica → IBP y corticoide tópico deglutido."
   },
   {
    "paso": "Hidrata y controla síntomas",
    "detalle": "Sueroterapia IV si intolerancia oral; analgesia y antieméticos según necesidad."
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso si perforación, intolerancia oral, sepsis o inmunodepresión grave. Alta con IBP y revisión digestiva en ERGE/esofagitis no complicada."
   }
  ],
  "wikem_titulo": "Esophagitis"
 },
 "patologia_inducida_por_el_calor": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Golpe de calor",
      "clave": "Tª rectal >40,5 °C + encefalopatía; fallo multiorgánico, enfriar en <30 min"
     },
     {
      "dx": "Sepsis / infección del SNC",
      "clave": "fiebre que persiste pese a enfriamiento; punción lumbar si dudas",
      "slug": "sepsis"
     },
     {
      "dx": "Crisis tirotóxica",
      "clave": "hipertermia con taquiarritmia, bocio, agitación; antecedente tiroideo",
      "slug": "crisis_tirotoxica"
     },
     {
      "dx": "Síndrome neuroléptico maligno / serotoninérgico",
      "clave": "hipertermia con rigidez o clonus; fármacos neurolépticos/serotoninérgicos"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Agotamiento por calor",
      "clave": "Tª <40 °C, sudoración conservada, sin encefalopatía; mejora con líquidos"
     },
     {
      "dx": "Calambres por calor",
      "clave": "calambres musculares por hiponatremia tras esfuerzo y sudoración"
     },
     {
      "dx": "Síncope por calor",
      "clave": "síncope ortostático con vasodilatación; recuperación en decúbito",
      "slug": "sincope"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Mide temperatura central y nivel de conciencia",
    "detalle": "Tª rectal (no axilar). Monitor, TA, SatO2, glucemia. Diferencia golpe de calor (>40,5 °C + encefalopatía) de las formas leves."
   },
   {
    "paso": "Enfriamiento rápido si golpe de calor",
    "sub": [
     {
      "nivel": "critico",
      "t": "Tª >40,5 °C → enfriamiento por evaporación/convección (agua templada nebulizada + ventiladores), bolsas de hielo en ingles/axilas; objetivo Tª <39 °C en <30 min, suspende a 38,5 °C"
     }
    ]
   },
   {
    "paso": "Soporte y vía aérea",
    "sub": [
     {
      "nivel": "critico",
      "t": "Glasgow <9 pese a enfriamiento → intubación"
     },
     {
      "nivel": "emergente",
      "t": "Agitación/escalofríos → benzodiacepinas (midazolam) para frenar termogénesis"
     }
    ]
   },
   {
    "paso": "Reposición hidroelectrolítica",
    "detalle": "Formas leves: suero oral con electrólitos. Graves: cristaloides IV con monitorización; corrige hiponatremia, hipoglucemia e hipocalcemia. No uses antipiréticos."
   },
   {
    "paso": "Detecta y trata fallo multiorgánico",
    "sub": [
     {
      "t": "CK >1.000 con mioglobinuria → rabdomiólisis: fuerza diuresis"
     },
     {
      "nivel": "emergente",
      "t": "pH <7,20 → bicarbonato sódico"
     },
     {
      "t": "Vigila CID, lesión renal aguda y disfunción hepática"
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Golpe de calor → ingreso preferente en UCI. Formas leves → alta tras mejoría y rehidratación."
   }
  ],
  "wikem_titulo": "Environmental heat diagnoses"
 },
 "patologia_inducida_por_el_frio_hipotermia_accidental_y_conge": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hipotermia secundaria a sepsis",
      "clave": "hipotermia con foco infeccioso; descartar antes de atribuir solo a frío",
      "slug": "sepsis"
     },
     {
      "dx": "Hipoglucemia",
      "clave": "frío genera consumo de glucosa; glucemia capilar siempre",
      "slug": "hipoglucemia"
     },
     {
      "dx": "Hipotiroidismo grave / crisis mixedematosa",
      "clave": "hipotermia, bradicardia, estupor; antecedente tiroideo",
      "slug": "crisis_mixedematosa"
     },
     {
      "dx": "Intoxicación / coma",
      "clave": "alcohol, sedantes, opiáceos favorecen hipotermia por exposición",
      "slug": "coma"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Congelación (frostbite)",
      "clave": "lesión por congelación tisular localizada; palidez, anestesia, ampollas tras recalentar"
     },
     {
      "dx": "Pie de trinchera",
      "clave": "lesión por frío húmedo no congelante; maceración, dolor al recalentar"
     },
     {
      "dx": "Sabañones (pernio)",
      "clave": "lesión cutánea por frío no congelante; pápulas pruriginosas violáceas"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Mide temperatura central con termómetro de baja lectura",
    "detalle": "Sonda esofágica si intubado. Monitor, glucemia, ECG (busca onda J de Osborn). Manipula con suavidad: el miocardio frío es irritable."
   },
   {
    "paso": "ABC y soporte",
    "sub": [
     {
      "nivel": "critico",
      "t": "PCR → RCP; en FV con Tª <30 °C la desfibrilación es poco eficaz: recalienta. \"No está muerto hasta que está caliente y muerto\""
     },
     {
      "t": "K+ >10-12 mEq/L indica muerte (no recuperable)"
     }
    ]
   },
   {
    "paso": "Recalentamiento según gravedad",
    "sub": [
     {
      "t": "Leve (32-35 °C) → recalentamiento pasivo externo: manta, ambiente cálido"
     },
     {
      "nivel": "emergente",
      "t": "Moderada (28-32 °C) → recalentamiento activo externo + líquidos IV calientes"
     },
     {
      "nivel": "critico",
      "t": "Grave (<28 °C) o inestable → recalentamiento activo interno (sueros calientes, lavados, ECMO si disponible)"
     }
    ]
   },
   {
    "paso": "Fluidoterapia y corrección metabólica",
    "detalle": "Cristaloides calientes (38-42 °C) IV. Corrige glucemia. Interpreta gasometría con cautela (la sangre se recalienta antes del análisis)."
   },
   {
    "paso": "Trata las lesiones por frío locales",
    "detalle": "Congelación: recalentar en agua a 37-39 °C, analgesia, no frotar, no recalentar si riesgo de recongelación. Eleva la extremidad."
   },
   {
    "paso": "Destino",
    "detalle": "UCI en hipotermia grave o inestable. Observación y alta en formas leves recalentadas sin complicación; deriva congelaciones extensas a cirugía."
   }
  ],
  "wikem_titulo": "Accidental hypothermia"
 },
 "perdida_brusca_de_la_vision": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza visual/sistémica",
    "nivel": "critico",
    "items": [
     {
      "dx": "Oclusión de la arteria central de la retina",
      "clave": "pérdida monocular brusca e indolora, DPAR; retina pálida con mancha rojo cereza"
     },
     {
      "dx": "Arteritis de células gigantes (de la temporal)",
      "clave": ">50 a, cefalea, claudicación mandibular, VSG/PCR muy altas; riesgo de ceguera bilateral"
     },
     {
      "dx": "Ictus de corteza visual",
      "clave": "hemianopsia homónima binocular; focalidad neurológica asociada",
      "slug": "ictus"
     },
     {
      "dx": "Apoplejía hipofisaria",
      "clave": "cefalea súbita + hemianopsia bitemporal + oftalmoplejía"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Desprendimiento de retina",
      "clave": "fotopsias, miodesopsias, \"cortina\" en campo visual; pérdida progresiva"
     },
     {
      "dx": "Oclusión de la vena central de la retina",
      "clave": "pérdida indolora; fondo \"en llamarada\" con hemorragias y venas dilatadas"
     },
     {
      "dx": "Neuritis óptica",
      "clave": "dolor con movimiento ocular, pérdida central, DPAR; sospecha de EM"
     },
     {
      "dx": "Hemorragia vítrea",
      "clave": "pérdida brusca indolora, ausencia de reflejo rojo; diabético o trauma"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Amaurosis fugax",
      "clave": "pérdida monocular transitoria que recupera; origen embólico carotídeo"
     },
     {
      "dx": "Glaucoma de ángulo abierto",
      "clave": "pérdida campimétrica periférica crónica, indolora"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Anamnesis y exploración dirigida (primeros minutos)",
    "detalle": "¿Mono o binocular? ¿dolorosa? Agudeza visual de cada ojo, campos por confrontación, motilidad, reflejos pupilares (busca DPAR/Marcus-Gunn)."
   },
   {
    "paso": "Realiza fondo de ojo y mide PIO",
    "detalle": "Oftalmoscopia: mancha rojo cereza (OACR), \"sangre y trueno\" (OVCR), edema de papila, ausencia de reflejo rojo (hemorragia vítrea)."
   },
   {
    "paso": "Clasifica y actúa según el patrón clínico",
    "sub": [
     {
      "nivel": "critico",
      "t": "OACR (<6-24 h) → emergencia: masaje ocular, reducir PIO (acetazolamida), avisar oftalmología SIN demora; valorar ictus retiniano (código ictus)."
     },
     {
      "nivel": "critico",
      "t": ">50 a con sospecha de arteritis temporal → pide VSG/PCR urgente e inicia metilprednisolona IV de inmediato (no esperes biopsia)."
     },
     {
      "nivel": "emergente",
      "t": "Cortina/fotopsias-miodesopsias → desprendimiento de retina: derivación oftalmológica urgente."
     }
    ]
   },
   {
    "paso": "Solicita pruebas según sospecha",
    "detalle": "VSG/PCR (arteritis), glucemia/HbA1c (hemorragia vítrea); TC/RM craneal si déficit campimétrico binocular o sospecha de ictus/apoplejía hipofisaria."
   },
   {
    "paso": "Trata la causa de base",
    "detalle": "Corticoides en arteritis/neuritis óptica; control de PIO en glaucoma; estudio de fuente embólica en amaurosis fugax (Doppler carótidas, antiagregación)."
   },
   {
    "paso": "Destino",
    "detalle": "Causas amenazantes (OACR, arteritis, desprendimiento, apoplejía) → ingreso/valoración oftalmológica-neurológica urgente. Causas estables → derivación preferente a oftalmología."
   }
  ],
  "wikem_titulo": "Acute vision loss (noninflamed)"
 },
 "pericarditis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "SCACEST",
      "clave": "elevación del ST localizada (no difusa), convexa, con imagen especular; troponina en ascenso, dolor opresivo",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor brusco, desgarrante, irradiado a espalda; asimetría de pulsos/TA",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "complicación de la propia pericarditis; IY, pulso paradójico, hipotensión",
      "slug": "taponamiento_cardiaco"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Miocarditis / miopericarditis",
      "clave": "troponina elevada con dolor pericardítico; antecedente viral",
      "slug": "miocarditis_aguda"
     },
     {
      "dx": "Neumonía / pleuritis",
      "clave": "dolor pleurítico, fiebre, tos; condensación en Rx",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Neumotórax",
      "clave": "dolor pleurítico brusco, hipofonesis unilateral",
      "slug": "neumotorax_espontaneo"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Repolarización precoz",
      "clave": "elevación del ST cóncava en varón joven, estable, sin evolución ECG ni roce"
     },
     {
      "dx": "Dolor osteomuscular / costocondritis",
      "clave": "reproducible a la palpación, mecánico"
     },
     {
      "dx": "ERGE / espasmo esofágico",
      "clave": "relación con la ingesta, pirosis",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico clínico",
    "detalle": "Requiere >=2 de: dolor pericardítico (mejora al inclinarse hacia delante), roce pericárdico, elevación difusa del ST con descenso del PR, derrame pericárdico nuevo."
   },
   {
    "paso": "ECG y descarta SCA",
    "detalle": "ST cóncavo difuso con descenso del PR (a diferencia del SCA, localizado y convexo). Ante duda, troponina y eco; trata como SCA si no puedes descartarlo."
   },
   {
    "paso": "Solicita pruebas básicas",
    "detalle": "Hemograma, PCR/VSG, función renal, troponina (descarta miopericarditis), Rx tórax (cardiomegalia = derrame) y ecocardiograma para valorar derrame/taponamiento."
   },
   {
    "paso": "Descarta taponamiento",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestabilidad, IY, pulso paradójico o derrame grave (>20 mm) → pericardiocentesis urgente y UCI."
     }
    ]
   },
   {
    "paso": "Inicia tratamiento antiinflamatorio",
    "detalle": "AINE a dosis altas (ibuprofeno 600 mg/8 h o AAS 750-1000 mg/8 h) con protección gástrica (omeprazol), MÁS colchicina 0,5 mg/12-24 h durante 3 meses para reducir recurrencias. Corticoides solo si contraindicación o causa autoinmune."
   },
   {
    "paso": "Decide el destino",
    "detalle": "Alta domiciliaria con seguimiento en la mayoría. Ingresa si: fiebre >38 ºC, inicio subagudo, derrame grande/taponamiento, troponina elevada, inmunodepresión, anticoagulación, traumatismo o falta de respuesta a AINE en 7 días."
   }
  ],
  "wikem_titulo": "Pericarditis"
 },
 "pielonefritis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / shock séptico de origen urinario",
      "clave": "hipotensión, taquicardia, alteración de conciencia; leucopenia es signo de gravedad",
      "slug": "sepsis"
     },
     {
      "dx": "Pielonefritis obstructiva (litiasis infectada)",
      "clave": "fiebre + cólico + hidronefrosis; emergencia que precisa desobstrucción urgente",
      "slug": "colico_nefritico"
     },
     {
      "dx": "Aneurisma de aorta abdominal",
      "clave": "dolor lumbar, masa pulsátil, hipotensión; simula dolor en flanco",
      "slug": "sindrome_aortico_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Absceso renal/perinefrítico o pielonefritis enfisematosa",
      "clave": "fiebre persistente >48-72h pese a antibiótico; diabético; precisa imagen",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Prostatitis aguda (varón)",
      "clave": "fiebre con próstata dolorosa al tacto rectal",
      "slug": "prostatitis_aguda"
     },
     {
      "dx": "Apendicitis / diverticulitis",
      "clave": "dolor abdominal con defensa, fiebre; puede confundir el flanco"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cistitis / ITU baja",
      "clave": "síndrome miccional sin fiebre, sin dolor lumbar ni afectación general",
      "slug": "infecciones_urinarias_bajas_cistitis_y_uretritis"
     },
     {
      "dx": "Lumbalgia musculoesquelética",
      "clave": "dolor mecánico reproducible, afebril, sin piuria",
      "slug": "colico_nefritico"
     },
     {
      "dx": "Herpes zóster lumbar",
      "clave": "dolor radicular unilateral, vesículas en dermatoma"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce y clasifica",
    "detalle": "Fiebre >38,5°C + escalofríos + dolor lumbar con puñopercusión positiva. Distingue no complicada (mujer joven sana) de complicada (varón, embarazo, anciano, inmunodeprimido, anomalía urológica)."
   },
   {
    "paso": "Monitoriza y trata la sepsis precozmente",
    "sub": [
     {
      "nivel": "critico",
      "t": "Datos de sepsis → cristaloides 30 mL/kg, hemocultivos, lactato y antibiótico IV en la primera hora."
     }
    ]
   },
   {
    "paso": "Solicita pruebas",
    "detalle": "Sistemático y sedimento (piuria, nitritos), urocultivo y hemocultivos. Hemograma (vigila leucopenia), función renal, iones, PCR/PCT. β-hCG en mujer fértil."
   },
   {
    "paso": "Indica imagen si hay alarma",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Fiebre persistente >48-72h, sospecha de obstrucción, monorreno o mala evolución → eco/TC para descartar absceso, hidronefrosis o pielonefritis enfisematosa."
     }
    ]
   },
   {
    "paso": "Inicia antibioterapia empírica",
    "detalle": "Ceftriaxona 1-2 g/24h IV (o cefotaxima); alternativa aminoglucósido. Con riesgo de BLEE: ertapenem o piperacilina-tazobactam. Añade antitérmico/analgesia y antiemético."
   },
   {
    "paso": "Decide destino",
    "detalle": "No complicada estable y tolerancia oral → alta con antibiótico oral (cefixima/cefditoreno) y control. Ingreso si sepsis, vómitos, complicada, embarazo, obstrucción o mala evolución."
   }
  ],
  "wikem_titulo": "Pyelonephritis"
 },
 "priapismo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital (de la erección)",
    "nivel": "critico",
    "items": [
     {
      "dx": "Priapismo isquémico (bajo flujo)",
      "clave": "erección rígida y dolorosa >4 h; gasometría cavernosa pO2<30, pCO2>60, pH<7,25; emergencia tiempo-dependiente"
     },
     {
      "dx": "Priapismo no isquémico (alto flujo)",
      "clave": "erección parcial, fluctuante e indolora; antecedente traumático perineal; gasometría cavernosa tipo arterial"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Enfermedad de Peyronie",
      "clave": "induración/placa fibrosa con curvatura del pene; no erección mantenida"
     },
     {
      "dx": "Parafimosis",
      "clave": "prepucio retraído atrapado tras el glande con edema; no afecta cuerpos cavernosos",
      "slug": "sindrome_escrotal_agudo"
     },
     {
      "dx": "Fractura de pene",
      "clave": "chasquido durante el coito, dolor y hematoma en berenjena; pérdida de la erección"
     },
     {
      "dx": "Erección fisiológica por estimulación",
      "clave": "relacionada con deseo sexual, indolora, detumescencia espontánea"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el tipo y la duración",
    "detalle": "Anamnesis (uso de vasoactivos, anemia falciforme, leucemia, trauma) y exploración. La diferenciación isquémico/no isquémico marca todo el manejo."
   },
   {
    "paso": "Realiza gasometría de cuerpos cavernosos",
    "sub": [
     {
      "nivel": "critico",
      "t": "pO2<30, pCO2>60, pH<7,25 → priapismo ISQUÉMICO: emergencia, no demores el tratamiento"
     },
     {
      "t": "gasometría tipo arterial → priapismo NO isquémico: ecografía Doppler peneana, manejo conservador/embolización por radiología intervencionista"
     }
    ]
   },
   {
    "paso": "Analítica simultánea (sin retrasar tratamiento)",
    "detalle": "Hemograma (descartar leucemia/falciforme), coagulación, grupo y pruebas cruzadas; tóxicos si etiología no clara."
   },
   {
    "paso": "Trata el priapismo isquémico de inmediato",
    "detalle": "Anestesia local del pene, aspiración de cuerpos cavernosos ± lavado con suero salino."
   },
   {
    "paso": "Inyecta simpaticomimético si persiste",
    "detalle": "Fenilefrina intracavernosa 100-200 µg cada 3-5 min (máx ~1 mg) con monitorización de TA y FC; vigilar HTA y arritmias."
   },
   {
    "paso": "Trata la causa subyacente en paralelo",
    "detalle": "En anemia falciforme: hidratación, oxígeno, analgesia y valorar exantotransfusión con Hematología."
   },
   {
    "paso": "Destino",
    "detalle": "Refractario o que precisa cirugía/RI → ingreso (Urología). Resolución completa → alta con seguimiento estrecho por Urología."
   }
  ],
  "wikem_titulo": "Priapism"
 },
 "prostatitis_aguda": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / shock séptico de origen urinario",
      "clave": "hipotensión, taquicardia, alteración de conciencia, fiebre elevada",
      "slug": "sepsis"
     },
     {
      "dx": "Absceso prostático",
      "clave": "fiebre persistente pese a antibiótico, fluctuación prostática; precisa drenaje"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pielonefritis aguda",
      "clave": "fiebre, dolor lumbar y puñopercusión positiva en lugar de dolor perineal",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Retención aguda de orina",
      "clave": "globo vesical, imposibilidad de orinar; requiere cistostomía, no sonda uretral",
      "slug": "retencion_aguda_de_orina"
     },
     {
      "dx": "Epididimoorquitis / torsión testicular",
      "clave": "dolor y tumefacción escrotal; descarta torsión en jóvenes",
      "slug": "sindrome_escrotal_agudo"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Cistitis / ITU baja",
      "clave": "síndrome miccional sin fiebre ni afectación general ni dolor prostático",
      "slug": "infecciones_urinarias_bajas_cistitis_y_uretritis"
     },
     {
      "dx": "Uretritis",
      "clave": "disuria con exudado uretral, conducta de riesgo sexual"
     },
     {
      "dx": "Prostatitis crónica / síndrome de dolor pélvico",
      "clave": "clínica larvada y recurrente, sin fiebre ni afectación aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce el cuadro y valora gravedad",
    "detalle": "Fiebre alta, escalofríos, mialgias y síndrome miccional. Tacto rectal: próstata aumentada, tensa y dolorosa. NO masajear la próstata (riesgo de bacteriemia)."
   },
   {
    "paso": "Monitoriza y descarta sepsis",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sepsis grave/shock séptico → cristaloides, hemocultivos, lactato y antibiótico de amplio espectro precoz (meropenem + amikacina o ceftazidima-avibactam)."
     }
    ]
   },
   {
    "paso": "Solicita pruebas",
    "detalle": "Hemograma, función renal, PCR/PCT, sistemático y urocultivo, hemocultivos si fiebre. El diagnóstico es clínico (cultivo puede ser normal)."
   },
   {
    "paso": "Maneja la retención de orina si aparece",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Retención aguda → cistostomía suprapúbica percutánea; está contraindicada la manipulación uretral."
     }
    ]
   },
   {
    "paso": "Inicia antibioterapia parenteral",
    "detalle": "Sin sepsis ni multirresistencia: ceftriaxona 1-2 g/24h IV o cefotaxima. Con factores de riesgo de BLEE: ertapenem o piperacilina-tazobactam. Añade analgesia/antitérmico (paracetamol, metamizol)."
   },
   {
    "paso": "Observa e ingresa",
    "detalle": "Observación mínima 24 h con antibiótico IV. Ingreso si paciente tóxico, retención, sepsis o absceso. Al alta: completar 2-4 semanas vía oral y seguimiento por Urología con urocultivo a los 7 días."
   }
  ],
  "wikem_titulo": "Prostatitis"
 },
 "quemaduras_termicas": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Lesión por inhalación de humo",
      "clave": "esputo carbonáceo, ronquera, estridor, quemaduras faciales/perinasales; riesgo de obstrucción de vía aérea"
     },
     {
      "dx": "Intoxicación por monóxido de carbono",
      "clave": "incendio en espacio cerrado, cefalea, confusión; SatO2 normal engañosa, mide carboxihemoglobina"
     },
     {
      "dx": "Intoxicación por cianuro",
      "clave": "combustión de plásticos/lana; acidosis láctica grave, coma; tratar empíricamente con hidroxocobalamina"
     },
     {
      "dx": "Quemadura eléctrica de alto voltaje",
      "clave": "lesión profunda interna mayor que la externa; arritmias, rabdomiólisis"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Quemadura química / cáustica",
      "clave": "agente identificable; irrigación abundante, neutralización contraindicada",
      "slug": "quemaduras_quimicas"
     },
     {
      "dx": "Síndrome compartimental por quemadura circunferencial",
      "clave": "relleno capilar >3 s, frialdad, dolor; valora escarotomía"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Dermatosis ampollosas (Stevens-Johnson/NET, penfigoide)",
      "clave": "sin antecedente térmico; afectación mucosa, signo de Nikolsky"
     },
     {
      "dx": "Celulitis / impétigo ampolloso",
      "clave": "eritema con fiebre, evolución infecciosa sin exposición a calor"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valoración inicial ABCDE y vía aérea",
    "detalle": "Si signos de inhalación o quemadura facial → intubación precoz antes del edema. O2 alto flujo. Retira ropa y joyas; enfría la quemadura con agua templada (no hielo)."
   },
   {
    "paso": "Sospecha y trata toxicidad por humo",
    "sub": [
     {
      "nivel": "critico",
      "t": "Incendio en recinto cerrado + acidosis láctica/coma → hidroxocobalamina 5 g IV empírica por cianuro"
     },
     {
      "t": "Carboxihemoglobina elevada → O2 100%; valora cámara hiperbárica según centro"
     }
    ]
   },
   {
    "paso": "Estima profundidad y SCQT",
    "detalle": "Usa Lund-Browder (regla de los 9 orientativa). Calcula índice de gravedad de Garcés modificado para decidir ingreso/derivación a unidad de quemados."
   },
   {
    "paso": "Reanimación con líquidos",
    "sub": [
     {
      "nivel": "emergente",
      "t": "SCQT ≥20% adulto (>10% niño) → Parkland: Ringer lactato 4 mL/kg/%SCQT en 24 h (mitad en primeras 8 h desde la quemadura)"
     },
     {
      "t": "Ajusta por diuresis: objetivo 0,5-1 mL/kg/h adulto, 1 mL/kg/h niño"
     }
    ]
   },
   {
    "paso": "Analgesia y profilaxis",
    "detalle": "Morfina IV titulada. Profilaxis antitetánica. Protección gástrica con pantoprazol. Profilaxis de TVP con bemiparina. No antibiótico profiláctico sistémico."
   },
   {
    "paso": "Vigila complicaciones de extremidad/abdomen",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Quemadura circunferencial con isquemia distal → escarotomía urgente"
     },
     {
      "t": "Sospecha rabdomiólisis (mioglobinuria) → fuerza diuresis"
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Unidad de quemados si SCQT extensa, quemaduras de cara/manos/pies/periné, tipo B, eléctricas o inhalación. Cura local y alta si quemadura menor superficial."
   }
  ],
  "wikem_titulo": "Burns"
 },
 "rabdomiolisis": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hiperpotasemia grave",
      "clave": "complicación precoz letal por liberación de K muscular; ondas T picudas, QRS ancho",
      "slug": "hiperpotasemia"
     },
     {
      "dx": "Lesión renal aguda mioglobinúrica",
      "clave": "orina oscura, oliguria; riesgo alto con CK > 5.000-30.000 U/L",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Síndrome compartimental",
      "clave": "dolor desproporcionado, tensión muscular; presión > 35 mmHg requiere fasciotomía"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Intoxicación por monóxido de carbono",
      "clave": "rabdomiólisis sin causa aparente; cefalea, ambiente con combustión, varios afectados"
     },
     {
      "dx": "Crisis convulsivas prolongadas",
      "clave": "actividad muscular sostenida; estado poscrítico",
      "slug": "crisis_epilepticas"
     },
     {
      "dx": "Sepsis",
      "clave": "fiebre/foco infeccioso con hipotensión y mialgias",
      "slug": "sepsis"
     },
     {
      "dx": "Coagulación intravascular diseminada",
      "clave": "trombopenia, hipofibrinogenemia, sangrado; forma grave"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Ejercicio intenso / inmovilización prolongada",
      "clave": "esfuerzo extremo o compresión por coma; causa común y leve"
     },
     {
      "dx": "Fármacos/tóxicos (estatinas, alcohol, cocaína)",
      "clave": "anamnesis farmacológica/tóxica; mialgias y CK elevada"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico",
    "detalle": "CK > 5 veces el límite normal (típicamente > 1.000 U/L) con MB < 6%. Tira reactiva de orina positiva para sangre sin hematíes al microscopio (mioglobinuria)."
   },
   {
    "paso": "Solicita analítica completa y ECG",
    "detalle": "Iones (K, fósforo, calcio), función renal, gasometría, hemograma, coagulación, LDH y ácido úrico. ECG para detectar hiperpotasemia. CK seriada (pico a 24-72 h)."
   },
   {
    "paso": "Inicia hidratación intensiva precoz",
    "detalle": "Suero salino fisiológico 0,9% a alto ritmo (1-2 L/h inicial, ajustar a 200-300 mL/h de diuresis); la demora aumenta el riesgo de LRA."
   },
   {
    "paso": "Trata las complicaciones tiempo-dependientes",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hiperpotasemia con cambios ECG → gluconato cálcico IV + insulina-glucosa + salbutamol; valora diálisis."
     },
     {
      "nivel": "emergente",
      "t": "Sospecha de síndrome compartimental → mide presión compartimental; > 35 mmHg → fasciotomía urgente."
     }
    ]
   },
   {
    "paso": "Considera alcalinización y diuréticos",
    "detalle": "En casos seleccionados con diuresis adecuada: bicarbonato sódico para alcalinizar la orina; manitol/diuréticos solo si no hay oligoanuria. Evita sobrecarga."
   },
   {
    "paso": "Maneja el dolor y retira el desencadenante",
    "detalle": "Analgesia (paracetamol, metamizol); suspende fármacos miotóxicos. Si no hay causa, descarta intoxicación por CO."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si CK > 5.000 U/L, LRA, alteraciones electrolíticas o CK en ascenso. Alta posible en formas leves (CK < 5.000, función renal y K normales) con hidratación oral y control."
   }
  ],
  "wikem_titulo": "Rhabdomyolysis"
 },
 "rabia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Tétanos",
      "clave": "trismus, risa sardónica, opistótonos; espasmos sin hidrofobia; antecedente de herida",
      "slug": "tetanos"
     },
     {
      "dx": "Encefalitis vírica / meningitis",
      "clave": "fiebre, alteración de conciencia, signos meníngeos; LCR alterado",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Síndrome de Guillain-Barré",
      "clave": "parálisis ascendente arrefléxica simétrica; simula la forma paralítica de la rabia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Reacción distónica / acatisia por fármacos",
      "clave": "espasmos y agitación tras neurolépticos; cede con anticolinérgicos"
     },
     {
      "dx": "Toxicidad anticolinérgica",
      "clave": "agitación, midriasis, piel seca y caliente, retención urinaria",
      "slug": "intoxicacion_aguda_por_anticolinergicos_y_antihistaminicos"
     },
     {
      "dx": "Trastorno conversivo / psicógeno",
      "clave": "incongruencia neurológica, sin progresión orgánica"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa la exposición y la herida",
    "detalle": "Tipo de animal, estado vacunal del animal, localización y profundidad de la mordedura; rabia es de declaración obligatoria URGENTE."
   },
   {
    "paso": "Limpia la herida de forma exhaustiva",
    "detalle": "Lavado abundante con agua y jabón ≥15 min + povidona yodada; no suturar de inmediato si es posible."
   },
   {
    "paso": "Decide la profilaxis postexposición",
    "sub": [
     {
      "nivel": "emergente",
      "t": "exposición de riesgo no vacunado → inmunoglobulina antirrábica infiltrada en la herida + dosis restante IM, y pauta de vacuna (días 0, 3, 7, 14)"
     },
     {
      "t": "previamente vacunado → solo vacuna de recuerdo (días 0 y 3), sin inmunoglobulina"
     }
    ]
   },
   {
    "paso": "Actualiza profilaxis antitetánica y valora antibiótico",
    "detalle": "Toxoide ± IGT según estado vacunal; antibiótico (amoxicilina-clavulánico) en mordeduras con riesgo de sobreinfección."
   },
   {
    "paso": "Maneja la rabia clínica establecida como soporte",
    "detalle": "Sin tratamiento curativo: ingreso, sedación intensa, control de espasmos y disautonomía, aislamiento; pronóstico casi siempre letal."
   },
   {
    "paso": "Destino",
    "detalle": "Paciente que solo precisa profilaxis postexposición → ambulatorio con seguimiento. Rabia clínica → ingreso (UCI)."
   }
  ],
  "wikem_titulo": "Rabies"
 },
 "retencion_aguda_de_orina": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome de cola de caballo / compresión medular",
      "clave": "retención + anestesia en silla de montar, debilidad MMII, dolor lumbar; urgencia neuroquirúrgica"
     },
     {
      "dx": "Aneurisma de aorta abdominal",
      "clave": "dolor lumbar/abdominal, masa pulsátil; puede comprimir y simular retención",
      "slug": "sindrome_aortico_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Prostatitis aguda",
      "clave": "fiebre, afectación general, próstata tensa y dolorosa; NO sondar por vía uretral",
      "slug": "prostatitis_aguda"
     },
     {
      "dx": "Lesión renal aguda posrenal",
      "clave": "obstrucción mantenida, elevación de urea/creatinina; reversible con drenaje",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Rotura uretral (traumatismo)",
      "clave": "uretrorragia, traumatismo pélvico/perineal; contraindica sondaje uretral"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hiperplasia benigna de próstata",
      "clave": "varón mayor, clínica obstructiva progresiva previa; causa más frecuente"
     },
     {
      "dx": "Retención farmacológica",
      "clave": "anticolinérgicos, opioides, antihistamínicos, antidepresivos tricíclicos"
     },
     {
      "dx": "Estenosis uretral / impactación fecal",
      "clave": "antecedente de instrumentación; tacto rectal con fecaloma"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma el diagnóstico clínico",
    "detalle": "Imposibilidad de orinar + dolor hipogástrico + globo vesical palpable y mate. Ecografía a pie de cama para confirmar volumen retenido."
   },
   {
    "paso": "Descarta contraindicaciones antes de sondar",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Uretrorragia/traumatismo pélvico → sospecha rotura uretral: NO sondaje uretral, avisa a Urología (cistostomía suprapúbica)."
     },
     {
      "nivel": "emergente",
      "t": "Prostatitis aguda → evita manipulación uretral; valora cistostomía percutánea."
     }
    ]
   },
   {
    "paso": "Realiza vaciamiento vesical",
    "detalle": "Sondaje uretral (Foley); si imposible, sonda acodada o suprapúbica. Descompresión; vigila hematuria ex vacuo."
   },
   {
    "paso": "Vigila la diuresis postobstructiva",
    "detalle": "Mide volumen evacuado y diuresis horaria. Poliuria postobstructiva (>200 mL/h) → repone líquidos y controla iones."
   },
   {
    "paso": "Estudia la causa y la repercusión renal",
    "detalle": "Función renal e iones, sedimento y urocultivo. Tacto rectal (próstata, fecaloma). Hemograma si fiebre o hematuria masiva."
   },
   {
    "paso": "Inicia tratamiento de la causa",
    "detalle": "Alfabloqueante (tamsulosina 0,4 mg/24h) en HBP para mejorar retirada de sonda. Trata infección o impactación. Retira fármacos causantes."
   },
   {
    "paso": "Decide destino",
    "detalle": "Alta con sonda y bolsa + cita en Urología si estable. Ingreso si LRA establecida, urosepsis, prostatitis o sospecha de cola de caballo."
   }
  ],
  "wikem_titulo": "Acute urinary retention"
 },
 "sangrado_menstrual_abundante": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sangrado con inestabilidad hemodinámica",
      "clave": "hipotensión, taquicardia, palidez; valorar choque hipovolémico y transfusión",
      "slug": "shock"
     },
     {
      "dx": "Complicación de gestación (aborto/ectópico)",
      "clave": "test de embarazo positivo + sangrado/dolor; descartar SIEMPRE primero"
     },
     {
      "dx": "Coagulopatía (von Willebrand, trombopenia)",
      "clave": "menorragia desde la menarquia, otros sangrados, anticoagulación"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Malignidad endometrial o cervical",
      "clave": "sangrado posmenopáusico o factores de riesgo; lesión visible en exploración"
     },
     {
      "dx": "Anemia sintomática grave",
      "clave": "Hb <8 g/dL, disnea, mareo; criterio de ingreso"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Causas estructurales (pólipo, mioma, adenomiosis)",
      "clave": "sangrado cíclico abundante; ecografía transvaginal diagnóstica"
     },
     {
      "dx": "Disfunción ovulatoria",
      "clave": "ciclos irregulares; perimenarquia, perimenopausia, SOP, tiroidopatía"
     },
     {
      "dx": "Iatrogénico (DIU, anticoagulantes, hormonas)",
      "clave": "relación temporal con fármaco o dispositivo"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora primero la estabilidad hemodinámica",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hipotensión/taquicardia → 2 vías gruesas, fluidoterapia, pruebas cruzadas y transfusión; valora taponamiento uterino/balón y avisa a Ginecología."
     }
    ]
   },
   {
    "paso": "Descarta embarazo",
    "detalle": "Test de gestación (orina o suero) en TODA mujer en edad fértil con sangrado; si es positivo, sigue el algoritmo de hemorragia en gestación."
   },
   {
    "paso": "Solicita analítica básica",
    "detalle": "Hemograma (Hb/Hto), coagulación, grupo y pruebas cruzadas si posible transfusión. Considera estudio de coagulopatía (von Willebrand) si menorragia desde la menarquia."
   },
   {
    "paso": "Controla el sangrado agudo",
    "detalle": "Ácido tranexámico 1 g/8 h; AINE (ibuprofeno/ác. mefenámico) si no contraindicados. Sangrado intenso: estrógenos conjugados IV o gestágenos/ACO a dosis altas pautados."
   },
   {
    "paso": "Explora e identifica la causa",
    "detalle": "Especuloscopia y tacto; ecografía transvaginal. Sangrado posmenopáusico o sospecha de malignidad → biopsia endometrial / derivación preferente a Ginecología."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso si Hb <8 g/dL, inestabilidad o necesidad de transfusión. Alta con control del sangrado, ferroterapia oral y seguimiento ginecológico para tratar la causa."
   }
  ],
  "wikem_titulo": "Vaginal bleeding (main)"
 },
 "sepsis": {
  "ddx": [
   {
    "grupo": "Crítico · otros shocks/causas vitales",
    "nivel": "critico",
    "items": [
     {
      "dx": "Shock cardiogénico",
      "clave": "piel fría, ingurgitación yugular, edema agudo de pulmón; lactato alto con bajo gasto",
      "slug": "shock"
     },
     {
      "dx": "Tromboembolia pulmonar masiva",
      "clave": "disnea súbita, hipoxia, sobrecarga de VD; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Crisis addisoniana / insuficiencia suprarrenal",
      "clave": "hipotensión refractaria a fluidos, hiponatremia, hiperpotasemia, hipoglucemia",
      "slug": "crisis_addisoniana"
     },
     {
      "dx": "Anafilaxia",
      "clave": "inicio brusco tras alérgeno, urticaria/angioedema, broncoespasmo",
      "slug": "urticaria_y_anafilaxia"
     },
     {
      "dx": "Crisis tirotóxica",
      "clave": "fiebre, taquiarritmia, agitación, bocio; precipitante reciente",
      "slug": "crisis_tirotoxica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Síndrome neuroléptico maligno",
      "clave": "rigidez en tubo de plomo, hipertermia, CK alta; neurolépticos"
     },
     {
      "dx": "Intoxicación por salicilatos",
      "clave": "hiperventilación, acúfenos, alcalosis respiratoria + acidosis metabólica",
      "slug": "intoxicacion_aguda_por_salicilatos_y_otros_antiinflamatorios"
     },
     {
      "dx": "Shock hemorrágico/hipovolémico",
      "clave": "sangrado evidente u oculto, taquicardia, respuesta a volumen"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Identifica precozmente y monitoriza",
    "detalle": "qSOFA ≥2 (PAS≤100, FR≥22, Glasgow<15) o SOFA. Monitor, vía venosa (2 vías gruesas), O2 si SatO2<90%."
   },
   {
    "paso": "Extrae cultivos y lactato YA",
    "detalle": "2 sets de hemocultivos antes del antibiótico (sin retrasarlo) + urocultivo/otros según foco; lactato sérico inicial y de control."
   },
   {
    "paso": "Antibiótico empírico de amplio espectro en la 1.ª hora",
    "detalle": "Según foco y riesgo de multirresistencia: piperacilina-tazobactam 4/0,5 g o meropenem 1 g; añade vancomicina/linezolid si sospecha SARM; cubre Pseudomonas si procede."
   },
   {
    "paso": "Resucitación con cristaloides",
    "detalle": "30 mL/kg de cristaloide balanceado en las primeras 3 h si hipotensión o lactato ≥4; reevalúa respuesta (TA, diuresis, lactato)."
   },
   {
    "paso": "Decide vasopresores si no responde a volumen",
    "sub": [
     {
      "nivel": "critico",
      "t": "PAM<65 pese a fluidos → noradrenalina como 1.ª línea para PAM≥65 (shock séptico)"
     },
     {
      "t": "shock refractario → añade vasopresina y/o hidrocortisona 200 mg/día"
     }
    ]
   },
   {
    "paso": "Control del foco",
    "detalle": "Drenaje de abscesos, retirada de catéteres infectados, cirugía urgente si procede; imagen dirigida."
   },
   {
    "paso": "Destino",
    "detalle": "Sepsis/shock séptico → UCI o unidad de cuidados intermedios; ingreso en UCI dentro de las 6 h si precisa cuidados críticos (SSC 2021)."
   }
  ],
  "wikem_titulo": "Sepsis (main)"
 },
 "shock": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Shock hipovolémico/hemorrágico",
      "clave": "hemorragia evidente u oculta (digestiva, AAA roto, ectópico); piel fría, colapso de vena cava",
      "slug": "hemorragia_digestiva_alta"
     },
     {
      "dx": "Shock séptico",
      "clave": "el más frecuente; foco infeccioso, fiebre/hipotermia, lactato alto, vasodilatación (piel caliente inicial)",
      "slug": "sepsis"
     },
     {
      "dx": "Shock cardiogénico",
      "clave": "IAM, arritmia o ICC; ingurgitación yugular, crepitantes, hipoperfusión con congestión",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "tonos apagados, IY, pulso paradójico; eco con derrame y colapso diastólico",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Neumotórax a tensión",
      "clave": "hipofonesis unilateral, desviación traqueal, IY; descompresión inmediata",
      "slug": "neumotorax_espontaneo"
     },
     {
      "dx": "Tromboembolia pulmonar masiva",
      "clave": "disnea súbita, hipoxia, sobrecarga de VD; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Anafilaxia",
      "clave": "exposición a alérgeno, urticaria/angioedema, broncoespasmo, hipotensión",
      "slug": "urticaria_y_anafilaxia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Crisis addisoniana",
      "clave": "hipotensión refractaria a volumen, hiponatremia/hiperpotasemia, hiperpigmentación",
      "slug": "crisis_addisoniana"
     },
     {
      "dx": "Shock neurogénico",
      "clave": "tras lesión medular; hipotensión con bradicardia paradójica y piel caliente"
     },
     {
      "dx": "Intoxicación (betabloqueante/antagonista del calcio)",
      "clave": "bradicardia e hipotensión; sospecha por anamnesis/fármacos",
      "slug": "intoxicacion_aguda_por_digitalicos"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce el shock y activa el ABC (primeros minutos)",
    "detalle": "Monitor, TA, SatO2, dos vías de grueso calibre. O2 para SatO2 >=94%. Posición en decúbito. Avisa precozmente a UCI."
   },
   {
    "paso": "Extrae analítica con lactato y gasometría",
    "detalle": "Hemograma, bioquímica, coagulación, gasometría arterial con lactato y exceso de bases. Lactato >4 mmol/L = hipoperfusión grave. Pruebas cruzadas si sangrado."
   },
   {
    "paso": "Clasifica el tipo de shock a pie de cama",
    "detalle": "Eco POCUS (RUSH): función cardíaca, vena cava, derrame pericárdico, pulmón, aorta/abdomen. ECG y Rx tórax."
   },
   {
    "paso": "Inicia resucitación según patrón hemodinámico",
    "sub": [
     {
      "nivel": "critico",
      "t": "Hipovolémico/séptico/distributivo → cristaloides 30 mL/kg (Ringer lactato/SSF); en hemorragia activa hemoderivados y control del foco."
     },
     {
      "nivel": "critico",
      "t": "Obstructivo → descompresión inmediata: toracocentesis (neumotórax a tensión), pericardiocentesis (taponamiento), fibrinólisis/trombectomía (TEP masiva)."
     },
     {
      "nivel": "emergente",
      "t": "Cardiogénico → evita sobrecarga; inotropos (dobutamina) y considera reperfusión si IAM."
     }
    ]
   },
   {
    "paso": "Añade vasopresores si no responde a volumen",
    "detalle": "Noradrenalina como primera línea (objetivo PAM >=65 mmHg). Adrenalina IM 0,5 mg si anafilaxia. Vía central en cuanto sea posible."
   },
   {
    "paso": "Trata la causa específica sin demora",
    "detalle": "Antibiótico de amplio espectro en la 1.ª hora si sepsis; hidrocortisona 100 mg IV si sospecha addisoniana; antídoto en intoxicaciones."
   },
   {
    "paso": "Reevalúa y deriva a UCI",
    "detalle": "Reevaluación frecuente (TA, diuresis >0,5 mL/kg/h, aclaramiento de lactato >10% a las 6 h). Todo shock requiere ingreso en UCI."
   }
  ],
  "wikem_titulo": "Undifferentiated shock"
 },
 "sincope": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Arritmia (BAV avanzado, TV/torsades, QT largo, Brugada)",
      "clave": "síncope brusco sin pródromos, en decúbito o esfuerzo; ECG patológico",
      "slug": "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor torácico desgarrante irradiado a espalda; asimetría de pulsos/TA",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Hemorragia/sangrado oculto (HDA, AAA, ectópico)",
      "clave": "hipotensión, anemia, dolor abdominal; melenas o masa pulsátil",
      "slug": "hemorragia_digestiva_alta"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor torácico, cortejo vegetativo; cambios ECG isquémicos",
      "slug": "sindrome_coronario_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Estenosis aórtica / MCH obstructiva",
      "clave": "síncope de esfuerzo, soplo sistólico eyectivo",
      "slug": "miocarditis_aguda"
     },
     {
      "dx": "Hemorragia subaracnoidea",
      "clave": "cefalea súbita 'en trueno' previa o asociada",
      "slug": "hemorragia_subaracnoidea_espontanea"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Síncope vasovagal/neuromediado",
      "clave": "pródromos (calor, náusea, sudor), desencadenante emocional/dolor, recuperación rápida"
     },
     {
      "dx": "Síncope ortostático",
      "clave": "al incorporarse; depleción de volumen o fármacos hipotensores"
     },
     {
      "dx": "Crisis epiléptica",
      "clave": "movimientos tónico-clónicos, mordedura lateral de lengua, confusión postcrítica",
      "slug": "crisis_epilepticas"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma la recuperación y monitoriza",
    "detalle": "Monitor, TA en decúbito y bipedestación, SatO2, glucemia capilar. Vía venosa si inestable."
   },
   {
    "paso": "Realiza ECG de 12 derivaciones a TODOS",
    "detalle": "Busca BAV, QT largo/corto, Brugada, preexcitación, signos de isquemia, datos de TEP o MCH."
   },
   {
    "paso": "Anamnesis y exploración dirigidas",
    "detalle": "Circunstancias, pródromos, esfuerzo/decúbito, cardiopatía previa, fármacos. Tacto rectal si sospecha de sangrado."
   },
   {
    "paso": "Descarta causas tiempo-dependientes según sospecha",
    "sub": [
     {
      "nivel": "critico",
      "t": "sospecha de TEP/SCA/disección/sangrado → analítica con troponina/dímero D, imagen urgente (angio-TC, eco) y tratamiento específico"
     }
    ]
   },
   {
    "paso": "Estratifica el riesgo",
    "detalle": "Regla de San Francisco (ICC, disnea, ECG anormal, Hto <30%, PAS <90). Cualquier criterio o ECG de riesgo = alto riesgo."
   },
   {
    "paso": "Corrige el desencadenante en bajo riesgo",
    "detalle": "Reposición de volumen si ortostatismo; revisa y ajusta fármacos hipotensores."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "nivel": "emergente",
      "t": "alto riesgo o causa cardiogénica → ingreso/monitorización y valoración por Cardiología"
     },
     {
      "t": "síncope vasovagal típico con ECG normal y bajo riesgo → alta con recomendaciones y seguimiento"
     }
    ]
   }
  ],
  "wikem_titulo": "Syncope"
 },
 "sindrome_aortico_agudo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor opresivo, cambios del ST, troponina; la disección tipo A puede ocluir coronarias",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Tromboembolia pulmonar",
      "clave": "disnea súbita, dolor pleurítico, hipoxia; factores de riesgo de TVP",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "IY, tonos apagados, pulso paradójico; complicación de disección tipo A",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Perforación esofágica (Boerhaave)",
      "clave": "dolor tras vómitos, enfisema subcutáneo, neumomediastino",
      "slug": "patologia_esofagica_aguda"
     },
     {
      "dx": "Neumotórax a tensión",
      "clave": "hipofonesis unilateral, desviación traqueal, IY",
      "slug": "neumotorax_espontaneo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pericarditis aguda",
      "clave": "dolor pleurítico que mejora al inclinarse; roce; ST cóncavo difuso",
      "slug": "pericarditis_aguda"
     },
     {
      "dx": "Ictus isquémico",
      "clave": "déficit neurológico focal; puede ser por extensión de la disección a troncos supraaórticos",
      "slug": "ictus"
     },
     {
      "dx": "Cólico nefrítico / isquemia mesentérica",
      "clave": "dolor abdominal/lumbar por afectación de ramas viscerales en disección tipo B",
      "slug": "colico_nefritico"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Dolor osteomuscular",
      "clave": "reproducible a la palpación, mecánico, sin cortejo vegetativo"
     },
     {
      "dx": "ERGE / espasmo esofágico",
      "clave": "relación con la ingesta, pirosis",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce y monitoriza (emergencia)",
    "detalle": "Monitor, SatO2, vía. TA en AMBOS brazos y pulsos periféricos. Avisa a cirugía cardiovascular y UCI precozmente."
   },
   {
    "paso": "Confirma con imagen urgente",
    "detalle": "Angio-TC de tórax/abdomen/pelvis (de elección). Eco POCUS/transesofágico si inestable: derrame, colgajo intimal, insuficiencia aórtica."
   },
   {
    "paso": "Controla la frecuencia cardíaca primero",
    "detalle": "Betabloqueante IV (esmolol o labetalol) para FC <60 lpm ANTES de vasodilatar, para reducir el dP/dt y el estrés de pared."
   },
   {
    "paso": "Controla después la presión arterial",
    "detalle": "Objetivo PAS 100-120 mmHg. Añade vasodilatador si persiste HTA tras el betabloqueo. Analgesia con morfina (reduce el tono simpático)."
   },
   {
    "paso": "Clasifica y define la estrategia",
    "sub": [
     {
      "nivel": "critico",
      "t": "Tipo A (aorta ascendente) → cirugía emergente; quirófano sin demora."
     },
     {
      "nivel": "emergente",
      "t": "Tipo B (sin aorta ascendente) → tratamiento médico/endovascular salvo complicaciones (isquemia, rotura, dolor refractario)."
     }
    ]
   },
   {
    "paso": "Vigila las complicaciones críticas",
    "detalle": "Hipotensión/shock (rotura o taponamiento), déficit neurológico, asimetría de pulsos, insuficiencia aórtica nueva. No demores el traslado a quirófano/UCI."
   }
  ],
  "wikem_titulo": "Nontraumatic thoracic aortic dissection"
 },
 "sindrome_escrotal_agudo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Torsión testicular",
      "clave": "dolor brusco intenso en <30a, sin fiebre, cremastérico abolido, Prehn positivo, teste horizontalizado"
     },
     {
      "dx": "Gangrena de Fournier",
      "clave": "dolor desproporcionado, crepitación, necrosis cutánea, sepsis; emergencia quirúrgica",
      "slug": "sepsis"
     },
     {
      "dx": "Rotura testicular (traumática)",
      "clave": "traumatismo, hematocele, pérdida de contorno testicular en ecografía"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Epididimoorquitis",
      "clave": "dolor progresivo, fiebre, Prehn negativo (alivio al elevar), síndrome miccional",
      "slug": "infecciones_de_transmision_sexual"
     },
     {
      "dx": "Torsión de hidátide de Morgagni",
      "clave": "niño, dolor en polo superior, punto azul (blue dot sign)"
     },
     {
      "dx": "Hernia inguinal incarcerada",
      "clave": "masa inguinoescrotal irreductible, dolorosa, posibles síntomas oclusivos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Hidrocele / espermatocele",
      "clave": "aumento escrotal indoloro, transiluminación positiva"
     },
     {
      "dx": "Varicocele",
      "clave": "\"bolsa de gusanos\" que aumenta con Valsalva, predominio izquierdo"
     },
     {
      "dx": "Tumor testicular",
      "clave": "masa indolora, dura, no transiluminable"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce y prioriza descartar torsión",
    "detalle": "Ante dolor escrotal agudo en joven, asume torsión hasta demostrar lo contrario. Explora: reflejo cremastérico, signo de Prehn, posición y eje testicular (signo de Gouverneur)."
   },
   {
    "paso": "Activa la vía quirúrgica si alta sospecha",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sospecha de torsión → consulta a Urología SIN demora; ventana de salvamento <6h. No esperes a la ecografía si la clínica es clara."
     }
    ]
   },
   {
    "paso": "Solicita Doppler color solo en casos dudosos",
    "detalle": "Eco-Doppler valora vascularización; recuerda que hasta el 24% de torsiones mantienen flujo, por lo que no descarta. Sistemático de orina para apoyar diagnóstico infeccioso."
   },
   {
    "paso": "Intenta detorsión manual si no hay quirófano inmediato",
    "detalle": "Medida temporizadora: rotación externa (\"abrir el libro\"); el éxito alivia el dolor. No sustituye a la exploración quirúrgica."
   },
   {
    "paso": "Trata la epididimoorquitis si esa es la causa",
    "detalle": "Reposo, elevación escrotal, AINE (naproxeno/dexketoprofeno). Antibiótico según edad: <35a ceftriaxona 1 g IM + doxiciclina 100 mg/12h 10 días (ITS); >35a ciprofloxacino o levofloxacino."
   },
   {
    "paso": "Decide destino",
    "detalle": "Torsión, rotura, absceso o Fournier → quirófano/ingreso. Epididimoorquitis no séptica → alta con antibiótico y control. Ingreso si sepsis, absceso o mala evolución."
   }
  ],
  "wikem_titulo": "Testicular torsion"
 },
 "sindrome_febril_en_la_infancia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / bacteriemia oculta",
      "clave": "TEP alterado, mal estado general, relleno capilar lento; lactante febril",
      "slug": "sepsis"
     },
     {
      "dx": "Meningitis bacteriana",
      "clave": "irritabilidad no consolable, fontanela abombada, petequias, signos meníngeos",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Herpes neonatal (VHS)",
      "clave": "<21-28 días, vesículas, convulsiones, hipertransaminasemia o letargia"
     },
     {
      "dx": "Síndrome inflamatorio multisistémico (MIS-C)",
      "clave": "fiebre persistente, exantema, conjuntivitis, shock; antecedente COVID"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Infección urinaria / pielonefritis",
      "clave": "causa frecuente de fiebre sin foco en lactante; tira/sedimento de orina",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Neumonía",
      "clave": "taquipnea, tiraje, hipoxia, crepitantes; fiebre alta",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Enfermedad de Kawasaki",
      "clave": "fiebre ≥5 días + conjuntivitis, labios fisurados, exantema, adenopatía, edema de manos"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Infección respiratoria de vías altas vírica",
      "clave": "causa más frecuente; catarro, buen estado general, autolimitada"
     },
     {
      "dx": "Otitis media aguda",
      "clave": "otalgia, irritabilidad, tímpano abombado/hiperémico"
     },
     {
      "dx": "Crisis febril",
      "clave": "convulsión breve generalizada 6 m-5 a con fiebre; recuperación neurológica completa"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Evalúa con el Triángulo de Evaluación Pediátrica (primeros segundos)",
    "detalle": "Apariencia, trabajo respiratorio y circulación cutánea. TEP alterado a cualquier edad = activar manejo de paciente grave."
   },
   {
    "paso": "Estratifica el riesgo por edad",
    "sub": [
     {
      "nivel": "critico",
      "t": "<21-28 días con cualquier fiebre → estudio séptico completo (hemo, orina, LCR) e ingreso con antibiótico empírico."
     },
     {
      "nivel": "emergente",
      "t": "22 días-3 meses → analítica con PCT/PCR, hemo y urocultivo; escalas (YIOS); valorar LCR según riesgo."
     },
     {
      "t": ">3 meses con buen estado y foco claro → tratamiento del foco; reevaluación."
     }
    ]
   },
   {
    "paso": "Solicita pruebas dirigidas",
    "detalle": "Tira/sedimento y urocultivo (siempre en lactante con fiebre sin foco), hemograma, PCR/PCT, hemocultivo SIEMPRE antes del antibiótico; Rx tórax si clínica respiratoria; LCR según edad/sospecha."
   },
   {
    "paso": "Inicia antibioterapia empírica precoz si infección bacteriana grave",
    "sub": [
     {
      "nivel": "critico",
      "t": "Sepsis/meningitis → cefotaxima; añade ampicilina en <1 mes (Listeria) y aciclovir si sospecha de VHS."
     },
     {
      "t": "Neonato → ampicilina + gentamicina/cefotaxima."
     }
    ]
   },
   {
    "paso": "Trata la fiebre por confort",
    "detalle": "Paracetamol 15 mg/kg/6 h o ibuprofeno 10 mg/kg/8 h (>6 meses). Objetivo: bienestar, no normotermia."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso: <1-3 meses de riesgo, mal estado, sospecha de IBI o mala tolerancia oral. Alta con signos de alarma y reevaluación si buen estado y bajo riesgo."
   }
  ],
  "wikem_titulo": "Pediatric fever of uncertain source"
 },
 "sindrome_febril_sin_foco_en_pacientes_no_inmunodeprimidos": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Sepsis / bacteriemia",
      "clave": "criterios de gravedad: hipotensión, taquipnea, alteración de conciencia, lactato alto",
      "slug": "sepsis"
     },
     {
      "dx": "Meningitis / encefalitis",
      "clave": "fiebre + rigidez de nuca, cefalea, alteración de conciencia, fotofobia",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Golpe de calor",
      "clave": "Tª>40 °C con alteración del SNC, piel seca/caliente, ambiente/esfuerzo",
      "slug": "patologia_inducida_por_el_calor"
     },
     {
      "dx": "Endocarditis",
      "clave": "fiebre + soplo nuevo, embolias, ADVP o valvulopatía",
      "slug": "endocarditis_aguda"
     },
     {
      "dx": "Crisis tirotóxica",
      "clave": "fiebre, taquiarritmia, agitación, bocio",
      "slug": "crisis_tirotoxica"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Pielonefritis",
      "clave": "fiebre + dolor lumbar/puñopercusión, síndrome miccional",
      "slug": "pielonefritis_aguda"
     },
     {
      "dx": "Neumonía",
      "clave": "fiebre + tos, disnea, crepitantes; infiltrado en Rx",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Colangitis / colecistitis",
      "clave": "fiebre + dolor en hipocondrio derecho, ictericia (tríada de Charcot)"
     },
     {
      "dx": "Malaria",
      "clave": "fiebre + viaje a zona endémica; gota gruesa"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Síndrome viral / gripe",
      "clave": "mialgias, malestar general, autolimitado; contexto epidémico"
     },
     {
      "dx": "Infección urinaria baja",
      "clave": "disuria, polaquiuria sin afectación sistémica",
      "slug": "infecciones_urinarias_bajas_cistitis_y_uretritis"
     },
     {
      "dx": "Fiebre por fármacos / neoplasia",
      "clave": "fiebre sin foco, fármaco reciente o síndrome constitucional"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Valora gravedad y constantes",
    "detalle": "Tª, TA, FC, FR, SatO2, nivel de conciencia. Aplica qSOFA; busca SIEMPRE signos meníngeos y exantema."
   },
   {
    "paso": "Anamnesis y exploración dirigidas al foco",
    "detalle": "Antecedentes epidemiológicos (viajes, animales, dispositivos, ADVP, inmunización), inspección de piel/ORL/auscultación/abdomen/puñopercusión renal."
   },
   {
    "paso": "Solicita pruebas según sospecha",
    "detalle": "Hemograma, bioquímica, PCR/PCT, lactato, sistemático de orina; hemocultivos si fiebre alta o criterios de gravedad; Rx tórax, PCR respiratoria según clínica."
   },
   {
    "paso": "Trata la fiebre para confort",
    "detalle": "Paracetamol 650-1000 mg/4-6 h (máx 4 g/día) o metamizol 2 g IV; hidratación por aumento de pérdidas insensibles. Evita la \"fiebre-fobia\"."
   },
   {
    "paso": "Decide antibiótico empírico según riesgo",
    "sub": [
     {
      "nivel": "critico",
      "t": "criterios de gravedad/sepsis → antibiótico empírico de amplio espectro en la 1.ª hora, sin esperar cultivos"
     },
     {
      "t": "estable y foco no aclarado → puede diferirse el antibiótico y observar/reevaluar"
     }
    ]
   },
   {
    "paso": "Decide destino",
    "detalle": "Ingreso si sepsis, inestabilidad, foco que precise antibiótico IV/cirugía o mal seguimiento. Alta si buen estado, síndrome viral claro o foco tratable ambulatoriamente."
   },
   {
    "paso": "Da instrucciones de alarma al alta",
    "detalle": "Empeoramiento, intolerancia oral, escalofríos/tiritona, alteración de conciencia → reconsulta inmediata."
   }
  ],
  "wikem_titulo": "Acute fever"
 },
 "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Hemorragia subaracnoidea",
      "clave": "cefalea súbita 'en trueno', rigidez de nuca; TC/PL con xantocromía",
      "slug": "hemorragia_subaracnoidea_espontanea"
     },
     {
      "dx": "Encefalitis (herpética)",
      "clave": "fiebre + alteración mental/crisis/focalidad; iniciar aciclovir empírico"
     },
     {
      "dx": "Absceso cerebral",
      "clave": "fiebre, cefalea, focalidad; lesión con captación en anillo en TC/RM"
     },
     {
      "dx": "Absceso epidural espinal",
      "clave": "dolor raquídeo, fiebre, déficit neurológico; RM urgente"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Ictus",
      "clave": "focalidad de instauración súbita, sin fiebre prominente",
      "slug": "ictus"
     },
     {
      "dx": "Hematoma subdural",
      "clave": "antecedente traumático, anciano/anticoagulado, curso fluctuante"
     },
     {
      "dx": "Meningitis vírica",
      "clave": "buen estado general, LCR con predominio linfocitario, glucosa normal"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Meningitis carcinomatosa",
      "clave": "neoplasia conocida, curso subagudo; citología de LCR"
     },
     {
      "dx": "Meningitis farmacológica",
      "clave": "relación temporal con AINE, IGIV o TMP-SMX; resuelve al retirar"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y valora gravedad",
    "detalle": "ABC, constantes, glucemia, monitor, vía venosa. Identifica sepsis/shock y signos meníngeos o de focalidad."
   },
   {
    "paso": "Extrae cultivos y NO retrases el antibiótico",
    "detalle": "Hemocultivos antes del antibiótico, pero la primera dosis no debe demorarse por pruebas de imagen ni PL."
   },
   {
    "paso": "Inicia antibioterapia empírica precoz",
    "sub": [
     {
      "nivel": "critico",
      "t": "sospecha de meningitis bacteriana → cefotaxima/ceftriaxona + vancomicina IV; añadir ampicilina si >50 años, embarazo o inmunodepresión (Listeria)"
     },
     {
      "nivel": "critico",
      "t": "sospecha de encefalitis → añadir aciclovir IV empírico"
     }
    ]
   },
   {
    "paso": "Añade dexametasona si meningitis bacteriana",
    "detalle": "Dexametasona 10 mg IV antes o con la primera dosis de antibiótico (beneficio en neumococo)."
   },
   {
    "paso": "Decide TC antes de la punción lumbar",
    "sub": [
     {
      "t": "focalidad, crisis, inmunodepresión, papiledema o bajo nivel de conciencia → TC craneal previa a la PL"
     },
     {
      "t": "sin datos de riesgo → punción lumbar directa (citobioquímica, Gram, cultivo, PCR vírica)"
     }
    ]
   },
   {
    "paso": "Solicita RM urgente si sospecha de absceso espinal",
    "detalle": "Dolor raquídeo con fiebre y déficit → RM y valoración neuroquirúrgica para drenaje."
   },
   {
    "paso": "Ingresa según gravedad",
    "detalle": "Meningitis bacteriana o encefalitis sospechada → UCI/cama monitorizada. Meningitis vírica con buen estado y tolerancia oral → posible alta con seguimiento."
   }
  ],
  "wikem_titulo": "Meningitis"
 },
 "soporte_vital_avanzado_en_adultos": {
  "ddx": [],
  "plan": [
   {
    "paso": "RCP 30:2 de alta calidad y monitoriza el ritmo",
    "detalle": "Compresiones ininterrumpidas; coloca parches/palas y conecta el monitor-desfibrilador. Oxígeno y acceso IV/IO."
   },
   {
    "paso": "Evalúa el ritmo y decide la rama",
    "sub": [
     {
      "nivel": "critico",
      "t": "Desfibrilable (FV/TV sin pulso) → 1 descarga (150 J bifásico) y reanuda RCP 2 min sin comprobar pulso. Tras la 3.ª descarga: adrenalina 1 mg IV + amiodarona 300 mg IV; adrenalina 1 mg cada 3-5 min."
     },
     {
      "nivel": "emergente",
      "t": "No desfibrilable (AESP/asistolia) → adrenalina 1 mg IV/IO lo antes posible y cada 3-5 min; RCP 2 min y reevalúa el ritmo."
     }
    ]
   },
   {
    "paso": "Optimiza la RCP y la vía aérea",
    "detalle": "Relevo del compresor cada 2 min; vía aérea avanzada con capnografía (ETCO2). Con vía aérea avanzada: compresiones continuas + 10 ventilaciones/min."
   },
   {
    "paso": "Trata las causas reversibles (4H/4T)",
    "detalle": "4H: hipoxia, hipovolemia, hipo/hiperpotasemia y alt. metabólicas, hipotermia. 4T: trombosis (coronaria/pulmonar), taponamiento cardíaco, neumotórax a tensión, tóxicos."
   },
   {
    "paso": "Considera medidas adicionales",
    "detalle": "Ecografía a pie de cama, compresiones mecánicas para el traslado, RCP extracorpórea (ECPR) en casos seleccionados."
   },
   {
    "paso": "Cuidados posresucitación (tras RVCE)",
    "detalle": "ABCDE; SpO2 94-98% y normocapnia; ECG de 12 derivaciones y coronariografía urgente si SCACEST; control de temperatura; tratar la causa precipitante."
   }
  ],
  "biblio": [
   "European Resuscitation Council (ERC). Guidelines 2021. Consejo Español de RCP (CERCP)."
  ]
 },
 "soporte_vital_basico_en_adultos": {
  "ddx": [],
  "plan": [
   {
    "paso": "Garantiza la seguridad y comprueba la respuesta",
    "detalle": "Asegúrate de que es seguro. Sacude los hombros y pregunta «¿se encuentra bien?»."
   },
   {
    "paso": "Abre la vía aérea y comprueba la respiración",
    "detalle": "Maniobra frente-mentón; mira, oye y siente ≤10 s. La respiración agónica (boqueo) NO es normal: actúa como en parada."
   },
   {
    "paso": "Pide ayuda y consigue un DEA",
    "detalle": "Activa el 112 (manos libres) y envía a alguien a por un desfibrilador externo automático."
   },
   {
    "paso": "Inicia compresiones torácicas",
    "detalle": "Centro del tórax, 100-120/min, profundidad 5-6 cm, permite la reexpansión completa y minimiza las interrupciones."
   },
   {
    "paso": "Combina 30 compresiones : 2 ventilaciones",
    "detalle": "Si estás entrenado y dispuesto: 2 insuflaciones (1 s, que eleven el tórax) cada 30 compresiones. Si no, compresiones continuas ininterrumpidas."
   },
   {
    "paso": "Usa el DEA en cuanto llegue",
    "detalle": "Enciéndelo y sigue sus instrucciones; coloca los parches. Si indica descarga, comprueba que nadie toca a la víctima, descarga y reanuda RCP de inmediato (2 min)."
   },
   {
    "paso": "Continúa la RCP",
    "detalle": "Hasta que llegue ayuda avanzada, la víctima despierte/respire con normalidad o estés exhausto. Relévate cada 2 min."
   }
  ],
  "biblio": [
   "European Resuscitation Council (ERC). Guidelines 2021. Consejo Español de RCP (CERCP)."
  ]
 },
 "soporte_vital_pediatrico": {
  "ddx": [],
  "plan": [
   {
    "paso": "Seguridad, estimula y comprueba la respuesta",
    "detalle": "Estímulo táctil y verbal. Si no responde, pide ayuda sin abandonar al niño."
   },
   {
    "paso": "Vía aérea y 5 ventilaciones de rescate",
    "detalle": "Abre la vía aérea (posición neutra en lactante, frente-mentón en niño). Si no respira con normalidad, da 5 ventilaciones de rescate iniciales."
   },
   {
    "paso": "Comprueba signos de vida / pulso (≤10 s)",
    "detalle": "Pulso braquial (lactante) o carotídeo/femoral (niño). Inicia RCP si no hay signos de vida o si FC <60 lpm con mala perfusión."
   },
   {
    "paso": "RCP pediátrica",
    "detalle": "15:2 con 2 reanimadores (30:2 si reanimador único lego). Comprime 1/3 del diámetro AP (≈4 cm lactante, ≈5 cm niño), 100-120/min."
   },
   {
    "paso": "Tras 1 minuto, activa emergencias y consigue el DEA",
    "detalle": "Llama al 112 y trae el desfibrilador; usa parches/atenuador pediátrico si <8 años o <25 kg."
   },
   {
    "paso": "Soporte vital avanzado",
    "sub": [
     {
      "nivel": "critico",
      "t": "Desfibrilable (FV/TVSP) → descarga 4 J/kg; tras la 3.ª, amiodarona 5 mg/kg. Adrenalina 10 µg/kg IV/IO cada 3-5 min."
     },
     {
      "nivel": "emergente",
      "t": "No desfibrilable (AESP/asistolia) → adrenalina 10 µg/kg IV/IO lo antes posible y cada 3-5 min."
     }
    ]
   },
   {
    "paso": "Causas reversibles y cuidados posparada",
    "detalle": "4H/4T (incluye hipoglucemia). Tras RVCE: oxigenación/ventilación adecuadas, control de temperatura y glucemia, y tratar la causa."
   }
  ],
  "biblio": [
   "European Resuscitation Council (ERC). Guidelines 2021. Consejo Español de RCP (CERCP)."
  ]
 },
 "taponamiento_cardiaco": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Neumotórax a tensión",
      "clave": "ausencia de murmullo y timpanismo unilateral, desviación traqueal, hipotensión; alivio inmediato con punción",
      "slug": "neumotorax_espontaneo"
     },
     {
      "dx": "Tromboembolia pulmonar masiva",
      "clave": "disnea súbita, hipoxia, signos de fallo derecho; suele faltar el roce y los tonos apagados",
      "slug": "tromboembolia_pulmonar"
     },
     {
      "dx": "IAM con shock cardiogénico",
      "clave": "dolor torácico, cambios ECG isquémicos, troponina elevada; sin pulso paradójico marcado",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor desgarrante a espalda, asimetría de pulsos/TA; puede causar taponamiento por hemopericardio",
      "slug": "sindrome_aortico_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Insuficiencia cardíaca aguda",
      "clave": "crepitantes, congestión pulmonar; mejora con diuréticos (contraindicados si hay taponamiento)",
      "slug": "insuficiencia_cardiaca"
     },
     {
      "dx": "Pericarditis constrictiva",
      "clave": "signo de Kussmaul, dip-plateau; instauración crónica, sin colapso diastólico agudo",
      "slug": "pericarditis_aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce el shock obstructivo y monitoriza",
    "detalle": "Monitor ECG, TA, SatO2; dos vías de grueso calibre. Busca tríada de Beck y pulso paradójico >10 mmHg."
   },
   {
    "paso": "Confirma con ecocardiografía urgente a pie de cama",
    "detalle": "Derrame con colapso de AD/VD en diástole, vena cava dilatada sin colapso inspiratorio. No demores el tratamiento si hay inestabilidad."
   },
   {
    "paso": "Optimiza la precarga, NUNCA la reduzcas",
    "detalle": "Carga de volumen con cristaloides (Ringer lactato 500 mL). PROHIBIDOS diuréticos y vasodilatadores. Soporte inotrópico/vasopresor (dobutamina, dopamina) como puente."
   },
   {
    "paso": "Decide la vía de evacuación según estabilidad",
    "sub": [
     {
      "nivel": "critico",
      "t": "Inestable / shock → pericardiocentesis URGENTE guiada por eco (subxifoidea)."
     },
     {
      "nivel": "critico",
      "t": "Taponamiento traumático / hemopericardio → toracotomía o ventana pericárdica en quirófano."
     },
     {
      "t": "Estable con derrame grande sin taponamiento → drenaje programado con cardiología."
     }
    ]
   },
   {
    "paso": "Corrige la acidosis y trata la causa",
    "detalle": "Bicarbonato si pH <7,20. Orienta etiología (neoplasia, uremia, viral, urémica) y trátala."
   },
   {
    "paso": "Destino",
    "detalle": "Todo taponamiento → UCI. Avisa a cardiología y cirugía cardíaca. Derrame pequeño estable de causa conocida → seguimiento ambulatorio estrecho."
   }
  ],
  "wikem_titulo": "Pericardial effusion and tamponade"
 },
 "tetanos": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Meningoencefalitis",
      "clave": "rigidez de nuca con FIEBRE y alteración de conciencia (en tétanos la conciencia está preservada)",
      "slug": "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_"
     },
     {
      "dx": "Intoxicación por estricnina",
      "clave": "espasmos generalizados con relajación entre crisis; trismus menos prominente"
     },
     {
      "dx": "Rabia (forma furiosa)",
      "clave": "hidrofobia/aerofobia, hipersalivación, antecedente de mordedura",
      "slug": "rabia"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Reacción distónica aguda por fármacos",
      "clave": "tortícolis/crisis oculógira tras neurolépticos o metoclopramida; cede con biperideno"
     },
     {
      "dx": "Tetania por hipocalcemia",
      "clave": "espasmo carpopedal, signos de Chvostek/Trousseau; calcio bajo",
      "slug": "hipocalcemia"
     },
     {
      "dx": "Absceso periamigdalino / odontogénico",
      "clave": "trismus con dolor faríngeo o dental localizado, fiebre"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Controla la vía aérea y la ventilación",
    "sub": [
     {
      "nivel": "critico",
      "t": "espasmos respiratorios o laríngeos con apneas → secuencia rápida de intubación y ventilación mecánica"
     },
     {
      "t": "trismus/disfagia → evita estímulos que desencadenen espasmos; ambiente tranquilo y oscuro"
     }
    ]
   },
   {
    "paso": "Neutraliza la toxina circulante",
    "detalle": "Inmunoglobulina antitetánica humana (IGT) IM precoz; inicia/completa la vacunación con toxoide (Td) en lugar distinto."
   },
   {
    "paso": "Erradica el foco",
    "detalle": "Limpieza y desbridamiento de la herida; antibiótico: metronidazol 500 mg/6-8 h IV de elección (alternativa penicilina G)."
   },
   {
    "paso": "Controla los espasmos musculares",
    "detalle": "Benzodiacepinas a dosis altas: diazepam o midazolam en perfusión; añade sulfato de magnesio; si refractario, bloqueo neuromuscular (cisatracurio) con ventilación."
   },
   {
    "paso": "Maneja la disautonomía",
    "detalle": "Monitorización continua; sulfato de magnesio, labetalol o morfina para crisis hipertensivas/taquiarritmias; corrige hipotensión con volumen."
   },
   {
    "paso": "Declara el caso",
    "detalle": "Enfermedad de declaración obligatoria URGENTE."
   },
   {
    "paso": "Destino",
    "detalle": "Ingreso en UCI en todos los casos sospechosos o confirmados."
   }
  ],
  "wikem_titulo": "Tetanus"
 },
 "tromboembolia_pulmonar": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor opresivo, cambios del ST/troponina; puede coexistir con sobrecarga de VD",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Disección aórtica",
      "clave": "dolor desgarrante irradiado a espalda, asimetría de pulsos/TA",
      "slug": "sindrome_aortico_agudo"
     },
     {
      "dx": "Taponamiento cardíaco",
      "clave": "hipotensión, ingurgitación yugular, tonos apagados, pulso paradójico",
      "slug": "taponamiento_cardiaco"
     },
     {
      "dx": "Neumotórax a tensión",
      "clave": "hipoventilación unilateral, timpanismo, desviación traqueal",
      "slug": "neumotorax_espontaneo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Neumonía",
      "clave": "fiebre, tos productiva, crepitantes focales, infiltrado",
      "slug": "neumonia_adquirida_en_la_comunidad"
     },
     {
      "dx": "Pericarditis aguda",
      "clave": "dolor pleurítico que mejora al inclinarse; roce; ST cóncavo difuso",
      "slug": "pericarditis_aguda"
     },
     {
      "dx": "Insuficiencia cardíaca descompensada",
      "clave": "ortopnea, crepitantes bilaterales, edemas",
      "slug": "insuficiencia_cardiaca"
     },
     {
      "dx": "Crisis asmática / EPOC agudizada",
      "clave": "sibilancias, broncoespasmo; el TEP puede dar sibilancias hasta en 25%",
      "slug": "epoc_agudizada"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Dolor osteomuscular / costocondritis",
      "clave": "dolor reproducible a la palpación, sin hipoxia"
     },
     {
      "dx": "Crisis de ansiedad / hiperventilación",
      "clave": "parestesias, alcalosis respiratoria; diagnóstico de exclusión",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "ERGE / espasmo esofágico",
      "clave": "relación con la ingesta, pirosis",
      "slug": "patologia_esofagica_aguda"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estima la probabilidad pretest y estratifica el riesgo (primeros minutos)",
    "detalle": "Wells/Ginebra. Monitor, SatO2, TA, FC. Busca inestabilidad (TAS<90 o caída ≥40 mmHg >15 min) que define el TEP de alto riesgo."
   },
   {
    "paso": "Solicita las pruebas según el escenario",
    "sub": [
     {
      "nivel": "critico",
      "t": "Paciente inestable → ecocardiografía a pie de cama (disfunción de VD); no demorar con angio-TC si no es seguro trasladarlo."
     },
     {
      "t": "Probabilidad baja-intermedia y estable → dímero-D (ajustado a edad); si positivo o probabilidad alta → angio-TC helicoidal."
     }
    ]
   },
   {
    "paso": "Completa el estudio inicial",
    "detalle": "ECG (taquicardia sinusal, S1Q3T3, BRD), gasometría, troponina y BNP/NT-proBNP para estratificar riesgo intermedio. Valora signos de TVP."
   },
   {
    "paso": "Soporte y anticoagulación",
    "detalle": "O2 si SatO2<90%. Anticoagula precozmente salvo contraindicación: HBPM (enoxaparina 1 mg/kg/12h) o HNF si inestabilidad/insuficiencia renal. Analgesia con morfina."
   },
   {
    "paso": "Decide la reperfusión según el riesgo",
    "sub": [
     {
      "nivel": "critico",
      "t": "Alto riesgo (inestable) → fibrinólisis sistémica (alteplasa/tenecteplasa) + HNF; soporte hemodinámico con dobutamina/noradrenalina; valorar embolectomía si contraindicación."
     },
     {
      "nivel": "emergente",
      "t": "Riesgo intermedio-alto (VD disfuncional + troponina) → ingreso monitorizado, vigilar deterioro para rescate con fibrinólisis."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Alto riesgo e intermedio → ingreso (UCI si inestable). Bajo riesgo (sPESI 0, Hestia negativos, soporte social adecuado) → valorar anticoagulación y manejo ambulatorio."
   }
  ],
  "wikem_titulo": "Pulmonary embolism"
 },
 "urgencia_hipertensiva": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Emergencia hipertensiva",
      "clave": "HTA grave CON daño agudo de órgano diana (neuro, cardíaco, renal, retina); requiere IV",
      "slug": "emergencia_hipertensiva"
     },
     {
      "dx": "Ictus / hemorragia intracraneal",
      "clave": "focalidad, cefalea explosiva, bajada de conciencia; no bajar TA bruscamente",
      "slug": "ictus"
     },
     {
      "dx": "Síndrome coronario agudo",
      "clave": "dolor torácico, cambios ECG, troponina; la HTA puede ser reactiva",
      "slug": "sindrome_coronario_agudo"
     },
     {
      "dx": "Edema agudo de pulmón simpático",
      "clave": "disnea súbita, crepitantes, ortopnea con cifras muy altas",
      "slug": "edema_agudo_de_pulmon_cardiogenico"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Preeclampsia / eclampsia",
      "clave": "gestante >20 sem, proteinuria, edemas, cefalea; convulsiones en eclampsia",
      "slug": "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia"
     },
     {
      "dx": "Sobrecarga de volumen / IRA",
      "clave": "oliguria, edemas, creatinina elevada",
      "slug": "lesion_renal_aguda"
     },
     {
      "dx": "Intoxicación por simpaticomiméticos",
      "clave": "consumo de cocaína/anfetaminas, taquicardia, midriasis, agitación",
      "slug": "intoxicacion_aguda_por_cocaina"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Seudocrisis hipertensiva",
      "clave": "elevación reactiva por dolor, ansiedad o retención urinaria; normaliza al tratar la causa",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "Retención aguda de orina",
      "clave": "globo vesical, agitación; la TA cede al sondar",
      "slug": "retencion_aguda_de_orina"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Confirma la cifra y descarta emergencia",
    "detalle": "Mide TA en ambos brazos tras reposo, manguito adecuado. Lo clave: ¿hay daño agudo de órgano diana? Si lo hay → es emergencia hipertensiva (vía IV)."
   },
   {
    "paso": "Busca síntomas y signos de alarma",
    "detalle": "Cefalea explosiva, focalidad neurológica, dolor torácico, disnea, déficit visual, asimetría de pulsos. Si presentes → tratar como emergencia."
   },
   {
    "paso": "Identifica y trata la seudocrisis",
    "sub": [
     {
      "t": "Elevación por dolor / ansiedad / retención urinaria → trata la causa (analgesia, ansiolítico, sondaje); no antihipertensivos."
     }
    ]
   },
   {
    "paso": "Reduce la TA de forma gradual por vía ORAL",
    "detalle": "Objetivo: bajar la PAM ~20% o PAD <120 mmHg en 24-48 h. Captopril 25 mg VO, amlodipino o labetalol oral, a dosis baja. Evita descensos bruscos (riesgo de hipoperfusión)."
   },
   {
    "paso": "Reevalúa la respuesta",
    "detalle": "Observación con controles seriados de TA. Reanuda/ajusta el tratamiento de base habitual."
   },
   {
    "paso": "Destino",
    "detalle": "Alta con seguimiento ambulatorio precoz (24-72 h) y revisión de adherencia. Ingreso solo si aparece daño de órgano o mala respuesta."
   }
  ],
  "wikem_titulo": "Hypertensive urgency"
 },
 "urticaria_y_anafilaxia": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Angioedema (hereditario o por IECA)",
      "clave": "edema sin habones ni prurito; sin broncoespasmo; no responde a adrenalina",
      "slug": "angioedema"
     },
     {
      "dx": "Crisis asmática grave",
      "clave": "broncoespasmo y disnea sin habones ni hipotensión ni desencadenante alérgico",
      "slug": "ataque_de_asma"
     },
     {
      "dx": "Shock de otra causa",
      "clave": "hipotensión sin urticaria/habones; buscar causa séptica, cardiogénica o hemorrágica",
      "slug": "shock"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "Urticaria aislada",
      "clave": "habones y prurito SIN compromiso respiratorio ni circulatorio"
     },
     {
      "dx": "Síncope vasovagal",
      "clave": "bradicardia, palidez, recuperación al decúbito; sin habones ni sibilancias",
      "slug": "sincope"
     },
     {
      "dx": "Crisis de ansiedad/pánico",
      "clave": "disnea subjetiva, parestesias; sin habones ni hipotensión real",
      "slug": "crisis_de_ansiedad"
     },
     {
      "dx": "Síndrome escombroide / carcinoide / mastocitosis",
      "clave": "flushing y síntomas tras pescado mal conservado o cuadro recurrente"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Reconoce anafilaxia (diagnóstico clínico) y no demores el tratamiento",
    "detalle": "Inicio agudo con afectación cutáneo-mucosa + compromiso respiratorio y/o circulatorio, o ≥2 sistemas tras alérgeno. No esperes a la triptasa."
   },
   {
    "paso": "Administra adrenalina IM de inmediato",
    "detalle": "0,01 mg/kg (adulto 0,3-0,5 mg; niño 0,15 mg <25 kg) en cara anterolateral del muslo. Repite cada 5-15 min si persiste. Retira el alérgeno."
   },
   {
    "paso": "Coloca y soporta vía aérea/circulación",
    "sub": [
     {
      "nivel": "critico",
      "t": "Estridor/edema laríngeo progresivo → intubación precoz; prepara vía aérea quirúrgica (cricotiroidotomía) si fracasa."
     },
     {
      "nivel": "critico",
      "t": "Hipotensión → decúbito con piernas elevadas, O2, fluidos 1-2 L SSF/Ringer en bolo (20 mL/kg en niños)."
     }
    ]
   },
   {
    "paso": "Trata el broncoespasmo y añade fármacos de segunda línea",
    "detalle": "Salbutamol nebulizado ± ipratropio. Antihistamínico (dexclorfeniramina) y corticoide (metilprednisolona) solo como coadyuvantes, NUNCA en lugar de la adrenalina."
   },
   {
    "paso": "Maneja la refractariedad",
    "sub": [
     {
      "nivel": "critico",
      "t": "No responde a adrenalina IM → adrenalina en infusión IV continua con monitorización."
     },
     {
      "nivel": "emergente",
      "t": "En tratamiento con betabloqueantes → glucagón 1-5 mg IV."
     }
    ]
   },
   {
    "paso": "Observación y destino",
    "detalle": "Vigila ≥6 h tras resolución por reacción bifásica (8-24 h si grave o intubación). Urticaria aislada → alta con antihistamínico."
   },
   {
    "paso": "Alta con prevención",
    "detalle": "Receta 2 autoinyectores de adrenalina, antihistamínico y prednisona 40-60 mg/día 3-5 días, plan escrito, evitación del desencadenante y derivación a alergología."
   }
  ],
  "wikem_titulo": "Anaphylaxis"
 },
 "vertigo": {
  "ddx": [
   {
    "grupo": "Crítico · amenaza vital",
    "nivel": "critico",
    "items": [
     {
      "dx": "Ictus/infarto cerebeloso",
      "clave": "vértigo central: HINTS de riesgo, ataxia troncal, imposibilidad de caminar; impulso cefálico normal",
      "slug": "ictus"
     },
     {
      "dx": "Insuficiencia vertebrobasilar / AIT",
      "clave": "factores de riesgo vascular; síntomas troncoencefálicos asociados (diplopía, disartria)",
      "slug": "ictus"
     },
     {
      "dx": "Disección de arteria vertebral",
      "clave": "cervicalgia/cefalea occipital tras maniobra cervical; síndrome de Wallenberg",
      "slug": "sindrome_aortico_agudo"
     }
    ]
   },
   {
    "grupo": "Emergente",
    "nivel": "emergente",
    "items": [
     {
      "dx": "Síndrome de Ramsay Hunt",
      "clave": "vértigo + parálisis facial + vesículas en CAE/pabellón",
      "slug": "otalgia"
     },
     {
      "dx": "Laberintitis",
      "clave": "vértigo intenso + hipoacusia + acúfenos, contexto de otitis",
      "slug": "otalgia"
     },
     {
      "dx": "Neuritis vestibular",
      "clave": "vértigo agudo prolongado, sin clínica coclear; impulso cefálico patológico"
     }
    ]
   },
   {
    "grupo": "No emergente",
    "nivel": "no_emergente",
    "items": [
     {
      "dx": "VPPB",
      "clave": "crisis breves (<1 min) con cambios posturales; Dix-Hallpike positivo"
     },
     {
      "dx": "Enfermedad de Ménière",
      "clave": "crisis recurrentes de vértigo + hipoacusia fluctuante + acúfenos + plenitud ótica"
     },
     {
      "dx": "Vértigo de origen metabólico/tóxico",
      "clave": "hipoglucemia, alcohol, aminoglucósidos, disfunción tiroidea",
      "slug": "hipoglucemia"
     }
    ]
   }
  ],
  "plan": [
   {
    "paso": "Estabiliza y excluye causas sistémicas",
    "detalle": "Constantes y glucemia capilar. Trata hipoglucemia si la hay. Valora hidratación si vómitos intensos."
   },
   {
    "paso": "Diferencia periférico de central con la exploración",
    "detalle": "Anamnesis (duración, desencadenantes, clínica coclear) y exploración neurológica completa con marcha."
   },
   {
    "paso": "Aplica el protocolo HINTS en vértigo agudo continuo",
    "sub": [
     {
      "nivel": "critico",
      "t": "impulso cefálico normal, nistagmo bidireccional/vertical o skew presente (peligroso) → sospecha central, TC/RM y código ictus si procede"
     },
     {
      "t": "impulso cefálico patológico, nistagmo unidireccional y sin skew (tranquilizador) → origen periférico"
     }
    ]
   },
   {
    "paso": "Maniobras diagnóstico-terapéuticas si sospecha periférica",
    "detalle": "Dix-Hallpike; si VPPB confirmado, realiza maniobra de Epley."
   },
   {
    "paso": "Trata sintomáticamente el vértigo periférico",
    "detalle": "Sulpirida 100 mg IM/IV o dimenhidrinato; metoclopramida 10 mg IV para vómitos. Sedante vestibular pocos días; no cronificar."
   },
   {
    "paso": "Decide destino",
    "sub": [
     {
      "t": "vértigo periférico que mejora y deambula → alta con tratamiento y revisión por ORL"
     },
     {
      "nivel": "critico",
      "t": "sospecha central, inestabilidad grave o focalidad → neuroimagen urgente e ingreso/valoración por Neurología"
     }
    ]
   }
  ],
  "wikem_titulo": "Vertigo"
 }
};
  T.forEach(function (t) {
    var p = PATCH[t.slug];
    if (p) {
      if (p.ddx && p.ddx.length) t.ddx = p.ddx;
      if (p.plan && p.plan.length) t.plan = p.plan;
      if (p.wikem_titulo) t.wikem_titulo = p.wikem_titulo;
      if (p.biblio && p.biblio.length) t.biblio_extra = p.biblio;
    }
    // cablear HEART a dolor torácico / SCA
    if (t.slug === "sindrome_coronario_agudo" || t.slug === "dolor_toracico_agudo") {
      t.escalas = t.escalas || [];
      if (t.escalas.indexOf("heart") === -1) t.escalas.unshift("heart");
    }
  });
})();
