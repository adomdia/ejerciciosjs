/**
 * NOTAS
 * -----
 * 
 * 1.- Si al querySelector le pones "radio" a secas espera encontrar en el html una etiqueta <radio>,
 * que no existe. Estás buscando un <input> cuyo id es radio, luego el selector necesita un #
 * para saber que buscas por id: document.querySelector("#radio").
 * 
 * 2.- Como vas a buscar mediante id, es conveniente dar un poco más de información en el id.
 * Por ejemplo, para un botón: #circle-button.
 * 
 * 3.- Mejor evitar onclick en el html al definir las etiquetas. Añadimos el evento de forma dinámica
 * mediante addEventListener.
 * 
 * 4.- Cuando hacemos un querySelector de un <input>, nos traermos un objeto con toda la información
 * de esa etiqueta <input>. Si lo que quieres es leer el valor del input, tienes que hacer radioInput.value, por ejemplo.
 * 
 * 5.- No es muy optimo hacer un querySelector por cada vez que se hace click en el botón.
 * Lo ideal es obtener de primeras los elementos con los que vas a trabajar y después "leerle"
 * sus atributos o propiedades para hacer los cálculos.
 * He guardado en constantes antes de nada los elementos html que voy a usar y en la función
 * que se llama cuando haces click para cada uno de los botones sólo me preocupo por leer el .value
 * que tenga en ese momento y hago la operación con él.
 * 
 */


///// Círculo
const radioInput = document.querySelector("#radio-input");
const radioButton = document.querySelector("#radio-button");
const radioResult = document.querySelector("#radio-result");

radioButton.addEventListener('click', calcCirculo)

function calcCirculo() {
    const radio = radioInput.value
    console.log('radio', radio)
    const area = (Math.PI * (Math.pow(radio, 2)))
    radioResult.innerHTML = "El área del círculo es " + area + " cm2"
}

///// Triángulo
const trianguloAlturaInput = document.querySelector("#triangulo-altura-input");
const trianguloBaseInput = document.querySelector("#triangulo-base-input");
const trianguloButton = document.querySelector("#triangulo-button");
const trianguloResult = document.querySelector("#triangulo-result");

trianguloButton.addEventListener('click', calcTriangulo)

function calcTriangulo() {
    const altura = trianguloAlturaInput.value
    console.log('altura', altura)

    const base = trianguloBaseInput.value
    console.log('base', base)

    const area = ((base * altura) / 2)
    trianguloResult.innerHTML = "El área del triángulo es " + area + " cm2"
}
