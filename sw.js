const CACHE_NAME = 'badr-salam-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json'
    // يمكنك إضافة روابط الصور هنا إذا كانت محلية
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
