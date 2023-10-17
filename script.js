"use strict";

/*------
 * add event listener
 */

const addEventOnELem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/************
 * navbar toggle

*************/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggle]");

const toggleNavabr = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnELem(navToggler, "click", toggleNavabr);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnELem(navbarLinks, "click", closeNavbar);

/********
 * header active
 *********/
const header = document.querySelector("[data-header]");


// const activeHeader = function () {
//   if (window.scrollY > 300) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// };



const sectionAll = document.querySelectorAll("[data-section]");
let navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sectionAll.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });


 const activeHeader = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };

  addEventOnELem(window, "scroll", activeHeader);
  
}


// toggle active on add to fav

const addToFav = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
};

addEventOnELem(addToFav, "click", toggleActive);

// Scroll revreal effect

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
};

scrollReveal();

addEventOnELem(window, "scroll", scrollReveal);
