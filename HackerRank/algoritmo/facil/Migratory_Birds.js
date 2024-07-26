function migratoryBirds(arr) {
    // Write your code here
    let contagemPassaros = {}

    //Percorre todo o array de avistamente de aves e coloca, dinamicamente, dentro de um objeto
    arr.forEach(num => {
        if (contagemPassaros[num]) {
            contagemPassaros[num] += 1
        } else {
            contagemPassaros[num] = 1
        }
    })

    let maiorQuant = 0
    let idMaiorPassaro = 0
    let atributos = Object.keys(contagemPassaros)

    for (let i in atributos) {
        let atributosNumber = parseInt(atributos[i])

        if (contagemPassaros[atributos[i]] >= maiorQuant) {
            if (contagemPassaros[atributos[i]] == maiorQuant) {
                let idMaiorPassaroNumber = parseInt(idMaiorPassaro)
                if (idMaiorPassaroNumber > atributosNumber) {
                    idMaiorPassaro = atributos[i]
                }
            } else {
                maiorQuant = contagemPassaros[atributos[i]]
            idMaiorPassaro = atributos[i]
            } 
        }
        
    }

    console.log(contagemPassaros) // Pode remover, nao foi pedido
    console.log(idMaiorPassaro) // Pode remover, nao foi pedido
    console.log(maiorQuant) // Pode remover, nao foi pedido

    return idMaiorPassaro
}

migratoryBirds([1, 4, 4, 4, 5, 3])

// versão podre
/*
for (let chave in contagemPassaros) {
    let atributoString = contagemPassaros[chave]
    let atributo = parseInt(atributoString)
        
    if (contagemPassaros[atributo] > maiorQuant) {
        idMaiorPassaro = atributo
        maiorQuant = contagemPassaros[atributo]
    }
    if (contagemPassaros[atributo] == maiorQuant) {
        if (idMaiorPassaro > atributo) {
            idMaiorPassaro = atributo
        }
    }
}
*/