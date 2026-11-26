// Kill-switch service worker. This site does not use a service worker.
// A previous project served on the same origin (localhost:3000) registered a
// PWA service worker at /sw.js that keeps serving its own cached pages. When
// the browser checks that worker for updates it receives this file, which
// deletes the old caches, unregisters itself and reloads open tabs.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.map((key) => caches.delete(key)))
    await self.registration.unregister()
    const windows = await self.clients.matchAll({ type: 'window' })
    windows.forEach((client) => client.navigate(client.url))
  })())
})
