# -*- coding: utf-8 -*-
"""Scraper de fichas técnicas de CIMA (AEMPS) para los fármacos citados en los
tratamientos que aún no tienen ficha.

- Deduplica los nombres de fármaco a su principio activo base.
- Busca en CIMA por nombre y elige un medicamento cuyo NOMBRE empiece por el
  principio activo (evita combos/erróneos); si es ambiguo, lo salta (sin ficha).
- Descarga las secciones 4.2/4.3/4.5/4.6/4.8/4.9 de la ficha técnica.
- Escribe farmacos/<id>.json (misma estructura que las existentes), actualiza
  drugs-index.js y genera drug-aliases.js (mapa nombre→id para enlazar en la app).

Uso: python cima_scrape.py
"""
import json, re, os, unicodedata, time, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) urgenciashell/1.0"}
SECS = [("4.2", "Posología y forma de administración"), ("4.3", "Contraindicaciones"),
        ("4.5", "Interacción con otros medicamentos y otras formas de interacción"),
        ("4.6", "Fertilidad, embarazo y lactancia"), ("4.8", "Reacciones adversas"),
        ("4.9", "Sobredosis")]
HOY = "2026-06-17"

def strip_acc(s):
    return unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()

def simple_norm(s):
    """Normalización ligera (idéntica a la de la app en JS) para claves de alias."""
    s = strip_acc(s).lower()
    s = re.sub(r"[^a-z0-9]+", " ", s).strip()
    return re.sub(r"\s+", " ", s)

ROUTE = set("iv im sc vo oral topico topica nebulizado nebulizada inhalado inhalada sublingual rectal "
            "intramuscular intravenoso intravenosa subcutaneo subcutanea oftalmico oftalmica pomada colirio "
            "gel crema solucion comprimidos comprimido ampolla perfusion continua bolo en al del de la el los las "
            "y o a".split())

def base_id(s):
    """Principio activo base -> id de ficha (con guiones bajos)."""
    s = strip_acc(s).lower()
    s = re.sub(r"\([^)]*\)", " ", s)
    s = re.split(r"\s*[+/]\s*|\s+o\s+|,", s)[0]
    s = re.sub(r"[0-9].*", " ", s)
    toks = [w for w in re.sub(r"[^a-z]+", " ", s).split() if w not in ROUTE]
    return "_".join(toks[:3])

def fetch(url, tries=3):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=25) as r:
                return r.read().decode("utf-8", "ignore")
        except Exception:
            if i == tries - 1: raise
            time.sleep(0.6)

def find_med(drug_id):
    """Busca un medicamento cuyo nombre empiece por el principio activo COMPLETO.
    Match estricto por frase completa (sin caer a la primera palabra: evita cazar
    sales equivocadas, p. ej. 'sulfato ferroso' -> 'SULFATO DE BARIO')."""
    phrase = drug_id.replace("_", " ")
    url = "https://cima.aemps.es/cima/rest/medicamentos?nombre=" + urllib.parse.quote(phrase) + "&pagina=1"
    try:
        d = json.loads(fetch(url))
    except Exception:
        return None
    for r in d.get("resultados", []):
        if simple_norm(r.get("nombre", "")).startswith(phrase):
            return r
    return None

def clean_html(h):
    if not h: return "", True
    h = re.sub(r"<h1[^>]*>.*?</h1>", "", h, flags=re.S | re.I)  # quitar títulos duplicados
    txt = re.sub(r"<[^>]+>", "", h)
    txt = re.sub(r"&[a-z#0-9]+;", " ", txt).strip()
    vacia = len(txt) < 8
    return h.strip(), vacia

def scrape_one(drug_id):
    if os.path.exists("farmacos/%s.json" % drug_id):
        return drug_id, "exists", None
    med = find_med(drug_id)
    if not med:
        return drug_id, "skip", None
    nreg = med["nregistro"]
    secciones = []
    for sid, titulo in SECS:
        try:
            raw = fetch("https://cima.aemps.es/cima/rest/docSegmentado/contenido/1?nregistro=%s&seccion=%s" % (nreg, sid))
            # el endpoint puede devolver HTML directo, un objeto {"contenido":...}
            # o un array [{"seccion":..,"contenido":..}]
            ls = raw.lstrip()
            if ls.startswith("[") or ls.startswith("{"):
                try:
                    o = json.loads(raw)
                    if isinstance(o, list):
                        o = next((it for it in o if it.get("seccion") == sid), o[0] if o else {})
                    raw = (o or {}).get("contenido", "")
                except Exception:
                    pass
            html, vacia = clean_html(raw)
        except Exception:
            html, vacia = "", True
        secciones.append({"id": sid, "titulo": titulo, "html": html, "vacia": vacia})
        time.sleep(0.05)
    if all(s["vacia"] for s in secciones):
        return drug_id, "empty", None
    ficha = {"drug_id": drug_id, "presentacion": med.get("nombre", ""), "nregistro": nreg,
             "fuente": "Ficha técnica AEMPS/CIMA", "fecha_consulta": HOY, "secciones": secciones}
    json.dump(ficha, open("farmacos/%s.json" % drug_id, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    return drug_id, "ok", {"presentacion": med.get("nombre", ""), "nregistro": nreg, "fecha": HOY}

def main():
    td = open("topics-data.js", encoding="utf-8").read()
    T = json.loads(td[td.index("["):td.rstrip().rstrip(";").rindex("]") + 1])
    # nombre de farmaco -> id base, y conjunto de ids a procesar
    alias = {}          # simple_norm(farmaco) -> drug_id
    ids = set()
    for t in T:
        for x in (t.get("tratamiento") or []):
            nom = x.get("farmaco", "")
            if not nom: continue
            did = base_id(nom)
            if not did: continue
            ids.add(did)
            alias[simple_norm(nom)] = did
    existing = set(os.path.splitext(f)[0] for f in os.listdir("farmacos"))
    todo = sorted(ids - existing)
    print("Fármacos base:", len(ids), "| ya con ficha:", len(ids & existing), "| a scrapear:", len(todo), flush=True)

    new_drugs = {}
    stats = {"ok": 0, "skip": 0, "empty": 0, "exists": 0}
    with ThreadPoolExecutor(max_workers=8) as ex:
        futs = {ex.submit(scrape_one, d): d for d in todo}
        done = 0
        for f in as_completed(futs):
            did, status, entry = f.result()
            stats[status] = stats.get(status, 0) + 1
            if entry: new_drugs[did] = entry
            done += 1
            if done % 50 == 0: print("  procesados", done, "/", len(todo), stats, flush=True)

    # ids con ficha tras el scrape (existentes + nuevas)
    have = set(os.path.splitext(f)[0] for f in os.listdir("farmacos"))
    alias = {k: v for k, v in alias.items() if v in have}

    # reconstruir drugs-index.js escaneando la carpeta (consistente con las fichas reales)
    DRUGS = {}
    for fn in sorted(os.listdir("farmacos")):
        if not fn.endswith(".json"): continue
        try:
            fd = json.load(open("farmacos/" + fn, encoding="utf-8"))
        except Exception:
            continue
        DRUGS[fd.get("drug_id", os.path.splitext(fn)[0])] = {
            "presentacion": fd.get("presentacion", ""),
            "nregistro": fd.get("nregistro", ""),
            "fecha": fd.get("fecha_consulta", HOY),
        }
    with open("drugs-index.js", "w", encoding="utf-8") as fo:
        fo.write("// Generado por build_drug_data.py / cima_scrape.py — no editar a mano.\n")
        fo.write("window.DRUGS = " + json.dumps(DRUGS, ensure_ascii=False, indent=2) + ";\n")

    # generar drug-aliases.js
    with open("drug-aliases.js", "w", encoding="utf-8") as fo:
        fo.write("// Mapa nombre-de-fármaco (normalizado) -> id de ficha. Generado por cima_scrape.py.\n")
        fo.write("window.DRUG_ALIAS = " + json.dumps(alias, ensure_ascii=False, indent=0) + ";\n")

    print("\n== Resultado:", stats, "==")
    print("Fichas totales:", len(have), "| nuevas:", stats["ok"], "| aliases:", len(alias))

if __name__ == "__main__":
    main()
