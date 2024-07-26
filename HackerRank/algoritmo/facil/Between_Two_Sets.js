function getTotalX(a, b) {
    // Write your code here
    let mdcConjuntoB = b.reduce((acc, num) => mdc(acc, num))
    let contador = 0
    
    // Funcao para calcular o MDC entre dois numeros
    function mdc(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    //verifica se um numero é divisivel por outro
    function divide(x, y) {
        return x % y == 0 ? true : false
    }

    for (let i = 1; i < mdcConjuntoB + 1; i++) {
        let passouTudoA = a.reduce((acc, num) => acc && divide(i, num), true)
        let passouTudoB = b.reduce((acc, num) => acc && divide(num, i), true)
        if (passouTudoA && passouTudoB) {
            contador += 1
        }
    }

    return contador
}

console.log(getTotalX([2, 4], [16, 32, 96]))
console.log(getTotalX([3, 4], [24, 48]))