/* 10 pontos()
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno: Ismael Henrique Cardoso dos Santos*/

const teclado = require(`prompt-sync`)();

let generoM : number = 0;
let generoF :number = 0;
let quantF : number = 0
let quantM : number = 0
let soma : number = 0

let somaIdade : number = 0
while ((generoF+generoM) <= 50) {
let idade : number = parseInt(teclado(`digite a idade:`));
let pergunta : string = teclado(`qual o genero:(M/F)`);

if (pergunta == "F"){
generoF++
quantF=quantF+idade
}

if (pergunta == "M"){
    generoM++
    quantM=quantM+idade
    }


}
let mediaM : number = quantM / generoM;
let mediaF : number = quantF / generoF;

console.log(`media masculina: ${mediaM.toFixed(2)}
media feminina: ${mediaF}`)
