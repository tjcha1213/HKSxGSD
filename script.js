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

const interestForm = document.getElementById("interest-form");

interestForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(interestForm);
  const fields = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    affiliation: formData.get("affiliation")?.toString().trim() || "",
    stage: formData.get("stage")?.toString().trim() || "",
    idea: formData.get("idea")?.toString().trim() || "",
  };
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `School / Affiliation: ${fields.affiliation}`,
    `Idea Stage: ${fields.stage}`,
    "",
    "What are you working on?",
    fields.idea,
  ].join("\n");

  window.location.href = `mailto:tjcha1213@gmail.com?subject=${encodeURIComponent(
    "HKSxGSD Interest Form",
  )}&body=${encodeURIComponent(body)}`;
});
