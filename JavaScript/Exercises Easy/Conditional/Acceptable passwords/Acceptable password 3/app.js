function isAcceptablePassword(pw) {
    const cond1 = pw.length > 6 //Passwod has to be longer than 6 characters
    const cond2 = /\d/.test(pw) //Matches digits
    const cond3 = /\D/.test(pw) //Matches anything that is NOT a digit
    return cond1 && cond2 && cond3
}

console.log(isAcceptablePassword('short')) //False - To short
console.log(isAcceptablePassword('Helloworld')) //Fale - No digits
console.log(isAcceptablePassword('muchlonger5')) //True - Has at least 1 digit
console.log(isAcceptablePassword('555')) //False - Has only digits