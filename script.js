$(document).ready(function () {
  let products = [];
  let filteredProducts = [];
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products = json;
      displayProducts(products);
    });
  var container = document.getElementById("productList");

  let displayProducts = (list) => {
    list.forEach((item) => {
      var el = document.createElement("div");
      el.className = "col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3";
      const content = `
            <div class="card">
                <img src="${item.image}" class="card-img-top item-image">
                <div class="card-body">
                    <h5 class="card-title title">${item.title}</h5>
                    <p class="text-success">${item.price}</p>
                    <p class="card-text text">${item.description}</p>
                    <button class="btn btn-warning">View Product</button>
                    <button class="btn btn-primary">Add to cart</button>
                </div>
            </div>
        `;
      el.innerHTML = content;
      container.appendChild(el);
    });
  };
});
