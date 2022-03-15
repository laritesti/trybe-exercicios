// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index ++) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}
for (let index = 0; index < array.length; index ++) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}
console.log(maior);
console.log(menor);