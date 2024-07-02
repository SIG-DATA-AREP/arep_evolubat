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

    // $("#img_2020").attr(
    //   "src",
    //   `img/sites/${sites[id].siteName
    //     .toLowerCase()
    //     .replaceAll(" ", "_")}/2020.jpeg`
    // );

    // $("#img_lightbox_2020").attr(
    //   "src",
    //   `img/sites/${sites[id].siteName
    //     .toLowerCase()
    //     .replaceAll(" ", "_")}/2020.jpeg`
    // );

    // Initialiser la carte pour 2020
    initializeMap("map_2020", sites[id].coords[2020], 13);

    // $("#img_lightbox_2020").attr("data-title", sites[id].desc_ztext_2);
    // $("#title_ztext_1").html(sites[id].title_ztext_1);
    // $("#content_ztext_1").html(sites[id].content_ztext_1);

    // for (
    //   let index = 1;
    //   index < Object.keys(sites[id].img_desc).length + 1;
    //   index++
    // ) {
    //   const el = sites[id].img_desc[index];
    //   $(`#img_1950_${index}`).attr(
    //     "src",
    //     `img/sites/${sites[id].siteName
    //       .toLowerCase()
    //       .replaceAll(" ", "_")}/1950_${index}.jpeg`
    //   );
    //   $(`#img_lightbox_${index}`).attr(
    //     "href",
    //     `img/sites/${sites[id].siteName
    //       .toLowerCase()
    //       .replaceAll(" ", "_")}/1950_${index}.jpeg`
    //   );
    //   $(`#img_lightbox_${index}`).attr("data-title", el);
    //   $(`#desc_ztext_${index}`).html(el);
    // }

    for (
      let index = 1;
      index < Object.keys(sites[id].img_desc).length + 1;
      index++
    ) {
      // const el = sites[id].img_desc[index];
      // $(`#desc_ztext_${index}`).html(el);

      // Initialiser les cartes Leaflet
      const mapId = `map_1950_${index}`;
      initializeMap(mapId, sites[id].coords[index], 13);
    }
  }

  function initializeMap(mapId, coords, zoom) {
    const map = L.map(mapId).setView(coords, zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 10,
    }).addTo(map);
  }
});
