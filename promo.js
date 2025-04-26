if (!window.closeModalListenerInitialized) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modal-image');
    const modalDescriptionText = document.getElementById('modal-description-text');
    const closeModal = document.querySelector('.modal .close');
    const detailButtons = document.querySelectorAll('.details-btn');
  
    detailButtons.forEach(button => {
      button.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = button.dataset.image;
        modalDescriptionText.textContent = button.dataset.description.trim();
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    window.closeModalListenerInitialized = true;
  }
  