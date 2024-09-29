/**
 * A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
 * Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
 * --
 * Examples
 * journeyDistance(3) ➞ 1
 * // The first kilometer costs $3
 *
 * journeyDistance(9) ➞ 4
 * // The first kilometer costs $3 plus the other three kilometers (costing $2 each)
 *
 * journeyDistance(5) ➞ 2
 * --
 *
 * * - The input tests are integers >= 0.
 * * - Remember that you are calculating the distance from the cost, not the other way around!
 */

// Notes
// First kilometer: 3$
// Every km after is 2$

const log = console.log

// Using Function Declaration
log(journeyDistance(9)); //returns 4

function journeyDistance(price) {
    let startPrice = 3;
    let basePrice = 2;
    if (price > startPrice) {
        return Math.floor((price - startPrice) / basePrice) + 1;
    } else {
        return 1; //1 kilometer
    }
}

// Using Ternary Operator
const journeyDistanceT = price => price > 3 ? (price - 3) / 2 + 1 : 1;
log(journeyDistanceT(5)) //2
