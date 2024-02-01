if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", "[]");
}
let cartArray = JSON.parse(localStorage.getItem("cart"));
let cartItems = document.getElementById("cart-items");
let cartNumberOfItems = document.getElementById("cart-item-number");
let cartTotal = document.getElementById("cart-total");
let noItems = document.getElementById("no-items");

cartNumberOfItems.textContent = cartArray.length;

if (cartArray != "[]") {
  let cost = 0;
  cartArray.map((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("cart-img");
    let img = document.createElement("img");
    img.src = `assets/Products/${item["image"]}`;
    imgDiv.appendChild(img);
    let name = document.createElement("span");
    name.classList.add("item-name");
    name.innerHTML = `${item.text}`;
    imgDiv.appendChild(name);
    let infoDiv = document.createElement("div");
    let price = document.createElement("p");
    price.innerHTML = `${item.price}`;
    price.classList.add("item-price");
    infoDiv.appendChild(price);
    itemDiv.appendChild(imgDiv);
    itemDiv.appendChild(infoDiv);
    cartItems.appendChild(itemDiv);
    cost += parseFloat(item.price);
  });
  cartTotal.textContent = `$${Math.round(cost * 100) / 100}`;
}
if (cartArray.length > 0) {
  noItems.style.display = "none";
}

function checkout() {
  for (var i = 0; i < cartItems.children.length; i++) {
    setTimeout(() => {
      cartItems.firstChild.remove();
      cartNumberOfItems.textContent = cartArray.length - (i - 1);
    }, 250 * i);
  }
  setTimeout(() => {
    cartArray = [];
    localStorage.setItem("cart", JSON.stringify(cartArray));
    location.reload();
  }, 250 * cartItems.children.length);
}
