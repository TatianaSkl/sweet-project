(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobile-menu-open]"),
    closeModalBtn: document.querySelector("[data-mobile-menu-close]"),
    modal: document.querySelector("[data-mobile-menu]"),
    
    buttonOff: document.querySelector("[data-mobile-menu-open]"),
    buttonOn: document.querySelector("[data-mobile-menu-close]"),
    
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