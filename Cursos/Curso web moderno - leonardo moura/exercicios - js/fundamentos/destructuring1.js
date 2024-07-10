//Novo resurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Esse é o destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

//Caso queria mudar o nome da constante
const { nome: n, idade: i} = pessoa
console.log(n, i)

//Exemplo se acessar atribudos que não existem
const { sobrenome, bemHumarada = true} = pessoa
console.log(sobrenome, bemHumarada)

//atribudos aninhados
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)