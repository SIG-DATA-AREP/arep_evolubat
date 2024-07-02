$(document).ready(function () {
  // Script pour charger le contenu de la page de détail
  if (window.location.pathname.includes("detail.html")) {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    loadDetailContent(id);
  }

  function loadDetailContent(id) {
    $("#site-name").html(sites[id].siteName);
    $("#detail-content").html(sites[id].content);

    $("#title_ztext_2").html(sites[id].title_ztext_2);
    $("#content_ztext_2").html(sites[id].content_ztext_2);
    $("#desc_ztext_2").html(sites[id].desc_ztext_2);
    $("#img_2020").attr("alt", sites[id].siteName);
  }

  const coords = [45.764043, 4.835659];
  const zoom = 13;

  const map1 = L.map("map_1950_1").setView(coords, zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 10,
  }).addTo(map1);

  const map2 = L.map("map_1950_2").setView(coords, zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 10,
  }).addTo(map2);

  const map3 = L.map("map_1950_3").setView(coords, zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 10,
  }).addTo(map3);

  const map4 = L.map("map_2020").setView(coords, zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    // maxZoom: 10,
  }).addTo(map4);

  let isSyncing = false;

  function syncMaps(event) {
    if (isSyncing) {
      return;
    }
    isSyncing = true;

    const center = event.target.getCenter();
    const zoom = event.target.getZoom();
    [map1, map2, map3, map4].forEach((map) => {
      if (map !== event.target) {
        map.setView(center, zoom, { animate: false });
      }
    });

    isSyncing = false;
  }

  [map1, map2, map3, map4].forEach((map) => {
    map.on("move", syncMaps);
    map.on("zoom", syncMaps);
  });
});
