const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //Valida e o tipo do número é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 * avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // O comando toFixed(2) para limitar a quantidade de casas decimais que aparecem
console.log(media.toString(2)); // Esse comando transforma um number em uma string, no caso da imagem, fez a conversão para binário.
console.log(typeof media);