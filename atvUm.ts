/* (5 pontos) ()
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Ismael Henrique Cardoso dos Santos
*/

const teclado = require(`prompt-sync`)();

let x : number = parseInt(teclado(`valor de x:`));
let y : number = parseInt(teclado(`valor de y:`));
let z : number = x;
console.log (`valor de x:${y} `);
console.log (`valor de y:${x} `);