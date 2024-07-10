const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// O "break" não age sobre o "if", ele irá procurar qual é a estrutura de repetição mais proxima para influenciar.
// Nesse caso, será no "for"
for (let x in nums) {
    if (x == 5) { 
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// O "continue" não age sobre o "if", ele irá procurar qual é a estrutura de repetição mais proxima para influenciar.
// Nesse caso, será no "for". Ele interrompe aquela repetição que foi usado, mas ainda continua no bloco for
for (let y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Não deve ser usado !!!
// Esse "externo" é um rotulo, foi criado um rotulo(ainda não foi estudado), assim pode ser usado "break" no "for" externo ao invez do interno.
externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}