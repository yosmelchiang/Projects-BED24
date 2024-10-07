/**
 * Write a function that takes the last number of a consecutive list of numbers and
 * returns the total of all numbers up to and including it.
 *
 * - Sample data
 * addUpTo(3) ➞ 6
 * // 1 + 2 + 3 = 6
 *
 * addUpTo(10) ➞ 55
 * // 1 + 2 + 3 + ... + 10 = 55
 *
 * addUpTo(7) ➞ 28
 * // 1 + 2 + 3 + ... + 7 = 28
 */

// Declaring console log
log = console.log

// Create the function

function addUpTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}

log(addUpTo(3)); //6
log(addUpTo(10)); //55
log(addUpTo(7)); //28
