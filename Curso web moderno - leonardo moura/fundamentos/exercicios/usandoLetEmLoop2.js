//Esse exemplo usa o Let, assim funciona como se espera, isso por conta do escoboco de bloco
const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // 2
funcs[8]() // 8