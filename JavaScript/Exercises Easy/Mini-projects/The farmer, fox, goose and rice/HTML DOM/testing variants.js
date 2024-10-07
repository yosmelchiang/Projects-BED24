let myArray = [1, 10, 20, 50]
// console.log(myArray.filter(num => num < 15));

// For loop
// let filteredArray = []

// for (let i = 0; i < myArray.length; i++) {
//     if(myArray[i] < 15) {
//         filteredArray.push(myArray[i])
//     }
// }

// console.log(filteredArray)

let filteredArray = []

for (let num of myArray) {
    if (num < 15) {
        filteredArray.push(num);
    }
}

console.log(filteredArray)