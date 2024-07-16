const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) 
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //Com o "bind" é possível amarrar o "this" dentro de um contexto
falarDePessoa()

