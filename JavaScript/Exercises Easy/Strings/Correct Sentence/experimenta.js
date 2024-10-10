//How do we find the first word of an index

log = console.log;
let mySentence = 'Greetings, young man.'

//Great, how do we check if the word is uppercase?
//We can do that with rgex

let myRegex = /^[a-z]/

let isLower = /^[a-z]/.test(mySentence)


//Thats done, now how do we get the lsat word in a string
log(mySentence[mySentence.length-1])

//How do we check if the lat string is a dot
//Simple, regex

let missingDot = !/\.$/.test(mySentence)



if (isLower){
    let firstChar = mySentence[0]
    let upperChar = firstChar.toUpperCase()
    mySentence = mySentence.replace(firstChar, upperChar)
} else if(missingDot) {
    mySentence = mySentence.concat('.')
}
log(mySentence)