let products = [
  {
    text: "Borcelle® Espresso™",
    image: "coffee-1.png",
    desc: "Espresso is a concentrated coffee beverage that is brewed by forcing hot water through finely-ground coffee beans. It is a strong and flavorful coffee shot that serves as the base for various other coffee drinks. Buy now for $6.99 (Taxes included)",
    price: 6.99,
  },
  {
    text: "Borcelle® Cappucino™",
    image: "coffee-2.png",
    desc: "A cappuccino is a popular espresso-based coffee beverage that originated in Italy. It is composed of three main components: espresso, steamed milk, and frothed milk. Order now for $9.99 (Taxes included)",
    price: 9.99,
  },
  {
    text: "Borcelle® Americano™",
    image: "coffee-3.png",
    desc: "An Americano is a coffee beverage that is made by diluting a shot of espresso with hot water. The result is a coffee that has a similar strength to drip coffee but retains the distinct flavor profile and characteristics of espresso. Order now for $9.99 (Taxes included)",
    price: 9.99,
  },
  {
    text: "Borcelle® Latte™",
    image: "caffee.png",
    desc: "A latte, short for caffè latte, is a popular coffee drink that originated in Italy. It is made with espresso and steamed milk, and the name latte itself means milk in Italian. A typical latte is composed of one or more shots of espresso combined with steamed milk. Order now for $11.99. (Taxes included)",
    price: 11.99,
  },
  {
    text: "Mr. Beast's® Feastables™",
    image: "beastbar.png",
    desc: "The Mr. Beast's® Feastables™ is a delectable treat crafted with the finest cocoa beans from around the world. Each bar is a testament to quality and indulgence, featuring a rich and velvety texture that melts in your mouth. The packaging is adorned with Mr. Beast's signature logo, emphasizing his commitment to excellence. Buy one for $8.99 (taxes incuded)",
    price: 8.99,
  },
  {
    text: "Borcelle® Almond Milk™",
    image: "almondmilk.png",
    desc: "Almond milk is a plant-based milk alternative made from almonds. It is a popular choice for those who are lactose intolerant, allergic to dairy, or following a vegan diet. To make almond milk, almonds are soaked in water, blended, and then strained to remove the solids. The resulting liquid has a nutty flavor and a creamy texture, similar to dairy milk. Order now for $4.99 (Taxes included)",
    price: 4.99,
  },
  {
    text: "Borcelle® Black Tea™",
    image: "BLACKTEA.png",
    desc: "Black tea is a type of tea that undergoes a more extensive oxidation process compared to green, white, and oolong teas. It is made from the leaves of the Camellia sinensis plant. The oxidation process involves exposing the tea leaves to air, which causes chemical changes in the leaf pigments and enzymes, resulting in the dark color and robust flavor characteristic of black tea. Order now for $5.99. (Taxes included)",
    price: 5.99,
  },
  {
    text: "Borcelle® Hot Chocco™",
    image: "coco.png",
    desc: "Hot choco, short for hot chocolate, is a warm beverage made by melting chocolate or cocoa powder into milk or a non-dairy substitute. It is often sweetened to taste and can be topped with whipped cream or marshmallows for added indulgence.  Order now for $6.99. (Taxes included)",
    price: 6.99,
  },
  {
    text: "Borcelle® Vegan Fish™",
    image: "pish.png",
    desc: "Vegan fish refers to plant-based alternatives that mimic the taste, texture, and appearance of traditional fish without using any animal products. These alternatives can be made from various plant-based ingredients such as tofu, seaweed, or other proteins, offering a cruelty-free option for individuals following a vegan diet. Buy for $9.99 (Taxes included)",
    price: 9.99,
<<<<<<< HEAD
=======
  },
  
  {
    text: "Borcelle®  Vegan Bagel™",
    image: "bagel.png",
    desc: "A vegan bagel is a plant-based version of the classic bagel, made without any animal-derived ingredients such as eggs or dairy. It typically incorporates plant-based alternatives to achieve the same delicious and satisfying taste while adhering to a vegan diet. Sold for only $3.99  (Taxes included)",
    price: 3.99,
  },
];

if (localStorage.getItem("cart") == null) {
  localStorage.setItem("cart", "[]");
}
let cartArray = JSON.parse(localStorage.getItem("cart"));
let cartNumberOfItems = document.getElementById("cart-item-number");

let selectedProduct = {};
let content = document.getElementById("content");
let menuList = document.getElementById("menu-list");
let chevDown = document.getElementById("chevron-down");
let menuTabText = document.getElementById("menu-tab-color");
let menuTab = document.getElementById("menu-tab");
let index = 0;

cartNumberOfItems.textContent = cartArray.length;

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
  newDiv.appendChild(divImage);
  newDiv.appendChild(divTitle);
  newDiv.appendChild(divDesc);
  newDiv.appendChild(divBuyButton);
  content.appendChild(newDiv);
  index++;
});

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

// Save Height and Custom Scrollbar
let checkMouse = false;
let scrollbar = document.getElementById("scrollbar");
window.addEventListener("scroll", () => {
  if (!checkMouse) {
    let y = window.scrollY;
    let html_height = document.body.clientHeight;
    scrollbar.style.height = `${(window.innerHeight / html_height) * 100}vh`;
    scrollbar.style.top = `${(y / html_height) * 100}vh`;
    scrollbar.style.opacity = 0.5;
    localStorage.setItem("Yscroll", y);
  }
});
scrollbar.addEventListener("mousedown", () => {
  checkMouse = true;
});
document.body.addEventListener("mouseup", () => {
  checkMouse = false;
});
setTimeout(() => {
  window.scrollTo(0, localStorage.getItem("Yscroll"));
}, 1000);
document.body.addEventListener("mousemove", (event) => {
  if (checkMouse) {
    let percent = event.clientY / window.innerHeight;
    scrollbar.style.top = `${percent * 100}vh`;
    window.scrollTo(0, percent * document.body.clientHeight);
    scrollbar.style.opacity = 1;
    scrollbar.focus();
  }
});
let y = window.scrollY;
let html_height = document.body.clientHeight;
scrollbar.style.height = `${(window.innerHeight / html_height) * 100}vh`;
scrollbar.style.top = `${(y / html_height) * 100}vh`;
localStorage.setItem("Yscroll", y);
