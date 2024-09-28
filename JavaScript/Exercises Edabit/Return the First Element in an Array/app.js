/**
 * Create a function that takes an array containing
 * only numbers and return the first element.
 * -- samle data
 * getFirstValue([1, 2, 3]) ➞ 1
 * getFirstValue([80, 5, 100]) ➞ 80
 * getFirstValue([-500, 0, 50]) ➞ -500
 */

// console log shortcut
log = console.log

// Which method are we using?
// let myArra = [1, 2, 3];
// log(myArra.shift())

//Which function works best here?
//1 parameter, 1 statement, arrow :)
const getFirstValue = (arr) => arr.shift();
log(getFirstValue([1, 2, 3]))