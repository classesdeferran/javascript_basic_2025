// Sintaxis inicial
// function nombreFuncion (argumento1, argumento2, ...) {
//     código de javascript
//     return el_resultado_de_la_función
// }

function saludar(nombre) { 
    // function es la palabre clave
    // saludar es el nombre
    // () obligatorios
    // nombre es el parámetro
    // {} obligatorias
    return nombre
}

let variable = 3

// Llamada o invocación
let resultado = sumarDosNumeros(2, 3)
console.log(resultado);
let resultado2 = sumarDosNumeros("a", "b")
console.log(resultado2);

// Declaración de la función
function sumarDosNumeros(numero1, numero2) {
    return numero1 + numero2
}


let sumarOtraVez = function (num1, num2) {
    return num1 + num2
}
console.log(sumarOtraVez(2, 3));

let resultado1 = (num1, num2) => {
    return num1 + num2
}

console.log(resultado1(2, 4));

let resultado3 = (num1, num2) => num1 + num2
console.log(resultado3(2, 4));

let  resultado4 = num1 => num1 ** 3
console.log(resultado4(3));
console.log(resultado4(5));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
let arrayFiltrado = numeros.filter( valor => valor%2==0 )
console.log( arrayFiltrado );
let numeros2 = [1, 3, 5, 7]
let arrayFiltrado2 = [1, 3, 5, 7].filter( valor => valor%2==0 )
console.log(arrayFiltrado2);
console.log( numeros);

// ejercicio separar las consonantes de esta palabra
let palabra = "abracadabra!"
let palabraFiltrada = ""
for (let i = 0; i < palabra.length; i = i+1) {// i = i+1 <--> i++
    console.log(palabra[i]);
    if (palabra[i] != "a") {
        console.log(palabra[i]);
        palabraFiltrada = palabraFiltrada + palabra[i]
    }
}
console.log(palabraFiltrada);

let palabraFiltrada2 = palabra.split('').filter( x => x != "a").join("")

console.log(palabraFiltrada2);

// Ejercicio 2
let nombre = "mARia anTonIA alEXandrA marTA MaYA" // "Maria Antonia Alexandra Marta Maya"
let nombre2 = "frOiLAN DE toDos los SaNTos"
let nombre3 = "octaViO auGusTO"
// corregirNombreCompuesto (nombre)

let nombre5 =  "frAncISco"
let nombre5Corregido = nombre5[0].toLocaleUpperCase() + nombre5.slice(1).toLocaleLowerCase()
console.log(nombre5Corregido);

function corregirPalabra( palabra){
    let palabraCorregida = palabra[0].toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase()
    return palabraCorregida
}

console.log(corregirPalabra(nombre5));

let prueba = nombre.split(' ')
console.log(prueba);

function corregirNombreCompuesto( nombreCompuesto ) {
    let arrayNombresIncorrectos = nombreCompuesto.split(' ')
    let nombreRectificado = []
    for (nombreIncorrecto of arrayNombresIncorrectos) {
        let nombreCorrecto = corregirPalabra(nombreIncorrecto)
        nombreRectificado.push(nombreCorrecto)
        //console.log(nombreCorrecto);
    }
    return nombreRectificado.join(' ');
}

console.log(corregirNombreCompuesto(nombre));
console.log(corregirNombreCompuesto(nombre2));
console.log(corregirNombreCompuesto(nombre3));
console.log(corregirNombreCompuesto(nombre5));

