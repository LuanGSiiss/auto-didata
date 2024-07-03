const a = {name: 'Teste'} //Objetos no JS usam a copia por referencia(endereço), então a variavel ou constande guarda o endereço e não o valor
console.log(a) //Teste

const b = a
console.log(b) // Teste

b.name = 'Opa'
console.log(a) // Opa

let c = 3  //já os tipos primitivos da linguagem, como um number, guardam o valor
let d = c
d++
console.log(d) // 4
console.log(c) // 3

//Realmente Null e Undefined

let valor // não inicializada
console.log(valor)

valor = null //Ausência de valor
console.log(valor)
// console.log(valor.ToString()) // Erro!



const produto = {}
console.log(produto.preco)
console.log(produto) //Objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)