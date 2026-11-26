// PixelPlanner service worker: makes the app installable and lets it open without internet.
// - The app page itself (index.html) is fetched fresh whenever the network answers, so updates show up straight away.
//   If the network is down or too slow, the saved copy is used.
// - Fonts, icons and the export libraries (ExcelJS, PptxGenJS) are kept after their first download and reused.
// Bump VERSION with every release (it matches APP_VERSION in index.html): the new version replaces the old saved copy.
const VERSION = '4.05';
const CACHE = 'pixelplanner-' + VERSION;
const CORE = ['./', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png', 'icons/favicon-32.png'];
// Loaded on demand by the exports; saved up front so they also work offline.
const LIBS = ['https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js',
  'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js'];
// How long to wait for the network before opening the saved copy of the page.
const PAGE_TIMEOUT = 4000;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    // A library that can't be fetched now is saved the first time an export uses it instead.
    await Promise.all(LIBS.map(u => fetch(u, {mode: 'no-cors'}).then(r => c.put(u, r)).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('pixelplanner-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || !/^https?:/.test(req.url)) return;
  if (req.mode === 'navigate') { e.respondWith(page(req)); return; }
  e.respondWith(saved(req));
});

// The app page: network first (with a time limit), falling back to the saved copy.
async function page(req){
  const c = await caches.open(CACHE);
  const net = fetch(req).then(r => { if (r.ok) c.put('./', r.clone()); return r; });
  const timeout = new Promise(res => setTimeout(res, PAGE_TIMEOUT));
  try {
    const r = await Promise.race([net, timeout]);
    if (r) return r;
  } catch (err) {}
  const hit = await c.match('./');
  if (hit) return hit;
  return net;
}

// Everything else: the saved copy if there is one, otherwise download it and save it for next time.
async function saved(req){
  const c = await caches.open(CACHE);
  const hit = await c.match(req, {ignoreVary: true});
  if (hit) return hit;
  const r = await fetch(req);
  if (r.ok || r.type === 'opaque') c.put(req, r.clone()).catch(() => {});
  return r;
}
