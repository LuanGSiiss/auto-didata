const imprimiResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // Por padrão o switch no JS, mesmo executando um dos cases, continua a percorrer o restante dos cases. Ao usar "break" ele irá sair do switch depois de executar um dos cases
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // O "default" é como se fosse o "else", será executado caso nenhuma das anteriores seja.
            console.log('Nota inválida')
    }
}

imprimiResultado(10) //Quadro de Honra
imprimiResultado(7) // Aprovado
imprimiResultado(5) // Recuperação
imprimiResultado(2) // Reprovado
imprimiResultado(24) // Nota inválida