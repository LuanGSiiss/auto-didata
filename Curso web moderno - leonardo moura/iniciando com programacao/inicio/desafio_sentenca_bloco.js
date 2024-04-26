/*
    bloco 1
    1
    3
    5
    7
    9
    
    bloco 2
    2
    4
    6
    8
    10
*/

//Jeito do professor

{
    console.log(1);
    console.log(3);
    console.log(5);
    console.log(7);
    console.log(9);
}
{
    console.log(1);
    console.log(3);
    console.log(5);
    console.log(7);
    console.log(9);
}


//Meu jeito avançado

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}