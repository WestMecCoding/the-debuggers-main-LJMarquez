# Documentation for Luis's Contribution

> I mainly contributed with HTML and CSS styling, as well as some JS. I helped with the smooth scrolling href's and traversing from the different pages. I also styled some divs such as the contacts, and footer text. Overall I tried my best to help my teammates with things they were working on, and splitting the work with them by taking care of other details while they continued working on their projects.

One problem I had was getting the footer text to fit with the rest of the page. Before it stood out due to the text color. I changed this and added extra stylized lines next to the text to make it look better on the page. It was difficult to do at first because I wasn't sure how to start, but I ended up using the pseudo-elements, before and after.

```css
.line:before,
.line:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-left: 15%;
  height: 2px;
  width: 8em;
  border-top: 5px solid #d35e17;
  background: rgba(0, 0, 0, 0.8);
}
.line:before {
  right: auto;
  width: 8em;
  margin: 0 0 0 -9em;
}
.line:after {
  left: auto;
  width: 8em;
  margin: 0 0 0 0.5em;
}
```

> Another problem I encountered was creating the nav for the cart html. I crated divs and me and my other teammates filled it with CSS.This allowed us to style it heavily and make it all fit

```html
<nav>
  <div id="logo"></div>
  <div id="logo-top"></div>
  <div id="logo-shop">
    <a href="cart.html" target="_blank">
      <img src="./assets/Images/Shopping_Cart_Icon_PNG_Clipart.png" alt="" />
    </a>
    <p id="cart-item-number">0</p>
  </div>
</nav>
```

```css
#logo {
  width: 10vw;
  height: 80%;
  margin-right: -12vw;
  margin-left: 2vw;
  background-image: url(assets/Images/Mug-Logo.PNG);
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
}
```

> One of the bigger things I worked on was creating the list of products. ALl the products and their displays were created in Javascript so that we could easily create more when we needed. Ethan and Leo focused on creating the actual div's and putting the content on the page. Me, Johnny, and Andrei helped in creating the products. I used AI to generate descriptions for the products, then edited it to make sure it fit with our companies values. After creating the first outline for the attributes the products would need, we could replicate that with other products and easily fill out menu.

```JS
// {"text":, "image":, "color":, "text_color:", "desc:":}
let products = [
  {
    text: "Borcelle® Espresso™",
    image: "coffee-1.png",
    color: "#742D01",
    text_color: "white",
    desc: "Espresso is a concentrated coffee beverage that is brewed by forcing hot water through finely-ground coffee beans. It is a strong and flavorful coffee shot that serves as the base for various other coffee drinks. Buy now for $3.99. (Taxes included)",
  },
  {
    text: "Borcelle® Cappucino™",
    image: "coffee-2.png",
    color: "#742D00",
    text_color: "white",
    desc: "A cappuccino is a popular espresso-based coffee beverage that originated in Italy. It is composed of three main components: espresso, steamed milk, and frothed milk. Order now for $10.99 (Taxes included)",
  },
  {
    text: "Borcelle® Americano™",
    image: "coffee-3.png",
    color: "#742D00",
    text_color: "white",
    desc: "An Americano is a coffee beverage that is made by diluting a shot of espresso with hot water. The result is a coffee that has a similar strength to drip coffee but retains the distinct flavor profile and characteristics of espresso. Order now for $11.99 (Taxes included)",
  },
]
```
