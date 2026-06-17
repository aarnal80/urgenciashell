/* DEMO temporal — Diagnóstico diferencial (basado en WikEM «Acute chest pain»).
   Parchea SOLO "Síndrome coronario agudo".
   Para retirarlo: borra este archivo y su <script> en index.html.
   El contenido definitivo debe generarse desde build_app_data.py (campo "ddx").

   Estructura del campo:
     ddx: [ { grupo, nivel, items: [ { dx, clave, slug? } ] } ]
       nivel: "critico" | "emergente" | "no_emergente"  (controla el color)
       slug : opcional; enlaza al tema de ese diagnóstico si existe en la app. */
(function () {
  var T = window.TOPICS || [];
  var sca = null;
  for (var i = 0; i < T.length; i++) {
    if (T[i].slug === "sindrome_coronario_agudo") { sca = T[i]; break; }
  }
  if (!sca) return;

  // Fuente WikEM del tema (para el apartado de Bibliografía)
  sca.wikem_url = "https://www.wikem.org/wiki/Acute_coronary_syndrome_(main)";
  sca.wikem_titulo = "Acute coronary syndrome";

  // --- Escala HEART (faltaba en dolor torácico / infarto) — criterios de WikEM ---
  if (window.SCALES && !window.SCALES.heart) {
    window.SCALES.heart = {
      id: "heart",
      nombre: "HEART",
      nombre_largo: "Escala HEART para dolor torácico",
      para: "Riesgo de evento cardiaco mayor (MACE) a 6 semanas en dolor torácico de posible origen coronario.",
      tipo: "suma",
      items: [
        { id: "historia", label: "Historia clínica (anamnesis)", tipo: "opciones", opciones: [
          { label: "Poco sospechosa", puntos: 0 },
          { label: "Moderadamente sospechosa", puntos: 1 },
          { label: "Muy sospechosa", puntos: 2 } ] },
        { id: "ecg", label: "ECG", tipo: "opciones", opciones: [
          { label: "Normal", puntos: 0 },
          { label: "Alteración inespecífica de la repolarización", puntos: 1 },
          { label: "Descenso significativo del ST", puntos: 2 } ] },
        { id: "edad", label: "Edad", tipo: "opciones", opciones: [
          { label: "< 45 años", puntos: 0 },
          { label: "45-64 años", puntos: 1 },
          { label: "≥ 65 años", puntos: 2 } ] },
        { id: "factores", label: "Factores de riesgo (HTA, dislipemia, DM, obesidad, tabaquismo, AF de ECV o enfermedad aterosclerótica conocida)", tipo: "opciones", opciones: [
          { label: "Ningún factor", puntos: 0 },
          { label: "1-2 factores", puntos: 1 },
          { label: "≥ 3 factores o enfermedad aterosclerótica conocida", puntos: 2 } ] },
        { id: "troponina", label: "Troponina", tipo: "opciones", opciones: [
          { label: "≤ límite normal", puntos: 0 },
          { label: "1-3× el límite normal", puntos: 1 },
          { label: "> 3× el límite normal", puntos: 2 } ] }
      ],
      interpretacion: [
        { min: 0, max: 3, label: "Riesgo bajo", detalle: "MACE a 6 semanas 0,9-1,7%. Valorar alta precoz con seguimiento." },
        { min: 4, max: 6, label: "Riesgo moderado", detalle: "MACE 12-16,6%. Ingreso/observación con troponinas seriadas." },
        { min: 7, max: 10, label: "Riesgo alto", detalle: "MACE 50-65%. Estrategia invasiva precoz (cardiología/cateterismo)." }
      ],
      nota: "Validada para dolor torácico indiferenciado en urgencias. Fuente: WikEM (Six et al., HEART score)."
    };
  }
  // Cablear HEART a los temas de dolor torácico / SCA (al principio de la lista)
  T.forEach(function (t) {
    if (t.slug === "sindrome_coronario_agudo" || t.slug === "dolor_toracico_agudo") {
      t.escalas = t.escalas || [];
      if (t.escalas.indexOf("heart") === -1) t.escalas.unshift("heart");
    }
  });

  // Plan de trabajo / algoritmo (qué hacer, paso a paso) — WikEM + Jiménez Murillo
  sca.plan = [
    { paso: "Reconoce y monitoriza (primeros minutos)",
      detalle: "Monitor ECG continuo, TA y SatO₂; vía venosa periférica. O₂ solo si SatO₂ <90% o disnea. AAS 300 mg masticado salvo contraindicación." },
    { paso: "ECG de 12 derivaciones en < 10 min",
      detalle: "Repítelo si el dolor cambia o persiste; valora derivaciones derechas/posteriores. Clasifica de inmediato: SCACEST (elevación del ST o BCRI nuevo) vs SCASEST." },
    { paso: "Analítica y control del dolor",
      detalle: "Troponina hs (0 h y 1-3 h), hemograma, función renal, iones y coagulación. Nitroglicerina sl si dolor (no si IAM de VD, hipotensión o IPDE-5 reciente); morfina iv si dolor refractario." },
    { paso: "Decide la estrategia según el ECG", sub: [
        { nivel: "critico", t: "SCACEST → reperfusión URGENTE: ICP primaria si <120 min desde el primer contacto médico; si no es posible, fibrinólisis en <10 min. Añade doble antiagregación + anticoagulación." },
        { nivel: "emergente", t: "SCASEST → estratifica el riesgo (escala GRACE + troponina), anticoagula y doble antiagrega. Coronariografía: <2 h si riesgo muy alto, <24 h si riesgo alto." } ] },
    { paso: "Tratamiento coadyuvante (primeras 24 h)",
      detalle: "Betabloqueante VO si no hay IC aguda, shock ni bradicardia; estatina de alta intensidad (atorvastatina 80 mg); IECA/ARA-II si FE ≤40%, HTA o diabetes." },
    { paso: "Destino",
      detalle: "SCACEST y SCASEST de alto riesgo → unidad coronaria/UCI. Dolor torácico de bajo riesgo (HEART 0-3 con troponinas seriadas negativas) → alta con seguimiento precoz." }
  ];

  sca.ddx = [
    {
      grupo: "Crítico · amenaza vital", nivel: "critico", items: [
        { dx: "Disección aórtica", clave: "dolor brusco, desgarrante, irradiado a espalda; asimetría de pulsos/TA entre brazos; mediastino ensanchado", slug: "sindrome_aortico_agudo" },
        { dx: "Tromboembolia pulmonar", clave: "disnea súbita, dolor pleurítico, hipoxia y taquicardia; factores de riesgo de TVP", slug: "tromboembolia_pulmonar" },
        { dx: "Neumotórax a tensión", clave: "disnea súbita con hipotensión, hipofonesis unilateral, desviación traqueal e ingurgitación yugular", slug: "neumotorax_espontaneo" },
        { dx: "Taponamiento cardíaco", clave: "tríada de Beck (hipotensión, IY, tonos apagados), pulso paradójico, QRS de bajo voltaje", slug: "taponamiento_cardiaco" },
        { dx: "Perforación esofágica (Boerhaave)", clave: "vómitos intensos previos, dolor retroesternal, enfisema subcutáneo/mediastínico", slug: "patologia_esofagica_aguda" }
      ]
    },
    {
      grupo: "Emergente", nivel: "emergente", items: [
        { dx: "Pericarditis aguda", clave: "dolor pleurítico que mejora al inclinarse hacia delante; roce; ascenso ST cóncavo difuso con descenso PR", slug: "pericarditis_aguda" },
        { dx: "Miocarditis", clave: "pródromo viral, troponina elevada con coronarias normales, disfunción ventricular", slug: "miocarditis_aguda" },
        { dx: "Dolor torácico por cocaína", clave: "consumo reciente, taquicardia/HTA, vasoespasmo coronario; evitar betabloqueantes" },
        { dx: "Pancreatitis aguda", clave: "dolor epigástrico irradiado a espalda, vómitos, amilasa/lipasa elevadas; litiasis o alcohol", slug: "pancreatitis_aguda" },
        { dx: "Colecistitis", clave: "dolor en hipocondrio derecho, Murphy positivo, fiebre; relación con comidas grasas" }
      ]
    },
    {
      grupo: "No emergente", nivel: "no_emergente", items: [
        { dx: "ERGE / espasmo esofágico", clave: "relación con la ingesta, pirosis, alivio con antiácidos; puede simular angina", slug: "patologia_esofagica_aguda" },
        { dx: "Costocondritis", clave: "dolor reproducible a la palpación, localizado, sin cortejo vegetativo ni cambios en el ECG" },
        { dx: "Neumonía", clave: "fiebre, tos productiva, dolor pleurítico, condensación en la radiografía", slug: "neumonia_adquirida_en_la_comunidad" },
        { dx: "Crisis de ansiedad / hiperventilación", clave: "dolor atípico, parestesias, hiperventilación; diagnóstico de exclusión", slug: "crisis_de_ansiedad" },
        { dx: "Herpes zóster", clave: "dolor en banda metamérica que precede a la erupción vesicular unilateral", slug: "infeccion_por_herpes_zoster" }
      ]
    }
  ];
})();
