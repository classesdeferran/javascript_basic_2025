// STRINGS = TEXTOS

let texto = "¡Buenos dias, hoy es 17 de julio!"
texto = "Maria"
let TEXTO = "Paco"
let tExTo = "Ona"

// Cuántos carácteres hay
console.log(texto.length);

let saludo1 = "Buenas"
let saludo2 = "tardes"
let saludoCompleto = saludo1 + " " + saludo2
console.log(saludoCompleto);

console.log(texto[3]);

//  0  1  2  3  4  5.. -> UNDEFINIED
//  M  a  r  i  a
// -5 -4 -3 -2 -1

texto = "Maria"
// devuelve un caracter del string
console.log(texto.at(-1));
console.log(texto.charAt(6));

let inicial = texto.at(0)
console.log(inicial);

let saludoCompleto2 = ""
console.log(saludoCompleto2.concat(saludo1, saludo2));

let end = texto.endsWith("a", 0)
console.log(end);

let martes = "mARtes"
// Conversión de texto a minúsculas
let nombre = martes.toLocaleLowerCase()
console.log(martes);

console.log(nombre == "martes");

console.log(nombre.toLocaleUpperCase());

let saludo3 = "buenas tardes"
let saludo4 = saludo3.replace("tardes", "noches")
console.log(saludo4);
console.log(saludo3);

let datos = "      Sara                         "
console.log(datos.length);

datos = datos.trimEnd()
console.log(datos.length);
datos = datos.trim()
console.log(datos.length);

let mensaje = "HUn dia cualquiera"
let mensajeCorregido = mensaje.slice(1)
console.log(mensajeCorregido);


let nombreCompleto = "Sara Garcia Pou"
// Garcia Pou, Sara



