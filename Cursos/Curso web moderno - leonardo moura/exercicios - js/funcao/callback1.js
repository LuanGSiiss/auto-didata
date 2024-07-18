const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
} 

// "forEach" é uma função base do array, 
fabricantes.forEach(imprimir)// cada elemento do array, será executado a função "imprimir"
fabricantes.forEach(function(a) { //o "forEach" sempre vai considerar o primeiro parametro como o conteudo do array e o segundo como indice
    console.log(a)
})