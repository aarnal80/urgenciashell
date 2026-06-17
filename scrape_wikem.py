# -*- coding: utf-8 -*-
"""Scraper de WikEM (https://www.wikem.org) — descarga la página completa de cada
tema mapeado y guarda TODA la info por secciones (Background, Clinical Features,
Differential Diagnosis, Evaluation, Management, Disposition, Calculators, ...).

Salida: wikem-raw.json
  { "fuente": "...", "temas": N, "data": { slug: {
        "wikem": <titulo canonico>, "url": ...,
        "sections": [ {"level":2,"title":"Evaluation","lines":[...]}, ... ],
        "differential": [ {"nivel":"critico","grupo":"Critical","items":[...]}, ... ]
  } } }

WikEM es CC BY-SA: citar la fuente al reutilizar.
Uso:  python scrape_wikem.py
"""
import urllib.request, urllib.parse, json, time, html, re
from html.parser import HTMLParser

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
API = "https://www.wikem.org/w/api.php"

# slug del tema (app)  ->  titulo de la pagina en WikEM
MAP = {
    "shock": "Shock",
    "insuficiencia_cardiaca": "Congestive heart failure",
    "edema_agudo_de_pulmon_cardiogenico": "Acute pulmonary edema",
    "dolor_toracico_agudo": "Acute chest pain",
    "sindrome_coronario_agudo": "Acute coronary syndrome",
    "sindrome_aortico_agudo": "Aortic dissection",
    "pericarditis_aguda": "Pericarditis",
    "taponamiento_cardiaco": "Cardiac tamponade",
    "miocarditis_aguda": "Myocarditis",
    "endocarditis_aguda": "Endocarditis",
    "urgencia_hipertensiva": "Hypertensive urgency",
    "emergencia_hipertensiva": "Hypertensive emergency",
    "isquemia_arterial_aguda_de_las_extremidades": "Acute limb ischemia",
    "enfermedad_tromboembolica_venosa": "Deep vein thrombosis",
    "disnea_aguda": "Dyspnea",
    "hemoptisis": "Hemoptysis",
    "tromboembolia_pulmonar": "Pulmonary embolism",
    "ataque_de_asma": "Asthma",
    "epoc_agudizada": "COPD exacerbation",
    "neumonia_adquirida_en_la_comunidad": "Community acquired pneumonia",
    "neumonia_nosocomial": "Pneumonia",
    "derrame_pleural": "Pleural effusion",
    "neumotorax_espontaneo": "Spontaneous pneumothorax",
    "patologia_esofagica_aguda": "Esophagitis",
    "hemorragia_digestiva_alta": "Upper gastrointestinal bleeding",
    "hemorragia_digestiva_media_y_baja": "Lower gastrointestinal bleeding",
    "dolor_abdominal_agudo": "Abdominal pain",
    "nauseas_vomitos_y_diarrea": "Vomiting",
    "enfermedad_inflamatoria_intestinal": "Crohn's disease",
    "obstruccion_intestinal": "Small bowel obstruction",
    "pancreatitis_aguda": "Pancreatitis",
    "encefalopatia_hepatica_aguda": "Hepatic encephalopathy",
    "ascitis": "Ascites",
    "ictericia": "Jaundice",
    "cefaleas": "Headache",
    "vertigo": "Vertigo",
    "sincope": "Syncope",
    "coma": "Altered mental status",
    "crisis_epilepticas": "Seizure",
    "ictus": "Stroke",
    "hemorragia_subaracnoidea_espontanea": "Subarachnoid hemorrhage",
    "sindrome_meningeo_absceso_cerebral_absceso_epidural_espinal_y_encefalitis": "Meningitis",
    "agitacion_psicomotriz": "Agitation",
    "crisis_de_ansiedad": "Panic attack",
    "hipoglucemia": "Hypoglycemia",
    "descompensacion_hiperglucemica_hiperosmolar_no_cetosica": "Hyperosmolar hyperglycemic state",
    "cetoacidosis_diabetica": "Diabetic ketoacidosis",
    "crisis_mixedematosa": "Myxedema coma",
    "crisis_tirotoxica": "Thyroid storm",
    "crisis_addisoniana": "Adrenal crisis",
    "alteraciones_del_equilibrio_acidobasico": "Acid-base disorders",
    "hiponatremia": "Hyponatremia",
    "hipernatremia": "Hypernatremia",
    "hipopotasemia": "Hypokalemia",
    "hiperpotasemia": "Hyperkalemia",
    "hipomagnesemia": "Hypomagnesemia",
    "hipermagnesemia": "Hypermagnesemia",
    "hipocalcemia": "Hypocalcemia",
    "hipercalcemia": "Hypercalcemia",
    "hipofosfatemia": "Hypophosphatemia",
    "hiperfosfatemia": "Hyperphosphatemia",
    "lesion_renal_aguda": "Acute kidney injury",
    "rabdomiolisis": "Rhabdomyolysis",
    "hematuria": "Hematuria",
    "retencion_aguda_de_orina": "Urinary retention",
    "colico_nefritico": "Nephrolithiasis",
    "infecciones_urinarias_bajas_cistitis_y_uretritis": "Urinary tract infection",
    "prostatitis_aguda": "Prostatitis",
    "pielonefritis_aguda": "Pyelonephritis",
    "sindrome_escrotal_agudo": "Testicular torsion",
    "priapismo": "Priapism",
    "sepsis": "Sepsis",
    "sindrome_febril_sin_foco_en_pacientes_no_inmunodeprimidos": "Fever",
    "botulismo": "Botulism",
    "tetanos": "Tetanus",
    "rabia": "Rabies",
    "cervicalgia": "Neck pain",
    "hombro_doloroso": "Shoulder pain",
    "lumbalgia_aguda_lumbociatica": "Low back pain",
    "monoartritis_agudas_y_poliartritis": "Septic arthritis",
    "intoxicaciones_agudas_actitud_diagnostica_y_tratamiento_general": "Toxidrome",
    "intoxicacion_aguda_por_cocaina": "Cocaine toxicity",
    "intoxicacion_aguda_por_paracetamol": "Acetaminophen toxicity",
    "intoxicacion_aguda_por_salicilatos_y_otros_antiinflamatorios_no_esteroideos": "Salicylate toxicity",
    "intoxicacion_aguda_por_litio": "Lithium toxicity",
    "intoxicacion_aguda_por_digitalicos": "Digoxin toxicity",
    "intoxicacion_aguda_por_opiaceos_y_derivados": "Opioid toxicity",
    "intoxicacion_aguda_por_benzodiacepinas_e_hipnoticos_no_benzodiacepinicos": "Benzodiazepine toxicity",
    "intoxicacion_aguda_por_antidepresivos_ciclicos": "Tricyclic antidepressant toxicity",
    "quemaduras_termicas": "Burns",
    "patologia_inducida_por_el_calor": "Heat illness",
    "patologia_inducida_por_el_frio_hipotermia_accidental_y_congelacion": "Hypothermia",
    "casi_ahogamiento": "Drowning",
    "disbarismos_mal_de_altura_y_enfermedades_relacionadas": "High altitude illness",
    "angioedema": "Angioedema",
    "otalgia": "Otalgia",
    "epistaxis": "Epistaxis",
    "dolor_faringeo_agudo": "Pharyngitis",
    "diagnostico_diferencial_del_ojo_rojo": "Red eye",
    "perdida_brusca_de_la_vision": "Acute vision loss",
    "urticaria_y_anafilaxia": "Anaphylaxis",
    "sindrome_febril_en_la_infancia": "Pediatric fever",
    "crisis_asmatica_infantil": "Pediatric asthma exacerbation",
    "gastroenteritis_aguda_en_la_infancia": "Gastroenteritis",
    "estados_hipertensivos_del_embarazo_preeclampsia_y_eclampsia": "Preeclampsia",
    "sangrado_menstrual_abundante": "Vaginal bleeding",
}

NIVEL = {"critical": "critico", "emergent": "emergente", "nonemergent": "no_emergente",
         "life-threatening": "critico", "cannot miss": "critico", "can't miss": "critico", "deadly": "critico"}


def api_get(params):
    url = API + "?" + urllib.parse.urlencode(params) + "&format=json&redirects=1"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def opensearch(term):
    url = API + "?" + urllib.parse.urlencode({"action": "opensearch", "limit": 1, "search": term}) + "&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            d = json.load(r)
            return d[1][0] if d and d[1] else None
    except Exception:
        return None


class Wikem(HTMLParser):
    """Convierte el HTML renderizado de una pagina WikEM en secciones con lineas.
    Cada seccion: {level, title, lines:[...]}. Las listas se marcan con guion e
    indentacion segun anidamiento. Se ignoran el indice (toc), refs y enlaces [edit]."""
    def __init__(self):
        super().__init__()
        self.sections = [{"level": 1, "title": "_intro", "lines": []}]
        self.h_level = None      # nivel de encabezado en curso
        self.h_buf = None        # acumulador del texto del encabezado
        self.skip_depth = 0      # dentro de toc/editsection/reference -> ignorar texto
        self.li_depth = 0        # profundidad de lista
        self.buf = []            # acumulador de texto del bloque actual
        self.block = None        # 'p' | 'li' | None

    def _skip_on(self, attrs):
        a = dict(attrs)
        cls = a.get("class", "")
        return ("toc" in cls.split()) or ("mw-editsection" in cls) or ("reference" in cls.split()) or a.get("id") == "toc"

    def handle_starttag(self, tag, attrs):
        if self.skip_depth or self._skip_on(attrs):
            self.skip_depth += 1
            return
        if tag in ("h2", "h3", "h4", "h5", "h6"):
            self._flush_block()
            self.h_level = int(tag[1]); self.h_buf = []
        elif tag in ("ul", "ol"):
            self.li_depth += 1
        elif tag == "li":
            self._flush_block(); self.block = "li"; self.buf = []
        elif tag == "p":
            self._flush_block(); self.block = "p"; self.buf = []
        elif tag == "br":
            self.buf.append(" ")

    def handle_endtag(self, tag):
        if self.skip_depth:
            self.skip_depth -= 1
            return
        if tag in ("h2", "h3", "h4", "h5", "h6") and self.h_buf is not None:
            title = re.sub(r"\s+", " ", "".join(self.h_buf)).strip()
            self.sections.append({"level": self.h_level, "title": title, "lines": []})
            self.h_level = None; self.h_buf = None
        elif tag in ("ul", "ol"):
            self._flush_block()
            if self.li_depth > 0:
                self.li_depth -= 1
        elif tag in ("li", "p"):
            self._flush_block()

    def handle_data(self, data):
        if self.skip_depth:
            return
        if self.h_buf is not None:
            self.h_buf.append(data)
        elif self.block:
            self.buf.append(data)

    def _flush_block(self):
        if not self.block:
            return
        text = re.sub(r"\s+", " ", "".join(self.buf)).strip()
        if text:
            if self.block == "li":
                indent = "  " * max(0, self.li_depth - 1)
                self.sections[-1]["lines"].append(indent + "- " + text)
            else:
                self.sections[-1]["lines"].append(text)
        self.block = None; self.buf = []


def parse_differential(sections):
    """De las secciones, reconstruye el diferencial agrupado (Critical/Emergent/...)."""
    groups, cur, in_dd, dd_level = [], None, False, None
    for s in sections:
        t = s["title"].lower()
        if "differential diagnosis" in t:
            in_dd = True; dd_level = s["level"]; cur = None
            # algunas paginas listan el diferencial directo bajo este encabezado
            _absorb(groups, s, None)
            continue
        if in_dd:
            if s["level"] <= dd_level and "differential diagnosis" not in t:
                in_dd = False; continue  # fin del bloque diferencial
            niv = NIVEL.get(t)
            if niv is not None:
                cur = {"nivel": niv, "grupo": s["title"], "items": []}
                groups.append(cur)
                _absorb(groups, s, cur)
            else:
                # subencabezado intermedio (p. ej. el nombre del sintoma) con items propios
                _absorb(groups, s, cur)
    # limpiar grupos vacios
    return [g for g in groups if g["items"]]


def _absorb(groups, section, cur):
    items = []
    for ln in section["lines"]:
        m = re.match(r"^\s*-\s+(.*)$", ln)
        if not m:
            continue
        name = m.group(1).strip()
        if not name or re.match(r"^\d+(\.\d+)*\s", name):
            continue
        items.append(name)
    if not items:
        return
    if cur is None:
        cur = {"nivel": None, "grupo": section["title"], "items": []}
        groups.append(cur)
    for it in items:
        if it.lower() not in [x.lower() for x in cur["items"]]:
            cur["items"].append(it)


def fetch_page(title):
    d = api_get({"action": "parse", "page": title, "prop": "text"})
    if "parse" not in d:
        return None
    canonical = d["parse"]["title"]
    p = Wikem()
    p.feed(d["parse"]["text"]["*"])
    sections = [s for s in p.sections if s["lines"] or s["title"] != "_intro"]
    return canonical, sections


def main():
    out, log = {}, []
    slugs = list(MAP.keys())
    for i, slug in enumerate(slugs):
        title = MAP[slug]
        try:
            res = fetch_page(title)
            sections = res[1] if res else []
            ddx = parse_differential(sections) if sections else []
            if not sections:  # fallback: buscar
                alt = opensearch(title)
                if alt:
                    res = fetch_page(alt)
                    sections = res[1] if res else []
                    ddx = parse_differential(sections) if sections else []
            canonical = res[0] if res else title
            out[slug] = {
                "wikem": canonical,
                "url": "https://www.wikem.org/wiki/" + urllib.parse.quote(canonical.replace(" ", "_")),
                "sections": sections,
                "differential": ddx,
            }
            sec_titles = [s["title"] for s in sections if s["title"] != "_intro"]
            log.append("OK  %-55s -> %-40s  sec=%2d  ddx=%d" % (slug, canonical, len(sec_titles), sum(len(g["items"]) for g in ddx)))
        except Exception as e:
            out[slug] = {"wikem": title, "error": str(e), "sections": [], "differential": []}
            log.append("ERR %-55s  %s" % (slug, e))
        print(log[-1], flush=True)
        time.sleep(0.12)

    payload = {"fuente": "WikEM (CC BY-SA)", "generado_por": "scrape_wikem.py", "temas": len(out), "data": out}
    with open("wikem-raw.json", "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)
    con_ddx = sum(1 for k in out if out[k]["differential"])
    print("\n== Guardado wikem-raw.json: %d temas, %d con diferencial ==" % (len(out), con_ddx))


if __name__ == "__main__":
    main()
