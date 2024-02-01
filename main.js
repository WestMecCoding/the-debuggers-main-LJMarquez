// REF JSON: {"text": "Item", "image": "url()", "color": "white", "desc": "Lorem Ipsum"}
let products = [
  {
    text: "Borcelle® Espresso™",
    image: "coffee-1.png",
    color: "#742D01",
    text_color: "white",
    desc: "Espresso is a concentrated coffee beverage that is brewed by forcing hot water through finely-ground coffee beans. It is a strong and flavorful coffee shot that serves as the base for various other coffee drinks. Buy now for $399. (Taxes included)",
  },
  {
    text: "Borcelle® Cappucino™",
    image: "coffee-2.png",
    color: "#742D00",
    text_color: "white",
    desc: "A cappuccino is a popular espresso-based coffee beverage that originated in Italy. It is composed of three main components: espresso, steamed milk, and frothed milk. Order now for $102.88 (Taxes included)",
  },
  {
    text: "Borcelle® Americano™",
    image: "coffee-3.png",
    color: "#742D00",
    text_color: "white",
    desc: "An Americano is a coffee beverage that is made by diluting a shot of espresso with hot water. The result is a coffee that has a similar strength to drip coffee but retains the distinct flavor profile and characteristics of espresso. Order now for $199.99 (Taxes included)",
  },
  {
    text: "Borcelle® Latte™",
    image: "caffee.png",
    color: "#742D00",
    text_color: "white",
    desc: "A latte, short for caffè latte, is a popular coffee drink that originated in Italy. It is made with espresso and steamed milk, and the name latte itself means milk in Italian. A typical latte is composed of one or more shots of espresso combined with steamed milk. Order now for $1999.99. (Taxes included)",
  },
  {
    text: "Borcelle® Almond Milk™",
    image: "almondmilk.png",
    color: "#742D00",
    text_color: "white",
    desc: "Almond milk is a plant-based milk alternative made from almonds. It is a popular choice for those who are lactose intolerant, allergic to dairy, or following a vegan diet. To make almond milk, almonds are soaked in water, blended, and then strained to remove the solids. The resulting liquid has a nutty flavor and a creamy texture, similar to dairy milk. Order now for $999999999.99. (Taxes included)",
  },
  {
    text: "Borcelle® Black Tea™",
    image: "BLACKTEA.png",
    color: "#742D00",
    text_color: "white",
    desc: "Black tea is a type of tea that undergoes a more extensive oxidation process compared to green, white, and oolong teas. It is made from the leaves of the Camellia sinensis plant. The oxidation process involves exposing the tea leaves to air, which causes chemical changes in the leaf pigments and enzymes, resulting in the dark color and robust flavor characteristic of black tea. Order now for free. (Taxes included)",
  },
  {
    text: "Borcelle® Hot Chocco™",
    image: "coco.png",
    color: "#742D00",
    text_color: "white",
    desc: "Hot chocolate, a beloved beverage, is crafted from cocoa powder or melted chocolate combined with milk or water and sweetened to taste. It offers a versatile canvas for variations, including dark chocolate for a richer flavor, white chocolate for sweetness, or spiced options with cinnamon or nutmeg. Toppings such as whipped cream, marshmallows, and chocolate shavings add texture and indulgence.  Order now for $99.99. (Taxes included)",
  },
  {
    text: "Borcelle® Vegan Fish™",
    image: "fish.png",
    color: "#742D00",
    text_color: "white",
    desc: "Vegan fish is a plant-based alternative to traditional fish that is crafted using various plant-derived ingredients. Ingredients commonly used in vegan fish alternatives include seaweed, algae, tofu, tempeh, or textured vegetable protein. These alternatives are designed to replicate the taste, texture, and nutritional profile of fish while remaining cruelty-free and environmentally sustainable. Vegan fish options come in various forms, such as fish fillets, fish sticks, or fish burgers, offering versatility in plant-based cooking. Choosing vegan fish aligns with ethical and environmental considerations, providing a compassionate alternative for those seeking to avoid the impact of conventional fishing practices on marine ecosystems. Buy for $999,999,999,999 (Taxes included)",
  },
  {
    text: "Borcelle®  Vegan Bagel™",
    image: "bagel.png",
    color: "#742D00",
    text_color: "white",
    desc: "A vegan bagel is a plant-based version of the traditional bagel that omits animal products from its ingredients. Instead of using dairy, vegan bagels are made with plant-based alternatives such as our quality almond milk and vegan butter. They are still prepared by shaping yeast-leavened dough into a ring, boiling it, and then baking to achieve the characteristic chewy texture. Vegan bagels can be topped or filled with various plant-based spreads, vegetables, or non-dairy cream cheese for a delicious cruelty-free option. Sold for only $10.00  (Taxes included)",
  },
] 

let cart = [];

let selectedProduct = {};
let content = document.getElementById("content");
let menuList = document.getElementById("menu-list");
let menuTab = document.getElementById("menu-tab");
let index = 0;
let cartNumberOfItems = document.getElementById("cart-item-number")
let cartNumberOfItemsVar = 0
products.map((item) => {
  item.index = index;
  let newDiv = document.createElement("div");
  let divTitle = document.createElement("h3");
  let divDesc = document.createElement("p");
  let divImage = document.createElement("div");
  let divBuyButton = document.createElement("div");
  newDiv.classList.add("product-item");
  newDiv.id = `product-${index}`;
  newDiv.style.backgroundColor = item["color"];
  divTitle.textContent = item["text"];
  divTitle.style.color = item["text_color"];
  divDesc.textContent = item["desc"];
  divDesc.style.color = item["text_color"];
  divImage.classList.add("product-image");
  divImage.style.backgroundImage = `url(assets/Products/${item["image"]})`;
  divBuyButton.classList.add("product-button");
  divBuyButton.textContent = "Buy Now!";

  let newAnchor = document.createElement("a");
  newAnchor.classList.add("product-link");
  newAnchor.href = `#product-${index}`;
  newAnchor.textContent = item.text;
  newAnchor.style.animationDelay = `${index / products.length}s`;
  menuList.appendChild(newAnchor);

  divBuyButton.addEventListener("click", () => {
    selectedProduct = item;
    console.log(selectedProduct);
    alert(`You purchased ${selectedProduct.text} Congrats :)`);
    cartNumberOfItemsVar = cartNumberOfItemsVar + 1
    cartNumberOfItems.innerText = cartNumberOfItemsVar;

    cart.push(selectedProduct);
    console.log(cart);
  });
  newDiv.appendChild(divImage);
  newDiv.appendChild(divTitle);
  newDiv.appendChild(divDesc);
  newDiv.appendChild(divBuyButton);
  content.appendChild(newDiv);
  index++;
});

cart.map((item) => {
  let itemDiv = document.createElement("div");
  itemDiv.classList.add('item');
  let imgDiv = document.createElement("div");
  imgDiv.classList.add('cart-img');
  let infoDiv = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("span");
  let price = document.createElement("p");

  img.src = `url(assets/Products/${item["image"]})`;
});



const arrow = document.querySelectorAll(".nav-arrow");
arrow.forEach((navArrow) => {
  let opened = false;
  navArrow.addEventListener("click", (e) => {
    opened = !opened;
    if (opened) {
      e.target.style.animation = "rotate .3s ease forwards";
      menuTab.classList.add("tab-opened");
      menuList.style.display = "block";
      menuList.style.animation = "menuOpen 2s 0s ease-in-out forwards";
    } else {
      e.target.style.animation = "close .3s ease forwards";
      menuTab.classList.remove("tab-opened");
      menuList.style.animation = "menuClose 1s 0s ease-in-out forwards";

    }
  });
});

// Save Height and Custom Scrollbar
let scrollbar = document.getElementById("scrollbar");
window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let html_height = document.body.clientHeight;
  scrollbar.style.height = `${(window.innerHeight/html_height)*100}vh`
  scrollbar.style.top = `${(y/html_height)*100}vh`
  localStorage.setItem("Yscroll", y);
});
scrollbar.addEventListener("click", (event) => {
  console.log(window.event.clientX)
});
setTimeout(() => {
  window.screenY = localStorage.getItem("Yscroll");
}, 1000);
let y = window.scrollY;
let html_height = document.body.clientHeight;
scrollbar.style.height = `${(window.innerHeight/html_height)*100}vh`
scrollbar.style.top = `${(y/html_height)*100}vh`
localStorage.setItem("Yscroll", y);
