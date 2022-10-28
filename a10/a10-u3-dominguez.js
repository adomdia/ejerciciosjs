const textInput = document.querySelector("#texto-input")
const inicioInput = document.querySelector("#inicio-input")
const finalInput = document.querySelector("#final-input")
const restultadoButton = document.querySelector("#resultado-button")
const fraseResult = document.querySelector("#frase-result")
const restultadoResult = document.querySelector("#resultado-result")

restultadoButton.addEventListener('click', mostrarResultado)

function mostrarResultado(){
    texto = textInput.value
    inicio = inicioInput.value
    final = finalInput.value
    let cadena = new RegExp("^" + inicio + ".*" + final + "$")
    console.log(inicio)
    console.log(final)
    console.log(cadena)
    x = texto.search(cadena)



    fraseResult.innerHTML = "La frase era: '" + texto + "'"
    restultadoResult.innerHTML = "Las coincidencias son: " + x

}