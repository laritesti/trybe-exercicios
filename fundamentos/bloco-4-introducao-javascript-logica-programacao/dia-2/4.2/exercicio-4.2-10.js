let numbers = [5, 9, 3, 19, 70, 8, 20, 2, 35, 27];
let largerNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > largerNumber) {
        largerNumber = numbers[index];
    }
}

console.log("O maior número é: " + largerNumber)