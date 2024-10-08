let numbers = [23, 45, 14, 66, 94, 33, 4, 9];
let myNum = 30;

let smallNumbers = numbers.filter(function(num) {
    return num < myNum;
})

let bigNumbers = numbers.filter(function(num) {
    return num > myNum;
})

let oddNumbers = numbers.filter(function(num) {
    return num % 2 == 1
})

console.log(smallNumbers)
console.log(bigNumbers)
console.log(oddNumbers)