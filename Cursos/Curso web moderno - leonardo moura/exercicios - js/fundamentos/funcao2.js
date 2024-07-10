// Armazenando uma funcao em uma variavel
const imprimiSoma = function (a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b //Somente se tiver uma linha
console.log(subtracao(2, 3))