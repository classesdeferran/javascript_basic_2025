function cambiarParrafo () {
    // alert("Has pulsado sobre el párrafo")
    // console.log(document.getElementById('parrafo1'));
    let parrafo = document.getElementById('parrafo1')
    parrafo.style.color = "red"
    parrafo.style.fontSize = "2rem"
    parrafo.textContent = "Por fin es viernes!!"
}

document.getElementById('parrafo2').onclick = function(){
    let parrafo = document.getElementById('parrafo2')
    parrafo.style.color = "green"
    parrafo.style.fontFamily = "Arial"
}
// console.log(document.getElementById('parrafo2'));

let parrafo3 = document.getElementById('parrafo3')
parrafo3.addEventListener('click', () => {
    parrafo3.style.color = "white"
    parrafo3.style.backgroundColor = "darkblue"
})