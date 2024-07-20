function miniMaxSum(arr) {
    // Write your code here
    let min = Infinity
    let max = 0
    let somaTotal = 0
    
    //acha o minimo, maximo e faz a calculera
    arr.forEach(num => {
        if (num < min) {
            min = num
        } 
        if (num > max) {
            max = num
        }
        somaTotal += num
    }) 
    
    let somaMax = somaTotal - min
    let somaMin = somaTotal - max
    
    console.log(`${somaMin} ${somaMax}`)
}

miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([769082435, 210437958, 673982045, 375809214, 380564127])