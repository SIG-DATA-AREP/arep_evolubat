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
    $("#img_2020").attr(
      "src",
      `img/sites/${sites[id].siteName
        .toLowerCase()
        .replaceAll(" ", "_")}/2020.jpeg`
    );
    $("#img_lightbox_2020").attr(
      "src",
      `img/sites/${sites[id].siteName
        .toLowerCase()
        .replaceAll(" ", "_")}/2020.jpeg`
    );
    $("#img_lightbox_2020").attr("data-title", sites[id].desc_ztext_2);
    $("#title_ztext_1").html(sites[id].title_ztext_1);
    $("#content_ztext_1").html(sites[id].content_ztext_1);

    for (
      let index = 1;
      index < Object.keys(sites[id].img_desc).length + 1;
      index++
    ) {
      const el = sites[id].img_desc[index];
      $(`#img_1950_${index}`).attr(
        "src",
        `img/sites/${sites[id].siteName
          .toLowerCase()
          .replaceAll(" ", "_")}/1950_${index}.jpeg`
      );
      $(`#img_lightbox_${index}`).attr(
        "href",
        `img/sites/${sites[id].siteName
          .toLowerCase()
          .replaceAll(" ", "_")}/1950_${index}.jpeg`
      );
      $(`#img_lightbox_${index}`).attr("data-title", el);
      $(`#desc_ztext_${index}`).html(el);
    }
  }
});
