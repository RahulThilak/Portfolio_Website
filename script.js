const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".main-nav-list");

const iconMenuOpen = document.querySelector(".open-menu-icon");
const iconMenuClose = document.querySelector(".close-menu-icon");

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuList.classList.remove("show");

    iconMenuClose.style.display = "none";
    iconMenuOpen.style.display = "block";

    document.body.style.overflow = "auto";
  });
});

// Initially hide the menu icons correctly
iconMenuClose.style.display = "none";

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("show");

  // Toggle body overflow to prevent scrolling
  if (menuList.classList.contains("show")) {
    iconMenuOpen.style.display = "none";
    iconMenuClose.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  } else {
    iconMenuOpen.style.display = "block";
    iconMenuClose.style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling
  }
});

//
//
//
//
//

//
//
//
//
// //
//
//
//
// //
//
//
//
// //
//
//
//
//
// Scroll to top functionality
const scrollBtn = document.getElementById("scroll-btn");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > window.innerHeight / 2) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Light theme functionality
const themeBtn = document.querySelector(".theme-toggle-btn");
const body = document.body;
const sunIcon = document.querySelector(".icon-sun");
const moonIcon = document.querySelector(".icon-moon");

const savedTheme = localStorage.getItem("theme");

// Apply previously selected theme
if (savedTheme === "light") {
  body.classList.add("light-theme");
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
} else {
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
}

// Toggle theme on click
themeBtn.addEventListener("click", function () {
  body.classList.toggle("light-theme");

  // Toggle icon visibility
  if (body.classList.contains("light-theme")) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("theme", "light");
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("theme", "dark");
  }
});
