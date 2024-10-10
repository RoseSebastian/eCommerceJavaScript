let products = [];
let filteredProducts = [];
var container = document.getElementById("productContainer");

let displayProducts = (list) => {
  var productlist = document.createElement("div");
  productlist.id = "productList";
  productlist.className = "row gy-3 gx-3";
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
    productlist.appendChild(el);
  });
  container.appendChild(productlist);
};

$(document).ready(function () {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      products = json;
      displayProducts(products);
    });
});

let removeProductList = () => {
  const element = document.getElementById("productList");
  if (element) {
    element.remove();
  }
};

let removeEmptySearchResult = () => {
  const element = document.getElementById("noValue");
    if (element) {
      element.remove();
    }
}

let onSearch = () => {
  removeProductList();
  removeEmptySearchResult();
  var input = document.getElementById("search-input");
  var value = input.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    filteredProducts = products.filter((eachItem) => {
      return eachItem.title.toLowerCase().includes(value);
    });
    
    if (filteredProducts.length > 0) {
      displayProducts(filteredProducts);
    } else {
      var noResult = document.createElement("div");
      noResult.id = "noValue";
      noResult.className = "noResults";
      noResult.innerHTML = "<h3>No results found</h3>";
      container.appendChild(noResult);
    }
  } else {
    displayProducts(products);
  }
};
