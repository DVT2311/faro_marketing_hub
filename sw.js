/* Faro Marketing Hub – service worker (bản chính thức)
   - Giúp cài ra màn hình chính thành app riêng (Android/Chrome)
   - Luôn lấy bản mới nhất khi có mạng; mất mạng thì mở bản đã lưu */
const CH = self.registration.scope.includes('/dev/') ? 'dev' : 'prod';
const CACHE = 'faro-' + CH + '-v1';   // mỗi bản một bộ nhớ đệm riêng

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('faro-' + CH + '-') && k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));

/* Mạng trước, mất mạng thì dùng bản đã lưu */
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(r);
      if (res.ok) { const c = await caches.open(CACHE); c.put(r, res.clone()); }
      return res;
    } catch (_) {
      return (await caches.match(r, { ignoreSearch: true })) ||
             (r.mode === 'navigate' && await caches.match('./index.html')) ||
             Response.error();
    }
  })());
});
