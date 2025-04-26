document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("productModal");
  const modalText = document.getElementById("modal-description-text");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = modal.querySelector(".close");

  const detailButtons = document.querySelectorAll(".details-btn");

  detailButtons.forEach(button => {
    button.addEventListener("click", () => {
      const description = button.getAttribute("data-description") || "Описание отсутствует.";
      const imageSrc = button.getAttribute("data-image") || "";
      
      // Заменяем символы новой строки на <br> для правильного отображения
      modalText.innerHTML = description.replace(/\n/g, "<br>");
      
      // Устанавливаем изображение
      modalImage.src = imageSrc;
      
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

