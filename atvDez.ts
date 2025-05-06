/*10 pontos()
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Ismael Henrique Cardoso dos Santos
*/
console.clear()
const teclado = require(`prompt-sync`)();

let idade : number = 0
let altura : number = 0
let contador : number = 0
let mediaSom : number = 0
let contadorPessoa : number = 0


while(contador<10){
idade = parseInt(teclado(`digite a idade:`))
altura = parseInt(teclado(`digite a altura:`))
if (idade>=18){
mediaSom += altura
contadorPessoa++
contador++
}
contador++
}
let media : number = mediaSom/contadorPessoa;
console.log(`a media de altura dos maiores de 18 anos é ${media}`)
