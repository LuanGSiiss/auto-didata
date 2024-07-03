//Como foi usada um var, o i continua a valer, já que é global
for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i = ', i) // i is not defined
