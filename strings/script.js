//1
const password = "qwerty";

if (password.length < 8) {
  console.log("¿Llamas a esto una contraseña segura?");
}

//2
const acrostic = [
  "Give me your patience, sister, while I frame",
  "Exact in capitals your golden name;",
  "Or sue the fair Apollo and he will",
  "Rouse from his heavy slumber and instill",
  "Great love in me for thee and Poesy.",
  "Imagine not that greatest mastery",
  "And kingdom over all the Realms of verse,",
  "Nears more to heaven in aught, than when we nurse",
  "And surety give to love and Brotherhood.",
  " ",
  "Anthropophagi in Othello's mood;",
  "Ulysses storm'd and his enchanted belt",
  "Glow with the Muse, but they are never felt",
  "Unbosom'd so and so eternal made,",
  "Such tender incense in their laurel shade",
  "To all the regent sisters of the Nine",
  "As this poor offering to you, sister mine.",
  " ",
  "Kind sister! aye, this third name says you are;",
  "Enchanted has it been the Lord knows where;",
  "And may it taste to you like good old wine,",
  "Take you to real happiness and give",
  "Sons, daughters and a home like honied hive.",
];

/* Declara una variable que devolverá el string final */
let georgianaAugustaKeats = "";

for (let i = 0; i < acrostic.length; i += 1) {
  /* agrega cada primer carácter de cada string en el array
  a la variable georgianaAugustaKeats */
  georgianaAugustaKeats += acrostic[i][0];
}
console.log(georgianaAugustaKeats);
//3
const haystack = "hayunaagujaenalgúnlugardeestepajar";

console.log(haystack.indexOf("aguja"));

//4
let message =
  "Estoy cansado. Debería haver tomado un expresso antes de esta lección.";

if (
  /* comprueba si el string contiene "haver" donde debería decir "haber" */
  message.includes("haver")
) {
  console.log("ay mamita...");
}

if (
  /* comprueba si el string contiene los caracteres "ex" */
  message.includes("ex")
) {
  console.log("Válgame el cielo");
}

//5
const robotReports = [
  "REPORT_IO_volcanic_activity.log",
  "REPORT_GANYMEDE_magnetic_field.log",
  "REPORT_EUROPA_internal_ocean.log",
  "ENCELADUS_polar_plumes.txt",
  "REPORT_PHOBOS_surface_composition.log",
  "WARNING_ROBOT_DREAMING_OF_ELECTRIC_SHEEP.log",
];

for (report of robotReports) {
  if (
    /* comprueba si el informe comienza con "REPORT_" y termina con ".log" */
    report.startsWith("REPORT_") &&
    report.endsWith(".log")
  ) {
    console.log("¡Informe perfecto!");
  } else {
    console.log(`"${report}" se desvía del protocolo establecido.`);
  }
}

//6

const myName = "daniel";

console.log("Hola, " + myName[0].toUpperCase() + myName.slice(1));

//7

const fourElements = "Tierra, Aire, Fuego, Agua";
const elementsArray = /* escribe tu código aquí */ fourElements.split(", ");

console.log(elementsArray); // ["Tierra", "Aire", "Fuego", "Agua"]

//
//NUMEROS
//NUMEROS
//NUMEROS
//NUMEROS
//NUMEROS
//NUMEROS
//NUMEROS
//NUMEROS
//8

const score1 = 78;
const score2 = 92;
const score3 = 65;
const score4 = 88;

// Puntuación más alta
const highScore = Math.max(score1, score2, score3, score4);

// Puntuación más baja
const lowScore = Math.min(score1, score2, score3, score4);

console.log("Puntuación más alta:", highScore);
console.log("Puntuación más baja:", lowScore);

//9

const randomDecimal = Math.random();

// Escala el decimal al rango 0 a 6 (sin incluir 6)
const scaled = randomDecimal * 6;

// Redondea hacia abajo (0, 1, 2, 3, 4, 5)
const randomWhole = Math.floor(scaled);

// Cambia el rango a 1–6
const dieRoll = randomWhole + 1;

// Registra el resultado
console.log("Has obtenido:", dieRoll);

//10

const samurai = "7 Samuráis";
const knights = "12 Caballeros de la Mesa Redonda";
const spartans = "300 Espartanos";

const totalHeroes = parseInt(samurai) + parseInt(knights) + parseInt(spartans);

console.log(totalHeroes);

//11

const peculiarList = [
  "2.5 pollos de goma",
  "42 respuestas a todo",
  "Infinitas posibilidades",
  "0.5 unicornios avistados",
  "Aproximadamente 101 dálmatas",
  "0 arrepentimientos",
];

console.log("Procesando inventario peculiar...");

for (const item of peculiarList) {
  // extrae número decimal del string
  const quantity = parseFloat(item);

  // verifica si NO es un número válido
  if (Number.isNaN(quantity)) {
    console.log(`No se puede cuantificar: ${item}`);
  }
}

//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH
//SWTICH

const division = "rojo";

switch (division) {
  case "oro":
    console.log("Comando");
    break;

  case "rojo":
    console.log("Operaciones");
    break;

  case "azul":
    console.log("Ciencia");
    break;

  default:
    console.log("División desconocida");
}

//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO
//TERNARIO

const age = 21;

age < 18
  ? console.log("Eres menor de 18 años. No puedes votar.")
  : console.log("¡Haz clic para votar ahora!");

console.log(
  age < 18
    ? "Eres menor de 18 años. No puedes votar."
    : "¡Haz clic para votar ahora!",
);

const citizenship = "los EE.UU.";
const otherDebts = 0;
const age1 = 24;
const ok =
  (citizenship === "los EE.UU." || citizenship === "Estados Unidos") &&
  !otherDebts &&
  age1 >= 21;

// Muestra el resultado en la consola estableciendo la condición con el operador ternario

console.log(ok ? "El préstamo está aprobado" : "Lo siento");
