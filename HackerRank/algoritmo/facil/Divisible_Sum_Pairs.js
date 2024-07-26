function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let contador = 0
    let combinacoes = [] //Pode apagar, nao foi pedido

    for (let i = 0; i <= n - 2; i++) {
        let soma = ar[i]
        for (let j = i + 1; j <= n - 1; j++) {
            soma += ar[j]
            if (soma % k == 0) {
                contador += 1
                combinacoes.push([ar[i], ar[j]]) //Pode apagar, nao foi pedido
            }
            soma = ar[i]
        }
        
    }
    
    console.log(combinacoes) //Pode apagar, nao foi pedido
    return contador
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))