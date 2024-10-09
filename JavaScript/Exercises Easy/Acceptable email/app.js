
//User name (the local part)
/** Explanation
 * This regex looks for one or more characters that are not
 * whitespace (\s) or the @ symbol.
 * We also have a look ahead that makes sure we end it before the @ symbol
 */
const userName = /^[^\s@]+(?=@)/;

//Domain name
/** Explanation
 * This regex matches the @ symbol followed by one ore more characters
 * that are not whitespace or the @ symbol.
 */
const domainName = /@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})$/

//Count at symbols
/**
 * This regex matches the @ in the string and returns an array with the matches found
 * We can use this to check its length, as we only want one at in this email
 */
const atSymbols = /@/g;

function testEmail(email) {
    const atS = email.match(atSymbols)
    const userN = userName.test(email)
    const domainN = domainName.test(email) && atS.length < 2

    return `Username: ${userN}, Domain: ${domainN}`
}

// console.log(testEmail('yosmelchiang@gmail.com')) // Username: true, Domain: true
// console.log(testEmail('yosmel.chiang@gmail.com')) // Username: true, Domain: true
// console.log(testEmail('yosmelchiang@ gmail.com')) // Username: true, Domain: false
// console.log(testEmail('yosmelchiang@gmailcom')) // Username: true, Domain: false
// console.log(testEmail('yosmelchiang@@gmail.com')) // Username: true, Domain: false


// Putting it all together in one Regular Expression
/**
 * As we cna see, we dont have to handle multiple @ symbols the same way as before
 * Because its being handled by the positive lookahead (?=@) which expects exactly one @ after username
 * The rest of the pattern [a-zA-Z0-9-] expects letters, numbers and hypens, after a single @ symbol
 */
const emailValidation = /^[^\s@]+(?=@)@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,}){1,2}$/

function checkEmail(em) {
    const cEmail = emailValidation.test(em)
    return cEmail
}

console.log(checkEmail('yosmelchiang@gmail.com'));    // true
console.log(checkEmail('yosmel.chiang@gmail.com'));    // true
console.log(checkEmail('yosmelchiang@ gmail.com'));    // false (space after @)
console.log(checkEmail('yosmelchiang@gmailcom'));       // false (missing dot)
console.log(checkEmail('yosmelchiang@@gmail.com'));     // false (multiple @)
console.log(checkEmail('yosmelchiang@gmail.co.za'));

