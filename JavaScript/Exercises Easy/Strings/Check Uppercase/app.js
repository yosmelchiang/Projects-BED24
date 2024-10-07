// Check if a given string has all symbols in upper case. 
// If the string is empty or doesn't have any letter in it - function should return true.

function isAllUpper(text) {
    let toUp = text.toUpperCase() //Først gjør vi teksten stor
    return text == toUp //Så ser vi om disse er like, returns a boolean
}

console.log(isAllUpper('exaMple')) //false
console.log(isAllUpper('example')) //false
console.log(isAllUpper('ALL UPPER')) //true