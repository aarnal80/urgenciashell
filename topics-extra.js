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
 "antagonistas_y_antidotos": {
  "ddx": [],
  "plan": [
   {
    "paso": "Estabiliza primero (ABC) y trata sintomáticamente",
    "detalle": "Monitor ECG, TA, SatO2 y glucemia; vía venosa. El soporte vital y el tratamiento sintomático preceden y acompañan siempre al antídoto. Recuerda que solo existe antídoto para una fracción de los tóxicos."
   },
   {
    "paso": "Identifica el tóxico y verifica disponibilidad",
    "detalle": "Anamnesis, toxíndromo y toxicología orientan el antídoto. Confirma de antemano la cadena de suministro local: varios son medicamentos extranjeros o fórmulas magistrales de acceso limitado."
   },
   {
    "paso": "Administra el antagonista/antídoto con dosis precisas",
    "sub": [
     {
      "nivel": "critico",
      "t": "Opiáceos con depresión respiratoria → naloxona inmediata, repetible cuantas veces sea necesario."
     },
     {
      "t": "Benzodiacepinas → flumazenilo 0,3 mg IV cada 30 s (máx 3 mg); si recaída, perfusión 0,1-0,4 mg/h."
     },
     {
      "t": "Anticolinérgicos → fisostigmina 1-2 mg/10 min (máx 4 mg/30 min)."
     },
     {
      "t": "Anticoagulantes cumarínicos → vitamina K 10-20 mg; dabigatrán con hemorragia → idarucizumab 5 g."
     }
    ]
   },
   {
    "paso": "Aplica los antídotos tiempo-dependientes sin demora",
    "sub": [
     {
      "nivel": "critico",
      "t": "Cianuro con inestabilidad → hidroxicobalamina 5 g (o edetato dicobáltico 600 mg + tiosulfato sódico)."
     },
     {
      "nivel": "critico",
      "t": "Organofosforados con síndrome colinérgico → atropina a dosis altas + pralidoxima 30 mg/kg precoz."
     },
     {
      "nivel": "critico",
      "t": "Metanol/etilenglicol → fomepizol 15 mg/kg inicial, luego 10 mg/kg/12 h 48 h (metanol: añade folinato cálcico)."
     },
     {
      "nivel": "emergente",
      "t": "Amanita phalloides → silibinina, penicilina G y N-acetilcisteína cuanto antes."
     }
    ]
   },
   {
    "paso": "Considera la emulsión lipídica en cardiotoxicidad refractaria",
    "sub": [
     {
      "nivel": "critico",
      "t": "Intoxicación grave por anestésicos locales, bloqueantes del calcio, betabloqueantes o tricíclicos sin respuesta convencional → emulsión lipídica 20%: 1,5 mL/kg inicial + 0,25 mL/kg/min (máx 8-10 mL/kg)."
     },
     {
      "t": "Betabloqueantes → glucagón 50 µg/kg (máx 10 mg) + 4 mg/h; hierro → deferoxamina; metahemoglobinemia → azul de metileno (máx 7 mg/kg)."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Todo paciente que precise antídoto IV queda en observación/ingreso hasta confirmar estabilidad. UCI en Amanita phalloides, cianuro, organofosforados graves y digitálicos con Fab. Monitorización mínima 24 h tras suero antiviperino."
   }
  ]
 },
 "apoplejia_hipofisaria": {
  "ddx": [],
  "plan": [
   {
    "paso": "Reconoce y estabiliza (emergencia endocrina)",
    "detalle": "Sospecha ante cefalea brusca, vómitos, déficit visual, oftalmoplejía y alteración de conciencia. Monitoriza TA, nivel de conciencia y glucemia; vía venosa, analítica con cortisol e iones. Asegura vía aérea si deterioro."
   },
   {
    "paso": "Administra glucocorticoide IV ante la sospecha, sin esperar confirmación",
    "detalle": "Hidrocortisona 100 mg en bolo IV inmediato (insuficiencia suprarrenal secundaria en 60-70%), seguida de 50-100 mg/6 h IV las primeras 24 h. Alternativa: dexametasona 4-8 mg en bolo + 4 mg/4-6 h IV (también reduce edema)."
   },
   {
    "paso": "Corrige las alteraciones que ponen en riesgo la vida",
    "sub": [
     {
      "t": "Hipotensión → descarta hipocorticismo y trata con hidrocortisona y volumen.",
      "nivel": "critico"
     },
     {
      "t": "Hipoglucemia → manifestación de insuficiencia suprarrenal central; corrige de inmediato.",
      "nivel": "critico"
     },
     {
      "t": "Hiponatremia severa → valora hipotiroidismo central o SIADH asociado.",
      "nivel": "emergente"
     }
    ]
   },
   {
    "paso": "Reponer volumen y tratar síntomas",
    "detalle": "Suero salino alternando con glucosado 5% 3.000 mL/24 h (modificar según IC o PVC). Cefalea: paracetamol 1 g/6 h IV (metamizol 2 g/8 h alternativa). Vómitos: metoclopramida 10 mg/8 h IV."
   },
   {
    "paso": "Realiza el diagnóstico diferencial y la prueba de imagen",
    "detalle": "Prioriza descartar hemorragia subaracnoidea y meningitis. TC craneal urgente (detecta hemorragia aguda en primeras 72 h); RM de elección para valoración completa del adenoma."
   },
   {
    "paso": "Valora la indicación quirúrgica",
    "sub": [
     {
      "t": "Deterioro del nivel de conciencia, déficit visual grave/progresivo o escasa mejoría farmacológica → cirugía transesfenoidal (preferible en la 1ª semana).",
      "nivel": "emergente"
     },
     {
      "t": "Estabilidad con buena respuesta a glucocorticoides → manejo conservador y seguimiento."
     }
    ]
   },
   {
    "paso": "Destino",
    "detalle": "Siempre ingreso: emergencia médica. UCI/soporte vital si precisa intubación. Observación hasta confirmar diagnóstico si no precisa soporte avanzado; después ingreso en Endocrinología para estudio hormonal y ajuste sustitutivo."
   }
  ]
 },
 "arritmias_cardiacas_estrategia_diagnostica_y_tratamiento_gen": {
  "ddx": [],
  "plan": [
   {
    "paso": "Reconoce y estabiliza (primeros minutos)",
    "detalle": "Monitor ECG continuo, TA, SatO2 y vía venosa. O2 al 50% (Venturi o reservorio) solo si SpO2 <90%; si no mejora, VMNI. Palpa pulso central: si ausente, inicia SVB/SVA."
   },
   {
    "paso": "Valora la repercusión hemodinámica",
    "detalle": "Busca signos de bajo gasto, shock cardiogénico, edema agudo de pulmón o isquemia. Principio rector: no ser más agresivo con la arritmia de lo que esta lo es con el paciente."
   },
   {
    "paso": "Realiza ECG de 12 derivaciones con tira de ritmo",
    "detalle": "Clasifica: taqui- o bradiarritmia; en taquiarritmias mide la anchura del QRS (<0,12 s supraventricular vs >0,12 s ventricular o asumido ventricular si cardiopatía)."
   },
   {
    "paso": "Decide según ritmo y estabilidad",
    "sub": [
     {
      "nivel": "emergente",
      "t": "Taquiarritmia con inestabilidad (shock, EAP, SCA) → cardioversión eléctrica sincronizada urgente sin demora diagnóstica, previa sedoanalgesia (midazolam 0,1 mg/kg IV + fentanilo 2 µg/kg IV); bifásica 150 J ascendente hasta 200 J."
     },
     {
      "t": "Taquiarritmia QRS estrecho estable → maniobras vagales; si no revierte, adenosina 6 mg IV en bolo rápido, repetir 12 mg cada 5 min (máx 24 mg)."
     },
     {
      "nivel": "critico",
      "t": "Bradiarritmia inestable → marcapasos transcutáneo urgente con analgesia (tramadol IV); atropina 0,5-1 mg IV (NO en BAV Mobitz II ni BAV completo con escape ventricular)."
     }
    ]
   },
   {
    "paso": "Trata causas y contraindicaciones específicas",
    "detalle": "Corrige hipoxemia, alteraciones electrolíticas y fármacos. Si intoxicación digitálica, la cardioversión está contraindicada (solo 25-50 J valorando riesgo/beneficio). En preexcitación antidrómica NO uses adenosina ni maniobras vagales."
   },
   {
    "…134697 tokens truncated…e", etiologia:"Enterotoxina preformada de Staphylococcus aureus", clave:"TOXINA preformada"},
    {inicio:"1-6 h", patron:"Vómitos predominantes; diarrea posible; fiebre poco frecuente", etiologia:"Toxina emética de Bacillus cereus", clave:"TOXINA preformada"},
    {inicio:"6-24 h", patron:"Diarrea y cólicos; vómitos/fiebre poco frecuentes", etiologia:"Enterotoxina de Clostridium perfringens", clave:"TOXINA producida en el huésped"},
    {inicio:"12-48 h", patron:"Vómitos, diarrea, náuseas y cólicos; febrícula posible", etiologia:"Norovirus", clave:"Infección viral"},
    {inicio:"18-36 h (rango descrito 2 h-8 días)", patron:"Diplopía, disfagia, disartria y debilidad/parálisis descendente", etiologia:"Botulismo alimentario por neurotoxina de Clostridium botulinum", clave:"TOXINA: urgencia vital; activar antitoxina/protocolo específico"},
    {inicio:"2-5 días", patron:"Diarrea, a menudo sanguinolenta, fiebre y dolor abdominal", etiologia:"Campylobacter", clave:"Infección bacteriana"},
    {inicio:"3-4 días", patron:"Dolor intenso y diarrea sanguinolenta con poca fiebre", etiologia:"Escherichia coli productora de toxina Shiga (STEC), también denominada enterohemorrágica (EHEC)", clave:"Toxina Shiga: riesgo de SHU; evitar antibióticos"},
    {inicio:"6 h-6 días", patron:"Diarrea con fiebre, cólicos y vómitos posibles", etiologia:"Salmonella no tifoidea", clave:"Infección bacteriana; tratar solo en indicaciones seleccionadas"}
  ];
  PATCH["nauseas_vomitos_y_diarrea"] = {
    "ddx": [
      {"grupo":"Crítico · amenaza vital","nivel":"critico","items":[
        {"dx":"Síndrome coronario agudo / IAM","clave":"Vómitos con dolor torácico o electrocardiograma (ECG) alterado","slug":"sindrome_coronario_agudo"},
        {"dx":"Cetoacidosis diabética","clave":"Vómitos, dolor abdominal, hiperglucemia, cetonas y acidosis","slug":"cetoacidosis_diabetica"},
        {"dx":"Hemorragia intracraneal / hipertensión intracraneal (HTIC)","clave":"Vómitos sin náusea previa con cefalea progresiva o focalidad","slug":"hemorragia_subaracnoidea_espontanea"},
        {"dx":"Isquemia mesentérica","clave":"Dolor desproporcionado y lactato elevado"}
      ]},
      {"grupo":"Emergente","nivel":"emergente","items":[
        {"dx":"Intoxicación alimentaria grave","clave":"Brote, deshidratación, sangre/fiebre, sepsis o ventana compatible con TOXINA","slug":"intoxicacion_alimentaria"},
        {"dx":"Obstrucción intestinal","clave":"Vómitos, distensión, dolor cólico y cierre intestinal","slug":"obstruccion_intestinal"},
        {"dx":"Colitis por C. difficile","clave":"Diarrea grave tras antibióticos; fiebre/dolor; riesgo de megacolon"},
        {"dx":"Botulismo alimentario","clave":"Diplopía, disfagia o parálisis descendente tras alimento sospechoso","slug":"botulismo"}
      ]},
      {"grupo":"No emergente","nivel":"no_emergente","items":[
        {"dx":"GEA no complicada","clave":"Diarrea acuosa sin fiebre ni sangre; manejo de soporte"},
        {"dx":"Norovirus u otra infección viral","clave":"Inicio 12-48 h, vómitos y diarrea, posible brote"},
        {"dx":"Vómitos del embarazo / hiperémesis","clave":"Amenorrea o test de gestación positivo"},
        {"dx":"Vértigo periférico / laberintitis","clave":"Náuseas con giro de objetos y nistagmo; sin focalidad","slug":"vertigo"}
      ]}
    ],
    "briefing": [
      "Abreviaturas: GEA = gastroenteritis aguda; STEC = Escherichia coli productora de toxina Shiga; EHEC = Escherichia coli enterohemorrágica; SHU = síndrome hemolítico urémico; ABCDE = vía aérea, respiración, circulación, discapacidad neurológica y exposición; VO = vía oral; IV = vía intravenosa; DGVS = Deutsche Gesellschaft für Gastroenterologie, Verdauungs- und Stoffwechselkrankheiten; ECDC = European Centre for Disease Prevention and Control; RENAVE = Red Nacional de Vigilancia Epidemiológica; ISCIII = Instituto de Salud Carlos III; AESAN = Agencia Española de Seguridad Alimentaria y Nutrición; IAM = infarto agudo de miocardio; HTIC = hipertensión intracraneal.",
      "El manejo inicial de la intoxicación/toxiinfección alimentaria es de soporte: valorar gravedad, rehidratar y buscar causas específicas.",
      "El intervalo entre la ingesta y los síntomas orienta el diagnóstico. Inicio en minutos-horas con vómitos o clínica neurológica debe etiquetarse como SOSPECHA DE TOXINA y no como confirmación etiológica.",
      "No se recomienda antibioterapia ni probióticos de rutina en la GEA no complicada; STEC/EHEC requiere evitar antibióticos por riesgo de SHU.",
      "Brote (dos o más personas con enfermedad similar tras un alimento común) exige coordinación con Salud Pública y recogida de muestras cuando proceda."
    ],
    "red_flags": [
      "Shock, alteración de conciencia, oliguria, deshidratación grave o incapacidad para beber.",
      "Diarrea sanguinolenta, fiebre alta, sepsis, dolor abdominal intenso o sospecha de SHU (palidez, oliguria, hematomas, deterioro renal) tras posible STEC.",
      "Vómitos incoercibles, fracaso de rehidratación oral o comorbilidad que pueda descompensarse.",
      "Diplopía, disfagia, disartria, ptosis o debilidad/parálisis descendente: SOSPECHA DE TOXINA BOTULÍNICA.",
      "Inicio muy rápido tras alimento con rubor/prurito, parestesias, broncoespasmo o síntomas neurológicos: SOSPECHA DE TOXINA química o marina.",
      "Dos o más afectados por un alimento común, manipulador enfermo o exposición colectiva: activar Salud Pública."
    ],
    "tratamiento": [
      {"escenario":"Rehidratación","preferencia":"eleccion","indicacion":"GEA leve sin deshidratación ni intolerancia oral","farmaco":"Solución de rehidratación oral","dosis":"Iniciar inmediatamente; dosis no especificada en la guía DGVS consultada","via":"VO","notas":"Continuar alimentación tolerada y evitar dietas restrictivas."},
      {"escenario":"Antiemesis","indicacion":"Adulto con vómitos que dificultan la rehidratación","farmaco":"Ondansetrón","drug_id":"ondansetron","dosis":"Dosis no especificada en la guía DGVS consultada","via":"VO/IV","notas":"Uso corto; valorar QT, interacciones y contexto clínico."},
      {"escenario":"Antiemesis","indicacion":"Adulto con vómitos; alternativa sintomática","farmaco":"Metoclopramida","drug_id":"metoclopramida","dosis":"Dosis no especificada en la guía DGVS consultada","via":"VO/IV","notas":"Uso corto; vigilar reacciones extrapiramidales."},
      {"escenario":"Antidiarreico","indicacion":"Solo adulto afebril, sin sangre y durante menos de 48 h","farmaco":"Loperamida","drug_id":"loperamida","dosis":"Dosis no especificada en la guía DGVS consultada","via":"VO","notas":"No usar en fiebre, sangre, sospecha de STEC/EHEC, colitis inflamatoria ni en niños."},
      {"escenario":"Antibiótico empírico","indicacion":"Solo enfermedad grave/invasiva, fiebre alta, heces sanguinolentas-mucosas, sepsis o inmunodeficiencia funcional, tras toma de muestras si es posible","farmaco":"Azitromicina","drug_id":"azitromicina","dosis":"500 mg/día por vía oral durante 3 días o 1000 mg por vía oral en dosis única","via":"VO","notas":"No usar de rutina; fluoroquinolonas no son primera línea empírica. No iniciar si sospecha de STEC/EHEC salvo infección extraintestinal."}
    ],
    "tabla_tiempos": TABLA_TIEMPOS_ALIMENTARIA,
    "plan": [
      {"paso":"Valora gravedad y exposición","sub":[
        {"nivel":"critico","t":"ABCDE, constantes, estado mental, perfusión, diuresis y glucemia si hay inestabilidad."},
        {"t":"Pregunta alimento/agua, hora de ingesta, número de afectados, viaje, antibióticos, embarazo, edad extrema e inmunodeficiencia."}
      ]},
      {"paso":"Usa el tiempo desde la ingesta","detalle":"Consulta la tabla: ventanas de minutos-horas con vómitos, rubor/parestesias o clínica neurológica sugieren TOXINA; las ventanas de días orientan más a infección. El tiempo no confirma por sí solo la etiología."},
      {"paso":"Repón líquidos y electrolitos","sub":[
        {"t":"Rehidratación oral inmediata si puede beber; alimentación normal tolerada, sin dieta restrictiva."},
        {"nivel":"emergente","t":"Shock, deshidratación grave, alteración de conciencia, vómitos incontrolables o fracaso de vía oral -> fluidoterapia IV y monitorización."}
      ]},
      {"paso":"Solicita pruebas dirigidas","detalle":"Heces si cuadro grave, sanguinolento, prolongado, paciente de riesgo o brote; hemocultivos si sepsis/fiebre entérica/inmunodepresión. En sospecha de TOXINA (botulismo, marina o química), conserva muestras según Salud Pública/Toxicología."},
      {"paso":"Evita tratamientos innecesarios","sub":[
        {"t":"GEA no complicada -> no antibiótico de rutina y no probióticos de rutina."},
        {"t":"STEC/EHEC -> no antibiótico; vigila SHU."},
        {"t":"Loperamida solo adulto afebril, sin sangre y <48 h; nunca sustituye la rehidratación."}
      ]},
      {"paso":"Indica antibiótico solo en excepciones","detalle":"Tras muestras, si enfermedad invasiva/grave, fiebre alta, sangre-moco, sepsis o inmunodeficiencia funcional: azitromicina 500 mg/día VO 3 días o 1000 mg VO dosis única. Salmonella no tifoidea: solo infección sistémica o paciente de alto riesgo. Fluoroquinolonas no son primera línea empírica."},
      {"paso":"Activa Salud Pública si hay brote o TOXINA","detalle":"Dos o más casos similares tras alimento común, sospecha de botulismo/toxina marina/química o alimento implicado: coordina notificación, muestras y trazabilidad con Salud Pública, RENAVE/AESAN y el protocolo autonómico."},
      {"paso":"Decide destino","detalle":"Alta solo si estable, sin deshidratación relevante y tolera líquidos, con signos de alarma. Ingresa si deshidratación grave (>9%), shock, alteración de conciencia, vómitos incontrolables, fracaso de rehidratación oral, sepsis, comorbilidad de riesgo o sospecha de TOXINA/botulismo."}
    ],
    "criterios_ingreso": [
      "Deshidratación grave (>9% del peso), shock, alteración de conciencia o deterioro hemodinámico.",
      "Vómitos incontrolables o fracaso de rehidratación oral.",
      "Sepsis, diarrea sanguinolenta grave, sospecha de SHU, botulismo o toxina química/marina.",
      "Comorbilidad relevante, inmunodeficiencia funcional, edad extrema o embarazo con repercusión clínica.",
      "Necesidad de vigilancia estrecha, fluidoterapia IV, antitoxina o coordinación toxicológica/epidemiológica."
    ],
    "conexiones": [
      {"slug":"intoxicacion_alimentaria","motivo":"Capítulo específico con tabla temporal, toxíndromes y manejo de brotes."},
      {"slug":"botulismo","motivo":"Toxina alimentaria con parálisis descendente y necesidad de antitoxina/protocolo específico."},
      {"slug":"intoxicacion_aguda_por_setas","motivo":"Toxinas de setas con ventanas temporales y daño hepatorrenal diferenciado."},
      {"slug":"gastroenteritis_aguda_en_la_infancia","motivo":"El manejo y las indicaciones etiológicas difieren en pediatría."},
      {"slug":"sepsis","motivo":"La GEA invasiva puede complicarse con sepsis."}
    ],
    "biblio": [
      "DGVS. S2k-Leitlinie Gastrointestinale Infektionen, versión 2.0 (11/2023): https://www.dgvs.de/leitlinien/gi-infektionen/gastrointestinale-infektionen/?digital=1",
      "SEIP/AEPap/SEPEAP/SEGHNP/SEUP. Documento de consenso sobre gastroenteritis aguda infecciosa (2025): https://www.analesdepediatria.org/es-documento-consenso-seip-aepap-sepeap-seghnp-seup-sobre-el-articulo-S169540332500219X",
      "CDC. Confirming an Etiology in Foodborne Outbreaks (30/07/2025), tablas de incubación y toxinas: https://www.cdc.gov/foodborne-outbreaks/php/confirming-cause/index.html",
      "ECDC. Toolkit for investigation and response to food- and waterborne disease outbreaks in the EU: https://www.ecdc.europa.eu/en/publications-data/toolkit-investigation-and-response-food-and-waterborne-disease-outbreaks-eu",
      "RENAVE/ISCIII. Brotes de transmisión alimentaria 2024: https://cne.isciii.es/documents/d/cne/informe_brotes_alim_2024_final",
      "AESAN. Gestión de alertas alimentarias: https://www.aesan.gob.es/AECOSAN/web/operadores_economicos/seccion/red_alerta_alimentaria.htm"
    ],
    "wikem_titulo": "Nausea and vomiting"
  };
  if (!T.some(function (t) { return t.slug === "intoxicacion_alimentaria"; })) {
    T.push({
      slug: "intoxicacion_alimentaria",
      number: 220,
      title: "Intoxicación alimentaria",
      categoria: "Urgencias del Aparato Digestivo",
      status: "revision_clinica",
      briefing: [
        "Abreviaturas: GEA = gastroenteritis aguda; STEC = Escherichia coli productora de toxina Shiga; EHEC = Escherichia coli enterohemorrágica; SHU = síndrome hemolítico urémico; ABCDE = vía aérea, respiración, circulación, discapacidad neurológica y exposición; VO = vía oral; IV = vía intravenosa; DGVS = Deutsche Gesellschaft für Gastroenterologie, Verdauungs- und Stoffwechselkrankheiten; ECDC = European Centre for Disease Prevention and Control; RENAVE = Red Nacional de Vigilancia Epidemiológica; ISCIII = Instituto de Salud Carlos III; AESAN = Agencia Española de Seguridad Alimentaria y Nutrición.",
        "Síndrome agudo tras ingerir alimento o agua contaminados por microorganismos, toxinas preformadas, biotoxinas o contaminantes químicos.",
        "La cronología y el patrón clínico orientan: marca SOSPECHA DE TOXINA cuando el inicio es muy rápido o hay un toxíndrome; la confirmación requiere muestras y coordinación de Salud Pública.",
        "La prioridad es la rehidratación, la búsqueda de gravedad y la identificación de botulismo, STEC/EHEC, brotes y otras etiologías específicas."
      ],
      red_flags: [
        "Shock, deshidratación grave, alteración de conciencia, oliguria o incapacidad para beber.",
        "Diarrea sanguinolenta, fiebre alta, dolor intenso, sepsis o signos de SHU.",
        "Diplopía, disfagia, disartria, ptosis o parálisis descendente: SOSPECHA DE TOXINA BOTULÍNICA.",
        "Rubor/prurito, parestesias, debilidad o dificultad respiratoria tras pescado/marisco: SOSPECHA DE TOXINA MARINA/QUÍMICA.",
        "Dos o más casos similares tras un alimento común: brote y notificación urgente."
      ],
      tabla_tiempos: TABLA_TIEMPOS_ALIMENTARIA,
      plan: [
        {"paso":"Estabiliza y define la exposición","detalle":"ABCDE, constantes, perfusión, diuresis, estado mental y tolerancia oral; registra alimento, hora de ingesta y número de afectados."},
        {"paso":"Clasifica por tiempo y toxíndrome","detalle":"Inicio en minutos-horas con vómitos, rubor/parestesias o clínica neurológica -> escribe explícitamente SOSPECHA DE TOXINA y activa Toxicología/Salud Pública."},
        {"paso":"Rehidrata","detalle":"Solución de rehidratación oral de inmediato si tolera; alimentación normal tolerada. Fluidoterapia IV si shock, deshidratación grave o fracaso oral."},
        {"paso":"Pide pruebas dirigidas","detalle":"Heces en cuadros graves, sanguinolentos, prolongados, de riesgo o de brote; hemocultivos si sepsis. Muestras específicas para botulismo/toxinas según protocolo."},
        {"paso":"Trata sin sobreutilizar antibióticos","detalle":"No antibiótico rutinario ni probióticos rutinarios. Antibiótico empírico solo en excepciones; no antibiótico si sospecha STEC/EHEC."},
        {"paso":"Coordina el brote","detalle":"Activa Salud Pública, RENAVE/AESAN y trazabilidad del alimento; conserva muestras según instrucciones."},
        {"paso":"Decide destino","detalle":"Ingreso si criterios de gravedad, fracaso de rehidratación oral, sepsis, botulismo/toxina o alto riesgo; alta solo con estabilidad y tolerancia oral."}
      ],
      tratamiento: [
        {"escenario":"Rehidratación","preferencia":"eleccion","indicacion":"Primera medida en todo paciente que tolere vía oral","farmaco":"Solución de rehidratación oral","dosis":"Dosis no especificada en las guías consultadas","via":"VO","notas":"No sustituir por refrescos; continuar alimentación tolerada."},
        {"escenario":"Antibiótico empírico","indicacion":"Solo cuadro grave/invasivo, fiebre alta, sangre-moco, sepsis o inmunodeficiencia funcional tras muestras","farmaco":"Azitromicina","drug_id":"azitromicina","dosis":"500 mg/día por vía oral durante 3 días o 1000 mg por vía oral en dosis única","via":"VO","notas":"No usar de rutina; evitar en sospecha STEC/EHEC salvo infección extraintestinal."},
        {"escenario":"Antidiarreico","indicacion":"Solo adulto afebril, sin sangre y <48 h","farmaco":"Loperamida","drug_id":"loperamida","dosis":"Dosis no especificada en la guía DGVS consultada","via":"VO","notas":"No en niños ni en diarrea inflamatoria/STEC."}
      ],
      criterios_ingreso: [
        "Deshidratación grave (>9%), shock, alteración de conciencia o fracaso de rehidratación oral.",
        "Vómitos incontrolables, sepsis, diarrea sanguinolenta grave o sospecha de SHU.",
        "Sospecha de botulismo o toxina marina/química, necesidad de antitoxina o vigilancia respiratoria.",
        "Comorbilidad, inmunodeficiencia, edad extrema o embarazo con repercusión clínica."
      ],
      conexiones: [
        {slug:"nauseas_vomitos_y_diarrea", motivo:"Síndrome de presentación y capítulo actualizado con la tabla temporal."},
        {slug:"botulismo", motivo:"Neurotoxina alimentaria con parálisis descendente."},
        {slug:"intoxicacion_aguda_por_setas", motivo:"Toxinas alimentarias de setas."},
        {slug:"gastroenteritis_aguda_en_la_infancia", motivo:"Manejo específico pediátrico."},
        {slug:"sepsis", motivo:"Complicación de infección invasiva."}
      ],
      biblio_extra: [
        "DGVS. S2k-Leitlinie Gastrointestinale Infektionen, versión 2.0 (11/2023): https://www.dgvs.de/leitlinien/gi-infektionen/gastrointestinale-infektionen/?digital=1",
        "SEIP/AEPap/SEPEAP/SEGHNP/SEUP. Documento de consenso (2025): https://www.analesdepediatria.org/es-documento-consenso-seip-aepap-sepeap-seghnp-seup-sobre-el-articulo-S169540332500219X",
        "CDC. Confirming an Etiology in Foodborne Outbreaks (30/07/2025): https://www.cdc.gov/foodborne-outbreaks/php/confirming-cause/index.html",
        "ECDC. Toolkit de brotes transmitidos por alimentos y agua: https://www.ecdc.europa.eu/en/publications-data/toolkit-investigation-and-response-food-and-waterborne-disease-outbreaks-eu",
        "RENAVE/ISCIII. Brotes de transmisión alimentaria 2024: https://cne.isciii.es/documents/d/cne/informe_brotes_alim_2024_final",
        "AESAN. Red de alerta alimentaria: https://www.aesan.gob.es/AECOSAN/web/operadores_economicos/seccion/red_alerta_alimentaria.htm"
      ]
    });
  }
  T.forEach(function (t) {
    var p = PATCH[t.slug];
    if (p) {
      if (p.ddx && p.ddx.length) t.ddx = p.ddx;
      if (p.plan && p.plan.length) t.plan = p.plan;
      if (p.tabla_tiempos && p.tabla_tiempos.length) t.tabla_tiempos = p.tabla_tiempos;
      if (p.briefing && p.briefing.length) t.briefing = p.briefing;
      if (p.red_flags && p.red_flags.length) t.red_flags = p.red_flags;
      if (p.tratamiento && p.tratamiento.length) t.tratamiento = p.tratamiento;
      if (p.criterios_ingreso && p.criterios_ingreso.length) t.criterios_ingreso = p.criterios_ingreso;
      if (p.conexiones && p.conexiones.length) t.conexiones = p.conexiones;
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
