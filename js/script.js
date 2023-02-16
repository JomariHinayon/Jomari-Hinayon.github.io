// Dark Mode-------------->

// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// Theme Vars
const useTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark").matches;
// Icon toggling
const iconToggle = () => {
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
};
// Initial Theme Check
const themeCheck = () => {
  if (useTheme === "dark" || (!useTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden");
};
// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};
// call theme switching on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});
//Invoke theme in initial load
themeCheck();

// <---------------------------------------------

window.onload = function () {
  const loading_animation = document.getElementsByClassName("banter-loader__box")
console.log(loading_animation)

  $(".whole-website").hide();

  setTimeout(load_page, 1500);
};

function load_page() {
  $(".banter-loader").fadeOut(500);
  $(".whole-website").fadeIn(500);

  // Navbar Burger Menu Items
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  });


  // Scroll Reveal ---------------------------------->
  var slideDown = {
    distance: "50%",
    origin: "top",
    duration: 1500,
    opacity: 0,
    interval: 500,
  };

  var slideRight = {
    distance: "50%",
    origin: "left",
    duration: 1500,
    opacity: 0,
  };

  var slideLeft = {
    distance: "50%",
    origin: "right",
    duration: 1500,
    opacity: 0,
  };

  var slideUp = {
    distance: "50%",
    origin: "bottom",
    duration: 1500,
    opacity: 0,
  };

  var slideUp2 = {
    distance: "50%",
    origin: "bottom",
    duration: 1200,
    opacity: 0,
    interval: 200,
  };

  var interval = {
    interval: 200,
    origin: "top",
    distance: "50%",
    duration: 1000,
  };

  var fadeIn = {
    opacity: 0,
    duration: 2500,
  };

  // Animate
  ScrollReveal().reveal(".slide-right", slideRight);
  ScrollReveal().reveal(".slide-left", slideLeft);
  ScrollReveal().reveal(".slide-up", slideUp);
  ScrollReveal().reveal(".slide-down", slideDown);
  ScrollReveal().reveal(".interval", interval);
  ScrollReveal().reveal(".slide-up2", slideUp2);
  ScrollReveal().reveal(".fade-in", fadeIn);

  //My Picture opacity
  ScrollReveal().reveal(".my-pic", {
    distance: 0,
    opacity: 0,
    duration: 2500,
    delay: 500,
  });

  // My Projects Preset Reveal Animation
  ScrollReveal().reveal(".project1", slideRight);
  ScrollReveal().reveal(".project2", {
    delay: 500,
    distance: "50%",
    origin: "top",
    duration: 1500,
    opacity: 0,
  });
  ScrollReveal().reveal(".project3", {
    delay: 800,
    distance: "50%",
    origin: "bottom",
    duration: 1500,
    opacity: 0,
  });
  ScrollReveal().reveal(".project4", {
    delay: 1200,
    distance: "50%",
    origin: "right",
    duration: 1500,
    opacity: 0,
  });
  // <-------------------------------------------------------------

  // ScrollSpy ===============================>

  let section = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");
  let menuItems = document.getElementById("menu-items");

  window.onscroll = () => {
    section.forEach((sec) => {
      let screenWidth = screen.width;
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector(" a[href*=" + id + "]")
            .classList.add("active");
        });
      }
      if (top > 100 && screenWidth >= 1120) {
        menuItems.classList.remove("lg:container");
        menuItems.classList.add("fixed");
      } else {
        menuItems.classList.remove("fixed");
      }
    });
  };

  // <========================================================
}
