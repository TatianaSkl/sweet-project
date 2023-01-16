(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-now-open]"),
    openModalBtn1: document.querySelector("[data-modal-buy-now-open-1]"),
    closeModalBtn: document.querySelector("[data-modal-buy-now-close]"),
    modal: document.querySelector("[data-modal-buy-now]"),
    buttonOff: document.querySelector("[data-modal-buy-now-open]"),
    buttonOff1: document.querySelector("[data-modal-buy-now-open-1]"),
    buttonOn: document.querySelector("[data-modal-buy-now-close]"),
    
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  

  refs.buttonOff.addEventListener('click', disableScroll);
  // refs.buttonOff1.addEventListener('click', disableScroll);
  refs.buttonOn.addEventListener('click', enableScroll);


  function disableScroll() {
    refs.body.classList.add("disable-scroll");
  }
  

  function enableScroll() {
    refs.body.classList.remove("disable-scroll");
  }
})();

