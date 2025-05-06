/*10 pontos ()
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let contador: number = 0;
let numeroPar: number = 0;
let numeroInpar: number = 0;
let quantPar: string = (` `);
let quantImpar: string = (` `);

while (contador <= 10) {
    let numero: number = parseInt(teclado(`digite um numero:`));

    if (numero % 2 == 0) {
        quantPar += numero + (`, `);
        numeroPar++

    } else {
        quantImpar += numero + (`, `);
        numeroInpar++
    }
    contador++
}

console.log(`quantidade de numeros pares`, numeroPar)
console.log(`numeros que são pares`, quantPar)
console.log(`quantidade de numeros impares`, numeroInpar)
console.log(`numeros que são impares`, quantImpar)