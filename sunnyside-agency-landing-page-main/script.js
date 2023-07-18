const hamburgerNav = document.querySelector("#hamburger-nav");
const hiddenNav = document.querySelector("#nav-hidden");

hamburgerNav.addEventListener("click", () => {
  hiddenNav.classList.toggle("hidden");
});
