// alert("Soy un alert")
// let respuesta1 = confirm("¿Hoy es martes?")
// alert(respuesta1)

// let respuesta2 = prompt("¿Qué día es?")
// alert(respuesta2)

// let numero_primo_1 = 19 // snakecase
// let numeroPrimo2 = 19 // camelcase

let diaSemana = prompt("¿Qué día de la semana es?")

if (diaSemana == "lunes" || diaSemana == "Lunes") {
    alert("toca comer pizza");
} else if (diaSemana == "martes") {
    alert("toca comer ensalada");
} else if (diaSemana == "miercoles") {
    alert("toca comer fricandó");
} else if (diaSemana == "jueves") {
    alert("toca comer paella");
} else if (diaSemana == "viernes") {
    alert("toca comer hamburguesa");
}  else if (diaSemana == "sabado") {
    alert("toca comer salmorejo");
} else if (diaSemana == "domingo") {
    alert("toca comer lentejas");
} else {
    alert("día de la semana incorrecto");
}


switch (diaSemana) {
    case "lunes":
        console.log("toca comer pizza");
        break
    case "martes":
        console.log("toca comer ensalada");
        break
    case "miercoles":
        console.log("toca comer pizza");
        break
    case "jueves":
        console.log("toca comer ensalada");
        break
    case "viernes":
        console.log("toca comer ensalada");
        break
    case "sabado":
        console.log("toca comer salmorejo");
        break
    case "domingo":
        console.log("toca comer lentejas");
        break
    default :
        console.log("día de la semana incorrecto");
    
}

