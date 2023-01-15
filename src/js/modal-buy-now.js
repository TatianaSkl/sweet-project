(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
    buttonOff: document.querySelector("[data-modal-buy-now-open]"),
    buttonOn: document.querySelector("[data-modal-buy-now-close]"),
    
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  

  refs.buttonOff.addEventListener('click', disableScroll);
  refs.buttonOn.addEventListener('click', enableScroll);


  function disableScroll() {
    refs.body.classList.add("disable-scroll");
  }
  

  function enableScroll() {
    refs.body.classList.remove("disable-scroll");
  }
})();

