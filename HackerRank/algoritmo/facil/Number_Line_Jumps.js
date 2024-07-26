function kangaroo(x1, v1, x2, v2) {
    // Write your code here
   let juntos = false

    if (v1 == v2 && x1 != x2) {
        return 'NO'
    }

    while (true) {
        x1 += v1
        x2 += v2
        if (x1 == x2) {
            juntos = true
            break
        }
        
        if ((v1 > v2 && x1 > x2) || (v1 < v2 && x1 < x2)) {
            break
        }
    }

    return juntos ? 'YES' : 'NO'
}

console.log(kangaroo(1, 2, 1, 2)) // YES
console.log(kangaroo(2, 1, 1, 2)) // YES
console.log(kangaroo(2, 1, 1, 3)) // YES