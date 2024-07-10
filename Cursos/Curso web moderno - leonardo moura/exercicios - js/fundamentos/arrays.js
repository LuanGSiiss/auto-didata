//Criando um array. O arrays não tem um tipo definido dentro deles e não tem tamanho, podem ser variaveis conforme você usa

const valores = [7.7, 8.9, 6.3, 9.2]; 
console.log(valores[0], valores[3]); 
console.log(valores[4]);  //Caso tente mostrar um indice que está fora do array, ele vai retornar "undefined"

valores[4] = 10;
console.log(valores); 
console.log(valores.length); //Diz o tamanho do array

valores.push({id: 3}, false, null, 'teste'); //Função para adicionar novos valores ao array, sempre adiciona ao final do array.
console.log(valores);

//Formas de apagar um valor do array
console.log(valores.pop()); //Remove o último elemento do array
delete valores[0]; // Deleta o valor no indice indicado
console.log(valores);

console.log(typeof valores) //No JS um array é um objeto.