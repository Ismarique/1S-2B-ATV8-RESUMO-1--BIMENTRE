/* 10 pontos()
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let numeroU : number =  parseInt(teclado(`digite um numero:`));
let numeroD : number =  parseInt(teclado(`digite outro numero:`));
let numeroMaior : number;
let numeroMenor : number;
let numero: number;

if (numeroU>numeroD){
numeroMaior = numeroU
numeroMenor = numeroD
}else{
    numeroMenor = numeroU
    numeroMaior = numeroD
}

numero = numeroMenor
console.log(`os numeros impares nesse intervalo são:`)
while(numero <= numeroMaior){

if(numero%2!=0) {
console.log(numero)
}
numero++
}