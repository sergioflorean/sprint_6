const house = {
  price: 200000,
};

const buyer = {
  name: "Miguel",
  money: 300000,
};

// Dinero de Miguel
console.log(buyer.money);

// Precio de la casa
console.log(house.price);

console.log(buyer.money >= house.price);

//COFFEE
//COFFEE
//COFFEE
//COFFEE
//COFFEE

const coffeeMenu = [
  {
    name: "Espresso",
    size: "Small",
    price: "$2.50",
  },
  {
    name: "Latte",
    size: "Medium",
    price: "$4.00",
  },
  {
    name: "Cappuccino",
    size: "Medium",
    price: "$3.75",
  },
];

console.log(
  "Nombre: " +
    coffeeMenu[1].name +
    ", Tamaño: " +
    coffeeMenu[1].size +
    ", Precio: " +
    coffeeMenu[1].price,
);

//METDOS ARRAY
//METDOS ARRAY
//METDOS ARRAY
//METDOS ARRAY
//METDOS ARRAY
//METDOS ARRAY
//METDOS ARRAY

// 1 concat
const terrestrialPlanets = ["Mercurio", "Venus", "Tierra", "Marte"];
const jovianPlanets = ["Júpiter", "Saturno", "Urano", "Neptuno"];
const star = "el Sol";

const solarSystem = terrestrialPlanets.concat(jovianPlanets, star);

console.log(solarSystem);

// 2 join

const narcissusAndEcho = ["Narciso", "y", "Eco"];

const narcissusAndEchoString = narcissusAndEcho.join(" ");

console.log(narcissusAndEchoString);

//3 shift

const thumbsUp = ["👎", "👍", "👍", "👍", "👍", "👍"];
const thumbDown = thumbsUp.shift();

console.log(thumbDown);
console.log(thumbsUp);

//4 unshift
const prefix = ["micro", "mili", "kilo"];

prefix.unshift("pico", "nano");

console.log(prefix);

const shoppingList = ["Pan", "Huevos"];

console.log(shoppingList.unshift("Leche")); // Primer registro
console.log(shoppingList);

//5 slice

const solarSystemPlanets = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
];

/* Agrega tu código aquí */
const terrestrialPlanets1 = solarSystemPlanets.slice(0, 4);
const allPlanets = solarSystemPlanets.slice(0, 8);

console.log(terrestrialPlanets1);
console.log(allPlanets);

//6 splice
const compass = ["N", "E", "S", "W"];

// agrega el elemento NE
compass.splice(1, 0, "NE");

console.log(compass);

// elimina el elemento NE
compass.splice(1, 1);
console.log(compass);

/// FOR EACH
/// FOR EACH
/// FOR EACH
/// FOR EACH
/// FOR EACH
/// FOR EACH
/// FOR EACH

const a = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las reliquias de la muerte",
  "Harry Potter y los métodos de la racionalidad",
];

const b = [];

for (let i = 0; i < a.length; i++) {
  b.push(a[i].split(" and ")[1]); // no necesitas cambiar esta línea. Simplemente reemplaza el bucle for por el método forEach()
}

console.log(b);

a.forEach((item) => {
  b.push(item.split(" and ")[1]);
});

console.log(b);

//MAP
//MAP
//MAP
//MAP
//MAP
//MAP
//MAP
//MAP

const people = [
  "Steven Spielberg",
  "Michael Bay",
  "Robin Spielberg",
  "Sasha Rebecca Spielberg",
  "James Cameron",
];

// Crea un nuevo array vacío en la variable spielbergs
const spielbergs = [];

people.forEach(function (element) {
  // Crea la lógica para agregar Spielbergs al array
  if (element.includes("Spielberg")) {
    spielbergs.push(element);
  }
});

// Muestra en la consola el array spielbergs resultante.
console.log(spielbergs);

const words = ["Baden", "aye", "go", "agar"];

const reduplications = words.map(function (word) {
  return word + "-" + word;
});

console.log(reduplications); // Escribe el código

// funcion callback
// funcion callback
// funcion callback
// funcion callback
// funcion callback

const arr = [
  "Interacción gravitacional",
  "Interacción electromagnética",
  "Interacción fuerte",
  "Interacción débil",
];

arr.forEach(function (element, index, array) {
  console.log(`${index + 1} de ${array.length}: ${element}`);
});

//filter
//filter
//filter
//filter
//filter

const movies = [
  "Titanic (1997)",
  "Black Panther (2018)",
  "Isle of Dogs (2018)",
  "The Hateful Eight (2015)",
];

const moviesFiltered = movies.filter(function (item) {
  return item.includes("2018");
  /* Escribe el código aquí */
});

console.log(moviesFiltered);
//filter 2
const cards = [
  "6 de corazones",
  "7 de corazones",
  "8 de corazones",
  "9 de corazones",
  "10 de corazones",
  "Jota de corazones",
  "Reina de corazones",
  "Rey de corazones",
  "As de corazones",
  "6 de picas",
  "7 de picas",
  "8 de picas",
  "9 de picas",
  "10 de picas",
  "Jota de picas",
  "Reina de picas",
  "Rey de picas",
  "As de picas",
  "6 de tréboles",
  "7 de tréboles",
  "8 de tréboles",
  "9 de tréboles",
  "10 de tréboles",
  "Jota de tréboles",
  "Reina de tréboles",
  "Rey de tréboles",
  "As de tréboles",
  "6 de diamantes",
  "7 de diamantes",
  "8 de diamantes",
  "9 de diamantes",
  "10 de diamantes",
  "Jota de diamantes",
  "Reina de diamantes",
  "Rey de diamantes",
  "As de diamantes",
];

const cardsFiltered = cards.filter(function (card) {
  const isRed = card.includes("corazones") || card.includes("diamantes");
  const value = parseInt(card);

  return isRed && value <= 10;
  /* Escribe aquí tu código */
});

console.log(cardsFiltered);

//filter 3

const nobel = `Wilhelm Conrad Röntgen, Alemania; Pieter Zeeman, Países Bajos; Hendrik Antoon Lorentz, Países Bajos; Antoine Henri Becquerel, Francia; Pierre Curie, Francia; Marie Curie, née Sklodowska, Francia; Lord Rayleigh (John William Strutt), Reino Unido; Philipp Eduard Anton von Lenard, Alemania; Joseph John Thomson, Reino Unido; Albert Abraham Michelson, EE.UU.; Gabriel Lippmann, Francia; Guglielmo Marconi, Italia; Karl Ferdinand Braun, Alemania; Johannes Diderik van der Waals, Países Bajos; Wilhelm Wien, Alemania; Nils Gustaf Dalén, Suecia; Heike Kamerlingh Onnes, Países Bajos; Max von Laue, Alemania; Sir William Henry Bragg, Reino Unido; Sir William Lawrence Bragg, Reino Unido; Charles Glover Barkla, Reino Unido; Max Karl Ernst Ludwig Planck, Alemania; Johannes Stark, Alemania; Charles Edouard Guillaume, Suiza; Albert Einstein, Alemania; Niels Henrik David Bohr, Dinamarca; Robert Andrews Millikan, EE.UU.; Karl Manne Georg Siegbahn, Suecia; Gustav Ludwig Hertz, Alemania; James Franck, Alemania; Jean Baptiste Perrin, Francia; Charles Thomson Rees Wilson, Reino Unido; Arthur Holly Compton, EE.UU.; Owen Willans Richardson, Reino Unido; Louis de Broglie, Francia; Sir Chandrasekhara Venkata Raman, India; Werner Karl Heisenberg, Alemania; Paul Adrien Maurice Dirac, Reino Unido; Erwin Schrödinger, Austria; James Chadwick, Reino Unido; Carl David Anderson, EE.UU.; Victor Franz Hess, Austria; Clinton Joseph Davisson, EE.UU.; George Paget Thomson, Reino Unido; Enrico Fermi, Italia; Ernest Orlando Lawrence, EE.UU.; Otto Stern, EE.UU.; Isidor Isaac Rabi, EE.UU.; Wolfgang Pauli, EE.UU.; Percy Williams Bridgman, EE.UU.; Sir Edward Victor Appleton, Reino Unido; Patrick Maynard Stuart Blackett, Reino Unido; Hideki Yukawa, Japón; Cecil Frank Powell, Reino Unido; Sir John Douglas Cockcroft, Reino Unido; Ernest Thomas Sinton Walton, Reino Unido; Felix Bloch, EE.UU.; Edward Mills Purcell, EE.UU.; Frits Zernike, Países Bajos; Max Born, Alemania; Walther Bothe, Alemania; Polykarp Kusch, EE.UU.; Willis Eugene Lamb, EE.UU.; John Bardeen, EE.UU.; Walter Houser Brattain, EE.UU.; William Bradford Shockley, EE.UU.; Tsung-Dao Lee, EE.UU.; Chen Ning Yang, EE.UU.; Igor Yevgenyevich Tamm, URSS; Ilya Mikhailovich Frank, URSS; Pavel Alekseyevich Cherenkov, URSS; Emilio Gino Segrè, EE.UU.; Owen Chamberlain, EE.UU.; Donald Arthur Glaser, EE.UU.; Rudolf Ludwig Mössbauer, Alemania; Robert Hofstadter, EE.UU.; Lev Davidovich Landau, URSS; Eugene Paul Wigner, EE.UU.; Maria Goeppert Mayer, EE.UU.; J. Hans D. Jensen, Alemania; Nicolay Gennadiyevich Basov, URSS; Aleksandr Mikhailovich Prokhorov, URSS; Charles Hard Townes, EE.UU.; Sin-Itiro Tomonaga, Japón; Richard P. Feynman, EE.UU.; Julian Schwinger, EE.UU.; Alfred Kastler, Francia; Hans Albrecht Bethe, EE.UU.; Luis Walter Alvarez, EE.UU.; Murray Gell-Mann, EE.UU.; Hannes Olof Gösta Alfvén, Suecia; Louis Eugène Félix Néel, Francia; Dennis Gabor, Reino Unido; Leon Neil Cooper, EE.UU.; John Robert Schrieffer, EE.UU.; Ivar Giaever, EE.UU.; Brian David Josephson, Reino Unido; Leo Esaki, EE.UU.; Sir Martin Ryle, Reino Unido; Antony Hewish, Reino Unido; Aage Niels Bohr, Dinamarca; Ben Roy Mottelson, Dinamarca; Leo James Rainwater, EE.UU.; Burton Richter, EE.UU.; Samuel Chao Chung Ting, EE.UU.; Philip Warren Anderson, EE.UU.; John Hasbrouck van Vleck, EE.UU.; Sir Nevill Francis Mott, Reino Unido; Robert Woodrow Wilson, EE.UU.; Pyotr Leonidovich Kapitsa, URSS; Arno Allan Penzias, EE.UU.; Steven Weinberg, EE.UU.; Sheldon Lee Glashow, EE.UU.; Abdus Salam, Reino Unido; James Watson Cronin, EE.UU.; Val Logsdon Fitch, EE.UU.; Nicolaas Bloembergen, EE.UU.; Arthur Leonard Schawlow, EE.UU.; Kai M. Siegbahn, Suecia; Kenneth G. Wilson, EE.UU.; William Alfred Fowler, EE.UU.; Subramanyan Chandrasekhar, EE.UU.; Simon van der Meer, Suiza; Carlo Rubbia, Suiza; Klaus von Klitzing, Alemania; Gerd Binnig, Suiza; Heinrich Rohrer, Suiza; Ernst Ruska, Alemania; J. Georg Bednorz, Suiza; K. Alexander Müller, Suiza; Leon M. Lederman, EE.UU.; Jack Steinberger, Suiza; Melvin Schwartz, EE.UU.; Norman F. Ramsey, EE.UU.; Hans G. Dehmelt, EE.UU.; Wolfgang Paul, Alemania; Henry W. Kendall, EE.UU.; Richard E. Taylor, EE.UU.; Jerome I. Friedman, EE.UU.; Pierre-Gilles de Gennes, Francia; Georges Charpak, Suiza; Joseph H. Taylor Jr., EE.UU.; Russell A. Hulse, EE.UU.; Bertram N. Brockhouse, Canada; Clifford G. Shull, EE.UU.; Martin L. Perl, EE.UU.; Frederick Reines, EE.UU.; David M. Lee, EE.UU.; Douglas D. Osheroff, EE.UU.; Robert C. Richardson, EE.UU.; Claude Cohen-Tannoudji, Francia; William D. Phillips, EE.UU.; Steven Chu, EE.UU.; Robert B. Laughlin, EE.UU.; Daniel C. Tsui, EE.UU.; Horst L. Störmer, EE.UU.; Martinus J.G. Veltman, EE.UU.; Gerardus ‘t Hooft, Países Bajos; Zhores I. Alferov, Rusia; Jack S. Kilby, EE.UU.; Herbert Kroemer, EE.UU.; Carl E. Wieman, EE.UU.; Wolfgang Ketterle, EE.UU.; Eric A. Cornell, EE.UU.; Riccardo Giacconi, EE.UU.; Raymond Davis Jr., EE.UU.; Masatoshi Koshiba, Japón; Alexei A. Abrikosov, EE.UU.; VItalia L. Ginzburg, Rusia; Anthony J. Leggett, EE.UU.; Frank Wilczek, EE.UU.; David J. Gross, EE.UU.; H. David Politzer, EE.UU.; Roy J. Glauber, EE.UU.; Theodor W. Hänsch, Alemania; John L. Hall, EE.UU.; John C. Mather, EE.UU.; George F. Smoot, EE.UU.; Peter Grünberg, Alemania; Albert Fert, Francia; Makoto Kobayashi, Japón; Toshihide Maskawa, Japón; Yoichiro Nambu, EE.UU.; Willard S. Boyle, EE.UU.; Charles Kuen Kao, China; George E. Smith, EE.UU.; Andre Geim, Reino Unido; Konstantin Novoselov, Reino Unido; Saul Perlmutter, EE.UU.; Adam G. Riess, EE.UU.; Brian P. Schmidt, Australia; Serge Haroche, Francia; David J. Wineland, EE.UU.; Peter W. Higgs, Reino Unido; François Englert, Bélgica; Isamu Akasaki, Japón; Hiroshi Amano, Japón; Shuji Nakamura, EE.UU.; Takaaki Kajita, Japón; Arthur B. McDonald, Canada; David J. Thouless, EE.UU.; F. Duncan M. Haldane, EE.UU.; J. Michael Kosterlitz, EE.UU.; Rainer Weiss, EE.UU.; Barry C. Barish, EE.UU.; Kip S. Thorne, EE.UU.; Arthur Ashkin, EE.UU.; Gérard Mourou, Francia; Donna Strickland, Canada`;

const nobelArr =
  nobel.split("; "); /* divide aquí el string en elementos de un array */

const filtNobel = nobelArr.filter(function (scientist) {
  return scientist.includes("EE.UU.") || scientist.includes("Alemania");
  /* filtra aquí a los científicos de EE.UU. y Alemania */
});

console.log(filtNobel);

// some every find
// some every find
// some every find
// some every find
// some every find

const seasons = ["Primavera", "Verano", "Otoño", "Invierno"];

const autumn = seasons.find(function (item) {
  return item.startsWith("O");
});

console.log(autumn);

// every
// tienes un array de números
const integersToCheck = [1, 2, 3, 193, 79, 7, 29];

/* finaliza la función isPrime, que toma un número como argumento
y devuelve true solo si ese número es primo */

function isPrime(num) {
  /* programa el cuerpo de la función */
}

/* después de programar la función, utiliza el método .every()
y pásale la función para comprobar los elementos del array */

const collaborators = [
  { username: "usuario123", role: "lector" },
  { username: "octogato", role: "administrador" },
  { username: "carmen_la_capibara", role: "escritor" },
  { username: "visitante_invitado", role: "lector" },
];

let hasAdminAccess = collaborators.some(function (user) {
  return user.role === "administrador";
});

console.log("¿Hay un administrador en el proyecto?", hasAdminAccess);

//REDUCE
//REDUCE
//REDUCE
//REDUCE
//REDUCE
//REDUCE
const acrostic = [
  "Sonriente brilla en el cielo",
  "Oro que nos da vida y calor",
  "Luz que ilumina nuestro día",
];

const cipherWord = acrostic.reduce(function (prevVal, item) {
  return prevVal + item[0];
}, "");

console.log(cipherWord);

//reduce 2

/* Un array para registrar las ganancias y pérdidas de un jugador. */
const winsAndLosses = [190, 117, -381, -394, -36, 137, -473, 372, -383];

/* Calcula cuánto dinero le quedará al jugador al final de la noche. */
const total = winsAndLosses.reduce(function (acc, current) {
  return acc + current;
}, 1000);

console.log(total);

//SORT
//SORT
//SORT
//SORT
//SORT

const chessChampions = [
  "Wilhelm Steinitz",
  "Emanuel Lasker",
  "Jose Capablanca",
  "Alexander Alekhine",
  "Machgielis Euwe",
  "Mikhail Botvinnik",
  "Vasily Smyslov",
  "Mikhail Tal",
  "Tigran Petrosian",
  "Boris Spassky",
  "Robert Fischer",
  "Anatoly Karpov",
  "Garry Kasparov",
  "Vladimir Kramnik",
  "Viswanathan Anand",
  "Magnus Carlsen",
];

chessChampions.sort(function (a, b) {
  const lastNameA = a.split(" ").pop().toLowerCase();
  const lastNameB = b.split(" ").pop().toLowerCase();

  if (lastNameA < lastNameB) return -1;
  if (lastNameA > lastNameB) return 1;
  return 0;
});

console.log(chessChampions);

const chessChampions1 = [
  ["Alexander Alekhine", 1927],
  ["Alexander Alekhine", 1937],
  ["Viswanathan Anand", 2007],
  ["Mikhail Botvinnik", 1948],
  ["Mikhail Botvinnik", 1958],
  ["Mikhail Botvinnik", 1961],
  ["Magnus Carlsen", 2013],
  ["Max Euwe", 1935],
  ["Robert Fischer", 1972],
  ["Jose Raul Capablanca y Graupera", 1921],
  ["Anatoly Karpov", 1975],
  ["Garry Kasparov", 1985],
  ["Vladimir Kramnik", 2006],
  ["Emanuel Lasker", 1894],
  ["Tigran Petrosian", 1963],
  ["Vasily Smyslov", 1957],
  ["Boris Spassky", 1969],
  ["Wilhelm Steinitz", 1886],
  ["Mikhail Tal", 1960],
];

chessChampions1.sort(function (a, b) {
  return a[1] - b[1];
});
// Escribe tu código aquí

console.log(chessChampions1);
