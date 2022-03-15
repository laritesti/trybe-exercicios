// Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let primo = true;
  for (let divisorAtual = 2; divisorAtual < index; divisorAtual += 1) {
    if (index % divisorAtual === 0) {
        console.log(index, divisorAtual)
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);