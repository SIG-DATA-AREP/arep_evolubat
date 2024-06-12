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

    $("#title_ztext_1").html(sites[id].title_ztext_1);
    $("#content_ztext_1").html(sites[id].content_ztext_1);
    $("#desc_ztext_11").html(sites[id].desc_ztext_11);
    $("#desc_ztext_12").html(sites[id].desc_ztext_12);
    $("#desc_ztext_13").html(sites[id].desc_ztext_13);
  }
});
