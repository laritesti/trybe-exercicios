// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function verificaValor(array){
  maiorValor = array[0];
  for(index = 0; index < array.length; index ++){
    if (array[index] > maiorValor) {
      maiorValor = array[index];
    }
  }
  return maiorValor;
}
console.log(verificaValor([2, 3, 60, 7, 10, 1]));