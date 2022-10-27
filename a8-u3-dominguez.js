

function circulo(){
    const radio = document.querySelector("radio")
    console.log(radio)
    pi = Math.PI
    x = (pi * (Math.pow(radio, 2)))
    document.getElementById("circulo").innerHTML = "El área del círculo es " + x + " cm2"
}

function triangulo(){
    const altura = document.querySelector("altura")
    const base = document.querySelector("base")
    console.log(base, altura)
    y = ((base * altura)/2)
    document.getElementById("triangulo").innerHTML = "El área del triángulo es " + y + " cm2"
}
