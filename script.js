const section = document.querySelector(".hero");
const closed = document.querySelector(".closed");
const hamburger = document.querySelector(".hamburger");
const menuu = document.querySelector(".menuu");
const transit = document.querySelector(".transit");
const dark = document.querySelector(".onof");
const sectionL = document.querySelector(".hero");
const information = document.querySelector(".information");
const loader = document.querySelector(".preloader");

const svg = document.querySelectorAll(".svgIns");
const numbers = document.querySelectorAll(".num");
const informationsSpan = document.querySelectorAll(".informationsSpan");
const itemtext = document.querySelectorAll(".itemtext");


menuu.addEventListener("click", function () {
  hamburger.classList.add("active");
  hamburger.classList.remove("closing");
});


closed.addEventListener("click", function () {
  hamburger.classList.remove("active");
  hamburger.classList.add("closing");
});


document.addEventListener("click", function (e) {
  if (!menuu.contains(e.target) && !hamburger.contains(e.target) && !dark.contains(e.target)) {
    hamburger.classList.remove("active");
    hamburger.classList.add("closing");
  }
});


dark.addEventListener("click", function () {
  toggleLightMode();
});


function toggleLightMode() {
  sectionL.classList.toggle("section-light");
  information.classList.toggle("information-light");
  hamburger.classList.toggle("hamburger-light");

  numbers.forEach(num => {
    num.classList.toggle("item-light");
  });

  itemtext.forEach(item => {
    item.classList.toggle("itemtext-light");
  });

  svg.forEach(svgItem => {
    svgItem.classList.toggle("svgIs");
  });

  informationsSpan.forEach(span => {
    span.classList.toggle("informationsSpan-light");
  });

 
  if (sectionL.classList.contains("section-light")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
}


window.addEventListener("load", function () {
  const currentMode = localStorage.getItem("mode");

  if (currentMode === "light") {
    toggleLightMode();
  }

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});
