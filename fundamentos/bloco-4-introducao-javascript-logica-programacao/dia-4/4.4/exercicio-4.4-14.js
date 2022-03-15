// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne 
// o somatório de todos os números de 1 até N.

function somaNumeros(N) {
  let resultado = 0;
  for (let index = 1; index <= N; index ++) {
    resultado += index;
  }
  return resultado;
}
console.log(somaNumeros(10));