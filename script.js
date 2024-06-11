$(document).ready(function () {
  // Script pour charger le contenu de la page de détail
  if (window.location.pathname.includes("detail.html")) {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get("id");
    loadDetailContent(id);
  }
  // else {
  //   $("#site-list").html("");
  //   var i = 1,
  //     list = "";
  //   for (let index = 1; index < site.length + 1; index++) {
  //     const el = site[index];
  //     list += ` <div class="col-md-4 mb-4">
  //           <div class="thumbnail">
  //               <a href="detail.html?id=${index}">
  //                   <img src="img/brazzaville.webp" alt="Image 1" class="img-fluid rounded">
  //               </a>
  //           </div>
  //           <div class="caption text-center mt-2">
  //               <p>${el.siteName}</p>
  //           </div>
  //       </div>
  //     `;
  //   }
  //   $("#site-list").html(list);
  // }

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

const site = {
  1: {
    siteName: "Fontaibleau",
    title_ztext_2: "Fontaibleau 2020",
    content_ztext_2: "Fontaibleau content 2020",
    desc_ztext_2: "Fontaibleau description 2020",
    title_ztext_1: "Fontaibleau 1950",
    content_ztext_1: "Fontaibleau 1950 content",
    desc_ztext_11: " Fontaibleau 1950 description 1",
    desc_ztext_12: " Fontaibleau 1950 description 2",
    desc_ztext_13: " Fontaibleau 1950 description 3",
  },
  2: {
    siteName: "Site 2",
    title_ztext_2: "",
    content_ztext_2: "",
    desc_ztext_2: "",
    title_ztext_1: "",
    content_ztext_1: "",
    desc_ztext_11: "",
    desc_ztext_12: "",
    desc_ztext_13: "",
  },
  3: {
    siteName: "Site 3",
    title_ztext_2: "",
    content_ztext_2: "",
    desc_ztext_2: "",
    title_ztext_1: "",
    content_ztext_1: "",
    desc_ztext_11: "",
    desc_ztext_12: "",
    desc_ztext_13: "",
  },
};
