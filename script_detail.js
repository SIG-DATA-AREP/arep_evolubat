$(document).ready(function () {
  // Script pour charger le contenu de la page de détail
  if (window.location.pathname.includes("detail.html")) {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    loadDetailContent(id);
  }

  function loadDetailContent(id) {
    $("#site-name").html(site[id].siteName);
    $("#detail-content").html(site[id].content);

    $("#title_ztext_2").html(site[id].title_ztext_2);
    $("#content_ztext_2").html(site[id].content_ztext_2);
    $("#desc_ztext_2").html(site[id].desc_ztext_2);

    $("#title_ztext_1").html(site[id].title_ztext_1);
    $("#content_ztext_1").html(site[id].content_ztext_1);
    $("#desc_ztext_11").html(site[id].desc_ztext_11);
    $("#desc_ztext_12").html(site[id].desc_ztext_12);
    $("#desc_ztext_13").html(site[id].desc_ztext_13);
  }
});
