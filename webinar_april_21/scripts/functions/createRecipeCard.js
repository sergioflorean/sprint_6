function createRecipeCard(recipe) {
  // PASO 1: Obtener y clonar el template
  // - Seleccionar el template con id "recipe-template"
  // - Clonar el contenido del template
  // - Guardar el elemento clonado en una variable
  //

  const template = document.querySelector("#recipe-template");
  const recipeElement = template.content
    .querySelector(".recipe")
    .cloneNode(true);

  // PASO 2: Llenar los datos en la tarjeta
  // - Seleccionar la imagen dentro del elemento clonado
  // - Seleccionar el título dentro del elemento clonado
  // - Asignar la url de la receta a la propiedad src del elemento imagen
  // - Asignar el título de la receta a la propiedad alt del elemento imagen
  // - Asignar el título de la receta a la propiedad .textContent del elemento título
  const elementImage = recipeElement.querySelector(".recipe__image");
  elementImage.src = recipe.image;
  elementImage.alt = recipe.name;

  const elementTitle = recipeElement.querySelector(".recipe__name");
  elementTitle.textContent = recipe.name;

  //
  // PASO 3: Configurar botón de favorito
  // - Seleccionar el botón de favorito
  // - Agregarle un evento de click:
  //   • Hacer toggle de la clase "recipe__favourite-btn_active" usando this.classList.toggle()
  //   • Crear un if/else para verificar si contiene la clase activa:
  //     ◦ Si está activo: cambiar texto a "🌟" y hacer console.log agregando a favoritos
  //     ◦ Si no está activo: cambiar texto a "⭐" y hacer console.log removiendo de favoritos
  const favouriteBtn = recipeElement.querySelector(".recipe__favourite-btn");
  favouriteBtn.addEventListener("click", () => {
    favouriteBtn.classList.toggle("recipe__favourite-btn_active");
    if (favouriteBtn.classList.contains("recipe__favourite-btn_active")) {
      favouriteBtn.textContent = "🌟";
    } else {
      favouriteBtn.textContent = "⭐";
    }
  });

  //
  // PASO FINAL: Retornar el elemento
  // - Retornar recipeElement

  return recipeElement;
}
