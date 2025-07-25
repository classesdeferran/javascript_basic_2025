// Pedir al usuario dos números
// Pediremos que operación quiere realizar
// 
// Mostraremos el resultado.

// Mi calculadora
// ==============

// 1. Sumar
// 2. Restar
// 3. Multiplicar
// 4. Dividir

// Elige la opción que deseas
let respuesta = "4"

let numero1 = 2
let numero2 = 3

// numero1 = "2"
// numero2 = "5"

console.log(numero1 + numero2);
if (respuesta == 1) {
    console.log(numero1 + " + " + numero2 + " = " + (numero1+numero2));
} else if (respuesta == 2) {
    console.log(numero1 + " - " + numero2 + " = " + (numero1-numero2));
} else if (respuesta == 3) {
    console.log(numero1 + " x " + numero2 + " = " + (numero1*numero2));
} else if (respuesta == 4) {
    console.log(numero1 + " / " + numero2 + " = " + (numero1/numero2));
} else {

}

