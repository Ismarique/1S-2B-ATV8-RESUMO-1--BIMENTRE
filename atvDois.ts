/* (5 pontos) ()
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let n1 : number = parseInt(teclado(`primeiro numero:`));
let n2 : number = parseInt(teclado(`segundo numero:`));
let n3 : number = parseInt(teclado(`terceiro numero:`));

if (n1>n2 && n1>n3 && n3<n2){
console.log(`${n1}, ${n2}, ${n3}`)

}
if (n1>n2 && n1>n3 && n3>n2){
    console.log(`${n1},${n3}, ${n2} `)
}

 if (n2>n1 && n2>n3 && n1<n3){
console.log(`${n2}, ${n3}, ${n1}`)
}

if (n2>n1 && n2>n3 && n1>n3){
    console.log(` ${n2}, ${n1}, ${n3}`)
}

if (n3>n1 && n3>n2 && n1<n2){
    console.log(`${n3}, ${n2}, ${n1}`)
}

if (n3>n1 && n3>n2 && n1>n2){
    console.log(`${n3}, ${n1}, ${n2}`)
}