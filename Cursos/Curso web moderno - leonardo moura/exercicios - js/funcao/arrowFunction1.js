//função normal
let dobro = function (a) {
    return 2 * a
}

//função arrow
dobro = (a) => { return 2 * a
}

//É possível remover as chaves caso tenha apenas uma linha, o "return" fica implícido
dobro = (a) => 2 * a
console.log(dobro(Math.PI))

//outro exemplo
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())