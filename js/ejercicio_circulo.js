let radio = 0;
let area = 0;
let perimetro = 0;
const PI = 3.14159;

radio = prompt("Indica el radio del círculo")
console.log("El radio es", radio);
let mensaje = "El radio es " + radio;
alert("El radio es " + radio);

if (radio <= 0) {
  const mensaje = "No puede ser un radio igual o menor a cero";
  alert(mensaje);
} else {
  perimetro = PI * 2 * radio;
  console.log("El perímetro es", perimetro);

  area = PI * radio * radio;
  console.log("El área del círculo es ", area);
}
