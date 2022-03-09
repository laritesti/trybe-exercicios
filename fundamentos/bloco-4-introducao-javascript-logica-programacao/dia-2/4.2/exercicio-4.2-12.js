let numbers = [5, 9, 3, 19, 70, 8, 200, 2, 35, 27];
let smaller = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smaller) {
        smaller = numbers[index];
    }
}
console.log('O menor número é: ' + smaller)