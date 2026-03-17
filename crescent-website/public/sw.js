// Service Worker - Force fetch all HTML on every visit (no caching)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // For HTML pages, always fetch fresh from network
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/Cresent-technosoft/') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => {
        // Fallback to cache if offline
        return caches.match(event.request);
      })
    );
  } else {
    // For other assets, use cache-first strategy
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  }
});
