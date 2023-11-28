const openModal = document.getElementById("open-modal");
const boxModal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

openModal.addEventListener("click", () => {
  boxModal.classList.add("open");
});
modalContent.addEventListener("click", () => {
  boxModal.classList.remove("open");
});
