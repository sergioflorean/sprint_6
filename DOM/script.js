const reservationButton = document.querySelector(".reservation__button");
const formInputs = document.querySelectorAll(".form__input");
const reservationModal = document.querySelector("#reservation-modal");
const reservationCloseBtn = reservationModal.querySelector(".modal__close-btn");
const reservationForm = reservationModal.querySelector(".modal__form");

/// elgidiendo los inputs del formulario para luego imprimirlos en consola al hacer submit
const reservationNameInput = reservationModal.querySelector("#name-input");
const reservationCountInput = reservationModal.querySelector("#count-input");
const reservationDateInput = reservationModal.querySelector("#datetime-input");
const reservationEmailInput = reservationModal.querySelector("#email-input");

const confirmationModal = document.querySelector("#confirm-modal");
//funcion para abrir el modal de reserva al hacer click en el boton de reservar
reservationButton.addEventListener("click", function () {
  reservationModal.classList.add("modal_is-opened");
});
//funcion para cerrar el modal de reserva al hacer click en el boton de cerrar
reservationCloseBtn.addEventListener("click", function () {
  reservationModal.classList.remove("modal_is-opened");
});

//funciona para hacer submit del formulario, abrir el modal de confirmacion y cerrar el modal de reserva, ademas de imprimir los valores de los inputs en consola
reservationForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  confirmationModal.classList.add("modal_is-opened");
  reservationModal.classList.remove("modal_is-opened");
  console.log(reservationNameInput.value);
  console.log(reservationCountInput.value);
  console.log(reservationDateInput.value);
  console.log(reservationEmailInput.value);

  //checkbok
  // checkbox
  const wantsToSubscribe = reservationModal.querySelector("#subscribe-input");

  // radio seleccionado
  const selectedSeating = reservationModal.querySelector(
    'input[name="seatingPreference"]:checked',
  );

  console.log(wantsToSubscribe.checked);
  console.log(selectedSeating.value);

  reservationForm.reset();
});
