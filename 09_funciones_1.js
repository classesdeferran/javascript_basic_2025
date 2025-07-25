let nombreACorregir = "frAncIsCo";

// Pasar todo a minúsculas
let nombreCorregido = nombreACorregir.toLocaleLowerCase();
// Pasar la primera letra a mayúsculas
let inicial = nombreCorregido[0].toLocaleUpperCase();
// Unir las dos partes
nombreCorregido = inicial + nombreCorregido.slice(1);

console.log(inicial);

console.log(nombreCorregido);

let nombreACorregir2 = "mArTA";
let nombreACorregir3 = "pEPita";



// Ejecución
console.log(saludar());

// Declaración
function saludar() {
  return "Hola, eres genial. ¿Lo sabías? Pues sí.";
}




let operacion = ((1 + 2) * 3) / 4;
console.log(operacion);

function sumar() {
  return 1 + 2;
}

console.log(sumar());

// Declarar la función
function sumar2(num1, num2) {
  return num1 + num2;
}

// Llamar o invocar la función
console.log(sumar2(3, 5));
console.log(sumar2(6, 8));
console.log(sumar2(8, 23));

let sumaDoble = sumar2(1, 2) + sumar2(4, 2);
console.log(sumaDoble);

function saludar2(nombre) {
  return `Hola ${nombre}, eres genial. ¿Lo sabías? Pues sí.`;
}

console.log(saludar2("Ferran"));
console.log(saludar2("Paco"));

function corregirNombres(nombre) {
  // Pasar todo a minúsculas
  let nombreCorregido = nombre.toLocaleLowerCase();
  // Pasar la primera letra a mayúsculas
  let inicial = nombreCorregido[0].toLocaleUpperCase();
  // Unir las dos partes
  nombreCorregido = inicial + nombreCorregido.slice(1);
  return nombreCorregido;
}

console.log(corregirNombres("marGariTa"));
console.log(corregirNombres("mArTA"));
console.log(corregirNombres("doNAld"));

let arrayNums1 = [1, 2, 3, 4, 5, 6];
let arrayNums2 = [100, 25, 32, 44, 57, 68];
arrayNums1 = [1, 2, 3, 4];

// Ejercicio 1 : Obtener la suma de los valores de cada array
// con una función -> sumaArray
// function nombre_de_funcion( argumento1, argumento2, ...)
function sumaArray(arrayConNumeros) {
  let total = 0;
  for (let numero of arrayConNumeros) {
    total = total + numero;
  }
  return total;
}

console.log(sumaArray([10, 20, 30]));
console.log(sumaArray([1000, 5896, 564, 30]));

// Ejercicio 2 : Obtener el valor máximo (sin funciones auxiliares)

// Ejercicio 3 :  dada una palabra cualquiera,
// obtener cuántos caracteres tiene (sin usar length)

// Ejercicio 4 :  dada una palabra cualquiera,
// obtener cuántas veces en ella aparece deteminado caracter
// Ejemplo 1: contarLetras ("abracadabra", "a") -> 5
// Ejemplo 2: contarLetras ("abracadabra", "c") -> 1
// Ejemplo 3: contarLetras ("abracadabra", "e") -> 0

// Ejercicio 5 : dado un array con números, debemos obtener
// otro array con los números menores a otro número indicado,
// o bien un array vacío si no hay ninguno que cumpla la condición.
// Ejemplo 1 : obtenerArray ([1,2,3,4], 3) -> [1,2]
// Ejemplo 2 : obtenerArray ([1,2,3,4], 5) -> [1,2,3,4]
// Ejemplo 3 : obtenerArray ([1,2,3,4], 0) -> []



let variable = 1234
console.log(variable);


