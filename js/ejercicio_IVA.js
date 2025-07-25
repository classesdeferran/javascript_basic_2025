let nombreProducto = ""
let precioCoste = 0
let margenComercial = 0
let IVA = 0
let precioVenta = 0

// Guardo la resposta de l'usuari a la variable nombreProducto
nombreProducto = prompt("Indica el nombre del producto")
precioCoste = prompt("Indica el precio de coste")
console.log("En la linea 7, precioCoste es", typeof precioCoste);
precioCoste = parseFloat(precioCoste)
if (isNaN(precioCoste) ) {
    alert("Precio Incorrecto: debe ser un número en cifras")
} else {
    console.log("En la linea 9, precioCoste es", typeof precioCoste);
margenComercial = prompt("Indica el margen comercial (en valor)")
margenComercial = parseFloat(margenComercial)/100
IVA = prompt("Indica el IVA (en valor)")
IVA = parseFloat(IVA)/100

precioVenta = precioCoste + (precioCoste*margenComercial)
precioVenta = precioVenta + (precioVenta*IVA)

let mensajeFinal = "El precio de venta del producto " + nombreProducto + " debe ser " + precioVenta
alert(mensajeFinal)
}
