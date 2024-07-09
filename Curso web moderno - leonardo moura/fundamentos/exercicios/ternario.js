//Nesse caso, usamos uma função arrow, o operador ternario é "?". Será retorna uma coisa caso seja verdadeiro e outra caso falso
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.6))