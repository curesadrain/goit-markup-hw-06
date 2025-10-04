document.querySelector(".hero-btn").addEventListener("click", function () {
  document.querySelector(".modal-overlay").classList.add("is-open");
});

// Закрытие модального окна
document
  .querySelector(".modal-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.remove("is-open");
  });
