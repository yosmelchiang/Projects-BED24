/**
 * Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.
 * Create a function which takes a string txt and returns a list of numbers with count of uppercase letters,
 * lowercase letters, numbers and special characters.
 */

// Challenge link: https://edabit.com/challenge/KWkWjHNzgCqM6yPBa

// let myString = '*$(#Mu12bas43hiR%@*!'
// let myNumbers = new RegExp(/\d/g) //Match digits
// let myWordsLower = new RegExp(/[a-z]/g)
// let myWordsUpper = new RegExp(/[A-Z]/g)
// let mySymbol = new RegExp(/[\W]/g)
//
// console.log(`Found ${myString.match(myWordsUpper).length} uppercase letters`)
// console.log(`Found ${myString.match(myWordsLower).length} uppercase letters`)
// console.log(`Found ${myString.match(myNumbers).length} numbers`)
// console.log(`Found ${myString.match(mySymbol).length} special characters`)

function filterString(txt) {
    let myNumbers = new RegExp(/\d/g) //Match digits
    let myWordsLower = new RegExp(/[a-z]/g) //Match lower
    let myWordsUpper = new RegExp(/[A-Z]/g) //Match Upper
    let mySymbol = new RegExp(/[\W]/g) //Match
    return [txt.match(myWordsUpper).length, txt.match(myWordsLower).length, txt.match(myNumbers).length, txt.match(mySymbol).length]
}

console.log(filterString('*$(#Mu12bas43hiR%@*!'))
