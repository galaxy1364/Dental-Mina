

const CACHE = 'dm-pwa-v1';


const ASSETS = [


  './index.html',


  './offline.html',


  './checklist.html',


  './checklist.json',


  './manifest.webmanifest',


  './icons/icon-192.png',


  './icons/icon-512.png'


];





self.addEventListener('install', (event) => {


  event.waitUntil((async () => {


    const c = await caches.open(CACHE);


    await c.addAll(ASSETS);


    self.skipWaiting();


  })());


});





self.addEventListener('activate', (event) => {


  event.waitUntil((async () => {


    const keys = await caches.keys();


    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));


    self.clients.claim();


  })());


});





self.addEventListener('fetch', (event) => {


  event.respondWith((async () => {


    try {


      const cached = await caches.match(event.request);


      if (cached) return cached;


      const res = await fetch(event.request);


      return res;


    } catch (e) {


      return caches.match('./offline.html');


    }


  })());


});

