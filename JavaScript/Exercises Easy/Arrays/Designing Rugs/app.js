/**
 * Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements.
 * Each element is a string consisting of either:
 *
 * The default character (hash #) repeating n times (if no proc is given).
 * The character passed in through the proc repeating n times.
 */
//
// let myString = 'Hey'
// console.log(myString.repeat(2))


function myRug(w, h, s = '#') {
    let myRugArr = []; // We crate an empty array
    let repeats = s.repeat(h) //We repeat the symbol thats passed into the third parameter with the second parameter as count

    for (let i = 0; i < w; i++) {
        myRugArr.push(repeats) //We push the repeated symbol into the array, the condition here is the first parameter
    }
    return myRugArr //Return the modified array
}

console.log(myRug(3, 5, 'a'))