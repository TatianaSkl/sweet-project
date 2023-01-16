(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-about-open]"),
    closeModalBtn: document.querySelector("[data-modal-about-close]"),
    modal: document.querySelector("[data-modal-about]"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.openModalBtn.addEventListener('click', disableScroll);
  refs.closeModalBtn.addEventListener('click', enableScroll);


  function disableScroll() {
    refs.body.classList.add("disable-scroll");
  }
  

  function enableScroll() {
    refs.body.classList.remove("disable-scroll");
  }
})();