// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function verificaValor(array){
  menorValor = array[0];
  for(index = 0; index < array.length; index ++){
    if (array[index] < menorValor) {
      menorValor = array[index];
    }
  }
  return menorValor;
}
console.log(verificaValor([2, 3, 60, 7, -100, 1]));