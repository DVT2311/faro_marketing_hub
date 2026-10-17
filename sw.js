/* Faro Marketing Hub – service worker
   - Hiện thông báo hệ thống khi app chạy nền / đã thoát
   - Bấm thông báo: mở app đúng việc
   - Lưu bản sao trang để mở được khi mạng chập chờn */
const CACHE = 'faro-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
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

const sleep = ms => new Promise(ok => setTimeout(ok, ms));

async function deliver(d) {
  const cs = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  const front = cs.find(c => c.visibilityState === 'visible' && c.focused);
  if (front) {                       // app đang mở trước mặt: để app tự báo (âm + banner)
    front.postMessage({ type: 'incoming', n: d.n });
    return;
  }
  cs.forEach(c => c.postMessage({ type: 'incoming-bg', n: d.n }));
  await self.registration.showNotification(d.title, d.opt);
  try { if (self.navigator.setAppBadge && d.badge) await self.navigator.setAppBadge(d.badge); } catch (_) {}
}

self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'schedule') e.waitUntil(sleep(Math.min(d.delay || 0, 120000)).then(() => deliver(d)));
  if (d.type === 'show') e.waitUntil(self.registration.showNotification(d.title, d.opt));
});

/* Thông báo đẩy từ máy chủ (dùng cho bản chính thức) */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Faro Marketing Hub', {
    body: d.body || '', tag: d.tag, icon: 'icons/icon-192.png', badge: 'icons/badge-96.png',
    data: { url: d.url || './', n: d.n }
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const d = e.notification.data || {};
  e.waitUntil((async () => {
    const cs = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of cs) {
      if ('focus' in c) { await c.focus(); c.postMessage({ type: 'open-notif', n: d.n }); return; }
    }
    await self.clients.openWindow(d.url || './');
  })());
});
