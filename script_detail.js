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

    $("#title_ztext_1").html(sites[id].title_ztext_1);
    $("#content_ztext_1").html(sites[id].content_ztext_1);
    $("#desc_ztext_11").html(sites[id].desc_ztext_11);
    $("#desc_ztext_12").html(sites[id].desc_ztext_12);
    $("#desc_ztext_13").html(sites[id].desc_ztext_13);
    $("#img_1950_1").attr(
      "src",
      `img/sites/${sites[id].siteName
        .toLowerCase()
        .replaceAll(" ", "_")}/1950_1.jpeg`
    );
    $("#img_1950_2").attr(
      "src",
      `img/sites/${sites[id].siteName
        .toLowerCase()
        .replaceAll(" ", "_")}/1950_2.jpeg`
    );
    $("#img_1950_3").attr(
      "src",
      `img/sites/${sites[id].siteName
        .toLowerCase()
        .replaceAll(" ", "_")}/1950_3.jpeg`
    );
  }
});
