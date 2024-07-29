function formingMagicSquare(s) {
    // Write your code here
    // O numero magico sera definido como a maior some entre as linhas e colunas
    let mudancasTotais = 0

    function repetiu(arr, num, l, c) {
        let cont = 0
        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (num === arr[i][j]) {
                    cont += 1
                    if (cont > 1) {
                        l = i
                        c = j
                    }
                        
                } 
            }
        }

        return cont > 1 ? [true, l, c] : [false, l, c]
    }

    //ANTES
    console.log(s)

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            let somaColuna = 0
            let somaLinha = 0
            let MatrizMagica = false
            while (MatrizMagica == false) {
                somaColuna = 0
                somaLinha = 0
                for (let c = 0; c < s[j].length; c++) {
                    somaLinha += s[i][c]
                    somaColuna += s[c][j] 
                    
                }
                if (somaColuna != 15 && somaLinha != 15 && repetiu(s, s[i][j])[0] == false) {
                    console.log('ta aqui')
                    console.log(s[i][j])
                    s[i][j] += 1
                    mudancasTotais += 1
                } else if (somaColuna != 15 && somaLinha != 15 && repetiu(s, s[i][j])[0]) {
                    let linha = repetiu(s, s[i][j])[1]
                    let coluna = repetiu(s, s[i][j])[2]
                    let somaColunades = 0
                    let somaLinhades = 0
                    for (let c = 0; c < 3; c++) {
                        somaLinhades += s[linha][c]
                        somaColunades += s[c][coluna]
                    }
                    if (somaColunades != 15 && somaLinhades != 15) {
                        s[linha][coluna] += 1
                        mudancasTotais += 1
                    } else {
                        s[i][j] += 1
                        mudancasTotais += 1
                    }
                } else {
                    console.log('opa')
                    MatrizMagica = true
                }
            }
        }
    }        

    //DEPOIS
    console.log(s)
    console.log(mudancasTotais)

    return mudancasTotais
    
}

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]))
console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]))