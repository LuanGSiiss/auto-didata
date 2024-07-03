//No JS o "." é usado também no uso padrão(sem ser nos números)
//Como podemos ver, ele pode acessar uma função dentro de um objeto
//o "console.log()", onde o "console" é o objeto, o "log" a funcao e o "." como separador

console.log(Math.ceil(6.1))

//Nesse exemplo o "." é usado para acessar um atribudo dentro de um objeto
const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

