let appCache = "ajiozi-cache-2019-3-09";

let assets = [
  "/assets/icons/favicon.ico",
  "/reactapp.css",
  "/reactapp-modules.css",
  "/offline.html",
  "/images/logos/main.png ",
  "/assets/images/logo.png",
  "/vendor/material-icons/material-icons.css",
  "/vendor/animate-3-6-0/animate-3-6-0.css",
  "/vendor/material-icons/materialicons.woff2",
  "/images/svgs/facebook-logo.svg",
  "/images/svgs/twitter-logo.svg"
];

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("fetch", onFetch);
self.skipWaiting();

async function onInstall() {
  let myCache = await caches.open(appCache);
  myCache.addAll(assets);
}

async function onActivate() {
  let deleteInactiveCaches = function(cache) {
    if (cache != appCache) {
      caches.delete(cache);
    }
  };

  let allCaches = await caches.keys();
  allCaches.forEach(deleteInactiveCaches);
}

async function onFetch(event) {
  let cacheFirstThenCache = async function() {
    let response = await caches.match(event.request);
    if (response) {
      // console.log(`fetching ${event.request.url} from cache`);
      // console.log(" ");
      return response;
    }

    try {
      // console.log(`fetching ${event.request.url} from server`);
      // console.log(" ");
      return await fetch(event.request);
    } catch (err) {
      // console.log(`fetching offline page from cache`);
      // console.log(" ");
      return await caches.match("/offline.html");
    }
  };

  event.respondWith(cacheFirstThenCache());
}
