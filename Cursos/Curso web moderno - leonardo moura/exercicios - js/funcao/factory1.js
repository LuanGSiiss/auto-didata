// função factory é uma função que retorna um objeto, ela serve para "fabricar" novos objetos.

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


// Jeito de criar objeto com o mesmo modelo, sem usar factory

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 135
}