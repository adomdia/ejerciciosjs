const frase = document.getElementById("frase").value

let array = frase.split(" ")
console.log(array)
function primera(){
    document.getElementById("primera").innerHTML = array[0]
    console.log(array[0])
}

function ultima(){
    x = (array.length - 1)
    console.log(x)
    document.getElementById("ultima").innerHTML = array[x]
}

function total(){
    document.getElementById("total").innerHTML = array.length
}
