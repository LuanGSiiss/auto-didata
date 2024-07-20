function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        let linha = ''
        for (let j = 1; j <= n; j++) {
            if (i <= n-j) {
                linha += ' '
            } else {
                linha += '#'
            }
        }
        console.log(linha)
    }
}

staircase(6)