// Mostrando como é possível usar os parametros de uma função, mesmo quando a função não tem parametros em sua criação

function soma() {
    let soma = 0
    for (i in arguments) { // O "arguments" é um array que tem em todas as funções que guarda todos os parametros
        soma+= arguments[i]
    }
    return soma
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', "c"))
