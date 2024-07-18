const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // O contexto lexico faz com que a função guardar a informação de onde ela foi escrita, por isso foi escrito "global"
}

exec() // Global