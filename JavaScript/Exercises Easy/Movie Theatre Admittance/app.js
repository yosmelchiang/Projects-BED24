/**
 * Write a function that checks whether a person can watch an MA15+ rated movie.
 * One of the following two conditions is required for admittance:
 *
 * The person is at least 15 years old.
 * They have parental supervision.
 * The function accepts two parameters, age and isSupervised. Return a boolean.
 *
 * -- Examples
 * acceptIntoMovie(14, true) ➞ true
 * acceptIntoMovie(14, false) ➞ false
 * acceptIntoMovie(16, false) ➞ true
 * --
 *
 * -- Notes
 * age is a decimal.
 * isSupervised is a boolean.
 * --
 */
log = console.log

// //Main options
// function acceptIntoMovie(age, isSupervised) {
//     if (parseInt(age) > 15 || isSupervised == true) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Another option, but will return a string instead of true/false
// function acceptIntoMovie(age, isSupervised) {
//     let doorMan = (parseInt(age) > 15 || isSupervised == true) ? 'You shall pass' : 'You shall not pas';
//     return doorMan;
// }

// Another option, dropping the whole ternary operator thing
// function acceptIntoMovie(age, isSupervised) {
//     return (parseInt(age) > 15 || isSupervised == true);
// }

// Simplified with arrow functon
const acceptIntoMovie = (age, isSupervised) => (parseInt(age) > 15 || isSupervised == true);

log(acceptIntoMovie(14, true))