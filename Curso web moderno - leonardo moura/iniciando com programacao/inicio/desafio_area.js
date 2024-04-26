// Fazer a]um algoritmo para calcular a circunferencia de um circulo: PI * raio * raio

const PI = 3.1415;
let raio = 10;
let areaCirculo = PI * raio * raio;

console.log('O valor d aárea do circulo é ' + areaCirculo + ' m2');

areaCirculo = Math.PI * raio * raio; // Esse "Math.PI" é o PI do JS, assim não preciso criar uma constante para guardar o PI
console.log('O valor d aárea do circulo é ' + areaCirculo + ' m2');