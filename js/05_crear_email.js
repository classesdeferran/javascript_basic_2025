// maria.garcia@cief.com

let nombre = prompt("Por favor, indica tu nombre").trim()
let apellido = prompt("Por favor, indica tu apellido").trim()


if ( nombre.length < 2 || apellido.length < 2) {
    alert("Hay que indicar un nombre y un apellido válidos \n(de dos carácteres mínimo)")
} else {

    nombre = nombre.toLocaleLowerCase()
    apellido = apellido.toLocaleLowerCase()
    // let email = `${nombre}.${apellido}@cief.com`
    // alert(email)
    alert(`${nombre}.${apellido}@cief.com`)
}