$(document).ready(function () {
  $("#site-list").html("");
  var i = 1,
    list = "";
  for (let index = 1; index < site.length + 1; index++) {
    const el = site[index];
    console.log("🚀 ~ el:", el);
    list += ` <div class="col-md-4 mb-4">
            <div class="thumbnail">
                <a href="detail.html?id=${index}">
                    <img src="img/${el.siteName}" alt="Image 1" class="img-fluid rounded">
                </a>
            </div>
            <div class="caption text-center mt-2">
                <p>${el.siteName}</p>
            </div>
        </div>
      `;
  }
  $("#site-list").html(list);
});
