// Estrategia mixta, elegida por un problema concreto:
//   - la PAGINA va network-first, porque si no una version nueva no se ve
//     hasta que el navegador decida soltar la cache vieja;
//   - los ESTATICOS (iconos, manifest) van cache-first, porque no cambian.
// En los dos casos, sin internet se sirve lo cacheado: la app funciona offline.
var CACHE = "cuello-v4";
var ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icono.svg",
                "./icono-192.png", "./icono-512.png", "./icono-maskable.png"];

self.addEventListener("install", function(ev){
  ev.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ARCHIVOS); })
    .then(function(){ return self.skipWaiting(); }));
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

function esPagina(req){
  if(req.mode === "navigate") return true;
  var p = new URL(req.url).pathname;
  return p.endsWith("/") || p.endsWith("/index.html");
}

self.addEventListener("fetch", function(ev){
  if(ev.request.method !== "GET") return;
  // Las fuentes de Google son de otro dominio: que pasen de largo.
  if(new URL(ev.request.url).origin !== location.origin) return;

  if(esPagina(ev.request)){
    ev.respondWith(
      fetch(ev.request).then(function(res){
        var copia = res.clone();
        caches.open(CACHE).then(function(c){ c.put("./index.html", copia); });
        return res;
      }).catch(function(){
        return caches.match("./index.html").then(function(hit){
          return hit || caches.match("./");
        });
      })
    );
    return;
  }

  ev.respondWith(
    caches.match(ev.request).then(function(hit){
      return hit || fetch(ev.request).then(function(res){
        var copia = res.clone();
        caches.open(CACHE).then(function(c){ c.put(ev.request, copia); });
        return res;
      });
    })
  );
});
