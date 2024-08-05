function sockMerchant(n, ar) {
    // Write your code here
    const arOrdenado = ar.sort(function(a, b) {return a - b})
    let pares = 0
    let i = 1

    while (i < n) {
        if (ar[i] == ar[i - 1]) {
            pares += 1
            i += 2
        } else {
            i += 1
        }
    }
    
    return pares
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))