
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idade = 12;
let categoria = 0;

if (idade >= 18){
    categoria = 'maior de idade';
} else {
    categoria = 'menor de idade';
}
console.log('A pessoa é ' + categoria + '.');