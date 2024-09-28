// Challenge link: https://edabit.com/challenge/9ApjPggCLGiPt573m
/**
 * Create a function that takes an array and a string as arguments
 * and returns the index of the string.
 *
 * -- examples
 * findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
 * findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
 * findIndex(["a", "g", "y", "d"], "d") ➞ 3
 * findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
 */
log = console.log

// With function
function findIndex(arr, str) {
    return arr.indexOf(str);
}
log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) //Logs out the find of the returned string which is 2

// With findIndex
let myArray1 = ["hi", "edabit", "fgh", "abc"];
log(myArray1.findIndex(str => str === 'fgh')); //Logs out the returned value of findIndex which is 2