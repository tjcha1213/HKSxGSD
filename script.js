const modalOpeners = document.querySelectorAll("[data-modal-open]");
const modalClosers = document.querySelectorAll("[data-modal-close]");

modalOpeners.forEach((opener) => {
  opener.addEventListener("click", () => {
    const modal = document.getElementById(opener.dataset.modalOpen);

    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  });
});

modalClosers.forEach((closer) => {
  closer.addEventListener("click", () => {
    closer.closest("dialog")?.close();
  });
});

document.querySelectorAll("dialog").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
