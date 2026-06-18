/* Manual de Urgencias — app de referencia. Datos en window.TOPICS. */
(function () {
  "use strict";
  var TOPICS = window.TOPICS || [];
  var INDEX = window.TOPIC_INDEX || {};
  var SCALES = window.SCALES || {};
  var DRUGS = window.DRUGS || {};
  var DRUG_ALIAS = window.DRUG_ALIAS || {};
  var navCount = 0; // navegaciones internas
  var currentTopicSlug = null; // tema en pantalla (para la estrella de favoritos)
  var bySlug = {};
  TOPICS.forEach(function (t) { bySlug[t.slug] = t; });

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
    star: '<svg ' + SVG + '><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
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
  var CAT_COLORS = ["#dc2626", "#0ea5e9", "#7c3aed", "#ea580c", "#0d9488", "#2563eb",
    "#16a34a", "#b45309", "#64748b", "#0891b2", "#db2777", "#65a30d", "#9333ea", "#e11d48"];
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
  // Color semántico por especialidad
  function catColor(name) {
    var n = sinAcentos(name);
    if (n.indexOf("soporte vital") > -1) return "#eab308"; // amarillo
    if (n.indexOf("cardio") > -1) return "#dc2626";        // rojo
    if (n.indexOf("respirat") > -1) return "#2563eb";      // azul
    if (n.indexOf("digest") > -1) return "#ea580c";        // naranja
    if (n.indexOf("neurolog") > -1) return "#7c3aed";      // violeta
    if (n.indexOf("psiquiatr") > -1) return "#6366f1";     // índigo
    if (n.indexOf("endocrino") > -1 || n.indexOf("metabol") > -1) return "#0d9488"; // teal
    if (n.indexOf("nefro") > -1) return "#0284c7";         // azul cielo
    if (n.indexOf("infec") > -1) return "#16a34a";         // verde
    if (n.indexOf("reumatolog") > -1) return "#b45309";    // ámbar
    if (n.indexOf("oncolog") > -1) return "#9333ea";       // púrpura
    if (n.indexOf("hematolog") > -1) return "#be123c";     // carmín
    if (n.indexOf("intoxica") > -1 || n.indexOf("envenen") > -1) return "#4d7c0f"; // verde tóxico
    if (n.indexOf("alcohol") > -1) return "#a16207";       // ámbar oscuro
    if (n.indexOf("agentes") > -1 || n.indexOf("fisicos") > -1 || n.indexOf("quimic") > -1) return "#f97316"; // naranja fuego
    if (n.indexOf("otorrino") > -1) return "#db2777";      // magenta
    if (n.indexOf("oftalmolog") > -1) return "#0ea5e9";    // azul claro
    if (n.indexOf("maxilofacial") > -1) return "#f43f5e";  // rosa
    if (n.indexOf("traumatolog") > -1) return "#78716c";   // gris piedra
    if (n.indexOf("dermatolog") > -1) return "#d97706";    // ámbar piel
    if (n.indexOf("pediatr") > -1) return "#ec4899";       // rosa
    if (n.indexOf("obstet") > -1 || n.indexOf("ginec") > -1) return "#be185d"; // rosa oscuro
    if (n.indexOf("exploracion") > -1) return "#334155";   // slate
    if (n.indexOf("miscelan") > -1) return "#64748b";      // slate claro
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
            '<div class="continue-sub">' + esc(t.categoria || "") + "</div>" +
          "</div>" +
          '<span class="continue-go">' + ICONS.chevR + "</span>" +
        "</a>";
    }
    document.getElementById("home-continue").innerHTML = cont;

    // Herramientas
    var tools = [
      { label: "Escalas", color: "#2563eb", icon: ICONS.bars, href: "#/calc" },
      { label: "Fármacos", color: "#7c3aed", icon: ICONS.farmacos, href: "#/farmacos" },
      { label: "Apps", color: "#0d9488", icon: ICONS.apps, href: "#/apps" },
      { label: "Favoritos", color: "#f59e0b", icon: ICONS.star, href: "#/favoritos" }
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
          '<div class="part-tx"><div class="part-name">' + esc(c.name) + "</div>" +
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
      '<h1 class="t-title">' + esc(c.name) + "</h1>" +
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
        '<button class="cat-head" type="button"><span class="cat-label">' + esc(c) + "</span>" +
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
    html += '<span class="t-cat" style="background:' + catColor + '">' + esc(t.categoria || "") + "</span>";
    html += '<h1 class="t-title">' + esc(t.title) + "</h1>";
    html += '<div class="ystripe"></div>';
    if (t.status === "revisado") html += '<span class="t-status">Revisado</span>';
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

    if ((t.conexiones || []).length) {
      html += block("conexiones", "Temas conectados", false,
        '<div class="connections">' + t.conexiones.map(function (c) {
          var exists = !!bySlug[c.slug];
          return '<a class="conn" href="#/tema/' + esc(c.slug) + '"' +
            (exists ? "" : ' style="opacity:.55;pointer-events:none"') + ">" +
            '<div class="conn-title">' + esc(connLabel(c.slug)) + (exists ? "" : " (pendiente)") + "</div>" +
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
        '<img class="about-mark" src="icons/logo.png" alt="" />' +
        '<h1>Manual de Urgencias <em>in HELL</em></h1>' +
        '<p class="about-sub">Guía de consulta rápida · Dr. Antonio J. Arnal Meinhardt</p>' +
        '<div class="about-stats">' +
          '<div class="about-stat"><span class="about-stat-n">' + nTemas + '</span><span class="about-stat-l">temas</span></div>' +
          '<div class="about-stat"><span class="about-stat-n">' + nFarmacos + '</span><span class="about-stat-l">fármacos</span></div>' +
          '<div class="about-stat"><span class="about-stat-n">' + nEscalas + '</span><span class="about-stat-l">escalas</span></div>' +
        "</div>" +
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
        '<div class="drug-item-pres">' + esc(t.categoria || "") + "</div></div>" +
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
  var APPS = {
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
    }
  };
  var appState = null;
  function appResultHTML() { return APPS[appState.id].result(appState); }
  function appInnerHTML() {
    var app = APPS[appState.id];
    var body = app.fields.map(function (f) {
      var inner;
      if (f.tipo === "num") {
        var v = appState.num[f.k];
        inner = '<div class="num-wrap"><input type="number" inputmode="decimal" class="calc-num-input" data-app-num="' + f.k + '" value="' +
          (v == null ? "" : esc(v)) + '"' + (f.ph ? ' placeholder="' + esc(f.ph) + '"' : "") + " />" +
          (f.unidad ? '<span class="num-unit">' + esc(f.unidad) + "</span>" : "") + "</div>";
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
      { id: "goteo", nombre: "Goteo intravenoso", sub: "ml/h y gotas/min", color: "#0d9488", icon: ICONS.droplet },
      { id: "dosis", nombre: "Dosis por peso", sub: "mg/kg → dosis total y volumen", color: "#2563eb", icon: ICONS.tratamiento }
    ];
    $topic.innerHTML =
      '<div class="t-head"><span class="t-cat" style="background:#0d9488">Herramientas</span>' +
      '<h1 class="t-title">Apps</h1><div class="ystripe"></div>' +
      '<div class="t-sub">Micro-aplicaciones de cálculo a pie de cama</div></div>' +
      '<div class="scales">' + list.map(appItemHTML).join("") + "</div>";
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
    // Controles del calculador inline (escalas y apps)
    var ctl = e.target.closest("[data-reset],[data-bin],[data-item],[data-class],[data-app-opt]");
    if (ctl && ctl.closest(".calc-inline")) {
      var cpanel = ctl.closest(".calc-inline");
      if (appState) {
        if (ctl.hasAttribute("data-reset")) { appState.num = {}; appState.sel = {}; cpanel.innerHTML = appInnerHTML(); return; }
        if (ctl.hasAttribute("data-app-opt")) { appState.sel[ctl.getAttribute("data-app-grp")] = +ctl.getAttribute("data-app-opt"); cpanel.innerHTML = appInnerHTML(); return; }
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
    if (chip) { var sitem = chip.closest(".scale-item"); if (sitem) toggleScaleItem(sitem); return; }

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
      var ar = panel.querySelector(".calc-result"); if (ar) ar.outerHTML = appResultHTML();
      return;
    }
    if (calc && calc.scale.tipo === "formula") {
      calc.num[inp.getAttribute("data-num")] = inp.value;
      var r = panel.querySelector(".calc-result"); if (r) r.outerHTML = formulaFoot(calc.scale);
    }
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
    if (meta) meta.setAttribute("content", dark ? "#000000" : "#0d0f12");
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

  /* ---------- Tab bar ---------- */
  var TABS = [
    { id: "inicio", label: "Inicio", icon: ICONS.home, route: "" },
    { id: "escalas", label: "Escalas", icon: ICONS.bars, route: "#/calc" },
    { id: "farmacos", label: "Fármacos", icon: ICONS.farmacos, route: "#/farmacos" },
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
    if (h === "#/apps") { renderApps(); setActiveTab(""); return; }
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

  // Service worker (PWA)
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
