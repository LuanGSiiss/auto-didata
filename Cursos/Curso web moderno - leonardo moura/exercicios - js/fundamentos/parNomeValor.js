// par nome/valor

//Contexto léxico é basicamente o nivel e coxteto da variavel ou const. 
//Nesse exemplo, uma const dentro de uma funcao pode ter o mesmo nome de uma const que foi declarada globalmente por conta do contexto dela ser dentro da funcao. Sendo léxico 2

const saudacao = 'Opa' //Contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor ou atribudo/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)