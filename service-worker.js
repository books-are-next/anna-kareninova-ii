/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-17ee202';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./anna_karenina_2_001.html","./anna_karenina_2_002.html","./anna_karenina_2_003.html","./anna_karenina_2_004.html","./anna_karenina_2_005.html","./anna_karenina_2_006.html","./anna_karenina_2_007.html","./anna_karenina_2_008.html","./anna_karenina_2_009.html","./anna_karenina_2_010.html","./anna_karenina_2_011.html","./anna_karenina_2_012.html","./anna_karenina_2_013.html","./anna_karenina_2_014.html","./anna_karenina_2_015.html","./anna_karenina_2_016.html","./anna_karenina_2_017.html","./anna_karenina_2_018.html","./anna_karenina_2_019.html","./anna_karenina_2_020.html","./anna_karenina_2_021.html","./anna_karenina_2_022.html","./anna_karenina_2_023.html","./anna_karenina_2_024.html","./anna_karenina_2_025.html","./anna_karenina_2_026.html","./anna_karenina_2_027.html","./anna_karenina_2_028.html","./anna_karenina_2_029.html","./anna_karenina_2_030.html","./anna_karenina_2_031.html","./anna_karenina_2_032.html","./anna_karenina_2_033.html","./anna_karenina_2_034.html","./anna_karenina_2_035.html","./anna_karenina_2_036.html","./anna_karenina_2_037.html","./anna_karenina_2_038.html","./anna_karenina_2_039.html","./anna_karenina_2_040.html","./anna_karenina_2_041.html","./anna_karenina_2_042.html","./anna_karenina_2_043.html","./anna_karenina_2_044.html","./anna_karenina_2_045.html","./anna_karenina_2_046.html","./anna_karenina_2_047.html","./anna_karenina_2_048.html","./anna_karenina_2_049.html","./anna_karenina_2_050.html","./anna_karenina_2_051.html","./anna_karenina_2_052.html","./anna_karenina_2_053.html","./anna_karenina_2_054.html","./anna_karenina_2_055.html","./anna_karenina_2_056.html","./anna_karenina_2_057.html","./anna_karenina_2_058.html","./anna_karenina_2_059.html","./anna_karenina_2_060.html","./anna_karenina_2_061.html","./anna_karenina_2_062.html","./anna_karenina_2_063.html","./anna_karenina_2_064.html","./anna_karenina_2_065.html","./anna_karenina_2_066.html","./anna_karenina_2_067.html","./anna_karenina_2_068.html","./anna_karenina_2_069.html","./anna_karenina_2_070.html","./anna_karenina_2_071.html","./anna_karenina_2_072.html","./anna_karenina_2_073.html","./anna_karenina_2_074.html","./anna_karenina_2_075.html","./anna_karenina_2_076.html","./anna_karenina_2_077.html","./anna_karenina_2_078.html","./anna_karenina_2_079.html","./anna_karenina_2_080.html","./anna_karenina_2_081.html","./anna_karenina_2_082.html","./anna_karenina_2_083.html","./anna_karenina_2_084.html","./anna_karenina_2_085.html","./anna_karenina_2_086.html","./anna_karenina_2_087.html","./anna_karenina_2_088.html","./anna_karenina_2_089.html","./anna_karenina_2_090.html","./anna_karenina_2_091.html","./anna_karenina_2_092.html","./anna_karenina_2_093.html","./anna_karenina_2_094.html","./anna_karenina_2_095.html","./anna_karenina_2_096.html","./anna_karenina_2_097.html","./anna_karenina_2_098.html","./anna_karenina_2_099.html","./anna_karenina_2_100.html","./anna_karenina_2_101.html","./anna_karenina_2_102.html","./anna_karenina_2_103.html","./anna_karenina_2_104.html","./anna_karenina_2_105.html","./anna_karenina_2_106.html","./anna_karenina_2_107.html","./anna_karenina_2_108.html","./anna_karenina_2_109.html","./anna_karenina_2_110.html","./anna_karenina_2_111.html","./anna_karenina_2_112.html","./anna_karenina_2_113.html","./anna_karenina_2_114.html","./anna_karenina_2_115.html","./anna_karenina_2_116.html","./anna_karenina_2_117.html","./anna_karenina_2_118.html","./anna_karenina_2_119.html","./anna_karenina_2_120.html","./anna_karenina_2_121.html","./anna_karenina_2_122.html","./anna_karenina_2_123.html","./anna_karenina_2_124.html","./colophon.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/image001_fmt.png","./resources/image002_fmt.png","./resources/obalka_anna_kareninova__fmt.png","./resources/upoutavka_eknihy_fmt.png","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
