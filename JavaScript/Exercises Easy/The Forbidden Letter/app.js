/**
 * Given a letter and an array of words, return whether the letter does not appear in any of the words.
 *
 * -- Examples
 * forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
 * forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
 * forbiddenLetter("m", []) ➞ true
 * --
 */
log = console.log

// let myArray = ["rock", "paper", "scissors"];
// let joined = myArray.join('')
// log(joined.includes('r'))

function forbiddenLetter(fLetter, array) {
    let joinedArr = array.join('')
    let included = joinedArr.includes(fLetter);
    if (included == true) {
        log(false)
    } else {
        log(true)
    }
}


forbiddenLetter('r', ["rock", "paper", "scissors"]) // false, r exists in the array
forbiddenLetter('a', ["spoon", "fork", "knife"]) // true, a does not exist in the array
forbiddenLetter('m', []) // true, m does not exist in the array