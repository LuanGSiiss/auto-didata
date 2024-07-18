console.log(soma(3, 4)) /* A vantagem da function declaration é poder usar antes de ser declarada.
isso pq o interpretador do JS olha todas as funções antes de começar a executar o código*/

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// Pouca usada
// named function expression
const mult = function mult(x, y) {
    return x * y
}