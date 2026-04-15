// funciones

// Escribe tu código aquí
function hoursToMinutes(hours) {
  return hours * 60;
}

console.log(hoursToMinutes(0)); // 0
console.log(hoursToMinutes(2)); // 120
console.log(hoursToMinutes(3.5)); // 210

//2 create user

function createUser(name, age) {
  const user = { name: name, age: age, created_at: new Date() };
  return user;
}

function printUserDetails(user) {
  console.log(`Nombre: ${user.name}, Edad: ${user.age}`);
}

const user = createUser("Alicia", 25);
printUserDetails(user);

// update count

let count = 10;
function updateCount() {
  count = count + 5;
  console.log("Inner count:", count);
  return count;
}

// El valor de la variable externa count antes de
// llamar a updateCount es 10.
console.log(count);

updateCount();

// El valor de la variable exterior count después de
// llamar a updateCount debe ser 15.
console.log(count);

/// config pagina web

const defaultConfig = {
  theme: "oscuro",
  fontSize: 16,
};

function applyUserConfig(config) {
  console.log(
    `Tema del usuario: ${config.theme}, tamaño de fuente: ${config.fontSize}`,
  );
  console.log(`Cambiando tema de ${defaultConfig.theme} a ${config.theme}...`);
}

console.log(
  `Tema predeterminado: ${defaultConfig.theme}, tamaño de fuente: ${defaultConfig.fontSize}`,
);

applyUserConfig({ fontSize: 20, theme: "claro" });

/// expresion de funciones

const dogFacts = [
  "La huella del hocico de cada perro es única, al igual que ocurre con las huellas dactilares humanas.",
  "Los perros de la raza Basenji no ladran.",
  "Los galgos pueden alcanzar velocidades de hasta 70 km/h, lo cual los convierte en los perros más rápidos del mundo.",
  "El perro más pequeño del mundo, según el Libro Guinness de los Récords, es una chihuahua llamada Pearl.",
  "En la parte final de la canción ‘A Day in the Life’ de The Beatles suena un silbato de alta frecuencia que solo los perros pueden oír.",
];

const getRandomArrId = function (arrLength) {
  return Math.floor(Math.random() * arrLength);
};

const procrastinate = function () {
  const randomIndex = getRandomArrId(dogFacts.length);
  return dogFacts[randomIndex];
};

const randomFact = procrastinate();
console.log(randomFact);

/// funcione que retorna una fuincion

function makeHelloWorld() {
  return function () {
    console.log("¡Hola, mundo!");
  };
}

const helloWorld = makeHelloWorld();

helloWorld(); // "¡Hola, mundo!"

/// sintaxis de arrow functions

/// sintaxis de arrow functiones \
const wannaBeArrow = () => {
  return "¡Por favor, hazme una función arrow!";
};

const wannaBeArrowToo = (developerName) => {
  const message = `¡Por favor, ${developerName}, ¡hazme una función arrow!`;
  return message;
};

console.log(wannaBeArrow());
console.log(wannaBeArrowToo("Elise Bouer"));

/// arr map

const arr = [1, 2, 3];

// const arrSquared = arr.map(function (item) {
//   return item * item;
// });

const arrSquared = arr.map((item) => item * item);

console.log(arrSquared); // [1, 4, 9]

///pasar a arrow function y a if ternarios

// function populateZoo(a, b, c) {
//   if (a === undefined) {
// 		a = "Koala";
//   }

//   if (b === undefined) {
// 		b = "Wombat";
//   }

//   if (c === undefined) {
// 		c = "Perezoso";
//   }

//   return [a, b, c];
// }

const populateZoo = (a = "Koala", b = "Wombat", c = "Perezoso") => {
  return [a, b, c];
};

console.log(populateZoo());

// funciones con array como argumento

// Define tu función aquí

const combineArrays = (arr1, arr2) => {
  return [...arr1, "+", ...arr2];
};

// Ejemplo de uso
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result = combineArrays(arr1, arr2);
console.log(result); // [1, 2, 3, "+", 4, 5, 6]

// cuncion con objectos como parametros

// Declara tu función aquí

const updateProfile = (profile, changes) => {
  return { ...profile, ...changes };
};

// Ejemplo de uso
const profile = { name: "Alicia", age: 35, job: "Surfera" };
const changes = { job: "Ingeniera de software", location: "Hawaii" };

const updatedProfile = updateProfile(profile, changes);

console.log(updatedProfile);
// { name: "Alicia", age: 35, job: "Ingeniera de software", location: "Hawaii" }

console.log(profile);
// { name: "Alicia", age: 35, job: "Surfera" }

///FUNCION MAX PARA  ACEPTAR UN NUMERO DE ARGUMENTOS NUMERICOS Y DEVOLVER EL MAYOR DE ELLOS

// // Define tu función max() aquí

function max(...nums) {
  let maxValue = nums[0];

  for (let i = 0; i < nums.length; i += 1) {
    if (maxValue < nums[i]) {
      maxValue = nums[i];
    }
  }

  return maxValue;
}
max(4, 8, 15, 16, 23, 42); // 42
