'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aacd84a28797bf28e196e1bde69ac78d",
".git/config": "71ef85bf7f418948f18d65f27c815d4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b7f0277c4d6e3728409f24c401ef974",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0205dc9fbdb5e6dd3f3b27ef5985fa7",
".git/logs/refs/heads/master": "c0205dc9fbdb5e6dd3f3b27ef5985fa7",
".git/logs/refs/remotes/origin/master": "42a63cdc4b92c3d46196e4ffd9212042",
".git/objects/05/5a88d7289c7e4cae5a652501b6766b7e85378c": "2cc6fb6f14fd857ccf2a3d21962a9813",
".git/objects/07/1333304f1c5bdd391dd68ffbbdd7fd8667553f": "d2fee8a02021bbf5eec4fbc9bd98a095",
".git/objects/07/febb5ad60e6041c741af319a9e77039d60f804": "3349f19c8ec5fa51e79548fc26f20a59",
".git/objects/17/ed350e11557dde48e76362775e7917ba9b9154": "6bb9c3401d1069ae04ca9b9a4a9c7f9e",
".git/objects/1a/972fde08a63ba346731c5344ed416e85961089": "4b49004a80b1bbf6cd69a30acff8917f",
".git/objects/1f/b0847e0db1500c8d021f1bdecaab1a173a36f2": "149c300003a8fe61a3102b0eaa0b7e7c",
".git/objects/22/c8b7f6bd77f9acd77f0139207096c4a9eb6826": "12688decd6d8e1269e9e8f0aeb08e108",
".git/objects/29/d5d77df337eae62710f9b9b5a73e1575ac63cb": "85a80374c74da5eac8e6b6391ddf8d5e",
".git/objects/2e/4ae3d10bb764ca6dddf47b0b6d412fb60ed036": "888723ad68ba185bb036ba0240e34912",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/77204d3de1141e5bccf9014722a845be320e61": "c2a5d76be781c348ca41bd7931cb4269",
".git/objects/36/4c77d7bce474a83e18e48ea648c45eae8c3edb": "c7f5992b1a22946006961cd26958200b",
".git/objects/3f/0f2d3f2df4d6b5e9d746d19a2b6962c7bbb1f7": "e30cedb392afd75448831338f53c2d42",
".git/objects/46/42fe7bed5f63fc63401b0584cc8e76137f1b7d": "14844742a374007bff5b7941b41b7037",
".git/objects/46/9fead7ee73171898076b7bfbf8e0518587dde7": "3f72772a247dfbe1a51254bf8c8b775e",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/5e/507200428025d2c29c31ecf11e053beb07e6bc": "e29a39c87a48434a10bd5ac40aef9d18",
".git/objects/61/25026c7d7ed03bf8f9cdefe350a3ee37eaa1e1": "7a584c853396318e00e375bd1bf5c234",
".git/objects/69/3fe7bf9e4104d725426bef2534fd8f1b2b74de": "6209317e7d4ccebdcc5350f1e9a96383",
".git/objects/71/aa1145df736418788c2f887aac7eeae8b5432e": "898d086d7d10bce21980ddc13139b4f4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/85f9b9874e1aa82a1175b555cff48167953659": "88a5817fd0644f8b50fff06befd946b1",
".git/objects/84/0477e2464fc800c00a378e335b6f9b132e0736": "9b3e8e8a73f46bde2e8ddf45d9806129",
".git/objects/84/66e37e520c1cb96aec5ac2d2c48ed04014f042": "d18dec7f97745eab318c09234a0dbb5d",
".git/objects/85/171d549f6be2c11a2cc9a80c82d9176985033e": "406d55fbb131dd114f7d0c486bb876c5",
".git/objects/87/eefaa59a5229eafacb65c9f270f9b23e9d7d0e": "ccc487f5218beb403d5831d4ed73b850",
".git/objects/88/b7d3f91cff5ace17a4ee670a6e864b36d36689": "a0018731a42ecc8caf8a2c6f053c2d12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9be46a6d5adb55da4c3fdb80a74459832c923d": "d7aa85760c14e6c43f9d650258a1e3f2",
".git/objects/92/7e932f66ade4e5e4831c45677c196681646eb4": "a11b3825906a76ac64436670cc174bbc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/4dcea816ecf7791dbcd0d57d933739f7abef67": "4f952f0c22f31282d33275f7437e2216",
".git/objects/a3/53105ab550aab752764e87990870d59a33ee51": "efbd3295f7f8810def2d9c4e7ab8cc8e",
".git/objects/a8/067e5849eb3298ec85706c84322071a40b5a79": "2ea079cb544a3aea198d963dc806d7f6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/4ef779179efba4a3f90082f3e0b97511ceeee5": "dba514a795e0c6fd50396d57cd67a55b",
".git/objects/b1/16c6e23fbf21d9738c0bd5a32fb5ea05d4451d": "4783f54b4300b7eb97c54a82ecac8649",
".git/objects/b4/8222852d33cc54f89e7dc313479ab50a73758f": "a713cad236a44b5a1fcd236c4a2ea1cd",
".git/objects/b6/67a03562910d58ac46b84e729caf514fc22862": "030f98783596488b8b1ef69077892543",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cf3a08e630d15dd0b77c4b37e5b9086c9268aa": "3d5d4423fbe7c9744588b474fd493cf4",
".git/objects/bd/1a3f76c27a064cd74a749b8d78e80798a4fe62": "46f6a8bfddcf6b41604264ed140f5129",
".git/objects/c3/09600c7d234d56f89e976176a07871458b77ea": "b41210f11010c75e1969b6be7292d3e2",
".git/objects/d4/a3ccb705d7b9a933b59ae019305d8b1ea7285c": "d4e80ded7e3206330c1d0049930388ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/d90a6639b7528a939be048bc88f5fc2b753d7a": "1426440fdc6fa48ff6919e6e65c3fb49",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/f31acb61a9be382b34a07dafbd19ea144c3637": "cac1af721c32b6b85a2cf2832282fd64",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0a3ded3ce1a3eca67815b83eab665df044ba5e": "9c11391a9d7b3afbaa12f2b8ce373af3",
".git/objects/f7/8f327a9ac5faf88493e9669941c20f509b4eb6": "d5a41bc2342316d2fb77eb09c2642f5f",
".git/objects/fe/ce045afd6eee2a29e8785fdd181d49138550b6": "138b5d17ef59fa3a2d74b0178b46f26a",
".git/refs/heads/master": "ba065ad7435add6d59ce31eb4e4ed956",
".git/refs/remotes/origin/master": "ba065ad7435add6d59ce31eb4e4ed956",
"assets/AssetManifest.json": "5a99c16ab4330d6747f6018ab8ed63aa",
"assets/assets/fonts/HolidayFree.otf": "2de885f8abced570d243806faf57d4fe",
"assets/assets/images/arrow.json": "4c752690721d85716b5bf10b3e94c4a5",
"assets/assets/images/dp4.png": "591487033aab934368bd919d34612b39",
"assets/assets/images/logo.gif": "9b38e1002a725f3e38ed7298e72547bd",
"assets/assets/images/logo1.gif": "150abe9686623523e7d9173f93af5554",
"assets/assets/images/logo2.png": "ca330aa20c1fb4db26318ac4ca776768",
"assets/assets/images/logo3.gif": "3c231caea87cf1a370608fc321e2bd0a",
"assets/assets/images/logo4.png": "5350a3bffa0e5194d18f96ad26db641d",
"assets/assets/images/logo5.png": "f02fa57f130f3fef3c17f4a9285c78e7",
"assets/assets/images/logo6.gif": "be29b8e9f52cd0e1a220eb245e741010",
"assets/assets/images/logo7.gif": "eb0712bb6c9a15b02605e545019a0f52",
"assets/assets/images/logo8.png": "c056bc44a35a94baee5693a6558dc22d",
"assets/assets/images/mouse.json": "18d75dff2634badc70b70d1f83e02540",
"assets/FontManifest.json": "3c72760f152ad60e83cf0dcaaef24659",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "995091fb91328b5318a41784dd4daf50",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "803ae41637b49cb5f65cc8e4ef25b202",
"/": "803ae41637b49cb5f65cc8e4ef25b202",
"main.dart.js": "9b9d388d40ca05ee21db69261b3c1c89",
"manifest.json": "51b124683df6e7b677120e20ed358f97",
"version.json": "1e32e8f82aad709882b9ba02a089ca6b"
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
