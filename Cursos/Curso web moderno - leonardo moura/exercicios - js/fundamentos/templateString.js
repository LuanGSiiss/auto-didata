const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`; // O template serve para fazer concatenasoes mais simples, o que deseja ser concatenado deve ser colocado no "${}"
console.log(concatenacao, template); 

//expressoes
console.log(`1 + 1 = ${1 + 1}`);