let numbers = [5, 9, 3, 19, 70, 8, 200, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
}

let arithmeticAverage = sum / numbers.length

if (arithmeticAverage > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}