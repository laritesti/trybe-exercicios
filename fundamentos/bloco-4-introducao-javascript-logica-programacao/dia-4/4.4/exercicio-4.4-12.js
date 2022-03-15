// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function verificaCaracteres(array){
  maisCaracteres = array[0];
  for(index = 0; index < array.length; index ++){
    if (maisCaracteres.length < array[index].length) {
      maisCaracteres = array[index];
    }
  }
  return maisCaracteres;
}
console.log(verificaCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));