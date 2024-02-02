# Documentation for Andrei's Contribution

> I mainly contributed most of the products we would like to sell on our coffee shop. I also helped with some CSS and Jvascript 

```js
console.log("cool code");
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
  },
  {
    text: "Borcelle®  Vegan Bagel™",
    image: "bagel.png",
    desc: "A vegan bagel is a plant-based version of the classic bagel, made without any animal-derived ingredients such as eggs or dairy. It typically incorporates plant-based alternatives to achieve the same delicious and satisfying taste while adhering to a vegan diet. Sold for only $3.99  (Taxes included)",
    price: 3.99,
  },
];

```css
.product-link {
  display: block;
  font-family: gilker;
  text-decoration: none;
  color: white;
  padding-top: 2vh;
  padding-bottom: 2vh;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.5s, padding-top 0.5s, padding-bottom 0.5s;
  animation: 1s flyInFromSide ease-in-out forwards;
  opacity: 0;
}
.product-link:hover {
  text-decoration: underline white;
}

/* *********************** */

.product-item {
  margin: auto;
  margin-bottom: 20vh;
  padding: 20px;
  width: 80vw;
  color: white;
  background-color: #742d00;
  border-radius: 20px;
  box-shadow: 4px 10px 20px black;
}

.product-item h3 {
  margin-top: 5vh;
  font-size: 4rem;
  font-family: genty;
  text-align: center;
  font-weight: bolder;
}

.product-item p {
  max-width: 50%;
  margin-top: 5vh;
  line-height: 2.75rem;
  font-size: 1.25rem;
}

.product-item::after {
  content: "";
  clear: both;
  display: table;
}

.product-image {
  width: 50%;
  height: 80vh;
  background-image: none;
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  float: right;
  -webkit-filter: drop-shadow(10px 10px 10px #222);
  filter: drop-shadow(10px 10px 10px #222);
}

.product-button {
  width: -moz-fit-content;
  width: fit-content;
  font-size: 2rem;
  font-weight: bolder;
  border-radius: 20px;
  /* transform: translate(-50%, -50%); */
  margin-left: 20%;
  margin-top: 3%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: 3px solid rgb(235, 235, 235);
  color: rgb(233, 232, 232);
  cursor: pointer;
  transition: box-shadow 0.75s, background-color 0.75s;
}

.product-button:hover {
  background-color: #833607;
  transition: box-shadow 0.5s, background-color 0.5s;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
}

