function formingMagicSquare(s) {
    // Write your code here
    let mudancasTotais = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            let MatrizMagica = false

            while (MatrizMagica == false) {
                let somaColuna = 0
                let somaLinha = 0
                let diagonalPrincipal = 0
                let diagonalSecundaria = 0

                for (let c = 0; c < s[j].length; c++) {
                    somaLinha += s[i][c]
                    somaColuna += s[c][j]
                    diagonalPrincipal += s[c][c]
                    diagonalSecundaria += s[c][s.length - c - 1] //percorre a diagonal secundaria apenas com 1 for
                }

                if ((somaColuna < 15 && somaLinha < 15) && somaColuna === somaLinha) {
                    if ((i == j && diagonalPrincipal == 15) || (i + j == s.length - 1 && diagonalSecundaria == 15)) { // caso esteja na diagonal principal ou secundaria o tratamento é diferente
                        MatrizMagica = true
                    } else {
                        s[i][j] += 1
                        mudancasTotais += 1
                    }
                } else if (somaColuna > 15 || somaLinha > 15) {
                    s[i][j] -= 1
                    mudancasTotais += 1
                }
                else {
                    MatrizMagica = true
                }
            }
        }
    }        
    //DEPOIS
    console.log(s)

    return mudancasTotais 
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
console.log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]]))
console.log(formingMagicSquare([[4, 5, 8], [2, 9, 1], [1, 9, 7]]))