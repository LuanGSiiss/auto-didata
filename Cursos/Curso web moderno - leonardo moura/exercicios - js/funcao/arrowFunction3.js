let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // True

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Faz com que o this aponte sempre para "obj" na função
comparaComThis(global) // False
comparaComThis(obj) // True

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) // False
comparaComThisArrow(this) // True
comparaComThisArrow(module.exports) // True

// O Bind não consegue forçar uma função arrow a apontar para um determinado objeto
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //False