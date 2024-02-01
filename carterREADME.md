# Documentation for Carter's Contributions

> Here's some info on my contributions

```css
@keyframes menuOpen {
  0% {
    max-height: 0px;
  }
  100% {
    max-height: 1000px;
  }
}
@keyframes menuClose {
  0% {
    max-height: 63vh;
  }
  100% {max-height: 0px;
  }
}

@keyframes flyInFromSide {
  0% {transform: translateX(-300px); opacity: 1;
  }
  100% {transform: translateX(0px); opacity: 1
  }
}

@keyframes addToCart {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
```
These keyframes contributed to the add to cart buttons, menu, and the fly-in text. Almost all the animation you see on the page were created by me.
```js
  divBuyButton.addEventListener("click", () => {
    cartArray.push(item);
    cartNumberOfItems.textContent = cartArray.length;
    localStorage.setItem("cart", JSON.stringify(cartArray));
    divBuyButton.style.animation = "none";
    divBuyButton.offsetWidth;
    divBuyButton.style.animation = "addToCart 0.2s linear";
    divBuyButton.classList.add("addToCartAnimation");
    setTimeout(() => {
      divBuyButton.classList.remove("addToCartAnimation");
    }, 800);
  });
```
This section of javascript listened for a click on the add to cart buttons, then added the item to the cart array, chaned the number of items in the cart, stored the item in local storage, triggered the shake animation, and reset the animation.
```html
<div id="bodyYheader">
      <div id="header-container"></div>
      <div id="body-container">
        <p><u>Founding Story</u><br>
          Since 2020...
        </p>
      </div>
    </div>
```
This code created the header image and founding story divs.
> Below is some code for a problem I encountered

```css
.product-button {
  transform: translate(-50%, -50%);
  margin-left: 25%;
  margin-top: 10%;
}
```
 This section of code created the problem that when the animation started, it moved to a different part of the screen and made the animation being applied to it work incorrectly.

>This was my solution to the problem
```css
.product-button {
  /* transform: translate(-50%, -50%); */
  margin-left: 20%;
  margin-top: 3%;
  margin-bottom: 3%;
}
```
Removing the 'transform: translate' made animations work correctly on it. Also, I chhanged the margins to orient the buttons correctly.
