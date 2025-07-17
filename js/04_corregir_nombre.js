// lAia
// LaIA
// Laia <- Es lo que debería ser

// "dOnalD" --> "Donald"

// Preguntar al usuario su nombre (nombre de una sola palabra)
// Responder: Tu nombre correctamente escrito es ...

let respuesta = prompt("Por favor, indique su nombre")

// 0
// f e R r A n 
let inicial = respuesta.at(0)
inicial = inicial.toLocaleUpperCase()

// let inicial2 = respuesta.at(0).toLocaleUpperCase()

// 0 1 2 3 4 5
// F e R r A n
// alert(inicial)

let restoNombre = respuesta.slice(1)
restoNombre = restoNombre.toLocaleLowerCase()

let nombreCorregido = inicial + restoNombre
alert(`Tu nombre corregido es ${nombreCorregido}`);

// let nombreCorregido2 = respuesta.at(0).toLocaleUpperCase() + respuesta.slice(1).toLocaleLowerCase()