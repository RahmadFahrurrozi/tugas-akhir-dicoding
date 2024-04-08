const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("stiky", window.scrollY > 0);
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const carousel = document.querySelector(".img-product");
const firstImg = carousel.querySelector("img");
const arrowIcons = document.querySelectorAll(".arrow i");
let isDragStart = false,
  prevPageX,
  prevScrollLeft;
const firstImgWidth = firstImg.clientWidth + 20;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  const positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

function toggleText(card) {
  card.classList.toggle("show-text");
}
function toggleCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle("clicked");
}
