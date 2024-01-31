# Ethan McNaugton

> here is some code that I added improve the website's functionality

```js
products.map((item) => {
  item.index = index;
  let newDiv = document.createElement("div");
  let divTitle = document.createElement("h3");
  let divDesc = document.createElement("p");
  let divImage = document.createElement("div");
  let divBuyButton = document.createElement("div");
  newDiv.classList.add("product-item");
  newDiv.id = `product-${index}`;
  divTitle.textContent = item["text"];
  divDesc.textContent = item["desc"];
  divDesc.style.color = item["text_color"];
  divImage.classList.add("product-image");
  divImage.style.backgroundImage = `url(assets/Products/${item["image"]})`;
  divBuyButton.classList.add("product-button");
  divBuyButton.textContent = "Add to Cart";

  let newAnchor = document.createElement("a");
  newAnchor.classList.add("product-link");
  newAnchor.href = `#product-${index}`;
  newAnchor.textContent = item.text;
  newAnchor.style.animationDelay = `${index / products.length}s`;
  menuList.appendChild(newAnchor);

  divBuyButton.addEventListener("click", () => {
    cartArray.push(item);
    localStorage.setItem("cart", JSON.stringify(cartArray));
    divBuyButton.classList.add("addToCartAnimation");
    setTimeout(removeAddtoCartAnimation(divBuyButton), 800);
  });
  newDiv.appendChild(divImage);
  newDiv.appendChild(divTitle);
  newDiv.appendChild(divDesc);
  newDiv.appendChild(divBuyButton);
  content.appendChild(newDiv);
  index++;
});
```

> I made an array loop that took items that are JSON objects and created elements that was populated with the JSON's attributes, this makes it very easy to make changes and is easier to read.