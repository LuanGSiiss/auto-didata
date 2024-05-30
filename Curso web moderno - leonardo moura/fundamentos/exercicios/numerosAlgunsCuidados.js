console.log(7 / 0); // ele retorna "Infinity"
console.log("10" / 2); //Retorna 5, mesmo sendo uma string. O javascript verifica se o conteúdo da string pode ser convertido para um number, se sim, ele faz a operação normal.
console.log("Show" * 2);
console.log(0.1 + 0.7); // Algumas operações com ponto flutuante podem ter alguma imprecisão por conta do modelo que o Javascript usa.
// console.log(10.toString(2));
console.log((10).toString(2)) //Você não consegue usar uma função diretamente com o valor literal, mas pode usar parenteces que ele aceita.