// loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("header");
  var scrolled = window.scrollY > 2;
  if (scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// scroll nav
// let section = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("nav a");
// window.onscroll = () => {
//   section.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header link a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
$(document).ready(function () {
  $("body").scrollspy({ target: ".navbar", offset: 50 });
});

// === Profil Start

// Infinite Scrolling
const innerScroller = document.querySelector(".inner-scroller");
const scrollerContent = Array.from(innerScroller.children);

scrollerContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  innerScroller.appendChild(duplicatedItem);
});

// === Profil End
