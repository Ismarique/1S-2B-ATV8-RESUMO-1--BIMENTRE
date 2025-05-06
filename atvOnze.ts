/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Ismael Henrique Cardosos dos Santos
*/
const teclado = require(`prompt-sync`)();
let valor : number = 0
console.log(`1 - Onix / 2 - Saveiro / 3 - Tracker  / 4 - Montana`)
let modelos = parseInt(teclado(` modelos de carros:`));

if (modelos == 1){
valor = 1600
}
if (modelos == 2){
valor = 1500
}
if (modelos == 3){
valor = 2000
}
if (modelos == 4){
valor = 3000
}
console.log(`1 - a vista / 2 - parcelado`)
let formaP = parseInt(teclado(` forma de pagamento:`));

if (formaP == 1 ){
valor = valor-(15/100*valor);
}
if (formaP == 2 ){
    valor = valor+(13/100*valor);
    }
console.log(`o preço do carro é :${valor}`)