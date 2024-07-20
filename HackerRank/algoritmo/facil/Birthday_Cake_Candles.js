function birthdayCakeCandles(candles) {
    // Write your code here
    let maximos = 0
    let max = 0
    candles.forEach(num => {
        if (num > max) {
            max = num
            maximos = 0
        } 
        if (num == max) {
            maximos += 1
        }
    })
    
    return maximos
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))