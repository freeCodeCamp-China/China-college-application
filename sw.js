/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "alipay.ede433e9.jpg",
    "revision": "5c9b4a676405db11f038b5f1379d4eca"
  },
  {
    "url": "logo.da705812.png",
    "revision": "70574d9429477e37dc07ee39d73c95c9"
  },
  {
    "url": "query.1ac6412e.js",
    "revision": "3d62f2368ca948eada51051333b52b96"
  },
  {
    "url": "query.4ce12762.css",
    "revision": "bad277eac3c1c344653410e7e9702a06"
  },
  {
    "url": "source.6ea2698a.css",
    "revision": "26eb7144fc15e309bb2f658394cdf2a3"
  },
  {
    "url": "source.866b025c.js",
    "revision": "6eb7465fc6c1560f0ccef4d3c36f3b1d"
  },
  {
    "url": "wechat.a0e6fbfd.jpg",
    "revision": "670114b2a1c7b55c35f41dfdbd0d1fa5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
