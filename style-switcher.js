const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});
// Ensure this is at the global level
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/*============== theme light and dark mode =======*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    document.body.classList.add("dark");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.remove("dark");
  }
});

// Select all list items
const navItems = document.querySelectorAll(".nav li a");

// Loop through each item and add a click event listener
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove 'active' class from all items
    navItems.forEach((nav) => nav.classList.remove("active"));
    console.log(this);
    // Add 'active' class to the clicked item
    this.classList.add("active");
  });
});
