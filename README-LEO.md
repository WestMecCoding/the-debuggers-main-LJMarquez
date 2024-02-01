# I'm Leo, and my role in the project was mainly creating the cart page and various other elements, styles, and interactivity on the main page.

 > Here is one of the snippets of code I am the most proud of. What this code does is when a user adds an item to their cart, it pushes the item object into local storage.

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

> On a final note, I really enjoyed this project as it was my first time developing a project with this big of a group. I really enjoyed being able to have immediate feedback and help, and this really enhanced the overall experience of the assignments.