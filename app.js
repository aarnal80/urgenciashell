/* Vital Assist — app de referencia de Urgencias. Datos en window.TOPICS. */
(function () {
  "use strict";
  var TOPICS = window.TOPICS || [];
  var INDEX = window.TOPIC_INDEX || {};
  var SCALES = window.SCALES || {};
  var DRUGS = window.DRUGS || {};
  var navCount = 0; // navegaciones internas (para mostrar "Volver")
  var bySlug = {};
  TOPICS.forEach(function (t) { bySlug[t.slug] = t; });

  function backBtn() {
    return '<button class="view-back" type="button">' + ICONS.chevR + "Volver</button>";
  }

  var SVG = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    briefing: '<svg ' + SVG + '><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>',
    flags: '<svg ' + SVG + '><path d="M10.3 3.1 1.8 17.5A2 2 0 0 0 3.5 20.5h17a2 2 0 0 0 1.7-3L13.7 3.1a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    tratamiento: '<svg ' + SVG + '><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>',
    escalas: '<svg ' + SVG + '><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
    criterios: '<svg ' + SVG + '><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M12 7v4"/><path d="M10 9h4"/></svg>',
    conexiones: '<svg ' + SVG + '><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    ddx: '<svg ' + SVG + '><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    plan: '<svg ' + SVG + '><path d="M11 6h9"/><path d="M11 12h9"/><path d="M11 18h9"/><path d="m3 5 1.4 1.4L6.2 4"/><path d="m3 11 1.4 1.4L6.2 10"/><path d="m3 17 1.4 1.4L6.2 16"/></svg>',
    bibliografia: '<svg ' + SVG + '><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    pulse: '<svg ' + SVG + '><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    check: '<svg ' + SVG + '><polyline points="20 6 9 17 4 12"/></svg>',
    swap: '<svg ' + SVG + '><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    info: '<svg ' + SVG + '><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    chev: '<svg ' + SVG + '><polyline points="6 9 12 15 18 9"/></svg>',
    chevR: '<svg ' + SVG + '><polyline points="9 18 15 12 9 6"/></svg>',
    search: '<svg ' + SVG + '><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    menu: '<svg ' + SVG + '><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
  };

  var $list = document.getElementById("topic-list");
  var $search = document.getElementById("search");
  var $topic = document.getElementById("topic");
  var $empty = document.getElementById("empty");
  var $count = document.getElementById("count");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escA(s) { return esc(s).replace(/"/g, "&quot;"); } // escape para atributos

  function highlight(text, q) {
    var safe = esc(text);
    if (!q) return safe;
    try {
      var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      return safe.replace(re, "<mark>$1</mark>");
    } catch (e) { return safe; }
  }

  function topicHaystack(t) {
    var parts = [t.title, t.categoria];
    (t.briefing || []).forEach(function (b) { parts.push(b); });
    (t.red_flags || []).forEach(function (b) { parts.push(b); });
    (t.tratamiento || []).forEach(function (x) { parts.push(x.farmaco, x.dosis, x.indicacion); });
    return parts.join(" · ").toLowerCase();
  }

  /* ---------- Sidebar list ---------- */
  function renderList(query) {
    var q = (query || "").trim().toLowerCase();
    var matches = TOPICS.filter(function (t) {
      return !q || topicHaystack(t).indexOf(q) !== -1;
    });

    // agrupar por categoria, preservando orden por number
    var groups = {};
    var order = [];
    matches.forEach(function (t) {
      var c = t.categoria || "Otros";
      if (!groups[c]) { groups[c] = []; order.push(c); }
      groups[c].push(t);
    });

    var active = location.hash.replace(/^#\/tema\//, "");
    var html = "";
    order.forEach(function (c) {
      html += '<div class="cat-group"><div class="cat-label">' + esc(c) + "</div>";
      groups[c].forEach(function (t) {
        html += '<a class="topic-link' + (t.slug === active ? " active" : "") +
          '" href="#/tema/' + esc(t.slug) + '">' +
          '<span class="num">' + String(t.number).padStart(3, "0") + "</span>" +
          "<span>" + highlight(t.title, q) + "</span></a>";
      });
      html += "</div>";
    });
    if (!matches.length) html = '<div class="cat-label">Sin resultados</div>';
    $list.innerHTML = html;
    $count.textContent = TOPICS.length + " temas" + (q ? " · " + matches.length + " coinciden" : "");
  }

  /* ---------- Topic view ---------- */
  function connLabel(slug) {
    return (bySlug[slug] && bySlug[slug].title) || INDEX[slug] || slug;
  }

  function renderTopic(slug) {
    var t = bySlug[slug];
    if (!t) { showEmpty(); return; }
    $empty.hidden = true;
    $topic.hidden = false;

    var html = "";
    html += '<div class="t-head">';
    html += '<div class="t-cat">' + esc(t.categoria || "") + "</div>";
    html += '<h1 class="t-title">' + esc(t.title) + "</h1>";
    html += '<span class="t-status ' + esc(t.status) + '">' +
      (t.status === "revisado" ? "Revisado" : "Borrador IA") + "</span>";
    html += "</div>";

    // Briefing
    if ((t.briefing || []).length) {
      html += block("briefing", "Resumen", false,
        '<ul class="briefing">' + t.briefing.map(function (b) {
          return "<li>" + esc(b) + "</li>";
        }).join("") + "</ul>");
    }

    // Diagnóstico diferencial (basado en WikEM): chips agrupados por urgencia;
    // al tocar un chip se muestra su pista y el enlace al tema en el panel del grupo.
    if ((t.ddx || []).length) {
      html += block("ddx", "Diagnóstico diferencial", false,
        '<div class="ddx-groups">' + t.ddx.map(function (g) {
          return '<div class="ddx-group ddx-lvl-' + esc(g.nivel || "") + '">' +
            '<div class="ddx-group-head">' + esc(g.grupo) + "</div>" +
            '<div class="ddx-chips">' + (g.items || []).map(function (x) {
              var hasTopic = x.slug && bySlug[x.slug];
              return '<button class="ddx-chip" type="button" data-dx="' + escA(x.dx) + '"' +
                (x.clave ? ' data-clave="' + escA(x.clave) + '"' : "") +
                (hasTopic ? ' data-slug="' + escA(x.slug) + '"' : "") +
                ">" + esc(x.dx) + "</button>";
            }).join("") + "</div>" +
            '<div class="ddx-detail" hidden></div>' +
          "</div>";
        }).join("") + "</div>");
    }

    // Plan de trabajo / algoritmo (qué hacer, paso a paso) — basado en WikEM + Jiménez Murillo
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

    // Red flags
    if ((t.red_flags || []).length) {
      html += block("flags", "Signos de alarma", false,
        '<div class="flags">' + t.red_flags.map(function (f) {
          return '<div class="flag">' + esc(f) + "</div>";
        }).join("") + "</div>");
    }

    // Tratamiento: agrupado por escenario clínico; tarjetas de fármaco plegables
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
        if (x.preferencia === "eleccion")
          s += '<span class="tx-pref pref-eleccion">' + ICONS.check + "De elección</span>";
        else if (x.preferencia === "alternativa")
          s += '<span class="tx-pref pref-alternativa">' + ICONS.swap + "Alternativa</span>";
        s += '<span class="tx-head-main"><span class="tx-drug">' + esc(x.farmaco || "") + "</span>";
        if (x.via) s += '<span class="tx-via">' + esc(x.via) + "</span>";
        s += "</span>";
        if (x.indicacion) s += '<span class="tx-ind">' + esc(x.indicacion) + "</span>";
        s += '</span><span class="tx-chev">' + ICONS.chev + "</span></button>";
        s += '<div class="tx-card-body">';
        if (x.dosis) s += '<div class="tx-dose">' + esc(x.dosis) + "</div>";
        if (x.notas) s += '<div class="tx-notes">' + esc(x.notas) + "</div>";
        if (x.drug_id && DRUGS[x.drug_id])
          s += '<a class="tx-ft" href="#/farmaco/' + esc(x.drug_id) + '">' + ICONS.tratamiento +
            "Ficha técnica (AEMPS)" + ICONS.chevR + "</a>";
        s += "</div></div>";
        return s;
      }
      var txHtml = groups.map(function (g) {
        // Separa los de elección (siempre visibles) del resto (alternativas, plegadas).
        var primary = [], rest = [];
        g.items.forEach(function (x) {
          if (x.preferencia === "eleccion") primary.push(x); else rest.push(x);
        });
        // Si el escenario no tiene ninguno de elección, se muestran todos.
        if (!primary.length) { primary = g.items; rest = []; }

        var hasAlts = rest.length > 0;
        // El título del escenario actúa de desencadenante del desplegable de alternativas.
        var head = hasAlts
          ? '<button class="tx-group-head tx-group-toggle" type="button">' + ICONS.pulse +
              "<span>" + esc(g.esc) + "</span>" +
              '<span class="tx-alts-count">+' + rest.length + "</span>" +
              '<span class="tx-chev">' + ICONS.chev + "</span></button>"
          : '<div class="tx-group-head">' + ICONS.pulse + "<span>" + esc(g.esc) + "</span></div>";

        var cards = primary.map(txCard).join("");
        var alts = hasAlts ? '<div class="tx-alts-body">' + rest.map(txCard).join("") + "</div>" : "";
        return '<div class="tx-group" data-open="0">' + head + cards + alts + "</div>";
      }).join("");
      html += block("tratamiento", "Tratamiento", false, '<div class="tx">' + txHtml + "</div>");
    }

    // Escalas / calculadoras
    var escalas = (t.escalas || []).filter(function (id) { return SCALES[id]; });
    if (escalas.length) {
      html += block("escalas", "Escalas y calculadoras", false,
        '<div class="scales">' + escalas.map(function (id) {
          var s = SCALES[id];
          return '<button class="scale-chip" data-scale="' + esc(id) + '">' +
            '<span class="scale-ic">' + ICONS.escalas + "</span>" +
            '<span class="scale-tx"><span class="scale-name">' + esc(s.nombre) + "</span>" +
            (s.para ? '<span class="scale-for">' + esc(s.para) + "</span>" : "") + "</span>" +
            '<span class="scale-go">' + ICONS.chevR + "</span></button>";
        }).join("") + "</div>");
    }

    // Criterios ingreso (colapsado por defecto)
    if ((t.criterios_ingreso || []).length) {
      html += block("criterios", "Criterios de ingreso", false,
        '<div class="crit">' + t.criterios_ingreso.map(function (c) {
          return '<div class="crit-item">' + esc(c) + "</div>";
        }).join("") + "</div>");
    }

    // Conexiones (colapsado por defecto)
    if ((t.conexiones || []).length) {
      html += block("conexiones", "Temas conectados", false,
        '<div class="connections">' + t.conexiones.map(function (c) {
          var exists = !!bySlug[c.slug];
          return '<a class="conn" href="#/tema/' + esc(c.slug) + '"' +
            (exists ? "" : ' style="opacity:.55;pointer-events:none"') + ">" +
            '<div class="conn-title">' + esc(connLabel(c.slug)) +
            (exists ? "" : " (pendiente)") + "</div>" +
            '<div class="conn-why">' + esc(c.motivo || "") + "</div></a>";
        }).join("") + "</div>");
    }

    // Bibliografía (fuentes) — texto plano, al final
    var bib = [
      "Jiménez Murillo L, Montero Pérez FJ. <em>Medicina de Urgencias y Emergencias. Guía diagnóstica y protocolos de actuación</em>. Elsevier."
    ];
    if (t.wikem_titulo)
      bib.push("WikEM. <em>" + esc(t.wikem_titulo) + "</em>. www.wikem.org");
    var hasDrugs = (t.tratamiento || []).some(function (x) { return x.drug_id && DRUGS[x.drug_id]; });
    if (hasDrugs)
      bib.push("Fichas técnicas de los fármacos: Agencia Española de Medicamentos y Productos Sanitarios (AEMPS), CIMA.");
    html += block("bibliografia", "Bibliografía", false,
      '<ul class="bib">' + bib.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>");

    $topic.innerHTML = (navCount > 0 ? backBtn() : "") + html;
    document.title = t.title + " — Vital Assist";
    var tb = document.getElementById("topbar-title");
    if (tb) tb.textContent = t.title;
    $topic.parentElement.scrollTop = 0;
    document.body.classList.remove("nav-open");
  }

  function block(key, title, open, inner) {
    return '<section class="block" data-key="' + key + '" data-open="' + (open ? "1" : "0") + '">' +
      '<button class="block-head" type="button">' +
        '<span class="block-ic ic-' + key + '">' + (ICONS[key] || "") + "</span>" +
        "<h2>" + esc(title) + "</h2>" +
        '<span class="chev">' + ICONS.chev + "</span>" +
      "</button>" +
      '<div class="block-body">' + inner + "</div>" +
    "</section>";
  }

  function showEmpty() {
    $topic.hidden = true;
    $empty.hidden = false;
    document.title = "Vital Assist — Urgencias";
  }

  function renderAbout() {
    $empty.hidden = true;
    $topic.hidden = false;
    var tb = document.getElementById("topbar-title");
    if (tb) tb.textContent = "Acerca de";
    document.title = "Acerca de — Manual de Urgencias in HELL";
    var bio = "Médico especialista en Medicina de Urgencias y Emergencias. Creó este manual como sistema personal de consulta rápida a pie de cama: reunir, en un toque, lo esencial de cada tema — resumen, tratamiento con dosis, signos de alarma, criterios de ingreso, escalas con calculadora y los temas clínicamente conectados.";
    var sobre = "Sistema de referencia de Urgencias. Cada tema ofrece un resumen breve, el tratamiento con dosis agrupado por escenario clínico (de elección / alternativa), signos de alarma, criterios de ingreso, escalas con calculadora y enlaces a los temas relacionados y a la ficha técnica de los fármacos (AEMPS/CIMA).";
    var aviso = "Herramienta de consulta personal de apoyo a la decisión clínica; no sustituye el juicio médico ni la lectura de la ficha técnica. Las fichas pueden estar en estado borrador: verifica siempre la dosis, la vía y las contraindicaciones antes de administrar cualquier fármaco.";
    var meta = TOPICS.length + " temas · " + Object.keys(DRUGS).length + " fármacos con ficha técnica · " + Object.keys(SCALES).length + " escalas con calculadora";
    $topic.innerHTML = (navCount > 0 ? backBtn() : "") +
      '<div class="about">' +
        '<div class="about-mark">MU</div>' +
        '<h1>Manual de Urgencias <em>in HELL</em></h1>' +
        '<p class="about-sub">Guía de consulta rápida</p>' +
        '<div class="about-card"><h2>Autor</h2>' +
          '<p class="about-author">Dr. Antonio J. Arnal Meinhardt</p>' +
          '<p class="about-role">Médico de Urgencias</p>' +
          "<p>" + esc(bio) + "</p></div>" +
        '<div class="about-card"><h2>Sobre el manual</h2><p>' + esc(sobre) + "</p></div>" +
        '<div class="about-card about-warn"><h2>Aviso</h2><p>' + esc(aviso) + "</p></div>" +
        '<p class="about-meta">' + esc(meta) + "</p>" +
      "</div>";
    $topic.parentElement.scrollTop = 0;
    document.body.classList.remove("nav-open");
  }

  function prettyDrug(id) {
    var s = id.replace(/_/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function renderDrug(drugId) {
    $empty.hidden = true;
    $topic.hidden = false;
    var nombre = prettyDrug(drugId);
    var tb = document.getElementById("topbar-title");
    if (tb) tb.textContent = nombre;
    document.title = nombre + " — Vital Assist";
    $topic.innerHTML = '<div class="drug-loading">Cargando ficha técnica…</div>';
    $topic.parentElement.scrollTop = 0;
    document.body.classList.remove("nav-open");

    fetch("farmacos/" + encodeURIComponent(drugId) + ".json").then(function (r) {
      if (!r.ok) throw new Error("no encontrado");
      return r.json();
    }).then(function (d) {
      if (location.hash.indexOf("#/farmaco/" + drugId) !== 0) return; // navegó a otra cosa
      var html = backBtn();
      html += '<div class="drug-head">';
      html += '<div class="t-cat">Fármaco · anexo regulatorio</div>';
      html += '<h1 class="t-title">' + esc(nombre) + "</h1>";
      if (d.presentacion) html += '<div class="drug-pres">' + esc(d.presentacion) + "</div>";
      html += "</div>";
      html += '<div class="drug-src">' + esc(d.fuente || "") +
        (d.fecha_consulta ? " · consultado " + esc(d.fecha_consulta) : "") +
        (d.nregistro ? " · nº registro " + esc(d.nregistro) : "") + "</div>";

      html += '<div class="drug-secs">' + (d.secciones || []).map(function (s) {
        var body = s.vacia
          ? '<p class="smpc-empty">No consta en la ficha técnica.</p>'
          : s.html;
        return '<section class="drug-sec" data-open="0">' +
          '<button class="drug-sec-head" type="button">' +
            '<span class="drug-sec-n">' + esc(s.id) + "</span>" +
            "<h2>" + esc(s.titulo) + "</h2>" +
            '<span class="chev">' + ICONS.chev + "</span>" +
          "</button>" +
          '<div class="drug-sec-body smpc">' + body + "</div>" +
        "</section>";
      }).join("") + "</div>";

      $topic.innerHTML = html;
    }).catch(function () {
      $topic.innerHTML = backBtn() +
        '<div class="drug-head"><h1 class="t-title">' + esc(nombre) + "</h1></div>" +
        '<div class="smpc-empty" style="padding:16px">No hay ficha técnica disponible en CIMA/AEMPS para este principio activo.</div>';
    });
  }

  /* ---------- Calculadora de escalas ---------- */
  var $modal = document.getElementById("modal-root");
  var calc = null; // { id, scale, sel:{}, cls:null }

  function openScale(id) {
    var s = SCALES[id];
    if (!s) return;
    calc = { id: id, scale: s, sel: {}, cls: null };
    renderCalc();
  }

  function closeScale() { calc = null; $modal.innerHTML = ""; }

  function severityClass(idx, total) {
    if (total <= 1) return idx === 0 ? "sev-ok" : (idx === total - 1 ? "sev-danger" : "sev-warn");
    if (idx === 0) return "sev-ok";
    if (idx === total - 1) return "sev-danger";
    return "sev-warn";
  }

  function computeSum(s) {
    var total = 0, faltan = 0;
    s.items.forEach(function (it) {
      if (it.tipo === "binario") {
        if (calc.sel[it.id]) total += it.puntos;
      } else {
        var oi = calc.sel[it.id];
        if (oi == null) faltan++;
        else total += it.opciones[oi].puntos;
      }
    });
    return { total: total, faltan: faltan };
  }

  function renderCalc() {
    if (!calc) return;
    var s = calc.scale;
    var body = "", foot = "";

    if (s.tipo === "suma") {
      body = s.items.map(function (it) {
        var inner;
        if (it.tipo === "binario") {
          var on = !!calc.sel[it.id];
          inner = '<button class="bin-toggle' + (on ? " on" : "") + '" data-bin="' + esc(it.id) +
            '">' + (on ? "Sí (+" + it.puntos + ")" : "No") + "</button>";
        } else {
          var sel = calc.sel[it.id];
          inner = '<div class="opts">' + it.opciones.map(function (o, i) {
            return '<button class="opt' + (sel === i ? " on" : "") + '" data-item="' + esc(it.id) +
              '" data-opt="' + i + '">' + esc(o.label) +
              '<small>' + (o.puntos >= 0 ? "+" : "") + o.puntos + "</small></button>";
          }).join("") + "</div>";
        }
        return '<div class="calc-item"><div class="calc-label">' + esc(it.label) + "</div>" + inner + "</div>";
      }).join("");

      var r = computeSum(s);
      var band = null, bidx = -1;
      s.interpretacion.forEach(function (b, i) {
        if (r.total >= b.min && (b.max == null || r.total <= b.max)) { band = b; bidx = i; }
      });
      var sev = band ? severityClass(bidx, s.interpretacion.length) : "";
      foot =
        '<div class="calc-result ' + sev + '">' +
          '<div class="calc-score"><span class="calc-num">' + r.total + '</span><span class="calc-unit">puntos</span></div>' +
          '<div class="calc-interp">' +
            (band ? '<strong>' + esc(band.label) + "</strong>" + (band.detalle ? '<span>' + esc(band.detalle) + "</span>" : "") : "") +
            (r.faltan ? '<span class="calc-warn">Faltan ' + r.faltan + " campo(s) por seleccionar</span>" : "") +
          "</div>" +
        "</div>";
    } else if (s.tipo === "clasificacion") {
      body = '<div class="clases">' + s.clases.map(function (c, i) {
        return '<button class="clase' + (calc.cls === i ? " on" : "") + '" data-class="' + i + '">' +
          '<strong>' + esc(c.label) + "</strong><span>" + esc(c.descripcion) + "</span></button>";
      }).join("") + "</div>";
      var c = calc.cls != null ? s.clases[calc.cls] : null;
      foot = '<div class="calc-result ' + (calc.cls != null ? severityClass(calc.cls, s.clases.length) : "") + '">' +
        (c ? '<div class="calc-interp"><strong>' + esc(c.label) + "</strong><span>" + esc(c.detalle || c.descripcion) + "</span></div>"
           : '<div class="calc-interp"><span class="calc-warn">Selecciona una clase</span></div>') + "</div>";
    }

    $modal.innerHTML =
      '<div class="modal-overlay" data-close="1">' +
        '<div class="modal" role="dialog" aria-modal="true">' +
          '<header class="modal-head">' +
            "<div><h3>" + esc(s.nombre_largo || s.nombre) + "</h3>" +
            (s.para ? "<p>" + esc(s.para) + "</p>" : "") + "</div>" +
            '<button class="modal-close" data-close="1" aria-label="Cerrar">✕</button>' +
          "</header>" +
          '<div class="modal-body">' + body + "</div>" +
          '<footer class="modal-foot">' + foot +
            '<div class="modal-actions">' +
              (s.fuente ? '<span class="modal-src">' + esc(s.fuente) + "</span>" : "<span></span>") +
              '<button class="btn-reset" data-reset="1">Reiniciar</button>' +
            "</div>" +
          "</footer>" +
        "</div>" +
      "</div>";
  }

  // Delegación de clics dentro del modal
  $modal.addEventListener("click", function (e) {
    var el = e.target.closest("[data-close],[data-reset],[data-bin],[data-item],[data-class]");
    if (!el) return;
    if (el.hasAttribute("data-close")) { closeScale(); return; }
    if (!calc) return;
    if (el.hasAttribute("data-reset")) { calc.sel = {}; calc.cls = null; renderCalc(); return; }
    if (el.hasAttribute("data-bin")) { var b = el.getAttribute("data-bin"); calc.sel[b] = !calc.sel[b]; renderCalc(); return; }
    if (el.hasAttribute("data-item")) { calc.sel[el.getAttribute("data-item")] = +el.getAttribute("data-opt"); renderCalc(); return; }
    if (el.hasAttribute("data-class")) { calc.cls = +el.getAttribute("data-class"); renderCalc(); return; }
  });

  // Interacciones dentro de la ficha: plegar secciones/notas y abrir calculadoras
  $topic.addEventListener("click", function (e) {
    var chip = e.target.closest(".scale-chip");
    if (chip) { openScale(chip.getAttribute("data-scale")); return; }

    var gt = e.target.closest(".tx-group-toggle");
    if (gt) {
      var grp = gt.closest(".tx-group");
      grp.setAttribute("data-open", grp.getAttribute("data-open") === "1" ? "0" : "1");
      return;
    }

    var th = e.target.closest(".tx-card-head");
    if (th) {
      var card = th.parentElement;
      card.setAttribute("data-open", card.getAttribute("data-open") === "1" ? "0" : "1");
      return;
    }

    var chipx = e.target.closest(".ddx-chip");
    if (chipx) {
      var group = chipx.closest(".ddx-group");
      var detail = group.querySelector(".ddx-detail");
      var wasActive = chipx.classList.contains("active");
      [].forEach.call(group.querySelectorAll(".ddx-chip.active"), function (c) { c.classList.remove("active"); });
      if (wasActive) { detail.hidden = true; detail.innerHTML = ""; return; }
      chipx.classList.add("active");
      var dx = chipx.getAttribute("data-dx") || "";
      var clave = chipx.getAttribute("data-clave");
      var slug = chipx.getAttribute("data-slug");
      var h = slug
        ? '<a class="ddx-detail-dx ddx-detail-link" href="#/tema/' + esc(slug) + '">' + esc(dx) + ICONS.chevR + "</a>"
        : '<div class="ddx-detail-dx">' + esc(dx) + "</div>";
      if (clave) h += '<div class="ddx-key">' + esc(clave) + "</div>";
      detail.innerHTML = h;
      detail.hidden = false;
      return;
    }

    if (e.target.closest(".view-back")) {
      if (navCount > 0 && history.length > 1) history.back(); else location.hash = "";
      return;
    }

    var dh = e.target.closest(".drug-sec-head");
    if (dh) {
      var sec = dh.parentElement;
      sec.setAttribute("data-open", sec.getAttribute("data-open") === "1" ? "0" : "1");
      return;
    }

    var head = e.target.closest(".block-head");
    if (head) {
      var sec = head.parentElement;
      sec.setAttribute("data-open", sec.getAttribute("data-open") === "1" ? "0" : "1");
    }
  });

  // Menú lateral en móvil
  var $menu = document.getElementById("menu-btn");
  var $scrim = document.getElementById("scrim");
  if ($menu) {
    $menu.innerHTML = ICONS.menu;
    $menu.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
  }
  if ($scrim) $scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (calc) closeScale(); else document.body.classList.remove("nav-open"); }
  });

  /* ---------- Routing ---------- */
  function route() {
    if (location.hash === "#/about") { renderAbout(); renderList($search.value); return; }
    var dm = location.hash.match(/^#\/farmaco\/(.+)$/);
    if (dm) { renderDrug(decodeURIComponent(dm[1])); renderList($search.value); return; }
    var m = location.hash.match(/^#\/tema\/(.+)$/);
    if (m) renderTopic(decodeURIComponent(m[1]));
    else showEmpty();
    renderList($search.value);
  }

  $search.addEventListener("input", function () { renderList($search.value); });
  window.addEventListener("hashchange", function () { navCount++; route(); });

  // arranque
  renderList("");
  route();

  // Service worker (PWA) — solo si se sirve por http(s)
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
