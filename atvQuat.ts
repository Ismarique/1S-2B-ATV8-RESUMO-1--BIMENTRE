/*10 pontos ()
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();
let parar : boolean = false;
let quantNumero : number = 0;
let soma : number = 0;
console.clear();
while(parar == false){
let numeroTeclado : number =  parseInt(teclado(`escolha um numero:`));
quantNumero ++;
soma = numeroTeclado + soma;

console.log(`deseja parar ?
    1- sim 
    2- não`);
    let escolha : number =  parseInt(teclado(`escolha um desses numeros:`));

    if (escolha == 1 ){
parar = true;
}
}
console.clear();
let media : number = soma / quantNumero;

console.log(`a média desses numeros é ${media}`);