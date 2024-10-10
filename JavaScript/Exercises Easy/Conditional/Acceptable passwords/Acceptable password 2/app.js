function isAcceptablePassword(pw) {
    const cond1 = pw.length > 6
    const myRegEx = /\d/
    const cond2 = myRegEx.test(pw)
    return cond1 && cond2
}

console.log(isAcceptablePassword('Helloworld'))