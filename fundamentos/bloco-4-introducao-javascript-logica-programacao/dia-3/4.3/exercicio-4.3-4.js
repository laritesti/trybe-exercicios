let maiorPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let primo = true;
  for (let divisorAtual = 2; divisorAtual < index; divisorAtual += 1) {
    if (index % divisorAtual === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = index;
  }
}

console.log(maiorPrimo);