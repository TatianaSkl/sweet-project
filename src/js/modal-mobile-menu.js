(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobile-menu-open]"),
    closeModalBtn: document.querySelector("[data-mobile-menu-close]"),
    closeModalBtn1: document.querySelector("[data-mobile-menu-close-1]"),
    closeModalBtn2: document.querySelector("[data-mobile-menu-close-2]"),
    closeModalBtn3: document.querySelector("[data-mobile-menu-close-3]"),
    closeModalBtn4: document.querySelector("[data-mobile-menu-close-4]"),

    modal: document.querySelector("[data-mobile-menu]"),
    
    buttonOff: document.querySelector("[data-mobile-menu-open]"),
    buttonOn: document.querySelector("[data-mobile-menu-close]"),
    buttonOn1: document.querySelector("[data-mobile-menu-close-1]"),
    buttonOn2: document.querySelector("[data-mobile-menu-close-2]"),
    buttonOn3: document.querySelector("[data-mobile-menu-close-3]"),
    buttonOn4: document.querySelector("[data-mobile-menu-close-4]"),

    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn4.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  

  refs.buttonOff.addEventListener('click', disableScroll);
  refs.buttonOn.addEventListener('click', enableScroll);
  refs.buttonOn1.addEventListener('click', enableScroll);
  refs.buttonOn2.addEventListener('click', enableScroll);
  refs.buttonOn3.addEventListener('click', enableScroll);
  refs.buttonOn4.addEventListener('click', enableScroll);


  function disableScroll() {
    refs.body.classList.add("disable-scroll");
  }
  

  function enableScroll() {
    refs.body.classList.remove("disable-scroll");
  }
})();