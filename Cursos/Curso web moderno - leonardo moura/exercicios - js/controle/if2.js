function teste1(num) {
    if(num > 7) // Caso tenha apenas uma sentença associada a um if, pode não ser colocado as chaves
        console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) // No JS é possível criar sentenças vazias. Nesse caso, o ";" está delimitando uma senteça vazia, então o if está relacionado a uma sentença vazia
        ; // Sentença vazia
    
    {
        console.log(num)
    }
}

teste2(6) // 6
teste2(8) // 8