const greeting = "Hello World";
console.log(greeting);

// WHAT IS JAVASCRIPT
const button = document.getElementById("js");
const text = document.getElementById("reveal");

const revealText = () => {
  console.log(text.style.display);
  //   if (text.style.display === "" || text.style.display === "none") {
  //     text.style.display = "block";
  //   } else {
  //     text.style.display = "none";
  //   }
  text.style.display === "" || text.style.display === "none"
    ? (text.style.display = "block")
    : (text.style.display = "none");
};
button.addEventListener("click", revealText);

// WHAT CAN JAVASCRIPT DO?

//Change HTML Content/Text
const cartQuantity = document.getElementById("change-html");
const changeHTMLBtn = document.getElementById("change-html-btn");

const updateCartQuantity = () => {
  let quantity = Number(cartQuantity.innerHTML);
  quantity += 1;
  cartQuantity.innerHTML = String(quantity);
};

changeHTMLBtn.addEventListener("click", updateCartQuantity);

//Change HTML Attributes
const favoriteImg = document.getElementById("change-attribute");
const changeAttributeBtn = document.getElementById("change-attribute-btn");

const updateAttribute = () => {
  //   favoriteImg.src = "assets/images/filled-heart.png";

  const outlineHeart = favoriteImg.src.includes("outline");

  if (favoriteImg.src.includes("outline")) {
    favoriteImg.src = "/assets/images/filled-heart.png";
    changeAttributeBtn.innerHTML = "Unlike";
  } else {
    favoriteImg.src = "/assets/images/outline-heart.png";
    changeAttributeBtn.innerHTML = "Like";
  }
  //   favoriteImg.src.includes("outline")
  //     ? (favoriteImg.src = "assets/images/filled-heart.png")
  //     : (favoriteImg.src = "assets/images/outline-heart.png");
};
changeAttributeBtn.addEventListener("click", updateAttribute);

//Change CSS STYLES
const nav = document.getElementById("nav");
const changeCssBtn = document.getElementById("change-css-btn");

const updateCSS = (e) => {
  const link = e.target.closest("span");
  if (!link) return;

  link.style.color = "palevioletred";
  link.style.backgroundColor = "white";
};

nav.addEventListener("click", updateCSS);

// Hide Elements
const box = document.getElementById("hide-element");
const hideElementBtn = document.getElementById("hide-element-btn");
const showElementBtn = document.getElementById("show-element-btn");

const hideElement = () => {
  box.style.display = "none";
  showElementBtn.style.display = "block";
};
const showElement = () => {
  box.style.display = "flex";
  showElementBtn.style.display = "none";
};

hideElementBtn.addEventListener("click", hideElement);
showElementBtn.addEventListener("click", showElement);
