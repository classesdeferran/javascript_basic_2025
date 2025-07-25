let texto1 = "Abracadabra"
console.log(texto1);

let texto2 = texto1.replace("a", "i")
console.log(texto2);

let texto3 = texto1.replaceAll("a", "i")
console.log(texto3);

let comparacion1 = texto1.localeCompare(texto2)
console.log(comparacion1);
let comparacion2 = texto1.localeCompare("Abracadabra")
console.log(comparacion2);

console.log(texto1.includes("e"));
console.log(texto1.includes("a"));
console.log(texto1.includes("bra"));

console.log(texto1.indexOf("a"));
console.log(texto1.lastIndexOf("a"));