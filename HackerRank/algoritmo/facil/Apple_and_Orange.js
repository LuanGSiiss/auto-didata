function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesNaCasa = 0
    let orangesNaCasa = 0
    
    apples.forEach(apple => {
        if (apple > 0 && a + apple >= s && a + apple <= t) {
            applesNaCasa += 1
        }
    })
    oranges.forEach(orange => {
        if (orange < 0 && b + orange >= s && b + orange <= t) { // está sendo somado pois "15 +(- 5) = 10"
            orangesNaCasa += 1
        }
    })
    
    console.log(applesNaCasa)
    console.log(orangesNaCasa)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
countApplesAndOranges(7, 11, 5, 15, [-1, -1, -1], [5, -6])