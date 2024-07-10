const imprimiResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimiResultado(10) // Aprovado!
imprimiResultado(4) // Reprovado!
imprimiResultado('Epa!') // cuidado, como é fracamentos tipita, ele não vai dar erro a comparar um número com string, retorna-ra "false"
