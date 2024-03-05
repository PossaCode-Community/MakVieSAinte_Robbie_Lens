// Mobile nav in Js

const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcon = document.querySelector(".mnav__close-btn-icon");

// const navOpenedClass = "left-0px";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "bi-filter-left";
const arrowRightClass = "bi-filter-right";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle("toggle-nav-phone");

    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);

    // console.log("bien fais");
  }
});

// Scroll reveal anim

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 1000,
  delay: 300,
  // reser: true,
});

sr.reveal(".card", {
  interval: 200,
  delay: 100,
  distance: "90px",
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".titre-card", {
  delay: 90,
  distance: "40px",
  duration: 1500,
  origin: "bottom",
});

sr.reveal(".titre-hero", {
  delay: 120,
  distance: "30px",
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".desc-hero", {
  delay: 120,
  distance: "40px",
  duration: 2000,
  origin: "bottom",
});

sr.reveal(".hero__img", {
  delay: 120,
  distance: "40px",
  duration: 2000,
  origin: "right",
});

sr.reveal(".btn-hero", {
  delay: 220,
  distance: "20px",
  duration: 1500,
  origin: "left",
});

sr.reveal(".btn-anim", {
  delay: 90,
  distance: "40px",
  duration: 1590,
  origin: "top",
});

// 925DEV
