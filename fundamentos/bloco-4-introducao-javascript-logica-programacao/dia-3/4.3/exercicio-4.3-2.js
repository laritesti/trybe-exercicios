let word = 'tryber';
let inverso = '';

for (let index = 0; index < word.length; index++) {
    inverso += word[word.length - 1 - index];
}
console.log(inverso);