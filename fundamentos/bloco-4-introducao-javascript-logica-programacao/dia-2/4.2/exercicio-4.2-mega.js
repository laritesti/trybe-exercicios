let jogoLarissa = [7, 14, 28, 22, 37, 49];

let numero1 = 7;
let numero2 = 15;
let numero3 = 22;
let numero4 = 49;
let numero5 = 37;
let numero6 = 14;

let sorteio = [numero1, numero2, numero3, numero4, numero5, numero6];
let acertos = 0;

for (let index = 0; index < jogoLarissa.length; index += 1) {
    for (let index2 = 0; index2 < sorteio.length; index2 += 1) {
        if (sorteio[index2] === jogoLarissa[index]) {
            acertos += 1;
            console.log('Acertouuu! Número: ' + [index2]);
        } 
    }
}

console.log('Jogo da Larissa: ' + jogoLarissa);
console.log('Resultado do sorteio: ' + sorteio);
console.log('Você acertou ' + acertos + ' números.')
