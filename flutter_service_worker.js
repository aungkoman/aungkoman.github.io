'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ab8409a3b02c9b570fc35de103c67770",
"assets/assets/audio/bgm/home.mp3": "506ba5ce3e0f2d3f9bcf2c67b28730b0",
"assets/assets/audio/bgm/playing.mp3": "ebda491d70243a8f3e83935944da2ad8",
"assets/assets/audio/sfx/haha1.ogg": "bc1ae7aaf5fdf2475cf6c3ec483da238",
"assets/assets/audio/sfx/haha2.ogg": "b653f0d8a65932b90349a7bbc6025a4f",
"assets/assets/audio/sfx/haha3.ogg": "7380c84b01588c5c47e99eea23619420",
"assets/assets/audio/sfx/haha4.ogg": "7c20b6674d357558532ecd53e8d6816d",
"assets/assets/audio/sfx/haha5.ogg": "95bca6ec50a1d96fe7c74c590e2caf2c",
"assets/assets/audio/sfx/ouch1.ogg": "33b435025feb00c9bbbc22625493e972",
"assets/assets/audio/sfx/ouch10.ogg": "94979a4650d795bae01d8220ee7130a7",
"assets/assets/audio/sfx/ouch11.ogg": "785f553b241279b74b1408f79bfd219f",
"assets/assets/audio/sfx/ouch2.ogg": "33285625a23c80f98a2d5c332639a4e7",
"assets/assets/audio/sfx/ouch3.ogg": "0c9d5f5b0e71376345bdd76b0b6143cc",
"assets/assets/audio/sfx/ouch4.ogg": "640a4fdb8359bb6733dba98914f44235",
"assets/assets/audio/sfx/ouch5.ogg": "ec74aab6ee31e5c3d7360bfe99013bac",
"assets/assets/audio/sfx/ouch6.ogg": "5463a23c7d591e57068d3858f1345057",
"assets/assets/audio/sfx/ouch7.ogg": "e42e9d69b4beef32a30af66347c512bd",
"assets/assets/audio/sfx/ouch8.ogg": "2902646a2a97c6259e54e8eedf01e4e0",
"assets/assets/audio/sfx/ouch9.ogg": "73025824eec61452626a6827d080f947",
"assets/assets/images/avators/player-avator.png": "f9662ec5db977e079264d392eacd86b4",
"assets/assets/images/bg/backyard.png": "524344db604b864db5ca44b95200a230",
"assets/assets/images/bg/banker-pot-bg.png": "37a40d271a264672c7a691ac96bed9eb",
"assets/assets/images/bg/bet-personal-bg.png": "3b365bc8299e253eb224ca5cbe9530b8",
"assets/assets/images/bg/bg_balance.png": "581c61899b18ecbddbd2b1e021d957a0",
"assets/assets/images/bg/lose-splash.png": "a10a4031f4133282b0e16537356274a4",
"assets/assets/images/bg/table_top.png": "c6574e7a614bde859ff834caeecfbfc5",
"assets/assets/images/bg/tile_background.png": "724d81cef776733241e6814a0c2b55a2",
"assets/assets/images/branding/branding.png": "8eb22d57de896551ad54b74c520f683b",
"assets/assets/images/branding/title.png": "a23b9a488cc7502945b820b5a1f7f38a",
"assets/assets/images/buttons/bet-button.png": "6d8abd70765c4b2c56c33de37cb80b89",
"assets/assets/images/buttons/draw-button.png": "7573fb93951beee40e19f268e6800e07",
"assets/assets/images/buttons/home-button.png": "90e485f1fb26b0abcd7aca24c00bef94",
"assets/assets/images/buttons/select-room-button.png": "b674da2e9f50ab6ed58353f55a5fb4ba",
"assets/assets/images/buttons/shan_play.png": "6e12e36e2dc85fcb1ea0a182c6580eee",
"assets/assets/images/buttons/stop-button.png": "ba5445ff6ee02d3c50bdc7378fd0890b",
"assets/assets/images/cards/cards.png": "04d90f9ff8c8122c14b127fe9c22ab14",
"assets/assets/images/flies/agile-fly-1.png": "158edc854f4e5b4c2d6625038103be0d",
"assets/assets/images/flies/agile-fly-2.png": "569fd4e6fa78194117eb36f6d91de255",
"assets/assets/images/flies/agile-fly-dead.png": "6ed28a39cfa072c253722335390b85d9",
"assets/assets/images/flies/drooler-fly-1.png": "53d87ef199e7b6340ecdcc5af91f8533",
"assets/assets/images/flies/drooler-fly-2.png": "2f573c619d3d2e0184c1adb13ec6fce3",
"assets/assets/images/flies/drooler-fly-dead.png": "aee446e83624dac1ba81074a667927a0",
"assets/assets/images/flies/house-fly-1.png": "7ed714766e3969975790ddb6200b1a56",
"assets/assets/images/flies/house-fly-2.png": "74dc981a49c15a2fcfed6848a6fcbc5f",
"assets/assets/images/flies/house-fly-dead.png": "a3c8686a1babf0155ae544934ab76f58",
"assets/assets/images/flies/hungry-fly-1.png": "f7f465796018f6354aa66e891833e633",
"assets/assets/images/flies/hungry-fly-2.png": "3ed7557192d562f9d83506cb99761190",
"assets/assets/images/flies/hungry-fly-dead.png": "0b41d0e3fbe2ba2697dcaa0b41f65fa3",
"assets/assets/images/flies/macho-fly-1.png": "11baaf1935b78f51324349f47dee371e",
"assets/assets/images/flies/macho-fly-2.png": "036bf9f71cccf1db9a053332659ba72a",
"assets/assets/images/flies/macho-fly-dead.png": "3fd8bc37b575531e126584c2c9908ffa",
"assets/assets/images/ui/callout.png": "ce4f211aaadd2323f2bdf9e01478ea7e",
"assets/assets/images/ui/dialog-credits.png": "016789145b5423cf7ab97e7a54cb4c0f",
"assets/assets/images/ui/dialog-help.png": "c562e68b2bbb49caafad2435804677eb",
"assets/assets/images/ui/icon-credits.png": "43d4fa5148a8466498a10ac006dd0e9d",
"assets/assets/images/ui/icon-help.png": "38ff29258dcc07a0f82cd186623826ee",
"assets/assets/images/ui/start-button.png": "f7e580e780b575f0b8efd12fd95ccc2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e7b0d749266dc743313ecd063f724f5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bc9182a0d6b9cefd619592067ab38e15",
"/": "bc9182a0d6b9cefd619592067ab38e15",
"main.dart.js": "0b6161a09cfdfc1dae38e8909d0e7a69",
"manifest.json": "27d189506cf5af1ab7f8e0f2b9b020d0",
"version.json": "d0b31d5e1844253c50d2e51989df53a4"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
