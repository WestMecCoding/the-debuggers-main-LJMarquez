console.log("Hello World!");
const scrollLinks = document.querySelectorAll(".scroll-link");

const arrow = document.querySelectorAll(".nav-arrow");
console.log(arrow);
arrow.style.display = "none";

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

//     arrow.style.color = "red";
// })s
