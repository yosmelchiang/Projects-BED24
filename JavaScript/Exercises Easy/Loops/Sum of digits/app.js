// Example output
// console.log(sumDigits(123)); // Output: 6 (1 + 2 + 3)

const log = console.log

function sumDigits(num) {
    const myArray = num.toString().split('')
    let sumForOfLoop = 0;
    let sumForLoop = 0;

    for(let d of myArray) { //For of loop
        sumForOfLoop += Number(d)
    }

    for(let i = 0; i < myArray.length; i++) { //For loop
        sumForLoop += Number(myArray[i])
        log('Iteration ' + [i] + ' = ' +sumForLoop) //This is just for learning purposes
    }

    // return 'Sum of digits: ' + sumForOfLoop;
    return 'Sum of digits: ' + sumForLoop;
}

log(sumDigits(123))