// 5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 27;
let idadeMurilo = 14;
let idadeBaeta = 1;

if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
    console.log("Baeta é a mais nova.");
} else if (idadeCarolzita < idadeBaeta && idadeCarolzita < idadeMurilo) {
    console.log("Carolzita é a mais nova.");
} else {
    console.log("Murilo é o mais novo.");
}