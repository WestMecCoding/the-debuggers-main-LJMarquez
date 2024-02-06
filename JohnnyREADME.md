# Documentation for Johnny

> Here's some info about my contribution

```html
<!-- This segment of code is the opening paragraph I made on the body container through ChatGPT. Someone made some adjustments
to this paragraph when they added our names  -->
<div id="body-container">
  <p>
    <u>Founding Story</u><br />
    Since 2050, Borcelle® Coffee Roastery was established by a group of coffee
    aficionados and culinary experts who shared a passion for quality, wealth,
    nostalgia, and fitness. They recognizd a growing demand for plant-based
    options and a yearning for a throwback finest dining experience, leading
    them to create a cafe where these elements harmoniously blend. Led by
    seasoned baristo Johnny Dang, along with the talents of roaster Leo Marquez,
    and his wife branding expert Emily Marquez, logistics wizard Luis Torres,
    coffee expert Andrei Buhatin, and our chairman Ethan McNauhton Borcelle®
    cafe was born. Their journey took them across Mexico and China to source the
    finest beans, emphasizing ethical and sustainable practices. Through
    dedication and perseverance, the team overcame challenges to establish a
    charming coffee haven. Borcelle® Company not only delighted the senses with
    meticulously roasted coffee but also fostered a community around a shared
    appreciation for quality and sustainability, making it a beloved cornerstone
    in the organization's culture.
  </p>
</div>
```

```css
/* Below is some styling I added to our webpage. I also found some images online/from our wireframe, removed their backgrounds, and added them
to VSCode. I also provided the Bocelle Brand Name at the top of the page (edited from our wireframe)*/
body {
  background-color: #f4e9dd;
  color: maroon;
}
nav {
  width: 100%;
  height: 15vh;
  background-color: #d35e17;
}
#body-container {
  width: 100%;
  height: 77vh;
  background-color: #faaf86;
  border-radius: 5px;
  text-align: center;
  margin-top: 5vh;
  border: 8px solid #d35e17;
}
footer {
  background-color: #d35e17;
  /* box-shadow: 10px 3px 10px; */
}
```

```js
// This segment of code is filled with products I added to our website. To make the product descriptions, I used ChatGPT. I also added some styling
{
    text: "Borcelle® Black Tea™",
    image: "BLACKTEA.png",
    color: "#742D00",
    text_color: "white",
    desc: "Black tea is a type of tea that undergoes a more extensive oxidation process compared to green, white, and oolong teas. It is made from the leaves of the Camellia sinensis plant. The oxidation process involves exposing the tea leaves to air, which causes chemical changes in the leaf pigments and enzymes, resulting in the dark color and robust flavor characteristic of black tea. Order now for free. (Taxes included)",
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
```

> Below is some code for a problem I encountered

```js
// <!-- So for these snippets of code (in Javascript), I had trouble figuring out why our website wouldn't display them despite adding them to VSCode. -->
image: "caffee.png";
image: "coffee-3.png";
image: "BLACKTEA.png";
```

> This was my solution to the problem
> To fix my image problem, I looked into my files and checked on my images. After looking around, I figured maybe the location where I saved my images mattered. I was right. It turns out that I was supposed to save my images inside my group's Google Drive folder. I had been saving the images in the wrong area.
