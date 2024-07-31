function climbingLeaderboard(ranked, player) {
    // Write your code here
    for (let i = 0; i < player.length; i++) {
        let praque = -1
        for (let j = 0; j < ranked.length; j++) {
            if (player[i] >= ranked[j]) {
                // ordena novamente o rank
                if (player[i] == ranked[j] && praque == -1) {
                    praque = j + 1
                } else if (player[i] > ranked[j]) {
                    for (let c = ranked.length - 1; c > j ; c = c - 1) {
                        ranked[c] = ranked[c - 1]
                    }
    
                    ranked[j] = player[i]
                    
                    console.log(j + 1)
                    if (praque > -1) {
                        console.log(praque)
                    }
                
                    console.log(ranked)
                    break
                }
            }
        }
    }
}

climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])