const escola = "Cod3r";

console.log(escola);
console.log(escola.charAt(4)); //Escolhe o caractere no indice 4 da stringe, as string começão com indice 0
console.log(escola.charCodeAt(3)); //Diz qual é o numero na tabela ASC do caractere selecionado.
console.log(escola.indexOf('3')); //serve para verificar se existe aquele caractere na string, se sim, retorna em qual posição se encontra

console.log(escola.substring(1)); //Serve para escolher em qual posicão da string ele vai começar a escrever, no caso, vai imprimir "od3r"
console.log(escola.substring(0, 3)); //Serve para escolher em qual posicão da string ele vai começar e terminar a escrever, no caso, ele não conta a última posição, vai imprimir "Cod"

console.log('Escolha '.concat(escola).concat("!")); //Serve para concatenar strings
console.log(escola.replace(3, 'e')); //Serve para pegar um caractere e trocar por outro
console.log(escola.replace('d', '1'));

console.log('Ana,Maria,Pedro'.split(',')); //Serve para pegar uma string e separar em um array com base em um condição pode ser definida