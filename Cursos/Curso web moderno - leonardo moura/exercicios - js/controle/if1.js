function soBoaNoticia (nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // Aprovado com 8.1
soBoaNoticia(6.1) //

function seForVerdadeEuFalo(valor) {
    if (valor) {     // Está sendo passado apenas uma valor se operadores relacionas, o JS vai dar um valor de "true" ou "false" dependo do que foi informado, assim executando, ou não, o if
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // false, logo não vai imprimir nada na tela
seForVerdadeEuFalo(null) // false, logo não vai imprimir nada na tela
seForVerdadeEuFalo(NaN) // false, logo não vai imprimir nada na tela
seForVerdadeEuFalo('') // false, logo não vai imprimir nada na tela
seForVerdadeEuFalo(0) // false, logo não vai imprimir nada na tela
seForVerdadeEuFalo(-1) // true, -1
seForVerdadeEuFalo('Luan') // true, Luan
seForVerdadeEuFalo('?') // true, ?
seForVerdadeEuFalo([]) // true, mesmo sendo um array vazio, ainda e verdadeiro
seForVerdadeEuFalo([1, 2]) // true, 1, 2
seForVerdadeEuFalo({}) // true, mesmo sendo um objeto vazio, ainda e verdadeiro