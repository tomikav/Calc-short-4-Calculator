/* ============ SERVICE WORKER: LA APP FUNCIONA SIN INTERNET ============
   Al instalarse guarda todos los archivos de PRECACHE. Después responde primero
   desde el caché y actualiza en segundo plano (stale-while-revalidate).
   No edites la lista a mano: corre  python tools/precache.py  después de cambiar archivos. */
const VERSION = 'e54a8c3815';
const CACHE = 'calc-' + VERSION;
const PRECACHE = [
 "./",
 "content/es/annotations.js",
 "content/es/aritmetica.js",
 "content/es/calcguide.js",
 "content/es/course.js",
 "content/es/diferencial.js",
 "content/es/evaluation-solutions.js",
 "content/es/fichas.js",
 "content/es/figures.js",
 "content/es/glosario.js",
 "content/es/identify.js",
 "content/es/multivariable.js",
 "content/es/parcial.js",
 "content/es/references.js",
 "content/es/replicate.js",
 "content/es/sections.js",
 "content/es/series.js",
 "content/es/sheet.js",
 "content/es/solutions.js",
 "content/es/taller4.js",
 "content/es/timeline.js",
 "content/es/vectorial.js",
 "content/es/workshop.js",
 "css/style.css",
 "docs/icons/app-192.png",
 "docs/icons/app-512.png",
 "docs/icons/app-maskable-512.png",
 "docs/icons/app.svg",
 "docs/icons/board.svg",
 "docs/icons/calc.svg",
 "docs/icons/free.svg",
 "docs/icons/full.svg",
 "docs/icons/lang.svg",
 "docs/icons/plans.svg",
 "docs/icons/sheet.svg",
 "docs/icons/tv.svg",
 "index.html",
 "js/app.js",
 "js/board.js",
 "js/calc.js",
 "js/core.js",
 "js/fig.js",
 "js/i18n.js",
 "js/intro.js",
 "js/labs-basic.js",
 "js/labs-calc.js",
 "js/labs-graph.js",
 "js/loader.js",
 "js/pwa.js",
 "js/sketch.js",
 "js/theme.js",
 "js/wiki.js",
 "manifest.webmanifest",
 "vendor/mathjax/tex-svg.js"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('calc-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !font) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, { ignoreSearch: url.origin === location.origin });
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net; if (r) return r;
    if (req.mode === 'navigate') return c.match('./index.html');
    return new Response('', { status: 504 });
  }));
});
