function breakingRecords(scores) {
    // Write your code here
    let maxPonto = scores[0]
    let minPonto = scores[0]
    let quebraDeRecordes = [0, 0]

    scores.forEach(num => {
        if (num > maxPonto) {
            maxPonto = num
            quebraDeRecordes[0] += 1
        }
        if (num < minPonto) {
            minPonto = num
            quebraDeRecordes[1] += 1
        }
    })

    return quebraDeRecordes
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))