// 2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisiveis = 0;

for (let index = 2; index <= 150; index ++) {
    if (index % 3 === 0) {
        divisiveis += 1;
    }
}

if (divisiveis === 50) {
    console.log("Mensagem secreta.");
} else {
    console.log(divisiveis);
}