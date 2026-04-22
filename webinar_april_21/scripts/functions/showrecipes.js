function showRecipes() {
  // PASO 1: Seleccionar el contenedor
  // - Seleccionar el elemento con clase "recipes"
  const container = document.querySelector(".recipes");
  //
  // PASO 2: Recorrer el array de recetas
  // - Usar un bucle para iterar sobre el array recipes (presente en data.js)
  // - Para cada receta:
  //   • Crear una tarjeta usando createRecipeCard()
  //   • Agregar la tarjeta al contenedor
  recipes.forEach((recipe) => {
    const recipeElement = createRecipeCard(recipe);
    container.appendChild(recipeElement);
  });
}
