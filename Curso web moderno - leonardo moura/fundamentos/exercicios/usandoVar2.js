var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
// Como var é global, ele vai substituir o valor
console.log('fora = ', numero)