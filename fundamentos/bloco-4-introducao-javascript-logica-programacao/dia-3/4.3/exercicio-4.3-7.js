//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando 
// e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let jogadorUm = 'pedra';
let jogadorDois = 'papel';

if (jogadorUm == 'pedra' && jogadorDois == 'tesoura') {
    console.log("Jogador 1 venceu!")
} else if (jogadorUm == 'pedra' && jogadorDois == 'papel') {
    console.log("Jogador 1 venceu!");
} else if (jogadorUm == 'tesoura' && jogadorDois == 'papel') {
    console.log("Jogador 1 venceu!");
} else if (jogadorUm == jogadorDois) {
    console.log("Empatou!"); 
} else {
    console.log("Jogador 2 venceu!");
}


