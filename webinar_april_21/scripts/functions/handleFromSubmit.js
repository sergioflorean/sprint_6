function handleFormSubmit(event) {
  // PASO 1: Prevenir comportamiento por defecto
  event.preventDefault();
  //
  // PASO 2: Obtener referencias a los campos del formulario
  // - Seleccionar el formulario con id "form-recipe"
  // - Seleccionar el campo de nombre dentro del formulario
  // - Seleccionar el campo de imagen dentro del formulario
  // - Seleccionar el campo de ingredientes dentro del formulario

  const form = documentr.querySelector("#form-recipe");
  const nameInput = form.querySelector("input[name='name']");
  const imageInput = form.querySelector("input[name='image']");
  const ingredientsInput = form.querySelector("textarea[name='ingredients']");
  //
  // PASO 3: Crear objeto con los datos del obtenidos
  // - Crear un objeto con las propiedades:
  //   • name: valor del campo nombre
  //   • image: valor del campo imagen (usar placeholder si está vacío)
  //   • ingredients: valor del campo ingredientes
  const newRecipe = {
    name: nameInput.value,
    image: imageInput.value,
    ingredients: ingredientsInput.value,
  };
  //
  // PASO 4: Crear y agregar nueva tarjeta
  // - Seleccionar el contenedor de recetas
  // - Crear nueva tarjeta usando createRecipeCard()
  // - Agregar la tarjeta al contenedor
  const newRecipeElement = createRecipeCard(newRecipe);
  const container = document.querySelector(".recipes");
  container.appendChild(newRecipeElement);
  //
  // PASO FINAL: Limpiar y cerrar
  // - Limpiar el formulario usando reset()
  // - Cerrar el modal usando closeForm()
  form.reset();
  closeForm();
}
