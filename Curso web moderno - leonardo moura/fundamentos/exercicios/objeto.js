//Criando um objeto

const prod1 = {};
// No JS, ele tem a criação dinamica, então mesmo que anteriormente não existia o atribudo "nome", ao mesmo tempo que eu defino um valor eu crio o atribudo.
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;

console.log(prod1);

//criando já definindo os atribudos e valores na declaração
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

const prod3 = {
    nome: 'Calça Jeans',
    preco: 80.90,
    obj: {        //Exemplo objeto dentro de outro objeto
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

// JSON é diferente de objeto, JSON é um formato textual. Exemplo de JSON'{ "nome": "Camisa Polo", "preco": 79.90}'

console.log(prod2);
console.log(prod3);