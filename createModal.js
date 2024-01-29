document.addEventListener('DOMContentLoaded', function () {
    const openModal = document.querySelectorAll('.openModal');

    openModal.forEach(modal => {
      modal.addEventListener("click", function () {
        document.getElementById("CreateModal").classList.remove("hidden");
      });
    });

    document.getElementById("closeModal").addEventListener("click", function () {
        document.getElementById("CreateModal").classList.add("hidden");
      });
  });