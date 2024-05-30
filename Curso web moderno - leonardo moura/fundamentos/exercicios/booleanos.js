let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // o "!" serve como negação, se for colocado dois juntos é como um "não não", o que signigica "sim";

console.log('Os verdadeiros........'); //Outro ponto, o "!" é usado bastante para "forçar" o verdadeiro ou falso em valores que não são boolean, como nos exemplos. esses são as situações onde é verdadeiro
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = 33));

console.log('Os falsos........'); //Essão são situações que retorna "falso"
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = 0));

console.log('Para finalizar.......');
console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'Desconhecido'); // Basicamente, o JS já defini valores padrões de true ou false para coisas, como mostrado em cima.