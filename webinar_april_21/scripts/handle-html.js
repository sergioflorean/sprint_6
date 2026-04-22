// ==============================================
// FUNCIONES PARA MODALES (NO TOCAR)
// ==============================================

function openForm() {
  document.querySelector(".modal_type_form").classList.remove("hidden");
}

function closeForm() {
  document.querySelector(".modal_type_form").classList.add("hidden");
}

function closeModal() {
  document.querySelector(".modal_type_detail").classList.add("hidden");
}

// ==============================================
// CONFIGURACIÓN DE EVENTOS (NO TOCAR)
// ==============================================

function eventConfig() {
  // Abrir formulario de nueva receta
  document
    .querySelector(".header__add-btn")
    .addEventListener("click", openForm);

  // Cerrar formulario
  document
    .querySelector(".modal_type_form .modal__close-btn")
    .addEventListener("click", closeForm);

  // Cerrar formulario al hacer clic en el fondo
  document
    .querySelector(".modal_type_form")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeForm();
      }
    });

  // Envío del formulario
  document
    .querySelector("#form-recipe")
    .addEventListener("submit", handleFormSubmit);
}
