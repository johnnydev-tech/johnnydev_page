'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b9ebef99a9883ef6941518ab3f47e8b",
"index.html": "644ee54b11aeb520ef3d41c9291e6269",
"/": "644ee54b11aeb520ef3d41c9291e6269",
"main.dart.js": "bfd584a135747ad467fa97266b70836e",
"README.md": "1599de64d448b3a34adcb242b66e35e1",
"favicon.png": "09100cb1d7368e02a3347bdaba0794b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "71dc63ca5ab9cb44b80a3cb1ce9a443b",
".git/config": "f432a1a52600e6cd07b51dac04fbcdf6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0c/34f632ba4669759a9f1c50c46fb88c2e1d02c7": "e14682a6d8eb0ed4e4f2991602457c18",
".git/objects/6a/91d54034716b410ee47ada18847b069bd77132": "b0b14bc80d9a77880845769f7b1e9738",
".git/objects/32/f8d414f3100461e52f120da56c5e8a95eb3234": "65cf6c35d4904905d331662a41e0f4ef",
".git/objects/58/642ceb729f25ebf4208a883b224af8208e0414": "5ccd1b5ae932c668e24a5fdc7593dd50",
".git/objects/5a/5541bb81eaf932916baed3e6a0730ac1b34c70": "6b291ff3e9600beaabe769c8d0321531",
".git/objects/d1/dc7b4056d6840ffcc386aef4f7e1b1cf22daa8": "4f15b5c1eee2e3ca9ac4403070453b01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ef8a378295cdbaf493fcd2398cf8694c305ea5": "de3d356f17c562e8e2010505a91e72f8",
".git/objects/ab/defb1c1b9bfb818455ff2604916408a9825439": "1727aeb49738ae3339a2251f59d055ee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/a5b35757695b83c9b9a0f20d6c27ec92a3eb92": "23ec7bc2cbc6129f347475301de1c0bb",
".git/objects/fe/dc35ae35b57b7c4faccb510feb7f6ab57bd897": "da9a09316246619368e20cdd271b87eb",
".git/objects/ed/dc687d8e336521bd097e55b9d48d265b25d00e": "cc16d90965300a85e6b06f8679da6905",
".git/objects/c6/45126178112cd629b652205d3e2f6de967666d": "571c1866cf61742272a7ced137cdd84b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/e4a993928dbe530abe5d1834f6eb7e3f353f18": "13715da1dc9e8b7068b7d6d3106cbb18",
".git/objects/7d/693b332eb1e56a200e3e662e6173c9274bc626": "cf61e39bcabdcf20f3eaef485b79cc04",
".git/objects/29/0f4efcb69fc52de19f732473dec03200652047": "dc1a6c94db3dd644a5474ae17831b324",
".git/objects/42/f1685edfefe6c6f1f2855c436fb381f8c356ec": "35cb1b09be8b6c6776d0d52ba8bc6e96",
".git/objects/74/703b692a6b84a41da45648bba06f470bba38c3": "6057f68c0a65c54bd927ec5509e97da7",
".git/objects/10/5ee76b674ca9f6c3f10140174bf1fed864f528": "a77904b4e3d08ccdacac5eaa430a0fe4",
".git/objects/4c/4aefad36fcf7c50b1682a329054a601619d1a8": "30e5da9ab23743cbb1ccc278d0be5e92",
".git/objects/43/87eab42c6b32cbe7a8754635c39a0a5e3b87f7": "3b3c7649ebaa2985b2362f0690718ed9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/77160af4a2b25bbdef2350a760ede3e19baadf": "66598e1c00dda3036a990007850f5125",
".git/objects/65/7549d0daf6a8f2858606e5af4fae3950b9645f": "f58d7e4f6cca696f7894a61ebc841608",
".git/objects/3f/a032349eacc71cdacc6bdd3d925ef01e685095": "6b0b3ecefc7d4a873d73c49e264b1fe1",
".git/objects/5e/e13149c2b65a122edbb490c3785c688507aa6a": "0bed4d385a332befd5787ea9eb365973",
".git/objects/5b/05544b407d9cb58af311cdfca76db32446056b": "973efb61a4c23110d917819039533830",
".git/objects/39/e2c9ac8e2ab0bc347416699944ce994d8c02f7": "6cb2672446249fe98f856cbf155bbb08",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/e01d6aab12c9024fd6d5673f6e27a2c8cfd993": "ebf478690ccf49432c4c470aa21908ef",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/d4/ce11efb5ef566021b42504f9259b8586dacf03": "27dbc237058d6bfc6216030e94e1db16",
".git/objects/dc/227c03d936c6d05f4efcab49d6a795aba6064a": "9831bc5abc2916f1bad7717cafeaf7ff",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e8/8acbea18f94f0991d806592bc04d0ed903060b": "b0a50de294b5e9fd15566a5288043967",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/70/fc23a4df12de272b4ab20865da37de8dbaf2c8": "c3abaf3bf7655393b1d263da6b9376a4",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/a3868796353b2b5bae064efd4d17edcb9df6d1": "65eb74c179e1958866d316b840b62f05",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b7d163d670576bf7e67ceb48a82c214",
".git/logs/refs/heads/main": "3d744433f6f5ff26544856f885c6093e",
".git/logs/refs/remotes/origin/main": "6d513aa034e2ceeabdec191fffafa686",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "50ce685a5c371aeba65669a32b2cbcad",
".git/refs/remotes/origin/main": "50ce685a5c371aeba65669a32b2cbcad",
".git/index": "774328621916a42d6af9b96c349a6384",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "9a21ddc1dc36edd72b92e6cc6007402c",
"assets/NOTICES": "cd3d4ce9754a690c94c3afad328a3795",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/svg/logo.svg": "c548126b31c36173eef3e9b9f5864aa6",
"assets/assets/png/me.png": "ad2f2c733bcb5556c548d272237af7d7",
"assets/assets/png/bg.png": "178f53a4e38a4d007bdf57c316c7dabb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
