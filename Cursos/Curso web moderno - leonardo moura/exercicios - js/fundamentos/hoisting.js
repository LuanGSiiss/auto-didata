//normalmente a linguague iria dar um erro por conta de variavel não ter sido declarada, 
// mas por conta de do hoisting ele sabe que a variavel existe

console.log('a = ', a) // undefinded
var a = 2
console.log('a = ', a) // 2

// Esse efeito de hoisting não acontece com o let
console.log('b = ', b) // ERRO
let b = 3