// Uma função anonima é apenas uma função sem nome, elas sempre são associadas a alguma coisa(variaveis, atribudos de objetos e etc)
const soma = function (x, y) {
    return x + y
}

const imprimiResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimiResultado(3, 4)
imprimiResultado(3, 4, soma)
imprimiResultado(3, 4, function(x, y) {
    return x - y
})
imprimiResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()
