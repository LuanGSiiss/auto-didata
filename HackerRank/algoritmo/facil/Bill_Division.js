function bonAppetit(bill, k, b) {
    // Write your code here
    let elaDeve = 0

    for (let i in bill) {
        if (i != k) {
            elaDeve += bill[i] / 2
        }
    }

    let cobrancaBill = b == elaDeve ? 'Bon Appetit' : b - elaDeve

    console.log(cobrancaBill)
}

bonAppetit([3, 10, 2, 9], 1, 7)
bonAppetit([3, 10, 2, 9], 1, 12)