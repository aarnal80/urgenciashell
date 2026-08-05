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
    def: '<svg ' + SVG + '><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>'
  };
  function catIcon(name) {
    var n = sinAcentos(name);
    if (n.indexOf("soporte vital") > -1) return CAT_ICONS.ecg;
    if (n.indexOf("cardio") > -1) return CAT_ICONS.heart;
    if (n.indexOf("alcohol") > -1) return CAT_ICONS.wine;
    if (n.indexOf("intoxica") > -1 || n.indexOf("envenen") > -1) return CAT_ICONS.skull;
    if (n.indexOf("exploracion") > -1) return CAT_ICONS.micro;
    if (n.indexOf("neurolog") > -1) return CAT_ICONS.brain;
    if (n.indexOf("nefro") > -1) return CAT_ICONS.kidney;
    if (n.indexOf("endocrino") > -1 || n.indexOf("metabol") > -1) return CAT_ICONS.metab;
    if (n.indexOf("digest") > -1) return CAT_ICONS.stomach;
    if (n.indexOf("infec") > -1) return CAT_ICONS.bug;
    if (n.indexOf("otorrino") > -1) return CAT_ICONS.ear;
    if (n.indexOf("traumatolog") > -1) return CAT_ICONS.bone;
    if (n.indexOf("obstet") > -1 || n.indexOf("ginec") > -1) return CAT_ICONS.venus;
    if (n.indexOf("respirat") > -1) return CAT_ICONS.wind;
    if (n.indexOf("pediatr") > -1) return CAT_ICONS.baby;
    if (n.indexOf("agentes") > -1 || n.indexOf("fisicos") > -1 || n.indexOf("quimic") > -1) return CAT_ICONS.flame;
    if (n.indexOf("dermatolog") > -1) return CAT_ICONS.hand;
    if (n.indexOf("reumatolog") > -1) return CAT_ICONS.person;
    if (n.indexOf("maxilofacial") > -1) return CAT_ICONS.tooth;
    if (n.indexOf("oncolog") > -1) return CAT_ICONS.radio;
    if (n.indexOf("oftalmolog") > -1) return CAT_ICONS.eye;
    if (n.indexOf("psiquiatr") > -1) return CAT_ICONS.psych;
    if (n.indexOf("hematolog") > -1) return CAT_ICONS.tube;
    if (n.indexOf("miscelan") > -1) return CAT_ICONS.misc;
    return CAT_ICONS.def;
  }
  // Color por especialidad — paleta editorial apagada (baja saturación, tono cálido)
  function catColor(name) {
    var n = sinAcentos(name);
    if (n.indexOf("soporte vital") > -1) return "#8a6d3b";
    if (n.indexOf("cardio") > -1) return "#9c463c";
    if (n.indexOf("respirat") > -1) return "#4f6f86";
    if (n.indexOf("digest") > -1) return "#9a6a3b";
    if (n.indexOf("neurolog") > -1) return "#6f5f86";
    if (n.indexOf("psiquiatr") > -1) return "#5f5f86";
    if (n.indexOf("endocrino") > -1 || n.indexOf("metabol") > -1) return "#3f6b62";
    if (n.indexOf("nefro") > -1) return "#4f6f86";
    if (n.indexOf("infec") > -1) return "#4f6b4a";
    if (n.indexOf("reumatolog") > -1) return "#8a6d3b";
    if (n.indexOf("oncolog") > -1) return "#6a4f7a";
    if (n.indexOf("hematolog") > -1) return "#944049";
    if (n.indexOf("intoxica") > -1 || n.indexOf("envenen") > -1) return "#4f6b4a";
    if (n.indexOf("alcohol") > -1) return "#8a6d3b";
    if (n.indexOf("agentes") > -1 || n.indexOf("fisicos") > -1 || n.indexOf("quimic") > -1) return "#9a6a3b";
    if (n.indexOf("otorrino") > -1) return "#8a4f6e";
    if (n.indexOf("oftalmolog") > -1) return "#4f6f86";
    if (n.indexOf("maxilofacial") > -1) return "#944049";
    if (n.indexOf("traumatolog") > -1) return "#78706a";
    if (n.indexOf("dermatolog") > -1) return "#9a6a3b";
    if (n.indexOf("pediatr") > -1) return "#8a4f6e";
    if (n.indexOf("obstet") > -1 || n.indexOf("ginec") > -1) return "#8a4f6e";
    if (n.indexOf("exploracion") > -1) return "#5f5a52";
    if (n.indexOf("miscelan") > -1) return "#5f5a52";
    return CAT_COLORS[0];
  }
  // Orden personalizado de las partes (por palabra clave). Lo no listado va al final.
  var CAT_ORDER = [
    "cardio", "soporte vital", "neurolog", "respirat", "infec", "endocrino",
    "digest", "intoxica", "pediatr", "nefro", "traumatolog", "psiquiatr",
    "alcohol", "obstet", "dermatolog", "otorrino", "agentes", "oncolog",
    "reumatolog", "hematolog", "oftalmolog", "maxilofacial"
  ];
  function catRank(name) {
    var n = sinAcentos(name);
    for (var i = 0; i < CAT_ORDER.length; i++) { if (n.indexOf(CAT_ORDER[i]) > -1) return i; }
    return 100;
  }
  var CATS = (function () {
    var map = {}, order = [];
    TOPICS.forEach(function (t) {
      var c = t.categoria || "Otros";
      if (!map[c]) { map[c] = { name: c, count: 0, min: t.number || 9999 }; order.push(c); }
      map[c].count++;
      if ((t.number || 9999) < map[c].min) map[c].min = t.number || 9999;
    });
    order.sort(function (a, b) {
      var ra = catRank(a), rb = catRank(b);
      if (ra !== rb) return ra - rb;
      return (map[a].min || 0) - (map[b].min || 0);
    });
    return order.map(function (c, i) {
      map[c].i = i; map[c].color = catColor(c);
      map[c].initial = catInitial(c);
      map[c].icon = catIcon(c);
      return map[c];
    });
  })();
  var catByName = {};
  CATS.forEach(function (c) { catByName[c.name] = c; });
  // Etiqueta corta para mostrar (sin alterar el nombre real usado para agrupar)
  var CAT_LABEL = { "Exploraciones Complementarias en Medicina de Urgencias": "Exploraciones Complementarias" };
  function catDisplay(name) { return (CAT_LABEL[name] || name || "").replace(/\bUrgenci?as\b/g, "Urg."); }
  var topicsByCat = {};
  CATS.forEach(function (c) {
    topicsByCat[c.name] = TOPICS.filter(function (t) { return (t.categoria || "Otros") === c.name; })
      .sort(function (a, b) { return (a.number || 0) - (b.number || 0); });
  });

  /* ============================================================
     Gestión de vistas
     ============================================================ */
  function showTopbar(on) {
    $topbar.hidden = !on;
    document.body.classList.toggle("show-topbar", on);
  }
  function showHomeView() {
    $home.hidden = false; $topic.hidden = true; showTopbar(false);
    renderHome();
    window.scrollTo(0, 0);
  }
  function showDetailView() {
    $home.hidden = true; $topic.hidden = false; showTopbar(true);
    currentTopicSlug = null; updateFavBtn();
    window.scrollTo(0, 0);
  }

  /* ---------- Favoritos ---------- */
  function getFavs() { try { return JSON.parse(localStorage.getItem("favoritos") || "[]"); } catch (e) { return []; } }
  function setFavs(a) { try { localStorage.setItem("favoritos", JSON.stringify(a)); } catch (e) {} }
  function isFav(slug) { return getFavs().indexOf(slug) > -1; }
  function toggleFav(slug) {
    var a = getFavs(), i = a.indexOf(slug);
    if (i > -1) a.splice(i, 1); else a.unshift(slug);
    setFavs(a); return i === -1;
  }
  function updateFavBtn() {
    if (!$tbFav) return;
    if (!currentTopicSlug) { $tbFav.hidden = true; return; }
    var f = isFav(currentTopicSlug);
    $tbFav.hidden = false;
    $tbFav.innerHTML = f ? ICONS.starFill : ICONS.star;
    $tbFav.classList.toggle("on", f);
    $tbFav.setAttribute("aria-label", f ? "Quitar de favoritos" : "Guardar en favoritos");
  }

  /* ============================================================
     INICIO
     ============================================================ */
  function renderHome() {
    // Continuar (último tema visto)
    var cont = "";
    var R = [];
    try { R = JSON.parse(localStorage.getItem("recientes") || "[]"); } catch (e) {}
    R = R.filter(function (s) { return bySlug[s]; });
    if (R.length) {
      var t = bySlug[R[0]];
      cont =
        '<a class="continue-card" href="#/tema/' + esc(t.slug) + '">' +
          '<div class="continue-chip">' + ICONS.pulse + "</div>" +
          '<div class="continue-tx">' +
            '<div class="continue-eyebrow">Continuar</div>' +
            '<div class="continue-title">' + esc(t.title) + "</div>" +
            '<div class="continue-sub">' + esc(catDisplay(t.categoria)) + "</div>" +
          "</div>" +
          '<span class="continue-go">' + ICONS.chevR + "</span>" +
        "</a>";
    }
    document.getElementById("home-continue").innerHTML = cont;

    // Herramientas
    var tools = [
      { label: "Escalas", color: "#4f6f86", icon: ICONS.bars, href: "#/calc" },
      { label: "Fármacos", color: "#6a4f7a", icon: ICONS.farmacos, href: "#/farmacos" },
      { label: "Apps", color: "#3f6b62", icon: ICONS.apps, href: "#/apps" },
      { label: "Favoritos", color: "#9c463c", icon: ICONS.star, href: "#/favoritos" }
    ];
    document.getElementById("home-tools").innerHTML = tools.map(function (o) {
      return '<a class="tool" href="' + o.href + '">' +
        '<span class="tool-chip" style="background:' + rgba(o.color, 0.11) + ";color:" + o.color + '">' + o.icon + "</span>" +
        '<span class="tool-label">' + esc(o.label) + "</span></a>";
    }).join("");

    // Partes del manual — cada parte se despliega hacia abajo mostrando sus temas
    document.getElementById("home-parts").innerHTML = CATS.map(function (c) {
      var links = topicsByCat[c.name].map(function (t) {
        return '<a class="tl-part" href="#/tema/' + esc(t.slug) + '">' +
          '<span class="tl-num" style="color:' + c.color + ";background:" + rgba(c.color, 0.1) + '">' + String(t.number).padStart(3, "0") + "</span>" +
          '<span class="tl-title">' + esc(t.title) + "</span>" +
          '<span class="tl-go">' + ICONS.chevR + "</span></a>";
      }).join("");
      return '<div class="part-group" data-open="0">' +
        '<div class="part" role="button" tabindex="0">' +
          '<span class="part-chip" style="background:' + rgba(c.color, 0.12) + ";color:" + c.color + '">' + c.icon + "</span>" +
          '<div class="part-tx"><div class="part-name">' + esc(catDisplay(c.name)) + "</div>" +
            '<div class="part-count">' + c.count + " temas</div></div>" +
          '<span class="part-go">' + ICONS.chev + "</span></div>" +
        '<div class="part-topics">' + links + "</div></div>";
    }).join("");
    var pc = document.getElementById("parts-count");
    if (pc) pc.textContent = CATS.length + " partes";
  }

  /* ============================================================
     Vista de categoría (lista de temas de una parte)
     ============================================================ */
  function renderCategory(i) {
    var c = CATS[i];
    if (!c) { location.hash = ""; return; }
    showDetailView();
    document.title = c.name + " — Manual de Urgencias";
    var topics = TOPICS.filter(function (t) { return (t.categoria || "Otros") === c.name; })
      .sort(function (a, b) { return (a.number || 0) - (b.number || 0); });
    var html =
      '<div class="t-head"><span class="t-cat" style="background:' + c.color + '">Partes del manual</span>' +
      '<h1 class="t-title">' + esc(catDisplay(c.name)) + "</h1>" +
      '<div class="ystripe"></div>' +
      '<div class="t-sub">' + topics.length + " temas</div></div>" +
      '<nav class="cat-topics-list">' + topics.map(function (t) {
        return '<a class="topic-link" href="#/tema/' + esc(t.slug) + '">' +
          '<span class="num">' + String(t.number).padStart(3, "0") + "</span>" +
          '<span class="tl-main"><span class="tl-title">' + esc(t.title) + "</span></span></a>";
      }).join("") + "</nav>";
    $topic.innerHTML = html;
  }

  /* ============================================================
     Buscador
     ============================================================ */
  function topicHaystack(t) {
    var parts = [t.title, t.categoria];
    (t.briefing || []).forEach(function (b) { parts.push(b); });
    (t.red_flags || []).forEach(function (b) { parts.push(b); });
    (t.tratamiento || []).forEach(function (x) { parts.push(x.farmaco, x.dosis, x.indicacion); });
    (t.ddx || []).forEach(function (g) { (g.items || []).forEach(function (i) { parts.push(i.dx, i.clave); }); });
    (t.plan || []).forEach(function (p) { parts.push(p.paso); });
    return sinAcentos(parts.join(" · "));
  }
  function matchSnippet(t, q) {
    if (!q || sinAcentos(t.title).indexOf(q) !== -1) return "";
    var ddxNames = [], plan = [];
    (t.ddx || []).forEach(function (g) { (g.items || []).forEach(function (i) { ddxNames.push(i.dx, i.clave); }); });
    (t.plan || []).forEach(function (p) { plan.push(p.paso, p.detalle); });
    var checks = [
      ["tratamiento", (t.tratamiento || []).map(function (x) { return [x.farmaco, x.dosis, x.indicacion].filter(Boolean).join(" · "); })],
      ["dx diferencial", ddxNames],
      ["signos de alarma", t.red_flags || []],
      ["resumen", t.briefing || []],
      ["plan", plan]
    ];
    for (var i = 0; i < checks.length; i++) {
      var label = checks[i][0], arr = checks[i][1];
      for (var j = 0; j < arr.length; j++) {
        var s = arr[j] || "", idx = sinAcentos(s).indexOf(q);
        if (idx !== -1) {
          var start = Math.max(0, idx - 22);
          var frag = (start > 0 ? "…" : "") + s.slice(start, idx + q.length + 28) +
            (idx + q.length + 28 < s.length ? "…" : "");
          return '<span class="tl-snip"><span class="tl-snip-tag">' + label + "</span>" + highlight(frag, q) + "</span>";
        }
      }
    }
    return "";
  }
  function renderList(query) {
    var q = sinAcentos((query || "").trim());
    var matches = TOPICS.filter(function (t) { return !q || topicHaystack(t).indexOf(q) !== -1; });
    var groups = {}, order = [];
    matches.forEach(function (t) {
      var c = t.categoria || "Otros";
      if (!groups[c]) { groups[c] = []; order.push(c); }
      groups[c].push(t);
    });
    order.sort(function (a, b) {
      var ra = catRank(a), rb = catRank(b);
      if (ra !== rb) return ra - rb;
      return 0;
    });

    var active = location.hash.replace(/^#\/tema\//, "");
    var html = "";
    if (!q) {
      var R = [];
      try { R = JSON.parse(localStorage.getItem("recientes") || "[]"); } catch (e) {}
      R = R.filter(function (s) { return bySlug[s]; });
      if (R.length) {
        html += '<div class="cat-group cat-recientes" data-open="1">' +
          '<button class="cat-head" type="button"><span class="cat-label">' + ICONS.reciente + "Recientes</span>" +
          '<span class="cat-count">' + R.length + "</span>" +
          '<span class="cat-chev">' + ICONS.chev + "</span></button><div class=\"cat-topics\">" +
          R.map(function (s) {
            var t = bySlug[s];
            return '<a class="topic-link" href="#/tema/' + esc(t.slug) + '"><span class="num">' +
              String(t.number).padStart(3, "0") + "</span>" +
              '<span class="tl-main"><span class="tl-title">' + esc(t.title) + "</span></span></a>";
          }).join("") + "</div></div>";
      }
    }
    order.forEach(function (c) {
      var open = q ? true : false;
      html += '<div class="cat-group" data-open="' + (open ? "1" : "0") + '">' +
        '<button class="cat-head" type="button"><span class="cat-label">' + esc(catDisplay(c)) + "</span>" +
        '<span class="cat-count">' + groups[c].length + "</span>" +
        '<span class="cat-chev">' + ICONS.chev + "</span></button><div class=\"cat-topics\">";
      groups[c].forEach(function (t) {
        var snip = matchSnippet(t, q);
        html += '<a class="topic-link' + (t.slug === active ? " active" : "") + '" href="#/tema/' + esc(t.slug) + '">' +
          '<span class="num">' + String(t.number).padStart(3, "0") + "</span>" +
          '<span class="tl-main"><span class="tl-title">' + highlight(t.title, q) + "</span>" + snip + "</span></a>";
      });
      html += "</div></div>";
    });
    if (!matches.length) html = '<div class="cat-label" style="padding:18px 10px">Sin resultados</div>';
    $list.innerHTML = html;
    if ($count) $count.textContent = TOPICS.length + " temas" + (q ? " · " + matches.length + " coinciden" : "");
  }

  function openSearch() {
    $searchPanel.hidden = false;
    renderList($search.value);
    setTimeout(function () { $search.focus(); $search.select(); }, 50);
  }
  function closeSearch() { $searchPanel.hidden = true; }

  /* ============================================================
     Vista de tema
     ============================================================ */
  function connLabel(slug) { return (bySlug[slug] && bySlug[slug].title) || INDEX[slug] || slug; }

  function block(key, title, open, inner) {
    return '<section class="block" data-key="' + key + '" data-open="' + (open ? "1" : "0") + '">' +
      '<button class="block-head" type="button">' +
        '<span class="block-ic ic-' + key + '">' + (ICONS[key] || "") + "</span>" +
        "<h2>" + esc(title) + "</h2>" +
        '<span class="chev">' + ICONS.chev + "</span>" +
      "</button>" +
      '<div class="block-body">' + inner + "</div></section>";
  }

  function renderTopic(slug) {
    var t = bySlug[slug];
    if (!t) { location.hash = ""; return; }
    showDetailView();

    var cat = catByName[t.categoria || ""];
    var catColor = cat ? cat.color : "#e4002b";
    var html = "";
    html += '<div class="t-head">';
    html += '<span class="t-cat" style="background:' + catColor + '">' + esc(catDisplay(t.categoria)) + "</span>";
    html += '<h1 class="t-title">' + esc(t.title) + "</h1>";
    html += '<div class="ystripe"></div>';
    if (t.status && t.status.indexOf("revisado") === 0) html += '<span class="t-status">Revisado</span>';
    html += "</div>";

    if ((t.briefing || []).length) {
      html += block("briefing", "Resumen", !(t.plan || []).length,
        '<ul class="briefing">' + t.briefing.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>");
    }

    if ((t.ddx || []).length) {
      html += block("ddx", "Diagnóstico diferencial", false,
        '<div class="ddx-groups">' + t.ddx.map(function (g) {
          return '<div class="ddx-group ddx-lvl-' + esc(g.nivel || "") + '">' +
            '<div class="ddx-group-head">' + esc(g.grupo) + "</div>" +
            '<div class="ddx-chips">' + (g.items || []).map(function (x) {
              var hasTopic = x.slug && bySlug[x.slug];
              return '<button class="ddx-chip" type="button" data-dx="' + escA(x.dx) + '"' +
                (x.clave ? ' data-clave="' + escA(x.clave) + '"' : "") +
                (hasTopic ? ' data-slug="' + escA(x.slug) + '"' : "") + ">" + esc(x.dx) + "</button>";
            }).join("") + "</div><div class=\"ddx-detail\" hidden></div></div>";
        }).join("") + "</div>");
    }

    if ((t.plan || []).length) {
      html += block("plan", "Plan de trabajo", true,
        '<ol class="plan">' + t.plan.map(function (p) {
          var s = '<li class="plan-step"><div class="plan-act">' + esc(p.paso) + "</div>";
          if (p.detalle) s += '<div class="plan-det">' + esc(p.detalle) + "</div>";
          if ((p.sub || []).length)
            s += '<ul class="plan-sub">' + p.sub.map(function (x) {
              var txt = typeof x === "string" ? x : (x.t || "");
              var nivel = (x && typeof x === "object" && x.nivel) ? x.nivel : "";
              var i = txt.indexOf("→");
              var inner = i > 0
                ? "<strong>" + esc(txt.slice(0, i).trim()) + "</strong> → " + esc(txt.slice(i + 1).trim())
                : esc(txt);
              return '<li class="' + (nivel ? "plan-lvl-" + esc(nivel) : "") + '">' + inner + "</li>";
            }).join("") + "</ul>";
          return s + "</li>";
        }).join("") + "</ol>");
    }

    if ((t.red_flags || []).length) {
      html += block("flags", "Signos de alarma", false,
        '<div class="flags">' + t.red_flags.map(function (f) { return '<div class="flag">' + esc(f) + "</div>"; }).join("") + "</div>");
    }

    if ((t.tratamiento || []).length) {
      var groups = [], gmap = {};
      t.tratamiento.forEach(function (x) {
        var key = x.escenario || "Tratamiento";
        if (!(key in gmap)) { gmap[key] = []; groups.push({ esc: key, items: gmap[key] }); }
        gmap[key].push(x);
      });
      function txCard(x) {
        var s = '<div class="tx-card" data-open="0">';
        s += '<button class="tx-card-head" type="button"><span class="tx-head-text">';
        if (x.preferencia === "eleccion") s += '<span class="tx-pref pref-eleccion">' + ICONS.check + "De elección</span>";
        else if (x.preferencia === "alternativa") s += '<span class="tx-pref pref-alternativa">' + ICONS.swap + "Alternativa</span>";
        s += '<span class="tx-head-main"><span class="tx-drug">' + esc(x.farmaco || "") + "</span>";
        if (x.via) s += '<span class="tx-via">' + esc(x.via) + "</span>";
        s += "</span>";
        if (x.indicacion) s += '<span class="tx-ind">' + esc(x.indicacion) + "</span>";
        s += '</span><span class="tx-chev">' + ICONS.chev + "</span></button>";
        s += '<div class="tx-card-body">';
        if (x.dosis) s += '<div class="tx-dose">' + esc(x.dosis) + "</div>";
        if (x.notas) s += '<div class="tx-notes">' + esc(x.notas) + "</div>";
        var fid = drugFichaId(x);
        if (fid) s += '<a class="tx-ft" href="#/farmaco/' + esc(fid) + '">' + ICONS.tratamiento + "Ficha técnica (AEMPS)" + ICONS.chevR + "</a>";
        s += "</div></div>";
        return s;
      }
      var txHtml = groups.map(function (g) {
        var primary = [], rest = [];
        g.items.forEach(function (x) { if (x.preferencia === "eleccion") primary.push(x); else rest.push(x); });
        if (!primary.length) { primary = g.items; rest = []; }
        var hasAlts = rest.length > 0;
        var head = hasAlts
          ? '<button class="tx-group-head tx-group-toggle" type="button">' + ICONS.pulse +
              "<span>" + esc(g.esc) + "</span><span class=\"tx-alts-count\">+" + rest.length + "</span>" +
              '<span class="tx-chev">' + ICONS.chev + "</span></button>"
          : '<div class="tx-group-head">' + ICONS.pulse + "<span>" + esc(g.esc) + "</span></div>";
        var cards = primary.map(txCard).join("");
        var alts = hasAlts ? '<div class="tx-alts-body">' + rest.map(txCard).join("") + "</div>" : "";
        return '<div class="tx-group" data-open="0">' + head + cards + alts + "</div>";
      }).join("");
      html += block("tratamiento", "Tratamiento", false, '<div class="tx">' + txHtml + "</div>");
    }

    var escalas = (t.escalas || []).filter(function (id) { return SCALES[id]; });
    if (escalas.length) {
      html += block("escalas", "Estratificación de riesgo", false,
        '<div class="scales">' + escalas.map(scaleItemHTML).join("") + "</div>");
    }

    if ((t.criterios_ingreso || []).length) {
      html += block("criterios", "Criterios de ingreso", false,
        '<div class="crit">' + t.criterios_ingreso.map(function (c) { return '<div class="crit-item">' + esc(c) + "</div>"; }).join("") + "</div>");
    }

    var conns = [], seenConn = {};
    (t.conexiones || []).forEach(function (c) {
      var rs = resolveSlug(c.slug);
      if (!rs || rs === t.slug || seenConn[rs]) return;
      seenConn[rs] = 1;
      conns.push({ slug: rs, motivo: c.motivo });
    });
    if (conns.length) {
      html += block("conexiones", "Temas conectados", false,
        '<div class="connections">' + conns.map(function (c) {
          return '<a class="conn" href="#/tema/' + esc(c.slug) + '">' +
            '<div class="conn-title">' + esc(bySlug[c.slug].title) + "</div>" +
            '<div class="conn-why">' + esc(c.motivo || "") + "</div></a>";
        }).join("") + "</div>");
    }

    var bib = ["Jiménez Murillo L, Montero Pérez FJ. <em>Medicina de Urgencias y Emergencias. Guía diagnóstica y protocolos de actuación</em>. Elsevier."];
    (t.biblio_extra || []).forEach(function (b) { bib.push(esc(b)); });
    if (t.wikem_titulo) bib.push("WikEM. <em>" + esc(t.wikem_titulo) + "</em>. www.wikem.org");
    if ((t.tratamiento || []).some(function (x) { return drugFichaId(x); }))
      bib.push("Fichas técnicas de los fármacos: Agencia Española de Medicamentos y Productos Sanitarios (AEMPS), CIMA.");
    html += block("bibliografia", "Bibliografía", false,
      '<ul class="bib">' + bib.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>");

    $topic.innerHTML = html;
    document.title = t.title + " — Manual de Urgencias";
    currentTopicSlug = slug; updateFavBtn();
  }

  /* ============================================================
     Acerca de
     ============================================================ */
  function renderAbout() {
    showDetailView();
    document.title = "Acerca de — Manual de Urgencias in HELL";
    var nTemas = TOPICS.length, nFarmacos = Object.keys(DRUGS).length, nEscalas = Object.keys(SCALES).length;
    $topic.innerHTML =
      '<div class="about">' +
        '<h1>Manual de Urgencias <em>in HELL</em></h1>' +
        '<p class="about-sub">Guía de consulta rápida · Dr. Antonio J. Arnal Meinhardt</p>' +
        '<div class="about-stats">' +
          '<div class="about-stat"><span class="about-stat-n">' + nTemas + '</span><span class="about-stat-l">temas</span></div>' +
          '<div class="about-stat"><span class="about-stat-n">' + nFarmacos + '</span><span class="about-stat-l">fármacos</span></div>' +
          '<div class="about-stat"><span class="about-stat-n">' + nEscalas + '</span><span class="about-stat-l">escalas</span></div>' +
        "</div>" +
        '<div class="about-card about-release"><h2>Manual completo · Versión ' + APP_VERSION + '</h2>' +
          '<p>Esta es la nueva versión del <strong>Manual de Urgencias in HELL</strong>. Incluye la app <strong>Sorteo de Turno de Guardia</strong> dentro de Apps, para repartir la guardia entre 2 o 3 médicos, configurar las horas e imprimir el resultado.</p>' +
          '<p>Al abrir la webapp con conexión, se comprueba y actualiza automáticamente todo el contenido del manual y sus recursos.</p></div>' +
        '<div class="about-card"><h2>El autor</h2>' +
          '<p class="about-author">Dr. Antonio J. Arnal Meinhardt</p>' +
          '<p class="about-role">Médico de Urgencias y Emergencias</p>' +
          "<p>Facultativo del Servicio Aragonés de Salud (SALUD), en Aragón (España). Su actividad clínica se centra en la medicina de urgencias y emergencias y en la reanimación, con publicaciones en revistas médicas sobre soporte vital avanzado (guías ERC 2021) y el manejo de la patología urgente.</p></div>" +
        '<div class="about-card"><h2>Qué encontrarás</h2>' +
          '<p>Cada tema se abre por secciones, para ir directo a lo que buscas:</p>' +
          '<ul class="about-list">' +
            '<li><strong>Resumen</strong> con lo imprescindible y el <strong>plan de trabajo</strong>.</li>' +
            '<li><strong>Tratamiento con dosis</strong>, por escenario clínico y separando lo de elección de las alternativas.</li>' +
            '<li><strong>Signos de alarma</strong> y <strong>criterios de ingreso</strong>.</li>' +
            '<li><strong>Diagnóstico diferencial</strong> y <strong>escalas con calculadora</strong>.</li>' +
            '<li>Enlace a la <strong>ficha técnica</strong> oficial de cada fármaco (AEMPS/CIMA).</li>' +
          "</ul></div>" +
        '<div class="about-card about-warn"><h2>Aviso clínico</h2>' +
          "<p>Es una herramienta de apoyo a la decisión clínica: no sustituye el juicio médico ni la lectura de la ficha técnica. Algunos contenidos pueden estar en revisión — confirma siempre la <strong>dosis</strong>, la <strong>vía</strong> y las <strong>contraindicaciones</strong> antes de administrar cualquier fármaco.</p></div>" +
        '<p class="about-foot">Hecho a pie de cama, para uso clínico personal.</p>' +
      "</div>";
  }

  /* ============================================================
     Fármaco (ficha técnica)
     ============================================================ */
  function renderDrug(drugId) {
    showDetailView();
    var nombre = prettyDrug(drugId);
    document.title = nombre + " — Manual de Urgencias";
    $topic.innerHTML = '<div class="drug-loading">Cargando ficha técnica…</div>';

    fetch("farmacos/" + encodeURIComponent(drugId) + ".json").then(function (r) {
      if (!r.ok) throw new Error("no encontrado");
      return r.json();
    }).then(function (d) {
      if (location.hash.indexOf("#/farmaco/" + drugId) !== 0) return;
      var html = '<div class="t-head">' +
        '<span class="t-cat" style="background:#7c3aed">Fármaco · ficha técnica</span>' +
        '<h1 class="t-title">' + esc(nombre) + "</h1>" +
        '<div class="ystripe"></div>';
      if (d.presentacion) html += '<div class="drug-pres">' + esc(d.presentacion) + "</div>";
      html += "</div>";
      html += '<div class="drug-src">' + esc(d.fuente || "") +
        (d.fecha_consulta ? " · consultado " + esc(d.fecha_consulta) : "") +
        (d.nregistro ? " · nº registro " + esc(d.nregistro) : "") + "</div>";
      html += '<div class="drug-secs">' + (d.secciones || []).map(function (s) {
        var body = s.vacia ? '<p class="smpc-empty">No consta en la ficha técnica.</p>' : s.html;
        return '<section class="drug-sec" data-open="0">' +
          '<button class="drug-sec-head" type="button">' +
            '<span class="drug-sec-n">' + esc(s.id) + "</span><h2>" + esc(s.titulo) + "</h2>" +
            '<span class="chev">' + ICONS.chev + "</span></button>" +
          '<div class="drug-sec-body smpc">' + body + "</div></section>";
      }).join("") + "</div>";
      $topic.innerHTML = html;
    }).catch(function () {
      $topic.innerHTML = '<div class="t-head"><span class="t-cat" style="background:#7c3aed">Fármaco</span>' +
        '<h1 class="t-title">' + esc(nombre) + "</h1></div>" +
        '<div class="smpc-empty" style="padding:16px">No hay ficha técnica disponible en CIMA/AEMPS para este principio activo.</div>';
    });
  }

  /* ---------- Índice de fármacos ---------- */
  var DRUG_KEYS = Object.keys(DRUGS).sort(function (a, b) { return prettyDrug(a).localeCompare(prettyDrug(b)); });
  function drugListHTML(filter) {
    var q = sinAcentos((filter || "").trim());
    var keys = DRUG_KEYS.filter(function (id) {
      return !q || sinAcentos(prettyDrug(id)).indexOf(q) !== -1 || sinAcentos(DRUGS[id].presentacion || "").indexOf(q) !== -1;
    });
    if (!keys.length) return '<div class="cat-label" style="padding:18px 10px">Sin resultados</div>';
    return keys.map(function (id) {
      var nombre = prettyDrug(id);
      return '<a class="drug-item" href="#/farmaco/' + esc(id) + '">' +
        '<span class="drug-item-chip">' + esc(nombre.charAt(0)) + "</span>" +
        '<div class="drug-item-tx"><div class="drug-item-name">' + esc(nombre) + "</div>" +
        (DRUGS[id].presentacion ? '<div class="drug-item-pres">' + esc(DRUGS[id].presentacion) + "</div>" : "") + "</div>" +
        '<span class="drug-item-go">' + ICONS.chevR + "</span></a>";
    }).join("");
  }
  function renderDrugIndex() {
    showDetailView();
    document.title = "Fármacos — Manual de Urgencias";
    $topic.innerHTML =
      '<div class="t-head"><span class="t-cat" style="background:#7c3aed">Herramientas</span>' +
      '<h1 class="t-title">Fármacos</h1><div class="ystripe"></div>' +
      '<div class="t-sub">' + DRUG_KEYS.length + " principios activos · ficha técnica AEMPS/CIMA</div></div>" +
      '<input class="idx-search" id="drug-filter" type="search" placeholder="Filtrar fármaco…" autocomplete="off" />' +
      '<div class="drug-list" id="drug-list">' + drugListHTML("") + "</div>";
  }

  /* ---------- Índice de calculadoras ---------- */
  function scaleListHTML(filter) {
    var q = sinAcentos((filter || "").trim());
    var ids = Object.keys(SCALES).filter(function (id) {
      var s = SCALES[id];
      return !q || sinAcentos(s.nombre || id).indexOf(q) !== -1 || sinAcentos(s.para || "").indexOf(q) !== -1;
    }).sort(function (a, b) { return (SCALES[a].nombre || a).localeCompare(SCALES[b].nombre || b); });
    if (!ids.length) return '<div class="cat-label" style="padding:18px 10px">Sin resultados</div>';
    return ids.map(scaleItemHTML).join("");
  }
  function renderCalcIndex() {
    showDetailView();
    document.title = "Escalas y calculadoras — Manual de Urgencias";
    $topic.innerHTML =
      '<div class="t-head"><span class="t-cat" style="background:#2563eb">Herramientas</span>' +
      '<h1 class="t-title">Escalas y calculadoras</h1><div class="ystripe"></div>' +
      '<div class="t-sub">' + Object.keys(SCALES).length + " escalas con calculadora</div></div>" +
      '<input class="idx-search" id="scale-filter" type="search" placeholder="Filtrar escala…" autocomplete="off" />' +
      '<div class="scales" id="scale-list">' + scaleListHTML("") + "</div>";
  }

  /* ============================================================
     Favoritos (vista)
     ============================================================ */
  function renderFavoritos() {
    showDetailView();
    document.title = "Favoritos — Manual de Urgencias";
    var favs = getFavs().filter(function (s) { return bySlug[s]; });
    var head = '<div class="t-head"><span class="t-cat" style="background:#f59e0b">Herramientas</span>' +
      '<h1 class="t-title">Favoritos</h1><div class="ystripe"></div>' +
      '<div class="t-sub">' + favs.length + " tema" + (favs.length === 1 ? "" : "s") + " guardado" + (favs.length === 1 ? "" : "s") + "</div></div>";
    if (!favs.length) {
      $topic.innerHTML = head + '<div class="empty-hint">' + ICONS.star +
        "<p>Aún no tienes favoritos. Abre un tema y toca la <strong>estrella</strong> de la barra superior para guardarlo aquí.</p></div>";
      return;
    }
    $topic.innerHTML = head + '<div class="drug-list">' + favs.map(function (s) {
      var t = bySlug[s], c = catByName[t.categoria || ""], col = c ? c.color : "#475569", ic = c ? c.icon : ICONS.briefing;
      return '<a class="drug-item" href="#/tema/' + esc(t.slug) + '">' +
        '<span class="drug-item-chip" style="background:' + rgba(col, 0.12) + ";color:" + col + '">' + ic + "</span>" +
        '<div class="drug-item-tx"><div class="drug-item-name">' + esc(t.title) + "</div>" +
        '<div class="drug-item-pres">' + esc(catDisplay(t.categoria)) + "</div></div>" +
        '<span class="drug-item-go">' + ICONS.chevR + "</span></a>";
    }).join("") + "</div>";
  }

  /* ============================================================
     Apps (micro-aplicaciones)
     ============================================================ */
  function fmtNum(x) { return (Math.round(x * 100) / 100).toString(); }
  function appWarn(msg) { return '<div class="calc-result"><div class="calc-interp"><span class="calc-warn">' + esc(msg) + "</span></div></div>"; }
  function appResult(items) {
    return '<div class="calc-result sev-ok">' + items.map(function (o) {
      return '<div class="calc-score"><span class="calc-num">' + esc(o.num) + '</span><span class="calc-unit">' + esc(o.unit) + "</span></div>";
    }).join("") + "</div>";
  }
  /* --- Interpretación de gasometría (algoritmo de 5 pasos) --- */
  function gNum(s, k) { var v = parseFloat(s.num[k]); return isNaN(v) ? null : v; }
  function gasoStep(n, lbl, val, concl, sev) {
    return '<div class="gaso-step gaso-' + sev + '">' +
      '<span class="gaso-n">' + n + "</span>" +
      '<div class="gaso-bd"><div class="gaso-lbl">' + esc(lbl) + "</div>" +
      (val ? '<div class="gaso-val">' + esc(val) + "</div>" : "") +
      '<div class="gaso-concl">' + esc(concl) + "</div></div></div>";
  }
  function gasoResult(s) {
    var ph = gNum(s, "ph"), pco2 = gNum(s, "pco2"), hco3 = gNum(s, "hco3"), eb = gNum(s, "eb");
    var na = gNum(s, "na"), k = gNum(s, "k"), cl = gNum(s, "cl"), alb = gNum(s, "alb"), lact = gNum(s, "lact");
    if (ph == null || pco2 == null || hco3 == null || eb == null)
      return appWarn("Introduce al menos pH, pCO₂, HCO₃⁻ y exceso de base (EB).");

    var dx = [], steps = "";
    var phAbn = (ph < 7.35 || ph > 7.45);

    // Paso 1 — pH
    var s1, sev1;
    if (ph < 7.35) { s1 = "Acidemia"; sev1 = "bad"; }
    else if (ph > 7.45) { s1 = "Alcalemia"; sev1 = "bad"; }
    else { s1 = "pH normal"; sev1 = "ok"; }
    steps += gasoStep(1, "pH", "pH " + fmtNum(ph) + "  (normal 7.35–7.45)", s1, sev1);

    // Paso 2 — Exceso de base (componente metabólico)
    var metab = null, expPco2 = null, s2, sev2;
    if (eb > 2) { metab = "Alcalosis metabólica"; expPco2 = 0.7 * hco3 + 21; s2 = "Alcalosis metabólica"; sev2 = "bad"; }
    else if (eb < -2) { metab = "Acidosis metabólica"; expPco2 = 1.5 * hco3 + 8; s2 = "Acidosis metabólica"; sev2 = "bad"; }
    else { s2 = "Componente metabólico normal"; sev2 = "ok"; }
    steps += gasoStep(2, "Exceso de base", "EB " + fmtNum(eb) + " mmol/L  (normal ±2)", s2, sev2);
    if (metab) dx.push(metab);

    // Paso 3 — Compensación / componente respiratorio
    var s3, sev3, respDx = false;
    if (metab) {
      var lo = expPco2 - 2, hi = expPco2 + 2;
      var det3 = "pCO₂ esperado " + fmtNum(expPco2) + " ±2 mmHg · medido " + fmtNum(pco2);
      if (pco2 > hi) { s3 = "Acidosis respiratoria asociada"; sev3 = "bad"; dx.push("Acidosis respiratoria"); respDx = true; }
      else if (pco2 < lo) { s3 = "Alcalosis respiratoria asociada"; sev3 = "bad"; dx.push("Alcalosis respiratoria"); respDx = true; }
      else { s3 = "Compensación respiratoria adecuada"; sev3 = "ok"; }
      steps += gasoStep(3, "Compensación", det3, s3, sev3);
    } else {
      var det3b = "pCO₂ " + fmtNum(pco2) + " mmHg  (normal 35–45)";
      if (pco2 > 45) { s3 = "Acidosis respiratoria"; sev3 = "bad"; dx.push("Acidosis respiratoria"); respDx = true; }
      else if (pco2 < 35) { s3 = "Alcalosis respiratoria"; sev3 = "bad"; dx.push("Alcalosis respiratoria"); respDx = true; }
      else { s3 = "Componente respiratorio normal"; sev3 = "ok"; }
      if (pco2 > 45 || pco2 < 35) det3b += " · EB esperado si crónica " + fmtNum((pco2 - 40) * 0.4) + " ±2";
      steps += gasoStep(3, "Compensación", det3b, s3, sev3);
    }

    // Paso 4 — Anión gap (rango normal mayor si se incluye K⁺)
    var ag = null, agUse = null, agElevated = false, agLow = false;
    if (na != null && cl != null) {
      var kk = (k != null) ? k : 0;
      ag = (na + kk) - (cl + hco3); agUse = ag;
      var det4 = (k != null ? "AG = (Na+K) − (Cl+HCO₃) = " : "AG = Na − (Cl+HCO₃) = ") + fmtNum(ag);
      if (alb != null) { agUse = ag + (4 - alb) * 2.5; det4 += " · corregido " + fmtNum(agUse); }
      var agHi = (k != null) ? 16 : 12, agLo = (k != null) ? 12 : 8;
      det4 += " mEq/L  (normal " + agLo + "–" + agHi + ")";
      var s4, sev4;
      if (agUse > agHi) { agElevated = true; s4 = "Anión gap elevado — ácidos no medidos (MUDPILES)"; sev4 = "bad"; }
      else if (agUse < agLo) { agLow = true; s4 = "Anión gap disminuido — hipoalbuminemia, mieloma, hipertrigliceridemia"; sev4 = "warn"; }
      else { s4 = "Anión gap normal"; sev4 = "ok"; }
      steps += gasoStep(4, "Anión gap", det4, s4, sev4);
      if (agElevated) {
        var iAcid = dx.indexOf("Acidosis metabólica");
        if (iAcid >= 0) dx[iAcid] = "Acidosis metabólica de AG elevado";
        else dx.push("Acidosis metabólica de AG elevado");
      }

      // Delta ratio (sólo si AG elevado y HCO₃ < 24)
      if (agElevated && hco3 < 24) {
        var dr = (agUse - agHi) / (24 - hco3), sdr, sevdr;
        if (dr < 0.5) { sdr = "Sugiere acidosis hiperclorémica concomitante (AG normal)"; sevdr = "warn"; }
        else if (dr <= 1.0) { sdr = "Acidosis metabólica de AG elevado pura"; sevdr = "bad"; }
        else if (dr <= 1.6) { sdr = "Compatible con acidosis láctica"; sevdr = "bad"; }
        else { sdr = "Sugiere alcalosis metabólica coexistente"; sevdr = "warn"; }
        steps += gasoStep("Δ", "Delta gap", "Δ ratio = (AG−" + agHi + ")/(24−HCO₃) = " + fmtNum(dr), sdr, sevdr);
      }
    }

    var hasDist = phAbn || !!metab || respDx || agElevated || agLow;

    // Paso 5 — Índice Cl/Na (clave de apoyo; sólo se añade a la síntesis si aporta)
    if (na != null && cl != null) {
      var idx = cl / na, s5, sev5;
      if (idx < 0.75) {
        s5 = "Bajo — sugiere alcalosis metabólica (VPP 88%)"; sev5 = "warn";
        if (hasDist && !agElevated && dx.indexOf("Alcalosis metabólica") === -1) dx.push("Alcalosis metabólica oculta (Cl/Na)");
      } else if (idx > 0.79) {
        s5 = "Alto — acidosis metabólica hiperclorémica (VPP 81%)"; sev5 = "warn";
        if (hasDist) dx.push("Acidosis hiperclorémica (Cl/Na)");
      } else { s5 = "Índice Cl/Na normal"; sev5 = "ok"; }
      steps += gasoStep(5, "Índice Cl/Na", "Cl/Na = " + fmtNum(idx) + "  (normal 0.75–0.79)", s5, sev5);
    }

    // Síntesis
    var txt = dx.length ? dx.join("  +  ") : "Equilibrio ácido-base normal";
    if (lact != null) txt += "  ·  EB aláctico = " + fmtNum(eb + lact) + " mmol/L";
    var bsev = dx.length ? (dx.length > 1 ? "sev-warn" : "sev-danger") : "sev-ok";
    var banner = calcBanner(bsev, "Interpretación", null, txt);

    var note = '<div class="gaso-note">' +
      '<p>El método del exceso de base no distingue por sí solo una compensación crónica ' +
      '(p. ej. EPOC) de un trastorno metabólico primario añadido. Interpreta siempre con el contexto clínico.</p>' +
      '<p class="gaso-ref">Fuente: Toquiantzi Arzola MA, et al. ' +
      '<em>Interpretación gasométrica avanzada en el paciente crítico</em>. ' +
      'Med Crít. 2022;36(4):235-243.</p></div>';

    return '<div class="gaso">' + banner + '<div class="gaso-steps">' + steps + "</div>" + note + "</div>";
  }

  /* --- Secuencia Rápida de Intubación (dosis por peso) --- */
  var RSI_PREMED = [
    { n: "Fentanilo", conc: 50, cu: "mcg", du: "mcg", min: 1, max: 3 },
    { n: "Lidocaína", conc: 20, cu: "mg", du: "mg", min: 1.5, max: null }
  ];
  var RSI_INDUCT = [
    { n: "Propofol", conc: 10, cu: "mg", du: "mg", min: 1, max: 2 },
    { n: "Etomidato", conc: 2, cu: "mg", du: "mg", min: 0.2, max: 0.3 },
    { n: "Ketamina", conc: 50, cu: "mg", du: "mg", min: 1, max: 2 },
    { n: "Midazolam", conc: 5, cu: "mg", du: "mg", min: 0.1, max: 0.3 }
  ];
  var RSI_PARAL = [
    { n: "Rocuronio", conc: 10, cu: "mg", du: "mg", min: 1, max: 1.2 },
    { n: "Succinilcolina", conc: 50, cu: "mg", du: "mg", min: 1, max: 1.5 }
  ];
  function rsiDrug(peso, d) {
    var dmin = peso * d.min, dmax = (d.max != null) ? peso * d.max : null;
    var dose = (dmax != null) ? fmtNum(dmin) + "–" + fmtNum(dmax) : fmtNum(dmin);
    var ml = (dmax != null) ? fmtNum(dmin / d.conc) + "–" + fmtNum(dmax / d.conc) : fmtNum(dmin / d.conc);
    return '<div class="rsi-drug"><div class="rsi-dn">' + esc(d.n) +
      ' <span>(' + d.conc + " " + esc(d.cu) + "/ml)</span></div>" +
      '<div class="rsi-dd"><strong>' + dose + " " + esc(d.du) + "</strong> · " + ml + " ml</div></div>";
  }
  function rsiP(n, title, text, extra) {
    return '<div class="rsi-p"><div class="rsi-ph"><span class="rsi-n">' + n + "</span>" +
      '<span class="rsi-pt">' + esc(title) + "</span></div>" +
      (text ? '<div class="rsi-tx">' + esc(text) + "</div>" : "") + (extra || "") + "</div>";
  }
  function rsiResult(s) {
    var peso = gNum(s, "peso");
    if (!(peso > 0)) return appWarn("Introduce el peso del paciente.");
    var drugs = function (arr) { return arr.map(function (d) { return rsiDrug(peso, d); }).join(""); };
    var p4 = '<div class="rsi-sub">Inductores</div>' + drugs(RSI_INDUCT) +
      '<div class="rsi-sub">Paralizantes</div>' + drugs(RSI_PARAL);
    var html = '<div class="rsi">' +
      rsiP(1, "Preparación", "Monitorización, material listo (tubos, laringoscopio, aspirador) y fármacos cargados.") +
      rsiP(2, "Preoxigenación", "FiO₂ 100% durante 3–5 minutos con mascarilla reservorio o VMNI.") +
      rsiP(3, "Premedicación", "Atenuar la respuesta simpática.", drugs(RSI_PREMED)) +
      rsiP(4, "Parálisis con inducción", "Administrar el inductor seguido inmediatamente del paralizante.", p4) +
      rsiP(5, "Posicionamiento", "Alineación de los ejes oral, faríngeo y laríngeo (posición de olfateo).") +
      rsiP(6, "Progresión del tubo", "Laringoscopia, visualización de cuerdas vocales e inserción del tubo.") +
      rsiP(7, "Post-intubación", "Comprobación (capnografía, auscultación), fijación del tubo, conexión al ventilador e inicio de sedoanalgesia.") +
      "</div>";
    return html;
  }

  /* --- Bombas de perfusión (dosis → ml/h) --- */
  var PERF = [
    { n: "Noradrenalina", mg: 10, vol: 250, dose: 0.1, prep: "10 mg (2 amp de 5 mg/10 ml) en 250 ml de SG 5%" },
    { n: "Dopamina", mg: 200, vol: 250, dose: 5, prep: "200 mg (1 amp de 200 mg/5 ml) en 250 ml de SG 5%" },
    { n: "Dobutamina", mg: 250, vol: 250, dose: 5, prep: "250 mg (1 vial de 250 mg/20 ml) en 250 ml de SG 5%" }
  ];
  function perfDrug(s) { return PERF[(s.sel.drug == null) ? 0 : s.sel.drug]; }
  function perfResult(s) {
    var d = perfDrug(s);
    var peso = gNum(s, "peso");
    var mg = gNum(s, "mg"); if (mg == null) mg = d.mg;
    var vol = gNum(s, "vol"); if (vol == null) vol = d.vol;
    var dose = gNum(s, "dose"); if (dose == null) dose = d.dose;
    if (!(peso > 0)) return appWarn("Introduce el peso del paciente.");
    if (!(mg > 0) || !(vol > 0)) return appWarn("Revisa la preparación (mg y volumen).");
    var conc = mg * 1000 / vol;            // mcg/ml
    var rate = dose * peso * 60 / conc;    // ml/h
    var rows = [
      ["Mezcla", fmtNum(mg) + " mg en " + fmtNum(vol) + " ml de SG 5%"],
      ["Concentración", fmtNum(conc) + " mcg/ml"],
      ["Dosis", fmtNum(dose) + " mcg/kg/min · " + fmtNum(peso) + " kg"]
    ];
    return '<div class="perf">' +
      appResult([{ num: fmtNum(rate), unit: "ml/h" }]) +
      '<div class="perf-info">' + rows.map(function (r) {
        return '<div class="perf-row"><span>' + esc(r[0]) + "</span><strong>" + esc(r[1]) + "</strong></div>";
      }).join("") + "</div>" +
      '<div class="perf-hint">Preparación habitual: ' + esc(d.prep) + "</div></div>";
  }

  /* ============================================================
     Toxicología (multi-herramienta)
     ============================================================ */
  function tN(s, k) { var v = parseFloat(s.num[k]); return isNaN(v) ? null : v; }
  function fmt1(x) { return (Math.round(x * 10) / 10).toString(); }
  function toxRows(rows) {
    return '<div class="perf-info">' + rows.map(function (r) {
      return '<div class="perf-row"><span>' + esc(r[0]) + "</span><strong>" + esc(r[1]) + "</strong></div>";
    }).join("") + "</div>";
  }
  function toxSub(t) { return '<div class="tox-sub">' + esc(t) + "</div>"; }
  function toxNote(html) { return '<div class="gaso-note"><p>' + html + "</p></div>"; }

  var TOX_TOOLS = [
    { label: "Nomograma de paracetamol" },
    { label: "NAC i.v. por peso" },
    { label: "Antídotos (dosis)" },
    { label: "Gap osmolar / aniónico" },
    { label: "Salicilatos · litio · etanol" }
  ];
  var TOX_ANTI = [
    "Naloxona", "Flumazenilo", "Fab antidigoxina", "Fomepizol",
    "Hidroxocobalamina", "Glucagón", "Emulsión lipídica 20%",
    "Atropina", "Pralidoxima (2-PAM)"
  ];

  function toxFields(s) {
    var tool = s.sel.tool || 0;
    var f = [{ tipo: "select", grp: "tool", label: "Herramienta", opciones: TOX_TOOLS, def: 0 }];
    if (tool === 0) {
      f.push({ tipo: "opt", grp: "punit", label: "Unidades del nivel", opciones: [{ label: "µg/mL (mg/L)" }, { label: "µmol/L" }], def: 0 });
      f.push({ k: "pt", tipo: "num", label: "Horas desde la ingesta", unidad: "h", ph: "4" });
      f.push({ k: "plvl", tipo: "num", label: "Paracetamol en sangre", unidad: ((s.sel.punit || 0) === 1 ? "µmol/L" : "µg/mL"), ph: ((s.sel.punit || 0) === 1 ? "1000" : "150") });
      f.push({ tipo: "opt", grp: "pline", label: "Línea de tratamiento", opciones: [{ label: "150 · estándar" }, { label: "100 · alto riesgo" }], def: 0 });
    } else if (tool === 1) {
      f.push({ k: "nacw", tipo: "num", label: "Peso del paciente", unidad: "kg", ph: "70" });
    } else if (tool === 2) {
      f.push({ tipo: "select", grp: "anti", label: "Antídoto", opciones: TOX_ANTI.map(function (x) { return { label: x }; }), def: 0 });
      var a = s.sel.anti || 0;
      if (a === 2) {
        f.push({ tipo: "opt", grp: "fabmode", label: "Calcular por", opciones: [{ label: "Digoxinemia" }, { label: "Dosis ingerida" }, { label: "Empírico" }], def: 0 });
        var m = s.sel.fabmode || 0;
        if (m === 0) { f.push({ k: "diglvl", tipo: "num", label: "Digoxinemia", unidad: "ng/mL", ph: "4" }); f.push({ k: "digw", tipo: "num", label: "Peso", unidad: "kg", ph: "70" }); }
        else if (m === 1) { f.push({ k: "digdose", tipo: "num", label: "Dosis ingerida", unidad: "mg", ph: "5" }); }
      } else if (a === 3 || a === 5 || a === 6 || a === 8) {
        f.push({ k: "aw", tipo: "num", label: "Peso del paciente", unidad: "kg", ph: "70" });
      }
    } else if (tool === 3) {
      f.push({ k: "na", tipo: "num", label: "Na⁺", unidad: "mEq/L", ph: "140" });
      f.push({ k: "glu", tipo: "num", label: "Glucosa", unidad: "mg/dL", ph: "90" });
      f.push({ k: "urea", tipo: "num", label: "Urea", unidad: "mg/dL", ph: "30" });
      f.push({ k: "osm", tipo: "num", label: "Osmolalidad medida", unidad: "mOsm/kg", ph: "290" });
      f.push({ k: "etoh", tipo: "num", label: "Etanol (opcional)", unidad: "mg/dL", ph: "0" });
      f.push({ k: "cl", tipo: "num", label: "Cl⁻ (opcional)", unidad: "mEq/L", ph: "104" });
      f.push({ k: "hco3", tipo: "num", label: "HCO₃⁻ (opcional)", unidad: "mEq/L", ph: "24" });
      f.push({ k: "alb", tipo: "num", label: "Albúmina (opcional)", unidad: "g/dL", ph: "4" });
    } else {
      f.push({ tipo: "opt", grp: "subs", label: "Tóxico", opciones: [{ label: "Salicilatos" }, { label: "Litio" }, { label: "Etanol" }], def: 0 });
      var sub = s.sel.subs || 0;
      f.push({ k: "lvl", tipo: "num", label: "Nivel sérico", unidad: (sub === 1 ? "mEq/L" : "mg/dL"), ph: (sub === 1 ? "1.0" : (sub === 2 ? "100" : "30")) });
    }
    return f;
  }

  function toxResult(s) {
    var tool = s.sel.tool || 0;
    if (tool === 0) return paraResult(s);
    if (tool === 1) return nacResult(s);
    if (tool === 2) return antiResult(s);
    if (tool === 3) return gapResult(s);
    return levelResult(s);
  }

  /* --- Nomograma de Rumack-Matthew (paracetamol) --- */
  function paraGraph(t, lvl, base, above) {
    var L = 40, Rr = 308, T = 12, Bb = 196, pw = Rr - L, ph = Bb - T;
    var lmax = 3, span = lmax - (Math.log(4) / Math.LN10);
    function X(tt) { return (L + (tt - 4) / 20 * pw).toFixed(1); }
    function Yv(v) { var c = Math.max(4, Math.min(1000, v)); return (T + (lmax - Math.log(c) / Math.LN10) / span * ph).toFixed(1); }
    var g = '<text x="' + (L - 4) + '" y="' + (T - 2) + '" class="txg-lab" text-anchor="end">µg/mL</text>';
    [10, 30, 100, 300, 1000].forEach(function (v) {
      var y = Yv(v);
      g += '<line x1="' + L + '" y1="' + y + '" x2="' + Rr + '" y2="' + y + '" class="txg-grid"/>';
      g += '<text x="' + (L - 4) + '" y="' + (parseFloat(y) + 3) + '" class="txg-lab" text-anchor="end">' + v + "</text>";
    });
    [4, 8, 12, 16, 20, 24].forEach(function (tt) {
      var x = X(tt);
      g += '<line x1="' + x + '" y1="' + T + '" x2="' + x + '" y2="' + Bb + '" class="txg-grid"/>';
      g += '<text x="' + x + '" y="' + (Bb + 13) + '" class="txg-lab" text-anchor="middle">' + tt + "</text>";
    });
    g += '<polyline points="' + X(4) + "," + Yv(base) + " " + X(24) + "," + Yv(base / 32) + '" class="txg-line"/>';
    g += '<text x="' + (parseFloat(X(4)) + 5) + '" y="' + (parseFloat(Yv(base)) - 5) + '" class="txg-line-lab">línea ' + base + "</text>";
    if (t != null && lvl != null && t >= 4 && t <= 24) {
      g += '<circle cx="' + X(t) + '" cy="' + Yv(lvl) + '" r="5" class="' + (above ? "txg-pt-hi" : "txg-pt-lo") + '"/>';
    }
    g += '<text x="' + (L + pw / 2) + '" y="' + (Bb + 24) + '" class="txg-ax" text-anchor="middle">horas desde la ingesta</text>';
    return '<div class="tox-graph"><svg viewBox="0 0 320 224" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nomograma de Rumack-Matthew">' + g + "</svg></div>";
  }
  function paraResult(s) {
    var t = tN(s, "pt"), raw = tN(s, "plvl");
    var unit = s.sel.punit || 0, base = (s.sel.pline || 0) === 1 ? 100 : 150;
    if (t == null || raw == null)
      return appWarn("Introduce las horas desde la ingesta y el nivel de paracetamol.");
    var lvl = unit === 1 ? raw / 6.62 : raw;        // a µg/mL
    var thr = base * Math.pow(2, -(t - 4) / 4);
    var above = lvl >= thr, banner, foot = "";
    if (t < 4) {
      banner = calcBanner("sev-warn", "Aún no interpretable", null, "El nivel antes de las 4 h no es valorable. Repite la determinación a las 4 h de la ingesta.");
    } else if (t > 24) {
      banner = calcBanner("sev-warn", "Fuera del nomograma", null, "Pasadas 24 h el nomograma no es válido. Valora tratamiento empírico según clínica, transaminasas, INR y paracetamol detectable.");
    } else {
      banner = above
        ? calcBanner("sev-danger", "Por encima de la línea — iniciar NAC", null, "El nivel está sobre la línea de tratamiento de " + base + ": indicada N-acetilcisteína.")
        : calcBanner("sev-ok", "Por debajo de la línea — NAC no indicada", null, "El nivel queda bajo la línea de " + base + ". Reevalúa si la hora de ingesta es incierta o hay clínica/factores de riesgo.");
    }
    var rows = [["Nivel", fmt1(lvl) + " µg/mL" + (unit === 1 ? " (" + fmt1(raw) + " µmol/L)" : "")]];
    if (t >= 4 && t <= 24) {
      rows.push(["Umbral a " + fmt1(t) + " h (línea " + base + ")", fmt1(thr) + " µg/mL"]);
      rows.push(["Margen sobre el umbral", (lvl - thr >= 0 ? "+" : "") + fmt1(lvl - thr) + " µg/mL"]);
    }
    foot = paraGraph(t, lvl, base, above);
    return '<div class="tox">' + banner + toxRows(rows) + foot +
      toxNote("Válido sólo para <strong>ingesta única aguda con hora conocida</strong>, entre las 4 y 24 h. No aplicable a ingesta escalonada/crónica ni a formulaciones de liberación prolongada. Ante duda con &gt;8 h de evolución, inicia NAC sin esperar al nivel. La línea 150 (Rumack-Matthew) es la de tratamiento estándar; la línea 100 la usan algunos protocolos en pacientes de alto riesgo.") +
      '<div class="tox-src">Rumack BH, Matthew H. Pediatrics 1975 · línea de tratamiento.</div></div>';
  }

  /* --- N-acetilcisteína i.v. por peso (pauta de 21 h, 3 bolsas) --- */
  function nacBag(n, name, mg, dil, dur, rate) {
    return '<div class="tox-bag"><div class="tox-bag-h"><span class="tox-bag-n">' + n + "</span>" +
      '<span class="tox-bag-t">' + esc(name) + "</span>" +
      '<span class="tox-bag-r">' + rate + " mL/h</span></div>" +
      '<div class="tox-bag-d"><strong>' + fmt1(mg) + " mg</strong> de NAC en " + dil + " mL de SG 5% · " + dur + "</div></div>";
  }
  function nacResult(s) {
    var w = tN(s, "nacw");
    if (!(w > 0)) return appWarn("Introduce el peso del paciente.");
    var capped = w > 110, wd = Math.min(w, 110);
    var total = 300 * wd;
    var html = '<div class="tox">' +
      calcBanner("sev-ok", "N-acetilcisteína i.v.", null, "Pauta de 21 h · dosis total " + fmt1(total) + " mg (300 mg/kg)." + (capped ? " Dosis topada a 110 kg." : "")) +
      nacBag(1, "Carga", 150 * wd, 200, "1 h", 200) +
      nacBag(2, "Segunda", 50 * wd, 500, "4 h", 125) +
      nacBag(3, "Tercera", 100 * wd, 1000, "16 h", "62.5") +
      toxNote("Las bolsas van <strong>consecutivas, sin interrupción</strong>. Reduce el volumen de diluyente en pacientes de bajo peso para evitar hiponatremia y sobrecarga. Vial de NAC habitual 200 mg/mL (5 g/25 mL). Mantén la 3.ª bolsa más allá de las 21 h si persisten transaminasas en ascenso, INR alterado o paracetamol detectable.") +
      '<div class="tox-src">Régimen de Prescott (SNAP/21 h): 150 + 50 + 100 mg/kg.</div></div>';
    return html;
  }

  /* --- Dosificador de antídotos --- */
  function antiResult(s) {
    var a = s.sel.anti || 0, w = tN(s, "aw");
    if (a === 2) return fabResult(s);
    var name = TOX_ANTI[a], rows, hint = "", para = "", warn = "", sev = "sev-ok";
    if (a === 0) {
      para = "Depresión por opioides";
      rows = [["Bolo inicial", "0.04–0.4 mg IV, titular a ventilación"],
        ["Coma / parada", "0.4–2 mg IV, repetir c/2–3 min"],
        ["Techo", "hasta ~10 mg (replantear el diagnóstico)"],
        ["Perfusión", "⅔ de la dosis eficaz por hora"],
        ["Vías", "IV · IM · SC · intranasal"]];
      hint = "Vida media corta (30–90 min): vigila la resedación, sobre todo con opioides de acción prolongada (metadona, opioides retard).";
    } else if (a === 1) {
      para = "Reversión de benzodiacepinas";
      rows = [["Bolo", "0.2 mg IV en 15–30 s"],
        ["Repetir", "0.1–0.2 mg c/1 min hasta respuesta o 1 mg"],
        ["Perfusión", "0.1–0.4 mg/h si resedación"]];
      warn = calcBanner("sev-danger", "Precaución", null, "Contraindicado si dependencia a BZD, coingesta de proconvulsivantes (antidepresivos tricíclicos) o epilepsia: riesgo de convulsiones.");
    } else if (a === 3) {
      para = "Metanol / etilenglicol";
      rows = [["Carga", "15 mg/kg IV en 30 min" + (w > 0 ? " = " + fmt1(15 * w) + " mg" : "")],
        ["Mantenimiento", "10 mg/kg c/12 h ×4 dosis" + (w > 0 ? " = " + fmt1(10 * w) + " mg" : "")],
        ["Después", "15 mg/kg c/12 h" + (w > 0 ? " = " + fmt1(15 * w) + " mg" : "")],
        ["En hemodiálisis", "dosificar c/4 h o en perfusión"]];
      hint = "Diluir en ≥100 mL de SF/SG 5% e infundir en 30 min. Mantén hasta metanol/etilenglicol <20 mg/dL, pH normal y asintomático.";
    } else if (a === 4) {
      para = "Cianuro / inhalación de humo";
      rows = [["Adulto", "5 g IV en 15 min"],
        ["Repetir", "5 g si precisa (máx 10 g)"]];
      hint = "Tiñe de rojo piel y orina e interfiere con la cooximetría y varias analíticas. Reconstituir con 200 mL de SF.";
    } else if (a === 5) {
      para = "Betabloqueantes / antagonistas del calcio";
      rows = [["Bolo", "3–10 mg IV (50–150 µg/kg)" + (w > 0 ? " = " + fmt1(0.05 * w) + "–" + fmt1(0.15 * w) + " mg" : "")],
        ["Perfusión", "2–5 mg/h, titular (hasta 10 mg/h)"]];
      hint = "Náusea y vómito muy frecuentes: protege la vía aérea. Efecto inotrópico/cronotrópico independiente del receptor β.";
    } else if (a === 6) {
      para = "Anestésicos locales y cardiotóxicos lipófilos";
      rows = [["Bolo", "1.5 mL/kg IV en 2–3 min" + (w > 0 ? " = " + fmt1(1.5 * w) + " mL" : "")],
        ["Perfusión", "0.25 mL/kg/min ×30–60 min" + (w > 0 ? " = " + fmt1(15 * w) + " mL/h" : "")],
        ["Si inestable", "repetir bolo ×1–2 y subir a 0.5 mL/kg/min"],
        ["Máximo", "≈10–12 mL/kg" + (w > 0 ? " = " + fmt1(12 * w) + " mL" : "")]];
      hint = "Usa el peso magro. En parada por anestésico local, mantén RCP prolongada mientras infundes.";
    } else if (a === 7) {
      para = "Síndrome colinérgico (organofosforados/carbamatos)";
      rows = [["Dosis", "2–3 mg IV"],
        ["Escalada", "doblar la dosis c/5 min hasta atropinización"],
        ["Objetivo", "campos pulmonares secos, FC >80, TAS >80"],
        ["Perfusión", "10–20% de la dosis total de atropinización por hora"]];
      hint = "El objetivo es secar las secreciones bronquiales (no la FC ni la midriasis). Pueden precisarse dosis muy altas.";
    } else {
      para = "Organofosforados (reactivador de la colinesterasa)";
      rows = [["Carga", "30 mg/kg IV en 15–30 min (1–2 g)" + (w > 0 ? " = " + fmt1(30 * w / 1000) + " g" : "")],
        ["Perfusión", "8 mg/kg/h" + (w > 0 ? " = " + fmt1(8 * w) + " mg/h" : "")],
        ["Alternativa", "1 g c/4–6 h"]];
      hint = "Administra siempre junto con atropina y lo antes posible (antes del «envejecimiento» de la enzima). No sustituye a la atropina.";
    }
    return '<div class="tox">' + calcBanner(sev, name, null, para) + warn + toxRows(rows) +
      (hint ? '<div class="perf-hint">' + hint + "</div>" : "") + "</div>";
  }
  function fabResult(s) {
    var mode = s.sel.fabmode || 0, rows, score, banner;
    if (mode === 0) {
      var lvl = tN(s, "diglvl"), w = tN(s, "digw");
      if (lvl == null || w == null) return appWarn("Introduce la digoxinemia y el peso.");
      var vials = lvl * w / 100, v = Math.ceil(vials);
      banner = calcBanner("sev-danger", "Fab antidigoxina", v + " viales", "≈ " + fmt1(vials) + " viales → redondea al alza.");
      rows = [["Fórmula", "(digoxinemia × peso) / 100"], ["Cálculo", fmt1(lvl) + " × " + fmt1(w) + " / 100 = " + fmt1(vials)]];
    } else if (mode === 1) {
      var dose = tN(s, "digdose");
      if (dose == null) return appWarn("Introduce la dosis ingerida.");
      var vials2 = dose * 0.8 / 0.5, v2 = Math.ceil(vials2);
      banner = calcBanner("sev-danger", "Fab antidigoxina", v2 + " viales", "≈ " + fmt1(vials2) + " viales → redondea al alza.");
      rows = [["Fórmula", "dosis (mg) × 0.8 / 0.5"], ["Cálculo", fmt1(dose) + " × 0.8 / 0.5 = " + fmt1(vials2)]];
    } else {
      banner = calcBanner("sev-warn", "Fab antidigoxina — empírico", null, "Cuando no hay nivel ni dosis fiables.");
      rows = [["Intoxicación aguda", "10–20 viales"], ["Intoxicación crónica", "3–6 viales (adulto)"], ["Parada cardiaca", "empezar por 20 viales"]];
    }
    return '<div class="tox">' + banner + toxRows(rows) +
      '<div class="perf-hint">1 vial (≈40 mg) neutraliza 0.5 mg de digoxina. Indicado ante arritmias graves, K⁺ &gt;5 mEq/L, inestabilidad hemodinámica o ingesta masiva.</div></div>';
  }

  /* --- Gap osmolar + anión gap corregido + delta-delta --- */
  function gapResult(s) {
    var na = tN(s, "na"), glu = tN(s, "glu"), urea = tN(s, "urea"), osm = tN(s, "osm");
    var etoh = tN(s, "etoh"), cl = tN(s, "cl"), hco3 = tN(s, "hco3"), alb = tN(s, "alb");
    if (na == null) return appWarn("Introduce al menos el Na⁺.");
    var body = "", dx = [];
    if (glu != null && urea != null && osm != null) {
      var calc = 2 * na + glu / 18 + urea / 6;
      var gap = osm - calc;
      var orows = [["Osm calculada", "2·Na + glu/18 + urea/6 = " + fmt1(calc)],
        ["Gap osmolar", fmt1(gap) + " mOsm/kg (normal <10)"]];
      var eff = gap;
      if (etoh != null && etoh > 0) {
        eff = gap - etoh / 4.6;
        orows.push(["Etanol", "−" + fmt1(etoh / 4.6) + " mOsm (etanol/4.6)"]);
        orows.push(["Gap residual", fmt1(eff) + " mOsm/kg"]);
      }
      body += toxSub("Gap osmolar") + toxRows(orows);
      if (eff > 10) {
        dx.push("Gap osmolar elevado");
        body += toxRows([["Metanol estimado", "≤ " + fmt1(eff * 3.2) + " mg/dL"], ["Etilenglicol estimado", "≤ " + fmt1(eff * 6.2) + " mg/dL"]]);
      }
    }
    if (cl != null && hco3 != null) {
      var ag = na - (cl + hco3);
      var agc = (alb != null) ? ag + 2.5 * (4 - alb) : ag;
      var arows = [["Anión gap", "Na − (Cl + HCO₃) = " + fmt1(ag)]];
      if (alb != null) arows.push(["AG corregido", fmt1(agc) + " (por albúmina " + fmt1(alb) + ")"]);
      arows.push(["Referencia", "normal 8–12 mEq/L"]);
      body += toxSub("Anión gap") + toxRows(arows);
      if (agc > 12) {
        dx.push("Acidosis metabólica de AG elevado");
        if (hco3 < 24) {
          var dr = (agc - 12) / (24 - hco3), interp;
          if (dr < 0.4) interp = "acidosis hiperclorémica añadida (AG normal)";
          else if (dr <= 2) interp = "acidosis de AG elevado pura";
          else interp = "alcalosis metabólica o acidosis crónica coexistente";
          body += toxRows([["Delta-delta", "(AG−12)/(24−HCO₃) = " + fmt1(dr)], ["Interpretación", interp]]);
        }
      } else if (agc < 8) {
        dx.push("Anión gap bajo");
      }
    }
    var bsev = dx.length ? "sev-warn" : "sev-ok";
    var btxt = dx.length ? dx.join("  ·  ") : "Sin datos suficientes o dentro de la normalidad";
    if (dx.indexOf("Gap osmolar elevado") !== -1 && dx.indexOf("Acidosis metabólica de AG elevado") !== -1) {
      bsev = "sev-danger";
      btxt += "  →  sospecha de metanol/etilenglicol";
    }
    return '<div class="tox">' + calcBanner(bsev, "Síntesis", null, btxt) + body +
      toxNote("Urea en mg/dL (BUN/2.8 ≈ urea/6). Las estimaciones de metanol/etilenglicol son <strong>orientativas y por exceso</strong>; un gap osmolar normal no descarta toxicidad si la ingesta fue precoz o ya metabolizada. Combina gap osmolar elevado + acidosis con AG elevado para sospechar alcoholes tóxicos.") + "</div>";
  }

  /* --- Salicilatos / litio / etanol --- */
  function levelBand(lvl, bands) {
    for (var i = 0; i < bands.length; i++) if (lvl < bands[i].max) return bands[i];
    return bands[bands.length - 1];
  }
  function levelResult(s) {
    var sub = s.sel.subs || 0, lvl = tN(s, "lvl");
    if (lvl == null) return appWarn("Introduce el nivel sérico.");
    var name, unit, bands, rows, note;
    if (sub === 0) {
      name = "Salicilatos"; unit = "mg/dL";
      bands = [{ max: 30, label: "Terapéutico / no tóxico", sev: "sev-ok" },
        { max: 50, label: "Intoxicación leve", sev: "sev-warn" },
        { max: 70, label: "Intoxicación moderada", sev: "sev-warn" },
        { max: 100, label: "Intoxicación grave", sev: "sev-danger" },
        { max: Infinity, label: "Intoxicación muy grave", sev: "sev-danger" }];
      rows = [["Terapéutico", "10–30 mg/dL"],
        ["Alcalinizar orina", "sintomático o nivel >35–40 mg/dL"],
        ["Hemodiálisis", "≥90 (agudo) o ≥80 con afectación orgánica"],
        ["HD también si", "acidemia, alteración del SNC, edema pulmonar/cerebral o IRA"]];
      note = "Sospéchalo ante acidosis metabólica con alcalosis respiratoria. La toxicidad crónica aparece a niveles más bajos. El nomograma de Done ya no se recomienda.";
    } else if (sub === 1) {
      name = "Litio"; unit = "mEq/L";
      bands = [{ max: 1.2, label: "Rango terapéutico", sev: "sev-ok" },
        { max: 1.5, label: "Límite alto", sev: "sev-warn" },
        { max: 2.5, label: "Intoxicación leve", sev: "sev-warn" },
        { max: 3.5, label: "Intoxicación moderada", sev: "sev-danger" },
        { max: Infinity, label: "Intoxicación grave", sev: "sev-danger" }];
      rows = [["Terapéutico", "0.6–1.2 mEq/L"],
        ["Hemodiálisis", "nivel >4 (o >5 en cualquier caso)"],
        ["HD también si", "deterioro de conciencia, convulsiones o arritmias"],
        ["Considerar HD", "nivel >2.5 con síntomas graves o insuficiencia renal"]];
      note = "Criterios EXTRIP. Los niveles precoces tras ingesta aguda pueden infraestimar la carga corporal: repítelos seriados. Suspende el litio, sueroterapia con SF y vigila la función renal.";
    } else {
      name = "Etanol"; unit = "mg/dL";
      bands = [{ max: 50, label: "Mínimo / subclínico", sev: "sev-ok" },
        { max: 100, label: "Euforia, desinhibición", sev: "sev-warn" },
        { max: 200, label: "Incoordinación, ataxia", sev: "sev-warn" },
        { max: 300, label: "Confusión, vómitos", sev: "sev-danger" },
        { max: 400, label: "Estupor", sev: "sev-danger" },
        { max: Infinity, label: "Coma · depresión respiratoria", sev: "sev-danger" }];
      rows = [["Metabolismo", "≈15–20 mg/dL por hora"],
        ["Riesgo vital", ">400 mg/dL en no tolerantes"],
        ["Aporte osmolar", "mg/dL ÷ 4.6 ≈ mOsm/kg"]];
      note = "La tolerancia individual modifica mucho la clínica. Ante discordancia clínica-nivel o gap osmolar inexplicado, descarta alcoholes tóxicos (metanol/etilenglicol).";
    }
    var b = levelBand(lvl, bands);
    return '<div class="tox">' + calcBanner(b.sev, name, fmt1(lvl) + " " + unit, b.label) +
      toxRows(rows) + toxNote(note) + "</div>";
  }

  var APPS = {
    tox: {
      nombre: "Toxicología", sub: "Paracetamol · NAC · antídotos · gaps · niveles",
      fields: toxFields, result: toxResult
    },
    goteo: {
      nombre: "Goteo intravenoso", sub: "Ritmo de perfusión: ml/h y gotas/min",
      fields: [
        { k: "vol", tipo: "num", label: "Volumen a infundir", unidad: "ml", ph: "500" },
        { k: "t", tipo: "num", label: "Tiempo", unidad: "", ph: "8" },
        { tipo: "opt", grp: "unit", label: "Unidad de tiempo", opciones: [{ label: "horas" }, { label: "minutos" }], def: 0 },
        { tipo: "opt", grp: "factor", label: "Equipo de goteo", opciones: [{ label: "Normal · 20 gtt/ml" }, { label: "Microgotero · 60" }, { label: "15 gtt/ml" }, { label: "10 gtt/ml" }], def: 0 }
      ],
      result: function (s) {
        var vol = parseFloat(s.num.vol), t = parseFloat(s.num.t);
        var unit = s.sel.unit == null ? 0 : s.sel.unit;
        var factor = [20, 60, 15, 10][s.sel.factor == null ? 0 : s.sel.factor];
        if (!(vol > 0) || !(t > 0)) return appWarn("Introduce volumen y tiempo");
        var th = unit === 1 ? t / 60 : t, tmin = unit === 1 ? t : t * 60;
        return appResult([
          { num: fmtNum(vol / th), unit: "ml/h" },
          { num: String(Math.round(vol * factor / tmin)), unit: "gotas/min" }
        ]);
      }
    },
    dosis: {
      nombre: "Dosis por peso", sub: "Dosis total según peso y mg/kg",
      fields: [
        { k: "peso", tipo: "num", label: "Peso", unidad: "kg", ph: "70" },
        { k: "dpk", tipo: "num", label: "Dosis", unidad: "mg/kg", ph: "1" },
        { k: "conc", tipo: "num", label: "Concentración (opcional)", unidad: "mg/ml", ph: "10" }
      ],
      result: function (s) {
        var p = parseFloat(s.num.peso), d = parseFloat(s.num.dpk), c = parseFloat(s.num.conc);
        if (!(p > 0) || !(d > 0)) return appWarn("Introduce peso y dosis");
        var total = p * d, out = [{ num: fmtNum(total), unit: "mg total" }];
        if (c > 0) out.push({ num: fmtNum(total / c), unit: "ml" });
        return appResult(out);
      }
    },
    gaso: {
      nombre: "Interpretación de gasometría", sub: "Análisis ácido-base en 5 pasos",
      fields: [
        { k: "ph", tipo: "num", label: "pH", unidad: "", ph: "7.40" },
        { k: "pco2", tipo: "num", label: "pCO₂", unidad: "mmHg", ph: "40" },
        { k: "hco3", tipo: "num", label: "HCO₃⁻", unidad: "mEq/L", ph: "24" },
        { k: "eb", tipo: "num", label: "Exceso de base (EB)", unidad: "mmol/L", ph: "0" },
        { k: "na", tipo: "num", label: "Na⁺", unidad: "mEq/L", ph: "140" },
        { k: "k", tipo: "num", label: "K⁺", unidad: "mEq/L", ph: "4" },
        { k: "cl", tipo: "num", label: "Cl⁻", unidad: "mEq/L", ph: "104" },
        { k: "alb", tipo: "num", label: "Albúmina (opcional)", unidad: "g/dL", ph: "4" },
        { k: "lact", tipo: "num", label: "Lactato (opcional)", unidad: "mmol/L", ph: "1" }
      ],
      result: gasoResult
    },
    rsi: {
      nombre: "Secuencia rápida de intubación", sub: "Guía de las 7 P · dosis por peso",
      fields: [
        { k: "peso", tipo: "num", label: "Peso del paciente", unidad: "kg", ph: "70" }
      ],
      result: rsiResult
    },
    perf: {
      nombre: "Bombas de perfusión", sub: "Vasoactivos: dosis → ml/h",
      fields: [
        { k: "peso", tipo: "num", label: "Peso del paciente", unidad: "kg", ph: "70" },
        { tipo: "select", grp: "drug", label: "Fármaco", opciones: [{ label: "Noradrenalina" }, { label: "Dopamina" }, { label: "Dobutamina" }], def: 0 },
        { k: "dose", tipo: "num", label: "Dosis deseada", unidad: "mcg/kg/min", phStrong: true, ph: function (s) { return String(perfDrug(s).dose); } },
        { k: "mg", tipo: "num", label: "Fármaco en la mezcla", unidad: "mg", phStrong: true, ph: function (s) { return String(perfDrug(s).mg); } },
        { k: "vol", tipo: "num", label: "Volumen total", unidad: "ml", phStrong: true, ph: function (s) { return String(perfDrug(s).vol); } }
      ],
      onOpt: function (s) { s.num.dose = ""; s.num.mg = ""; s.num.vol = ""; },
      result: perfResult
    }
  };
  var appState = null;
  function appResultHTML() { return APPS[appState.id].result(appState); }
  function appInnerHTML() {
    var app = APPS[appState.id];
    var fields = (typeof app.fields === "function") ? app.fields(appState) : app.fields;
    var body = fields.map(function (f) {
      var inner;
      if (f.tipo === "num") {
        var v = appState.num[f.k];
        var ph = (typeof f.ph === "function") ? f.ph(appState) : f.ph;
        inner = '<div class="num-wrap"><input type="number" inputmode="decimal" class="calc-num-input' + (f.phStrong ? " ph-strong" : "") + '" data-app-num="' + f.k + '" value="' +
          (v == null ? "" : esc(v)) + '"' + (ph ? ' placeholder="' + esc(ph) + '"' : "") + " />" +
          (f.unidad ? '<span class="num-unit">' + esc(f.unidad) + "</span>" : "") + "</div>";
      } else if (f.tipo === "select") {
        var ssel = appState.sel[f.grp]; if (ssel == null) ssel = f.def || 0;
        inner = '<div class="select-wrap"><select class="calc-select" data-app-sel="' + f.grp + '">' +
          f.opciones.map(function (o, i) {
            return '<option value="' + i + '"' + (ssel === i ? " selected" : "") + ">" + esc(o.label) + "</option>";
          }).join("") + '</select><span class="select-chev">' + ICONS.chev + "</span></div>";
      } else {
        var sel = appState.sel[f.grp]; if (sel == null) sel = f.def || 0;
        inner = '<div class="opts">' + f.opciones.map(function (o, i) {
          return '<button class="opt' + (sel === i ? " on" : "") + '" data-app-opt="' + i + '" data-app-grp="' + f.grp + '">' + esc(o.label) + "</button>";
        }).join("") + "</div>";
      }
      return '<div class="calc-item"><div class="calc-label">' + esc(f.label) + "</div>" + inner + "</div>";
    }).join("");
    return '<div class="ci-body">' + body + "</div>" +
      '<div class="ci-foot">' + app.result(appState) +
        '<div class="modal-actions"><span class="modal-src">Verifica siempre el cálculo antes de administrar.</span>' +
        '<button class="btn-reset" data-reset="1">Reiniciar</button></div></div>';
  }
  function appItemHTML(a) {
    return '<div class="scale-item" data-app="' + esc(a.id) + '" data-open="0">' +
      '<button class="scale-chip"><span class="scale-ic" style="background:' + rgba(a.color, 0.11) + ";color:" + a.color + '">' + a.icon + "</span>" +
      '<span class="scale-tx"><span class="scale-name">' + esc(a.nombre) + "</span>" +
      '<span class="scale-for">' + esc(a.sub) + "</span></span>" +
      '<span class="scale-go">' + ICONS.chevR + "</span></button>" +
      '<div class="calc-inline" hidden></div></div>';
  }
  function renderApps() {
    showDetailView();
    document.title = "Apps — Manual de Urgencias";
    var list = [
      { id: "tox", nombre: "Toxicología", sub: "Paracetamol · NAC · antídotos · gaps · niveles", color: "#4f6b4a", icon: ICONS.skull },
      { id: "rsi", nombre: "Secuencia rápida de intubación", sub: "Guía de las 7 P · dosis por peso", color: "#9c463c", icon: ICONS.syringe },
      { id: "gaso", nombre: "Interpretación de gasometría", sub: "Análisis ácido-base en 5 pasos", color: "#6f5f86", icon: ICONS.pulse },
      { id: "perf", nombre: "Bombas de perfusión", sub: "Vasoactivos: dosis → ml/h", color: "#9a6a3b", icon: ICONS.droplet },
      { id: "goteo", nombre: "Goteo intravenoso", sub: "ml/h y gotas/min", color: "#3f6b62", icon: ICONS.droplet },
      { id: "dosis", nombre: "Dosis por peso", sub: "mg/kg → dosis total y volumen", color: "#4f6f86", icon: ICONS.tratamiento }
    ];
    $topic.innerHTML =
      '<div class="t-head"><span class="t-cat" style="background:#0d9488">Herramientas</span>' +
      '<h1 class="t-title">Apps</h1><div class="ystripe"></div>' +
      '<div class="t-sub">Micro-aplicaciones de cálculo a pie de cama</div></div>' +
      '<div class="scales">' + list.map(appItemHTML).join("") + turnoAppItemHTML() + "</div>";
  }

  /* ============================================================
     Sorteo de turno de guardia
     ============================================================ */
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function defaultTurnoDoctor(i) { return ""; }
  function getTurnoConfig() {
    try {
      var saved = JSON.parse(localStorage.getItem("guardiaConfig") || "{}");
      var doctors = Array.isArray(saved.doctors)
        ? saved.doctors.slice(0, 3).map(function (name, i) {
            var value = String(name || "").trim();
            return value === "Médico " + (i + 1) ? "" : value;
          })
        : [saved.doctorA || "", saved.doctorB || ""].map(function (name, i) {
            var value = String(name || "").trim();
            return value === "Médico " + (i + 1) ? "" : value;
          });
      var count = saved.count === 3 || doctors.length >= 3 ? 3 : 2;
      while (doctors.length < count) doctors.push(defaultTurnoDoctor(doctors.length));
      return {
        count: count,
        doctors: doctors,
        date: saved.date || todayISO(),
        shift: saved.shift || "Guardia",
        start: saved.start || "00:00",
        end: saved.end || "08:00"
      };
    } catch (e) {
      return { count: 2, doctors: ["", ""], date: todayISO(), shift: "Guardia", start: "00:00", end: "08:00" };
    }
  }
  function saveTurnoConfig(config) {
    try { localStorage.setItem("guardiaConfig", JSON.stringify(config)); } catch (e) {}
  }
  function readTurnoForm() {
    var base = getTurnoConfig();
    var countInput = document.getElementById("turno-doctor-count");
    var count = countInput && +countInput.value === 3 ? 3 : 2;
    var doctors = [];
    for (var i = 0; i < count; i++) {
      var input = document.getElementById("turno-doctor-" + i);
      var value = input ? input.value.trim() : (base.doctors[i] || defaultTurnoDoctor(i));
      doctors.push(value);
    }
    return {
      count: count,
      doctors: doctors,
      date: (document.getElementById("turno-date") || {}).value || base.date || todayISO(),
      shift: ((document.getElementById("turno-shift") || {}).value || base.shift || "Guardia").trim() || "Guardia",
      start: (document.getElementById("turno-start") || {}).value || base.start || "00:00",
      end: (document.getElementById("turno-end") || {}).value || base.end || "08:00"
    };
  }
  function timeToMinutes(value) {
    var parts = String(value || "").split(":");
    var h = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
    return (isNaN(h) || isNaN(m)) ? 0 : Math.max(0, Math.min(1439, h * 60 + m));
  }
  function formatClock(totalMinutes) {
    var value = ((totalMinutes % 1440) + 1440) % 1440;
    return String(Math.floor(value / 60)).padStart(2, "0") + ":" + String(value % 60).padStart(2, "0");
  }
  function turnoRandomInt(max) {
    if (window.crypto && window.crypto.getRandomValues) {
      var bytes = new Uint32Array(1);
      window.crypto.getRandomValues(bytes);
      return Math.floor((bytes[0] / 4294967296) * max);
    }
    return Math.floor(Math.random() * max);
  }
  function turnoShuffle(items) {
    var result = items.slice();
    for (var i = result.length - 1; i > 0; i--) {
      var j = turnoRandomInt(i + 1), tmp = result[i];
      result[i] = result[j]; result[j] = tmp;
    }
    return result;
  }
  function buildTurnoSlots(config) {
    var start = timeToMinutes(config.start), end = timeToMinutes(config.end);
    var duration = end - start;
    if (duration <= 0) duration += 1440;
    var order = turnoShuffle(config.doctors.slice(0, config.count));
    var slots = [];
    for (var i = 0; i < config.count; i++) {
      var from = start + Math.round(duration * i / config.count);
      var to = start + Math.round(duration * (i + 1) / config.count);
      slots.push({ from: formatClock(from), to: formatClock(to), doctor: order[i] });
    }
    return slots;
  }
  function turnoSlotsHTML(slots) {
    return '<ol class="turno-slots">' + slots.map(function (slot, i) {
      return '<li class="turno-slot">' +
        '<span class="turno-slot-index">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<div class="turno-slot-time"><strong>' + esc(slot.from) + ' — ' + esc(slot.to) + '</strong><span>' + esc(slot.doctor) + '</span></div>' +
        '</li>';
    }).join("") + '</ol>';
  }
  function getTurnoHistory() {
    try { return JSON.parse(localStorage.getItem("guardiaHistory") || "[]"); } catch (e) { return []; }
  }
  function formatTurnoDate(value) {
    if (!value) return "Sin fecha";
    var parts = String(value).split("-");
    return parts.length === 3 ? parts[2] + "/" + parts[1] + "/" + parts[0] : value;
  }
  function turnoHistoryHTML(history) {
    if (!history.length) {
      return '<div class="turno-empty"><span class="turno-empty-mark">—</span><span>Aún no hay sorteos guardados.</span></div>';
    }
    return history.map(function (item) {
      var summary = item.slots && item.slots.length
        ? item.slots.map(function (slot) { return slot.doctor + " " + slot.from + "–" + slot.to; }).join(" · ")
        : (item.winner || "Sorteo anterior");
      return '<li class="turno-history-item">' +
        '<span class="turno-history-winner">' + esc(summary) + '</span>' +
        '<span class="turno-history-meta">' + esc(item.shift || "Guardia") + ' · ' + esc(formatTurnoDate(item.date)) + '</span>' +
        '</li>';
    }).join("");
  }
  function turnoAppItemHTML() {
    return '<div class="scale-item turno-app-item">' +
      '<a class="scale-chip turno-app-link" href="#/turno">' +
        '<span class="scale-ic" style="background:' + rgba("#9e2b22", 0.11) + ';color:#9e2b22">' + ICONS.swap + '</span>' +
        '<span class="scale-tx"><span class="scale-name">Sorteo de Turno de Guardia</span>' +
        '<span class="scale-for">Reparto igualado entre 2 o 3 médicos</span></span>' +
        '<span class="scale-go">' + ICONS.chevR + '</span>' +
      '</a></div>';
  }
  function renderTurno() {
    showDetailView();
    document.title = "Sorteo de Turno de Guardia — Manual de Urgencias";
    var config = getTurnoConfig();
    var history = getTurnoHistory();
    var last = null;
    try { last = JSON.parse(localStorage.getItem("guardiaLastResult") || "null"); } catch (e) {}
    var doctorFields = config.doctors.slice(0, config.count).map(function (name, i) {
      return '<label class="turno-field"><span>Médico ' + (i + 1) + '</span>' +
        '<input id="turno-doctor-' + i + '" type="text" maxlength="60" value="' + escA(name) + '" placeholder="Médico ' + (i + 1) + '" autocomplete="name" data-clear-on-focus="1" /></label>';
    }).join("");
    var resultHTML = last && last.slots && last.slots.length
      ? '<div class="turno-result" aria-live="polite">' +
          '<div class="turno-print-title">Sorteo de Turno de Guardia</div>' +
          '<div class="turno-result-kicker">Reparto sorteado</div>' +
          '<div class="turno-result-title">' + esc(last.shift || "Guardia") + ' · ' + esc(formatTurnoDate(last.date)) + '</div>' +
          turnoSlotsHTML(last.slots) +
          '<div class="turno-result-foot">' + esc(last.start) + ' — ' + esc(last.end) + ' · ' + last.count + ' médicos · realizado ' + esc(last.time || "ahora") + '</div>' +
          '<div class="turno-result-actions"><button class="turno-print" type="button" data-print-turno="1">Imprimir resultado</button></div>' +
        '</div>'
      : '<div class="turno-result turno-result-empty" aria-live="polite">' +
          '<div class="turno-result-kicker">Listos para sortear</div>' +
          '<div class="turno-result-title">Aquí aparecerá el reparto de la guardia</div>' +
          '<div class="turno-result-placeholder">Cada médico recibirá una parte igual del intervalo.</div>' +
        '</div>';
    $topic.innerHTML =
      '<div class="t-head turno-head"><span class="t-cat">Herramienta de guardia</span>' +
      '<h1 class="t-title">Sorteo de Turno de Guardia</h1><div class="ystripe"></div>' +
      '<div class="t-sub">Reparte el horario y sortea qué médico ocupa cada tramo.</div></div>' +
      '<div class="turno-layout">' +
        '<section class="turno-card turno-form-card" aria-labelledby="turno-form-title">' +
          '<div class="turno-card-head"><div><span class="turno-label">Configuración</span><h2 id="turno-form-title">¿Quiénes estáis de guardia?</h2></div><span class="turno-card-icon">' + ICONS.swap + '</span></div>' +
          '<div class="turno-fields">' +
            '<label class="turno-field"><span>Número de médicos</span><select id="turno-doctor-count" class="turno-select">' +
              '<option value="2"' + (config.count === 2 ? ' selected' : '') + '>2 médicos</option>' +
              '<option value="3"' + (config.count === 3 ? ' selected' : '') + '>3 médicos</option>' +
            '</select></label>' +
            doctorFields +
            '<div class="turno-field-row"><label class="turno-field"><span>Fecha</span><input id="turno-date" type="date" value="' + escA(config.date) + '" /></label>' +
            '<label class="turno-field"><span>Nombre del turno</span><input id="turno-shift" type="text" maxlength="40" value="' + escA(config.shift) + '" /></label></div>' +
            '<div class="turno-field-row"><label class="turno-field"><span>Hora de inicio</span><input id="turno-start" type="time" value="' + escA(config.start) + '" /></label>' +
            '<label class="turno-field"><span>Hora final</span><input id="turno-end" type="time" value="' + escA(config.end) + '" /></label></div>' +
          '</div>' +
          '<button class="turno-draw" type="button" data-draw="1"><span>' + ICONS.swap + '</span> Sortear y repartir guardia</button>' +
          '<p class="turno-note">Por defecto: 00:00–08:00 repartido a partes iguales. Si la hora final es anterior, se interpreta como el día siguiente.</p>' +
        '</section>' +
        resultHTML +
        '<section class="turno-card turno-history-card" aria-labelledby="turno-history-title">' +
          '<div class="turno-card-head"><div><span class="turno-label">Registro local</span><h2 id="turno-history-title">Últimos sorteos</h2></div>' +
          (history.length ? '<button class="turno-clear" type="button" data-clear-history="1">Limpiar</button>' : '') + '</div>' +
          '<ol class="turno-history">' + turnoHistoryHTML(history) + '</ol>' +
        '</section>' +
      '</div>';
  }
  /* ============================================================
     Calculadora de escalas (modal)
     ============================================================ */
  var calc = null;
  function scaleItemHTML(id) {
    var s = SCALES[id]; if (!s) return "";
    return '<div class="scale-item" data-scale="' + esc(id) + '" data-open="0">' +
      '<button class="scale-chip"><span class="scale-ic">' + ICONS.escalas + "</span>" +
      '<span class="scale-tx"><span class="scale-name">' + esc(s.nombre) + "</span>" +
      (s.para ? '<span class="scale-for">' + esc(s.para) + "</span>" : "") + "</span>" +
      '<span class="scale-go">' + ICONS.chevR + "</span></button>" +
      '<div class="calc-inline" hidden></div></div>';
  }
  function closeInlineCalc() {
    [].forEach.call($topic.querySelectorAll(".scale-item[data-open='1']"), function (it) {
      it.setAttribute("data-open", "0");
      var p = it.querySelector(".calc-inline"); if (p) { p.hidden = true; p.innerHTML = ""; }
    });
    calc = null; appState = null;
  }
  function toggleScaleItem(item) {
    var wasOpen = item.getAttribute("data-open") === "1";
    closeInlineCalc();
    if (wasOpen) return;
    var panel = item.querySelector(".calc-inline");
    var sid = item.getAttribute("data-scale"), aid = item.getAttribute("data-app");
    item.setAttribute("data-open", "1");
    panel.hidden = false;
    if (aid) { appState = { id: aid, num: {}, sel: {} }; panel.innerHTML = appInnerHTML(); }
    else { calc = { id: sid, scale: SCALES[sid], sel: {}, cls: null, num: {} }; panel.innerHTML = calcInnerHTML(); }
    var top = item.getBoundingClientRect().top + window.scrollY - 56;
    window.scrollTo({ top: top, behavior: "smooth" });
  }
  function severityClass(idx, total) {
    if (total <= 1) return idx === 0 ? "sev-ok" : (idx === total - 1 ? "sev-danger" : "sev-warn");
    if (idx === 0) return "sev-ok";
    if (idx === total - 1) return "sev-danger";
    return "sev-warn";
  }
  function computeSum(s) {
    var total = 0, faltan = 0;
    s.items.forEach(function (it) {
      if (it.tipo === "binario") { if (calc.sel[it.id]) total += it.puntos; }
      else { var oi = calc.sel[it.id]; if (oi == null) faltan++; else total += it.opciones[oi].puntos; }
    });
    return { total: total, faltan: faltan };
  }
  function formulaValues(s) {
    var vals = {}, faltan = 0;
    s.items.forEach(function (it) {
      if (it.tipo === "opciones") { var idx = calc.sel[it.id]; if (idx == null) { faltan++; vals[it.id] = NaN; } else vals[it.id] = it.opciones[idx].valor; }
      else { var v = calc.num[it.id]; if (v == null || v === "" || isNaN(+v)) { faltan++; vals[it.id] = NaN; } else vals[it.id] = +v; }
    });
    return { vals: vals, faltan: faltan };
  }
  function computeFormula(s) {
    var fv = formulaValues(s);
    if (fv.faltan) return { faltan: fv.faltan, result: null };
    var ids = s.items.map(function (it) { return it.id; });
    try {
      var fn = new Function(ids.join(","), "return (" + s.formula + ");");
      return { faltan: 0, result: fn.apply(null, ids.map(function (id) { return fv.vals[id]; })) };
    } catch (e) { return { faltan: 0, result: null }; }
  }
  function formulaFoot(s) {
    var c = computeFormula(s);
    if (c.faltan) return '<div class="calc-result"><div class="calc-interp"><span class="calc-warn">Faltan ' + c.faltan + " dato(s) por introducir</span></div></div>";
    var val = c.result;
    var disp = (val == null || isNaN(val)) ? "—" : (s.decimales != null ? Number(val).toFixed(s.decimales) : val);
    var band = null, bidx = -1;
    (s.interpretacion || []).forEach(function (b, i) { if (val >= b.min && (b.max == null || val <= b.max)) { band = b; bidx = i; } });
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
