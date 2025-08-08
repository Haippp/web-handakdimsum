// toggle class active
const navbar = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

//klik di luar navbar untuk menutup
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
