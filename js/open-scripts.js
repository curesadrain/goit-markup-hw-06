// MODAL
document.querySelector(".hero-btn").addEventListener("click", function () {
  document.querySelector(".modal-overlay").classList.add("is-open");
});

document
  .querySelector(".modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.remove("is-open");
  });

// MOBILE MENU
const openMenuBtn = document.querySelector(".menu-open-btn");
const closeMenuBtn = document.querySelector(".mob-menu-close");
const mobMenu = document.querySelector(".mob-menu");

openMenuBtn.addEventListener("click", () => {
  mobMenu.classList.add("is-open");
});

closeMenuBtn.addEventListener("click", () => {
  mobMenu.classList.remove("is-open");
});
