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

const confirmationModal = document.querySelector("#confirmation-modal");
const confirmationTextEl = confirmationModal.querySelector(".modal__text");

///agregar el boton de cerrar al modal de confirmacion
const confirmationCloseBtn =
  confirmationModal.querySelector(".modal__close-btn");

confirmationCloseBtn.addEventListener("click", function () {
  confirmationModal.classList.remove("modal_is-opened");
});

// funcion para rellenar la informacion y mandar el formulario

function getConfirmationMessage(values) {
  const firstName = values.name.split(" ")[0];
  const dateTime = formatDateTime(values.date);
  return `¡Hola, ${firstName}! Tu reserva para ${values.count} se ha realizado para ${dateTime}.
  Se ha enviado un correo electrónico de confirmación a ${values.email}.`;
}
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

  const form = evt.target;
  //checkbok
  // checkbox
  const wantsToSubscribe = form.querySelector("#subscribe-input");

  // radio seleccionado
  const selectedSeating = form.querySelector(
    'input[name="seatingPreference"]:checked',
  );
  console.log(selectedSeating.value);
  console.log(wantsToSubscribe.checked);
  console.log(confirmationTextEl.textContent);

  const inputValues = {
    name: reservationNameInput.value,
    count: reservationCountInput.value,
    date: reservationDateInput.value,
    email: reservationEmailInput.value,
  };

  confirmationTextEl.textContent = getConfirmationMessage(inputValues);

  evt.target.reset();
});

function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${day} de ${month} a las ${time}`;
}
