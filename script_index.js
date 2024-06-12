$(document).ready(function () {
  $("#site-list").html("");
  var list = "";
  for (let index = 1; index < Object.keys(sites).length + 1; index++) {
    const el = sites[index];
    console.log("🚀 ~ el:", el);
    list = ` <div class="col-md-4 mb-4">
            <div class="thumbnail">
                <a href="detail.html?id=${index}">
                    <img src="img/sites/${el.siteName
                      .toLowerCase()
                      .replaceAll(" ", "_")}/0.jpeg" alt="${
      el.siteName
    }" class="img-fluid rounded">
                </a>
            </div>
            <div class="caption text-center mt-2">
                <p>${el.siteName}</p>
            </div>
        </div>
      `;
    $("#site-list").append(list);
  }
  // $("#site-list").html(list);
});
