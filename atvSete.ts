/*10 pontos()
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let somaNumero : number = 0
let numero : number = parseInt(teclado(`digite um numero:`));

while(somaNumero <= 100){
    
    numero = parseInt(teclado(`digite um numero:`));
somaNumero = numero + somaNumero; 
}
