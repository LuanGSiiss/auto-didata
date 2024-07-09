let num1 = 1
let num2 = 2

num1++ // Incremento, acresenta uma unidade ao valor de num1
console.log(num1) // 2
--num1 // Decremento, decresenta uma unidade ao valor de num1
console.log(num1) // 1

console.log(++num1 === num2--) // É verdadeiro por conta do decremente estar após a comparação
console.log(num1 === num2) // Fuja de incrementos e decrementos em comparações