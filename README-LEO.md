# I'm Leo!

## My role in the project was mainly creating the cart page and various other elements, styles, and interactivity on the main page.

> Here is one of the snippets of code I am the most proud of. This code applies the menu animation in the nav bar when a user clicks on it. It also has the reverse animation and closes the nav bar.

```js
const arrow = document.querySelectorAll(".nav-arrow");
arrow.forEach((navArrow) => {
  let opened = false;
  navArrow.addEventListener("click", (e) => {
    opened = !opened;
    if (opened) {
      e.target.style.animation = "rotate .3s ease forwards";
      menuTab.classList.add("tab-opened");
      chevDown.classList.add("tab-opened-text");
      menuTabText.classList.add("tab-opened-text");
      menuList.style.display = "block";
      menuList.style.animation = "menuOpen 2s 0s ease-in-out forwards";
    } else {
      e.target.style.animation = "close .3s ease forwards";
      menuTab.classList.remove("tab-opened");
      chevDown.classList.remove("tab-opened-text");
      menuTabText.classList.remove("tab-opened-text");
      menuList.style.animation = "menuClose 1s 0s ease-in-out forwards";
    }
  });
});
```

> This is another code snippet I am pretty proud of. What this code does is when a user adds an item to their cart, it pushes the item object into local storage.

```js
divBuyButton.addEventListener("click", () => {
  cartArray.push(item);
  cartNumberOfItems.textContent = cartArray.length;
  localStorage.setItem("cart", JSON.stringify(cartArray));
  divBuyButton.style.animation = "none";
  divBuyButton.offsetWidth;
  divBuyButton.style.animation = "addToCart 0.2s linear";
  divBuyButton.classList.add("addToCartAnimation");
});
```

> Another code snippet I had fun trying to solve is adding items visually into the cart every time the user went to the cart page. Here is the code I used to solve the problem.

```js
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
}
```

> Here is the page layout I developed for the cart page. I styled this using the grid system.

```html
<h1 id="cart-header">Cart:</h1>
<div id="cart-wrapper">
  <div id="cart-items" class="cart-column">
    <p id="no-items">There are no items in your cart</p>
  </div>
  <div id="checkout" class="cart-column">
    <h1>Checkout</h1>
    <h3>Payment Method:</h3>
    <select name="payment-select" id="payment-select">
      <option value="credit">Credit/Debit Card</option>
      <option value="paypal">PayPal</option>
      <option value="apple">Apple Pay</option>
    </select>
    <div id="total-wrapper">
      <h2>Total:</h2>
      <p id="cart-total"></p>
    </div>
    <button id="checkout-button" onclick="checkout()">Checkout</button>
  </div>
</div>
```

> On a final note, I really enjoyed this project as it was my first time developing a project with this big of a group. I really enjoyed being able to have immediate feedback and help, and this really enhanced the overall experience of the assignments.
