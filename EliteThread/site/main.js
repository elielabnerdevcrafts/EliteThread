let search = document.querySelector(".search-box");
document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active"),
    cart.classList.remove("active"),
    user.classList.remove("active"),
    navbar.classList.remove("active");
};
let cart = document.querySelector(".cart");
document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active"),
    search.classList.remove("active"),
    user.classList.remove("active"),
    navbar.classList.remove("active");
};
let user = document.querySelector(".user");
document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active"),
    search.classList.remove("active"),
    cart.classList.remove("active"),
    navbar.classList.remove("active");
};
let navbar = document.querySelector(".navbar");
(document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active"),
    search.classList.remove("active"),
    cart.classList.remove("active"),
    user.classList.remove("active");
}),
  (window.onscroll = () => {
    search.classList.remove("active"),
      cart.classList.remove("active"),
      user.classList.remove("active"),
      navbar.classList.remove("active");
  });
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", 0 < window.scrollX);
});
var swiper = new swiper(".new-arrival", {
  spaceBetween: 20,
  loop: 0,
  autoplay: { delay: 5500, disableOnInteraction: !1 },
  centeredSlides: 0,
  breakpoints: {
    0: { slidesPerVIew: 0 },
    568: { slidesPerVIew: 2 },
    768: { slidesPerVIew: 2 },
    1020: { slidesPerVIew: 3 },
  },
});


const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => {
  content.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  content.append(div);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
      addHTML(user.name);
      items.push(user.name);
    });
  });