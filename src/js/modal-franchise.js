(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-franchise-open]"),
      closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
      modal: document.querySelector("[data-modal-franchise]"),
      buttonOff: document.querySelector("[data-modal-franchise-open]"),
      buttonOn: document.querySelector("[data-modal-franchise-close]"),
      
      body: document.body,
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
    
  })();