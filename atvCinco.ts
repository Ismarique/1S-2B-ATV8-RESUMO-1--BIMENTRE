/*10 pontos ()
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: Ismael Henrique Cardoso dos Santos
*/
const teclado = require(`prompt-sync`)();

let numero1 : number = parseInt(teclado(`primeiro numero:`));
let numero2 : number = parseInt(teclado(`segundo numero:`));
let numero3 : number = parseInt(teclado(`terceiro numero:`));
let numero4 : number = parseInt(teclado(`quarto numero:`));
let numero5 : number = parseInt(teclado(`quinto numero:`));

let media : number = (numero1 + numero2 + numero3 + numero4 + numero5)/5;
console.log(`a media é: ${media}`);

if (numero1>numero2 && numero1>numero3 && numero1>numero4 && numero1>numero5){
console.log(`o maior numero é:${numero1} `)
}

if (numero2>numero1 && numero2>numero3 && numero2>numero4 && numero2>numero5){
    console.log(`o maior numero é: ${numero2}`)
    }

if (numero3>numero1 && numero3>numero2 && numero3>numero4 && numero3>numero5){
        console.log(`o maior numero é: ${numero3}`)
}

if (numero4>numero1 && numero4>numero2 && numero4>numero3 && numero4>numero5){
    console.log(`o maior numero é ${numero4}`)
    }

if (numero5>numero1 && numero5>numero2 && numero5>numero3 && numero5>numero4){
        console.log(`o maior numero é ${numero5}`)
        }

        if (numero1<numero2 && numero1<numero3 && numero1<numero4 && numero1<numero5){
            console.log(`o menor numero é:${numero1} `)
            }
            
            if (numero2<numero1 && numero2<numero3 && numero2<numero4 && numero2<numero5){
                console.log(`o menor numero é: ${numero2}`)
                }
            
            if (numero3<numero1 && numero3<numero2 && numero3<numero4 && numero3<numero5){
                    console.log(`o menor numero é: ${numero3}`)
            }
            
            if (numero4<numero1 && numero4<numero2 && numero4<numero3 && numero4<numero5){
                console.log(`o menor numero é ${numero4}`)
                }
            
            if (numero5<numero1 && numero5<numero2 && numero5<numero3 && numero5<numero4){
                    console.log(`o menor numero é ${numero5}`)
                    }