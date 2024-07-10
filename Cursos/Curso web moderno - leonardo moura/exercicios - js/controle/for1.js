//Exemplo com while
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

//Pegando essa estrutura só que usando o "for"
// no for temos tres partes entre parenteses: 
// 1) Declaração da varíavel para controle;
// 2) Condição para interromper;
// 3) Alteração da varíavel para controle. 

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}