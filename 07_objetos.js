// POO : Programación Orientada a Objetos
// OOP : Object Oriented Programming

// { nombre_propiedad_1 : valor_propiedad_1,
// nombre_propiedad_1 : valor_propiedad_1, 
// ...
// }
// JSON : JavaScript Object Notation
// API -> JSON
let coche1 = {"color" : "blanco", 
    "Nombre del propietario": "Steve Jobs"}

let propiedad = "color"

console.log(coche1.color);
console.log(coche1["color"]);
console.log(coche1["Nombre del propietario"]);
console.log(coche1[propiedad]);

let alumnos = [
    {nombre: "Anna", edad: 24},
    {nombre: "José", edad: 22},
]