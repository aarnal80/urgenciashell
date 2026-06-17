# Manual de Urgencias *in HELL*

**Guía de consulta rápida de Urgencias** — PWA instalable, mobile-first.
Autor: **Dr. Antonio J. Arnal Meinhardt** (Médico de Urgencias).

Por cada tema: resumen breve, tratamiento con dosis agrupado por escenario clínico
(de elección / alternativa), signos de alarma, criterios de ingreso, escalas con
calculadora y temas clínicamente conectados. Anexo de fármacos con la ficha técnica
(SmPC) de AEMPS/CIMA.

## ⚠️ Aviso clínico

Herramienta de apoyo a la decisión clínica. **No sustituye el juicio médico** ni la
lectura de la ficha técnica. Las fichas pueden estar en estado borrador: verifica
siempre dosis, vía y contraindicaciones antes de administrar cualquier fármaco.

## Ejecutar en local

Es una app estática; sírvela con cualquier servidor:

```
python -m http.server 8765
```
y abre http://localhost:8765 (o publícala en GitHub Pages: Settings → Pages → rama `main`).

## Estructura

```
index.html, app.js, styles.css   interfaz y lógica
sw.js, manifest.webmanifest       PWA (instalable, offline)
topics-data.js                    fichas de los temas (datos)
scales-data.js                    escalas / calculadoras
drugs-index.js                    índice de fármacos
farmacos/*.json                   secciones de ficha técnica (AEMPS/CIMA)
icons/                            iconos de la app
```

Los datos (`*-data.js`, `farmacos/`) se generan desde el pipeline; aquí va el
resultado listo para usar.

---
🤖 Construido con Claude Code.
