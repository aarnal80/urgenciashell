/* Manual de Urgencias — app de referencia. Datos en window.TOPICS. */
(function () {
  "use strict";
  var TOPICS = window.TOPICS || [];
  var INDEX = window.TOPIC_INDEX || {};
  var SCALES = window.SCALES || {};
  var DRUGS = window.DRUGS || {};
  var DRUG_ALIAS = window.DRUG_ALIAS || {};
  var APP_VERSION = "1.1";
  var navCount = 0; // navegaciones internas
  var currentTopicSlug = null; // tema en pantalla (para la estrella de favoritos)
  var bySlug = {};
  TOPICS.forEach(function (t) { bySlug[t.slug] = t; });

  // Resolución de enlaces de "Temas conectados": recupera slugs desfasados o
  // truncados (los slugs reales están limitados a ~60 caracteres).
  // Mapeo de enlaces a temas equivalentes existentes (revisado clínicamente).
  // Los conceptos sin tema concordante se omiten (no aparecen en CONN_ALIAS → se ocultan).
  var CONN_ALIAS = {
    embolia_pulmonar: "tromboembolia_pulmonar", tep: "tromboembolia_pulmonar",
    anafilaxia: "urticaria_y_anafilaxia",
    edema_agudo_pulmon: "edema_agudo_de_pulmon_cardiogenico",
    edema_agudo_de_pulmon: "edema_agudo_de_pulmon_cardiogenico",
    absceso_cerebral: "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_",
    encefalitis: "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_",
    meningitis_y_encefalitis: "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_",
    meningoencefalitis_herpetica: "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_",
    accidente_cerebrovascular: "ictus",
    hemorragia_intracraneal: "hemorragia_subaracnoidea_espontanea",
    acidosis_metabolica: "alteraciones_del_equilibrio_acidobasico",
    aislamiento_del_paciente_infeccioso: "medidas_universales_de_proteccion_y_normas_de_aislamiento_en",
    alteraciones_de_la_coagulacion: "otras_urgencias_hematologicas",
    coagulacion_intravascular_diseminada: "otras_urgencias_hematologicas",
    anemia: "otras_urgencias_hematologicas",
    anemia_celulas_falciformes: "otras_urgencias_hematologicas",
    analgesia_en_urgencias: "analgesia_sedacion_y_relajacion_muscular_en_urgencias_secuen",
    secuencia_rapida_intubacion: "analgesia_sedacion_y_relajacion_muscular_en_urgencias_secuen",
    angina_de_ludwig: "celulitis_cervicofaciales",
    celulitis_cervicofacial: "celulitis_cervicofaciales",
    apendicitis_aguda: "dolor_abdominal_agudo",
    arritmias_fibrilacion_auricular: "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul",
    fibrilacion_auricular: "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul",
    taquicardia_ventricular: "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul",
    taquicardias_ventriculares: "fibrilacion_y_fluter_auriculares_arritmias_auriculoventricul",
    taquiarritmias_manejo_general: "arritmias_cardiacas_estrategia_diagnostica_y_tratamiento_gen",
    bradiarritmias: "arritmias_por_alteracion_en_la_conduccion_del_impulso_enferm",
    bradiarritmias_bloqueos_auriculoventriculares: "arritmias_por_alteracion_en_la_conduccion_del_impulso_enferm",
    bradicardia_y_bloqueos: "arritmias_por_alteracion_en_la_conduccion_del_impulso_enferm",
    body_packer_body_stuffer: "otras_intoxicaciones_agudas",
    broncoespasmo: "ataque_de_asma",
    cirrosis_hepatica: "encefalopatia_hepatica_aguda",
    sindrome_hepatorrenal: "encefalopatia_hepatica_aguda",
    compresion_medular: "otras_urgencias_en_oncologia",
    otras_urgencias_oncologicas: "otras_urgencias_en_oncologia",
    crisis_convulsivas: "crisis_epilepticas",
    diseccion_aortica: "sindrome_aortico_agudo",
    dolor_dental_y_afeccion_dentaria: "procesos_agudos_odontologicos",
    eclampsia: "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia",
    sindrome_hellp: "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia",
    enfermedades_reumatologicas: "otras_urgencias_reumatologicas",
    epoc_descompensada: "epoc_agudizada",
    faringoamigdalitis_aguda: "dolor_faringeo_agudo",
    fiebre_en_el_paciente_inmunocomprometido: "sindrome_febril_en_el_paciente_oncologico",
    neutropenia_febril: "sindrome_febril_en_el_paciente_oncologico",
    fractura_luxaciones_de_pelvis_y_de_columna_vertebral: "fracturas_y_luxaciones_de_pelvis_y_de_columna_vertebral",
    gestacion_ectopica: "otras_urgencias_obstetricas",
    urgencias_obstetrica: "otras_urgencias_obstetricas",
    glaucoma_agudo: "otros_procesos_oftalmologicos",
    hipertension_arterial_urgencias: "urgencia_hipertensiva",
    urgencias_hipertensivas: "urgencia_hipertensiva",
    infarto_agudo_miocardio: "sindrome_coronario_agudo",
    infeccion_por_herpes_zoster: "urgencias_relativas_en_dermatologia",
    infeccion_urinaria: "infecciones_urinarias_bajas_cistitis_y_uretritis",
    infecciones_transmision_sexual: "infecciones_de_transmision_sexual",
    insuficiencia_renal_aguda: "lesion_renal_aguda",
    insuficiencia_respiratoria: "disnea_aguda",
    insuficiencia_respiratoria_aguda: "disnea_aguda",
    insuficiencia_suprarrenal_aguda: "crisis_addisoniana",
    intoxicacion_aguda_actitud_diagnostica_y_tratamiento_general: "intoxicaciones_agudas_actitud_diagnostica_y_tratamiento_gene",
    intoxicacion_bloqueadores_beta: "intoxicacion_aguda_por_bloqueadores",
    intoxicacion_digitalica: "intoxicacion_aguda_por_digitalicos",
    neumoax_a_tension: "neumotorax_espontaneo",
    parada_cardiorespiratoria: "soporte_vital_avanzado_en_adultos",
    politraumatismo: "atencion_inicial_al_paciente_con_traumatismo_grave",
    politraumatizado: "atencion_inicial_al_paciente_con_traumatismo_grave",
    traumatismo_toracico: "atencion_inicial_al_paciente_con_traumatismo_grave",
    profilaxis_postexposicion_vih: "profilaxis_postexposicion_frente_al_virus_de_la_inmunodefici",
    profilaxis_tetanos: "tetanos",
    reaccion_extrapiramidal: "distonias_agudas_iatrogenicas",
    retension_aguda_orina: "retencion_aguda_de_orina",
    sindrome_confusional_agudo: "coma",
    sindrome_de_guillain_barre: "otras_urgencias_neurologicas",
    trastornos_hidroelectroliticos: "deplecion_hidrosalina",
    trombosis_venosa_profunda: "enfermedad_tromboembolica_venosa",
    trombosis_venosa_superficial: "enfermedad_tromboembolica_venosa",
    ventilacion_no_invasiva: "soporte_respiratorio_no_invasivo_srni"
  };
  function resolveSlug(slug) {
    if (!slug) return null;
    if (bySlug[slug]) return slug;
    if (CONN_ALIAS[slug] && bySlug[CONN_ALIAS[slug]]) return CONN_ALIAS[slug];
    var best = null;
    for (var s in bySlug) {
      var longer = s.length >= slug.length ? s : slug;
      var shorter = s.length >= slug.length ? slug : s;
      if (longer.indexOf(shorter) !== 0) continue;
      var nextChar = longer.charAt(shorter.length);
      if (nextChar === "_" || shorter.length >= 50) { if (!best || s.length > best.length) best = s; }
    }
    return best;
  }

  var SVG = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    briefing: '<svg ' + SVG + '><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    flags: '<svg ' + SVG + '><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    tratamiento: '<svg ' + SVG + '><path d="M10.5 20.5 20.5 10.5a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>',
    escalas: '<svg ' + SVG + '><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    criterios: '<svg ' + SVG + '><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
    conexiones: '<svg ' + SVG + '><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    ddx: '<svg ' + SVG + '><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    plan: '<svg ' + SVG + '><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><polyline points="3 6 4 7 6 5"/><polyline points="3 12 4 13 6 11"/><polyline points="3 18 4 19 6 17"/></svg>',
    bibliografia: '<svg ' + SVG + '><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    pulse: '<svg ' + SVG + '><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    check: '<svg ' + SVG + '><polyline points="20 6 9 17 4 12"/></svg>',
    swap: '<svg ' + SVG + '><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    info: '<svg ' + SVG + '><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    chev: '<svg ' + SVG + '><polyline points="9 18 15 12 9 6"/></svg>',
    chevR: '<svg ' + SVG + '><polyline points="9 18 15 12 9 6"/></svg>',
    chevL: '<svg ' + SVG + '><polyline points="15 18 9 12 15 6"/></svg>',
    search: '<svg ' + SVG + '><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    moon: '<svg ' + SVG + '><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    sun: '<svg ' + SVG + '><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/></svg>',
    reciente: '<svg ' + SVG + '><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',
    home: '<svg ' + SVG + '><path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/></svg>',
    bars: '<svg ' + SVG + '><line x1="6" y1="20" x2="6" y2="15"/><line x1="12" y1="20" x2="12" y2="9"/><line x1="18" y1="20" x2="18" y2="4"/></svg>',
    farmacos: '<svg ' + SVG + '><path d="M10.5 20.5 20.5 10.5a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/></svg>',
    apps: '<svg ' + SVG + '><rect x="3" y="3" width="7" height="7" rx="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.6"/></svg>',
    droplet: '<svg ' + SVG + '><path d="M12 4.74 7.04 9.7a7 7 0 1 0 9.92 0z"/></svg>',
    syringe: '<svg ' + SVG + '><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>',
    star: '<svg ' + SVG + '><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    skull: '<svg ' + SVG + '><circle cx="9" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none"/><path d="M8 20v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V20"/><path d="M16 20a2 2 0 0 0 1.6-3.2A9 9 0 1 0 6.4 16.8 2 2 0 0 0 8 20"/><path d="M10.5 16.5 12 14l1.5 2.5"/></svg>',
    textSize: '<svg ' + SVG + '><path d="M2.5 18 7 7l4.5 11"/><path d="M4.2 14.3h5.6"/><path d="M18 8v9"/><polyline points="15.5 10.3 18 8 20.5 10.3"/><polyline points="15.5 14.7 18 17 20.5 14.7"/></svg>'
  };

  /* ---------- DOM ---------- */
  var $shell = document.getElementById("shell");
  var $topbar = document.getElementById("topbar");
  var $tabbar = document.getElementById("tabbar");
  var $home = document.getElementById("home");
  var $topic = document.getElementById("topic");
  var $searchPanel = document.getElementById("search-panel");
  var $search = document.getElementById("search");
  var $list = document.getElementById("topic-list");
  var $count = document.getElementById("count");
  var $modal = document.getElementById("modal-root");
  var $tbFav = document.getElementById("tb-fav");

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escA(s) { return esc(s).replace(/"/g, "&quot;"); }
  function sinAcentos(s) { return String(s == null ? "" : s).normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase(); }
  function simpleNorm(s) {
    return String(s == null ? "" : s).normalize("NFKD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
  }
  function rgba(hex, a) {
    var h = (hex || "#000").replace("#", "");
    if (h.length === 3) h = h.split("").map(function (c) { return c + c; }).join("");
    var r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }
  function drugFichaId(x) {
    if (x.drug_id && DRUGS[x.drug_id]) return x.drug_id;
    var a = DRUG_ALIAS[simpleNorm(x.farmaco)];
    return (a && DRUGS[a]) ? a : null;
  }
  function prettyDrug(id) {
    var s = id.replace(/_/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function highlight(text, q) {
    if (!q) return esc(text);
    var i = sinAcentos(text).indexOf(q);
    if (i === -1) return esc(text);
    return esc(text.slice(0, i)) + "<mark>" + esc(text.slice(i, i + q.length)) + "</mark>" + esc(text.slice(i + q.length));
  }

  /* ---------- categorías (Partes del manual) ---------- */
  var CAT_COLORS = ["#8a6d3b", "#4f6f86", "#6a4f7a", "#9a6a3b", "#3f6b62", "#4f6f86",
    "#4f6b4a", "#8a6d3b", "#5f5a52", "#4f6f86", "#8a4f6e", "#4f6b4a", "#6a4f7a", "#944049"];
  var CAT_SKIP = ["urgencias", "urgencas", "de", "del", "la", "el", "los", "en", "y", "por",
    "medicina", "agudas", "no", "uso", "indebido"];
  function catInitial(name) {
    var words = String(name).split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      if (CAT_SKIP.indexOf(sinAcentos(words[i])) === -1 && words[i]) return words[i].charAt(0).toUpperCase();
    }
    return String(name).charAt(0).toUpperCase();
  }

  // Iconos lineales (estilo Lucide) por especialidad — heredan el color de la parte (currentColor)
  var CAT_ICONS = {
    rcp: '<svg ' + SVG + '><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.6 12h5.4l.6-1.2 1.8 4 2-6.4 1.1 3.6h4.3"/></svg>',
    heart: '<svg ' + SVG + '><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    skull: '<svg ' + SVG + '><circle cx="9" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1.2" fill="currentColor" stroke="none"/><path d="M8 20v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V20"/><path d="M16 20a2 2 0 0 0 1.6-3.2A9 9 0 1 0 6.4 16.8 2 2 0 0 0 8 20"/><path d="M10.5 16.5 12 14l1.5 2.5"/></svg>',
    wine: '<svg ' + SVG + '><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M7 10c0 2.8 2.2 5 5 5s5-2.2 5-5c0-2-.5-4-1-7H8c-.5 3-1 5-1 7Z"/></svg>',
    micro: '<svg ' + SVG + '><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>',
    droplet: '<svg ' + SVG + '><path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.4 0z"/></svg>',
    stomach: '<svg ' + SVG + '><path d="M13 3a3 3 0 0 0-3 3v3a3 3 0 0 1-3 3 3 3 0 0 0 0 6h1a5 5 0 0 0 5-5V8a2 2 0 0 1 4 0"/></svg>',
    bug: '<svg ' + SVG + '><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6Z"/><path d="M12 20v-9"/><path d="m8 2 1.5 1.5"/><path d="M16 2l-1.5 1.5"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/><path d="M6 13H2"/><path d="M22 13h-4"/><path d="M6 9 3 7"/><path d="m18 9 3-2"/><path d="m6 17-3 2"/><path d="m18 17 3 2"/></svg>',
    ear: '<svg ' + SVG + '><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/></svg>',
    brain: '<svg ' + SVG + '><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
    bone: '<svg ' + SVG + '><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>',
    venus: '<svg ' + SVG + '><circle cx="12" cy="9" r="6"/><path d="M12 15v7"/><path d="M9 19h6"/></svg>',
    wind: '<svg ' + SVG + '><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>',
    baby: '<svg ' + SVG + '><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M17.5 7a9 9 0 1 1-11 0"/><path d="M12 3c2 0 3.5 1.1 3.5 2.5S14.6 8 13.5 8c-.8 0-1.5-.4-1.5-1"/></svg>',
    flame: '<svg ' + SVG + '><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z"/></svg>',
    hand: '<svg ' + SVG + '><path d="M18 11V6a2 2 0 0 0-4 0"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
    person: '<svg ' + SVG + '><circle cx="12" cy="5" r="1.6" fill="currentColor" stroke="none"/><path d="m9 20 3-6 3 6"/><path d="M6 8l6 2 6-2"/><path d="M12 10v4"/></svg>',
    tooth: '<svg ' + SVG + '><path d="M7 3.5c-1.7 0-2.8 1.3-2.8 3.6 0 1 .2 2.2.5 3.5.4 1.7.5 2.8.7 4.4.3 2.4.7 4.5 1.6 4.5.8 0 1-1.6 1.3-3.2.2-1.1.4-2.3 1.2-2.3s1 1.2 1.2 2.3c.3 1.6.5 3.2 1.3 3.2.9 0 1.3-2.1 1.6-4.5.2-1.6.3-2.7.7-4.4.3-1.3.5-2.5.5-3.5 0-2.3-1.1-3.6-2.8-3.6-1.2 0-1.8.6-3 .6s-1.8-.6-3-.6Z"/></svg>',
    ribbon: '<svg ' + SVG + '><path d="M9 4.5c-1.5 2.5-1.5 5.5 0 8l3 5 3-5c1.5-2.5 1.5-5.5 0-8"/><path d="M9 4.5h6"/><path d="m10.5 13-3.5 8 5-3 5 3-3.5-8"/></svg>',
    eye: '<svg ' + SVG + '><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
    psych: '<svg ' + SVG + '><path d="M5 12a7 7 0 1 1 9.5 6.55V21H9.5v-2.45A7 7 0 0 1 5 12Z"/><path d="M12 8.6l.85 1.8 1.8.85-1.8.85L12 14.1l-.85-1.8-1.8-.85 1.8-.85z"/></svg>',
    ecg: '<svg ' + SVG + '><path d="M2 12h4.5l1.2-3.5 2 8.5 2.2-12 1.8 7h6.8"/></svg>',
    kidney: '<svg ' + SVG + '><path d="M13 3.5C16.5 3.5 20 6.5 20 11s-3.5 10-8 10c-3 0-6-2.5-6.8-6 2.3-1 4.3-2 4.3-3.5s-2-2.5-4.3-3.5C6.5 5.5 9.5 3.5 13 3.5Z"/></svg>',
    radio: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="2.4"/><path d="M12 8.7 16 5.1 8 5.1Z"/><path d="M9.2 13.5 4 12 8 18.9Z"/><path d="M14.8 13.5 16 18.9 20 12Z"/></svg>',
    tube: '<svg ' + SVG + '><path d="M14.5 2v17.5a2.5 2.5 0 0 1-5 0V2"/><path d="M8.5 2h7"/><path d="M9.5 15h5"/></svg>',
    misc: '<svg ' + SVG + '><circle cx="6.5" cy="6.5" r="3"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1.5"/><path d="M6.5 13.5 3.2 20.5h6.6z"/><rect x="14" y="14" width="6.5" height="6.5" rx="1.5"/></svg>',
    metab: '<svg ' + SVG + '><path d="M12 3 19.5 7v8L12 19l-7.5-4V7z"/><circle cx="12" cy="11" r="2.3"/></svg>',
    def: '<svg ' + SVG + '><circle cx="12" cy="12" r="9"/>…22653 tokens truncated… null || val <= b.max)) { band = b; bidx = i; } });
    var sev = band ? severityClass(bidx, s.interpretacion.length) : "";
    return '<div class="calc-result ' + sev + '">' +
      '<div class="calc-score"><span class="calc-num">' + disp + '</span><span class="calc-unit">' + esc(s.unidad_resultado || "") + "</span></div>" +
      '<div class="calc-interp">' + (band ? "<strong>" + esc(band.label) + "</strong>" + (band.detalle ? "<span>" + esc(band.detalle) + "</span>" : "") : "") + "</div></div>";
  }
  function calcBanner(sev, title, score, text) {
    return '<div class="calc-banner ' + sev + '">' +
      '<div class="cb-top"><span class="cb-title">' + esc(title) + "</span>" +
      (score != null && score !== "" ? '<span class="cb-score">' + esc(score) + "</span>" : "") + "</div>" +
      (text ? '<div class="cb-text">' + esc(text) + "</div>" : "") + "</div>";
  }
  function calcInnerHTML() {
    if (!calc) return "";
    var s = calc.scale, body = "", foot = "";
    if (s.tipo === "suma") {
      body = s.items.map(function (it) {
        if (it.tipo === "binario") {
          var on = !!calc.sel[it.id];
          return '<button class="opt-row' + (on ? " on" : "") + '" type="button" data-bin="' + esc(it.id) + '">' +
            '<span class="opt-box">' + (on ? ICONS.check : "") + "</span>" +
            '<span class="opt-row-label">' + esc(it.label) + "</span>" +
            '<span class="opt-row-pts">+' + it.puntos + "</span></button>";
        }
        var sel = calc.sel[it.id];
        var opts = '<div class="opts">' + it.opciones.map(function (o, i) {
          return '<button class="opt' + (sel === i ? " on" : "") + '" data-item="' + esc(it.id) + '" data-opt="' + i + '">' +
            esc(o.label) + "<small>" + (o.puntos >= 0 ? "+" : "") + o.puntos + "</small></button>";
        }).join("") + "</div>";
        return '<div class="calc-item"><div class="calc-label">' + esc(it.label) + "</div>" + opts + "</div>";
      }).join("");
      var r = computeSum(s), band = null, bidx = -1;
      s.interpretacion.forEach(function (b, i) { if (r.total >= b.min && (b.max == null || r.total <= b.max)) { band = b; bidx = i; } });
      var sev = band ? severityClass(bidx, s.interpretacion.length) : "";
      var allUnit = s.items.every(function (it) { return it.tipo === "binario" && it.puntos === 1; });
      var score = allUnit
        ? r.total + " / " + s.items.length + (r.total === 1 ? " positivo" : " positivos")
        : r.total + " " + (s.unidad_resultado || "puntos");
      var txt = band && band.detalle ? band.detalle : (band ? band.label : "");
      if (r.faltan) txt = (txt ? txt + " · " : "") + "Faltan " + r.faltan + " por completar";
      foot = calcBanner(sev, band ? band.label : "Puntuación", score, txt);
    } else if (s.tipo === "clasificacion") {
      body = '<div class="clases">' + s.clases.map(function (c, i) {
        return '<button class="clase' + (calc.cls === i ? " on" : "") + '" data-class="' + i + '"><strong>' + esc(c.label) + "</strong><span>" + esc(c.descripcion) + "</span></button>";
      }).join("") + "</div>";
      var cc = calc.cls != null ? s.clases[calc.cls] : null;
      var sevc = calc.cls != null ? severityClass(calc.cls, s.clases.length) : "";
      foot = cc ? calcBanner(sevc, cc.label, null, cc.detalle || cc.descripcion)
                : calcBanner("", "Selecciona una clase", null, "");
    } else if (s.tipo === "formula") {
      body = s.items.map(function (it) {
        var inner;
        if (it.tipo === "opciones") {
          var sel = calc.sel[it.id];
          inner = '<div class="opts">' + it.opciones.map(function (o, i) {
            return '<button class="opt' + (sel === i ? " on" : "") + '" data-item="' + esc(it.id) + '" data-opt="' + i + '">' + esc(o.label) + "</button>";
          }).join("") + "</div>";
        } else {
          var v = calc.num[it.id];
          inner = '<div class="num-wrap"><input type="number" inputmode="decimal" class="calc-num-input" data-num="' + esc(it.id) + '" value="' + (v == null ? "" : esc(v)) + '"' +
            (it.placeholder ? ' placeholder="' + esc(it.placeholder) + '"' : "") + " />" + (it.unidad ? '<span class="num-unit">' + esc(it.unidad) + "</span>" : "") + "</div>";
        }
        return '<div class="calc-item"><div class="calc-label">' + esc(it.label) + "</div>" + inner + "</div>";
      }).join("");
      foot = formulaFoot(s);
    }
    return '<div class="ci-body">' + body + "</div>" +
      '<div class="ci-foot">' + foot +
        '<div class="modal-actions">' + (s.fuente ? '<span class="modal-src">' + esc(s.fuente) + "</span>" : "<span></span>") +
        '<button class="btn-reset" data-reset="1">Reiniciar</button></div></div>';
  }

  /* ============================================================
     Eventos
     ============================================================ */
  // Interacciones dentro del detalle
  $topic.addEventListener("click", function (e) {
    var printTurno = e.target.closest("[data-print-turno]");
    if (printTurno) {
      window.print();
      return;
    }
    var draw = e.target.closest("[data-draw]");
    if (draw) {
      var config = readTurnoForm();
      var missingIndex = -1;
      config.doctors.forEach(function (doctor, i) { if (!doctor && missingIndex < 0) missingIndex = i; });
      if (missingIndex > -1) {
        var missing = document.getElementById("turno-doctor-" + missingIndex);
        if (missing) {
          missing.focus();
          missing.classList.add("turno-invalid");
          setTimeout(function () { missing.classList.remove("turno-invalid"); }, 900);
        }
        return;
      }
      var slots = buildTurnoSlots(config);
      var result = {
        count: config.count,
        doctors: config.doctors,
        date: config.date,
        shift: config.shift,
        start: config.start,
        end: config.end,
        slots: slots,
        time: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
      };
      var history = getTurnoHistory();
      history.unshift(result);
      saveTurnoConfig(config);
      try {
        localStorage.setItem("guardiaLastResult", JSON.stringify(result));
        localStorage.setItem("guardiaHistory", JSON.stringify(history.slice(0, 8)));
      } catch (err) {}
      renderTurno();
      var resultNode = $topic.querySelector(".turno-result");
      if (resultNode) resultNode.classList.add("turno-result-reveal");
      return;
    }
    var clearHistory = e.target.closest("[data-clear-history]");
    if (clearHistory) {
      try { localStorage.removeItem("guardiaHistory"); localStorage.removeItem("guardiaLastResult"); } catch (err) {}
      renderTurno();
      return;
    }
    // Controles del calculador inline (escalas y apps)
    var ctl = e.target.closest("[data-reset],[data-bin],[data-item],[data-class],[data-app-opt]");
    if (ctl && ctl.closest(".calc-inline")) {
      var cpanel = ctl.closest(".calc-inline");
      if (appState) {
        if (ctl.hasAttribute("data-reset")) { appState.num = {}; appState.sel = {}; cpanel.innerHTML = appInnerHTML(); return; }
        if (ctl.hasAttribute("data-app-opt")) {
          appState.sel[ctl.getAttribute("data-app-grp")] = +ctl.getAttribute("data-app-opt");
          var ap = APPS[appState.id]; if (ap.onOpt) ap.onOpt(appState);
          cpanel.innerHTML = appInnerHTML(); return;
        }
        return;
      }
      if (calc) {
        if (ctl.hasAttribute("data-reset")) { calc.sel = {}; calc.cls = null; calc.num = {}; cpanel.innerHTML = calcInnerHTML(); return; }
        if (ctl.hasAttribute("data-bin")) { var b = ctl.getAttribute("data-bin"); calc.sel[b] = !calc.sel[b]; cpanel.innerHTML = calcInnerHTML(); return; }
        if (ctl.hasAttribute("data-item")) { calc.sel[ctl.getAttribute("data-item")] = +ctl.getAttribute("data-opt"); cpanel.innerHTML = calcInnerHTML(); return; }
        if (ctl.hasAttribute("data-class")) { calc.cls = +ctl.getAttribute("data-class"); cpanel.innerHTML = calcInnerHTML(); return; }
      }
      return;
    }
    // Abrir / plegar escala o app inline
    var chip = e.target.closest(".scale-chip");
    if (chip) { if (chip.hasAttribute("href")) return; var sitem = chip.closest(".scale-item"); if (sitem) toggleScaleItem(sitem); return; }

    var gt = e.target.closest(".tx-group-toggle");
    if (gt) { var grp = gt.closest(".tx-group"); grp.setAttribute("data-open", grp.getAttribute("data-open") === "1" ? "0" : "1"); return; }

    var th = e.target.closest(".tx-card-head");
    if (th) { var card = th.parentElement; card.setAttribute("data-open", card.getAttribute("data-open") === "1" ? "0" : "1"); return; }

    var chipx = e.target.closest(".ddx-chip");
    if (chipx) {
      var group = chipx.closest(".ddx-group"), detail = group.querySelector(".ddx-detail");
      var wasActive = chipx.classList.contains("active");
      [].forEach.call(group.querySelectorAll(".ddx-chip.active"), function (c) { c.classList.remove("active"); });
      if (wasActive) { detail.hidden = true; detail.innerHTML = ""; return; }
      chipx.classList.add("active");
      var dx = chipx.getAttribute("data-dx") || "", clave = chipx.getAttribute("data-clave"), slug = chipx.getAttribute("data-slug");
      var h = slug
        ? '<a class="ddx-detail-dx ddx-detail-link" href="#/tema/' + esc(slug) + '">' + esc(dx) + ICONS.chevR + "</a>"
        : '<div class="ddx-detail-dx">' + esc(dx) + "</div>";
      if (clave) h += '<div class="ddx-key">' + esc(clave) + "</div>";
      detail.innerHTML = h; detail.hidden = false; return;
    }

    var dh = e.target.closest(".drug-sec-head");
    if (dh) { var sec = dh.parentElement; sec.setAttribute("data-open", sec.getAttribute("data-open") === "1" ? "0" : "1"); return; }

    // Acordeón de secciones (apertura única)
    var head = e.target.closest(".block-head");
    if (head) {
      var section = head.parentElement;
      var willOpen = section.getAttribute("data-open") !== "1";
      [].forEach.call($topic.querySelectorAll(".block"), function (b) { if (b !== section) b.setAttribute("data-open", "0"); });
      section.setAttribute("data-open", willOpen ? "1" : "0");
      if (willOpen) {
        var top = section.getBoundingClientRect().top + window.scrollY - 56;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  });

  // Filtros en índices (fármacos / escalas) y entradas numéricas del calculador inline
  $topic.addEventListener("input", function (e) {
    if (e.target.id === "drug-filter") {
      var dl = document.getElementById("drug-list"); if (dl) dl.innerHTML = drugListHTML(e.target.value); return;
    }
    if (e.target.id === "scale-filter") {
      var sl = document.getElementById("scale-list"); if (sl) sl.innerHTML = scaleListHTML(e.target.value); return;
    }
    var inp = e.target.closest(".calc-num-input");
    if (!inp) return;
    var panel = inp.closest(".calc-inline"); if (!panel) return;
    if (appState) {
      appState.num[inp.getAttribute("data-app-num")] = inp.value;
      var foot = panel.querySelector(".ci-foot");
      if (foot && foot.firstElementChild) foot.firstElementChild.outerHTML = appResultHTML();
      return;
    }
    if (calc && calc.scale.tipo === "formula") {
      calc.num[inp.getAttribute("data-num")] = inp.value;
      var r = panel.querySelector(".calc-result"); if (r) r.outerHTML = formulaFoot(calc.scale);
    }
  });

  // Limpiar el nombre guardado al empezar a escribir en un campo de médico.
  $topic.addEventListener("focusin", function (e) {
    var input = e.target.closest("input[id^=\"turno-doctor-\"]");
    if (!input || input.getAttribute("data-clear-on-focus") !== "1") return;
    input.removeAttribute("data-clear-on-focus");
    if (input.value) input.value = "";
  });

  // Desplegable de fármaco / opción en apps
  $topic.addEventListener("change", function (e) {
    if (e.target.id === "turno-doctor-count") { saveTurnoConfig(readTurnoForm()); renderTurno(); return; }
    var sel = e.target.closest(".calc-select"); if (!sel || !appState) return;
    var panel = sel.closest(".calc-inline"); if (!panel) return;
    appState.sel[sel.getAttribute("data-app-sel")] = +sel.value;
    var ap = APPS[appState.id]; if (ap.onOpt) ap.onOpt(appState);
    panel.innerHTML = appInnerHTML();
  });

  // Desplegar partes del manual hacia abajo (acordeón inline, apertura única)
  document.getElementById("home-parts").addEventListener("click", function (e) {
    if (e.target.closest(".tl-part")) return; // dejar navegar al tema
    var head = e.target.closest(".part");
    if (!head) return;
    var grp = head.parentElement;
    var willOpen = grp.getAttribute("data-open") !== "1";
    [].forEach.call(this.querySelectorAll(".part-group"), function (g) { if (g !== grp) g.setAttribute("data-open", "0"); });
    grp.setAttribute("data-open", willOpen ? "1" : "0");
    if (willOpen) {
      var top = grp.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });

  // Plegar categorías en el buscador
  $list.addEventListener("click", function (e) {
    var head = e.target.closest(".cat-head");
    if (head) { var g = head.parentElement; g.setAttribute("data-open", g.getAttribute("data-open") === "1" ? "0" : "1"); return; }
    if (e.target.closest(".topic-link")) closeSearch();
  });

  /* ---------- Buscador: abrir / cerrar ---------- */
  document.getElementById("hero-search").addEventListener("click", openSearch);
  document.getElementById("tb-search").addEventListener("click", openSearch);
  document.getElementById("search-cancel").addEventListener("click", closeSearch);
  $search.addEventListener("input", function () { renderList($search.value); });

  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) { e.preventDefault(); openSearch(); return; }
    if (e.key === "Escape") { if (calc || appState) closeInlineCalc(); else if (!$searchPanel.hidden) closeSearch(); }
  });

  /* ---------- Botón atrás ---------- */
  document.getElementById("back-btn").addEventListener("click", function () {
    if (navCount > 0 && history.length > 1) history.back(); else location.hash = "";
  });

  /* ---------- Estrella de favoritos ---------- */
  if ($tbFav) $tbFav.addEventListener("click", function () {
    if (!currentTopicSlug) return;
    toggleFav(currentTopicSlug);
    updateFavBtn();
  });

  /* ---------- Tema claro / oscuro ---------- */
  var $tbTheme = document.getElementById("tb-theme");
  var $heroTheme = document.getElementById("hero-theme");
  function applyTheme(t) {
    var dark = t === "dark";
    document.body.classList.toggle("dark", dark);
    var ic = dark ? ICONS.sun : ICONS.moon;
    if ($tbTheme) $tbTheme.innerHTML = ic;
    if ($heroTheme) $heroTheme.innerHTML = ic;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#000000" : "#ffffff");
  }
  applyTheme(localStorage.getItem("tema") || "claro");
  function toggleTheme() {
    var t = document.body.classList.contains("dark") ? "claro" : "dark";
    try { localStorage.setItem("tema", t); } catch (e) {}
    applyTheme(t);
  }
  if ($tbTheme) $tbTheme.addEventListener("click", toggleTheme);
  if ($heroTheme) $heroTheme.addEventListener("click", toggleTheme);
  document.getElementById("back-btn").innerHTML = ICONS.chevL;

  /* ---------- Tamaño de letra (zoom de la app, para uso como webapp) ---------- */
  var $tbSize = document.getElementById("tb-size");
  var $heroSize = document.getElementById("hero-size");
  var ZOOMS = [1, 1.15, 1.3, 1.45];
  function applyZoom(z) { document.documentElement.style.zoom = z; }
  var savedZoom = parseFloat(localStorage.getItem("zoom"));
  var curZoom = ZOOMS.indexOf(savedZoom) !== -1 ? savedZoom : 1;
  if ($tbSize) $tbSize.innerHTML = ICONS.textSize;
  if ($heroSize) $heroSize.innerHTML = ICONS.textSize;
  applyZoom(curZoom);
  function cycleZoom() {
    var i = ZOOMS.indexOf(curZoom);
    curZoom = ZOOMS[(i + 1) % ZOOMS.length];
    try { localStorage.setItem("zoom", curZoom); } catch (e) {}
    applyZoom(curZoom);
  }
  if ($tbSize) $tbSize.addEventListener("click", cycleZoom);
  if ($heroSize) $heroSize.addEventListener("click", cycleZoom);

  /* ---------- Tab bar ---------- */
  var TABS = [
    { id: "inicio", label: "Inicio", icon: ICONS.home, route: "" },
    { id: "escalas", label: "Escalas", icon: ICONS.bars, route: "#/calc" },
    { id: "farmacos", label: "Fármacos", icon: ICONS.farmacos, route: "#/farmacos" },
    { id: "apps", label: "Apps", icon: ICONS.apps, route: "#/apps" },
    { id: "acerca", label: "Acerca de", icon: ICONS.info, route: "#/about" }
  ];
  $tabbar.innerHTML = TABS.map(function (tb) {
    return '<button class="tab" type="button" data-route="' + tb.route + '">' + tb.icon + "<span>" + esc(tb.label) + "</span></button>";
  }).join("");
  $tabbar.addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (!b) return;
    var r = b.getAttribute("data-route");
    if (r === "") { if (location.hash) location.hash = ""; else showHomeView(); }
    else if (location.hash === r) route(); else location.hash = r;
  });
  function setActiveTab(id) {
    [].forEach.call($tabbar.querySelectorAll(".tab"), function (b, i) {
      b.classList.toggle("active", TABS[i].id === id);
    });
  }

  /* ---------- Recientes ---------- */
  function pushRecent(slug) {
    if (!bySlug[slug]) return;
    try {
      var R = JSON.parse(localStorage.getItem("recientes") || "[]");
      R = R.filter(function (s) { return s !== slug; });
      R.unshift(slug);
      localStorage.setItem("recientes", JSON.stringify(R.slice(0, 5)));
    } catch (e) {}
  }

  /* ---------- Routing ---------- */
  function route() {
    closeSearch();
    var h = location.hash;
    if (h === "#/about") { renderAbout(); setActiveTab("acerca"); return; }
    if (h === "#/calc" || h === "#/escalas") { renderCalcIndex(); setActiveTab("escalas"); return; }
    if (h === "#/farmacos") { renderDrugIndex(); setActiveTab("farmacos"); return; }
    if (h === "#/apps") { renderApps(); setActiveTab("apps"); return; }
    if (h === "#/turno") { renderTurno(); setActiveTab("apps"); return; }
    if (h === "#/favoritos") { renderFavoritos(); setActiveTab(""); return; }
    var dm = h.match(/^#\/farmaco\/(.+)$/);
    if (dm) { renderDrug(decodeURIComponent(dm[1])); setActiveTab("farmacos"); return; }
    var pm = h.match(/^#\/parte\/(\d+)$/);
    if (pm) { renderCategory(+pm[1]); setActiveTab("inicio"); return; }
    var m = h.match(/^#\/tema\/(.+)$/);
    if (m) { var sl = decodeURIComponent(m[1]); renderTopic(sl); pushRecent(sl); setActiveTab("inicio"); return; }
    showHomeView(); setActiveTab("inicio");
  }
  window.addEventListener("hashchange", function () { navCount++; route(); });

  // arranque
  route();

  // Service worker (PWA): comprobar la versión en cada apertura de la app instalada.
  function checkForAppUpdate() {
    if (!("serviceWorker" in navigator) || location.protocol.indexOf("http") !== 0) return;
    var refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(function (registration) {
      registration.addEventListener("updatefound", function () {
        var newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", function () {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
      registration.update().catch(function () {});
    }).catch(function () {});
  }
  checkForAppUpdate();
})();
