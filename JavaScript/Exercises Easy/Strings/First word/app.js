
/* You are given a string and you have to find its first word.
- The input string consists of only English letters and spaces.
- There aren’t any spaces at the beginning and the end of the string.
 */

function firstWord(text) {
    let arr = text.split(' ')
    let firstW = arr.shift()
    return firstW;
}

console.log("Example:");
console.log(firstWord("Hello world"));