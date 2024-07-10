function comprar(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "||" é o "ou"
    const comprarTv50 = trabalho1 && trabalho2 // "&&" é o "e"
    const comprarTv32 = trabalho1 != trabalho2 // Não exite ou exclusivo para booleans, então pode ser usado o artificio da relação de diferente para usar isso.
    const manterSaudavel = !comprarSorvete // negação, operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //Estamos usando um recurso do ECMAscript 2015. Onde é possível criar um objeto sem citar atribudo e valor, apenas usando o valor, ele cira automatico
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))