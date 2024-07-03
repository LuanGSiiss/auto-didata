{
    {
        {
            { 
                var sera = 'Será???' 
            }
        }
    }
}
//Variaveis são "universais" então podem ser vistas fora do escobo/bloco que foram declaradas
console.log(sera) // Será???

//No caso de funções, ela somente é usada dentro da função, não importa se for com Let ou Var
function teste() {
    var local = 123
}

teste()
console.log(local) // *local is not defined