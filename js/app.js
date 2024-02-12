const cl = console.log.bind(console);

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// source code

const sCode = document.querySelectorAll("#sCode");
cl(sCode);
sCode.forEach(function (e) {
  e.addEventListener("click", function () {
    alert("Not yet uploaded");
  });
});

// sCode.addEventListener("click", function signal() {
//   alert("Not yet uploaded");
// });

// top link

const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 800) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

topLink.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
  });
});
