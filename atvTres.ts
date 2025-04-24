/*10 pontos ()
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let numeroUm : number = parseInt(teclado(`escolha um numero:`));
let numeroMaior : number = 10;
let numeroMenor : number = 0;
let numeroAchado : boolean = false;

while(numeroAchado == false){
if (numeroUm<numeroMaior && numeroUm>=numeroMenor){
    console.log(`o numero ${numeroUm} esta entre ${numeroMenor} e ${numeroMaior}`);
    numeroAchado = true;
    
}
numeroMenor += 10;
numeroMaior += 10;

}


    