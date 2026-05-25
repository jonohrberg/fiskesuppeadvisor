// Service Worker for Fiskesuppeadvisor PWA
// Enkel pass-through — gjør at appen kan installeres på hjemskjermen

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// Alle nettverkskall går rett til nett (appen bruker live-data fra Supabase)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
