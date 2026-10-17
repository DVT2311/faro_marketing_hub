/* Gỡ service worker cũ ở địa chỉ gốc (trước khi tách /app/ và /dev/) */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k === 'faro-v1' || k.startsWith('faro-root')) await caches.delete(k);
  await self.registration.unregister();
})()));
