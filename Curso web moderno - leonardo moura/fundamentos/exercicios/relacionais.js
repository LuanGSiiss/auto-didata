console.log('01)', '1' == 1) // true , Igual
console.log('02)', '1' === 1) // false , Estritamente Igual
console.log('03)', '3' != 3) // false , Diferente
console.log('04)', '3' !== 3) // false , Estritamente Diferente

console.log('05)', 3 < 2) // false, Menor que
console.log('06)', 3 > 2) // true, Maior que
console.log('07)', 3 <= 2) // true, Menor Igual
console.log('08)', 3 >= 2) // true, Maior Igual

const d1 = new Date(0) //Cria um objeto
const d2 = new Date(0) //Cria um objeto
//Como em objetos é copia por referencia, ele guarda o endereço de memoria, por isso sempre vai dar diferente
console.log('09)', d1 === d2) 
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) //Nesse caso, usamos uma função que transforma em milisegundos, um número, assim dá como true

console.log('12)', undefined == null)
console.log('13)', undefined === null)