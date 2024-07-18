function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // R$ NaN
console.log(produto.getPreco()) // R$ 3900.65

const carro = { 
    preco: 49990,
    desc: 0.20
}
console.log(getPreco.call(carro)) // R$ 39992 , Faz com que o contexto de execução dessa função seja o carro
console.log(getPreco.apply(carro)) // R$ 39992 , Faz a mesma coisa que o "call"

// A diferença é como é passado os parametros
console.log(getPreco.call(carro, 0.17, '$')) // $ 46790.64
console.log(getPreco.apply(carro, [0.17, '$']))  // $ 46790.64