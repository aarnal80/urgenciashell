/* Service worker — cache-first del shell para uso offline. */
var CACHE = "vital-assist-v65";
var ASSETS = [
  "./", "./index.html", "./styles.css", "./app.js", "./topics-data.js", "./scales-data.js", "./drugs-index.js",
  "./drug-aliases.js", "./scales-extra.js", "./topics-extra.js", "./ddx-demo.js",
  "./manifest.webmanifest", "./icons/logo.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    // precargar siempre desde la red (sin caché HTTP) para no guardar versiones viejas
    return Promise.all(ASSETS.map(function (u) {
      return fetch(u, { cache: "no-store" }).then(function (r) { if (r && r.ok) return c.put(u, r); }).catch(function () {});
    }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Network-first: siempre intenta la red (contenido fresco) y cae a caché si no hay conexión.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request.url, { cache: "no-store" }).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) { return hit || caches.match("./index.html"); });
    })
  );
});
