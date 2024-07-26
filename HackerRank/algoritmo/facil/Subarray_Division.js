function birthday(s, d, m) {
    // Write your code here
    let contador = 0
    let combinacoes = [] //Pode apagar, nao foi pedido

    for (let i = 0; i <= s.length - m; i++) {
        let combinacao = [] //Pode apagar, nao foi pedido
        let soma = 0
        for (let j = i; j < i + m; j++) {
            soma += s[j]
            combinacao.push(s[j]) //Pode apagar, nao foi pedido
        }
        if (soma == d) {
            contador += 1
            combinacoes.push(combinacao) //Pode apagar, nao foi pedido
        }
    }
    
    console.log(combinacoes) //Pode apagar, nao foi pedido
    return contador
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))