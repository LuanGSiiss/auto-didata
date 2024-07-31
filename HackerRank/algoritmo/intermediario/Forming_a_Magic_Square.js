function formingMagicSquare(s) {
    // Write your code here
    // O numero magico sera definido como a maior some entre as linhas e colunas
    const numMagico = s.length * s.length
    let mudancasTotal = Infinity

    const matrizesPossiveis = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ]

    //verifica qual e o quadrado magico mais proximo

    for (let i = 0; i < matrizesPossiveis.length; i++) {
        let alteracoes = 0
        for (let l = 0; l < s.length; l++) {
            for (let c = 0; c < s[l].length; c++) {
                let diferenca = Math.abs(s[l][c] - matrizesPossiveis[i][l][c])
                alteracoes += diferenca
            }
        }
        if (alteracoes < mudancasTotal) {
            mudancasTotal = alteracoes
        }
    }

    return mudancasTotal
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))