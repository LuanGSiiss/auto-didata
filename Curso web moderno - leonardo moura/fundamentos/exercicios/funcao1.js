// Funcao sem retorno
function imprimiSoma(a, b){
    console.log(a + b)
}

imprimiSoma(2, 3)
//Coisa entranha em JS, você pode colocar apenas um dos parametros na funcao, o outro vai receber undefined
imprimiSoma(2) //Somar um number com undefined retorna um NaN

//Funcao com retorno
function soma(a, b = 0) { // É possível deixar um parametro definido com um valor padrão, como b = 0
    return a + b
}

// Nesse caso, eu preciso usar o console.log por conta de a function só retornar o valor e não escrever
console.log(soma(2, 3))
console.log(soma(2))