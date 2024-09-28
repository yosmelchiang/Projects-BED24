/**
 * Mubashir has a cat and a dog.
 * He purchased both of them at the same time humanYears ago.
 * Create a function which takes an argument of humanYears and returns [humanYears, catYears, dogYears] array.
 *
 * Human Years
 * Human Years >= 1
 * Human Years are whole numbers only.
 *
 * Cat Years
 * 15 cat years for first year.
 * +9 cat years for second year.
 * +4 cat years for each year after that.
 *
 * Dog Years
 * 15 dog years for first year
 * +9 dog years for second year
 * +5 dog years for each year after that
 *
 */

console.log(calculateYears(10))

function calculateYears(h) {

    let yearsArray = [];
    let c = 15
    let d = 15
    if (h == 1) {
        yearsArray.push(h);
        yearsArray.push(c);
        yearsArray.push(d);
    } else if (h > 1 && h < 3) {
        yearsArray.push(h);
        yearsArray.push(c += 9);
        yearsArray.push(d += 9);
    } else {
        yearsArray.push(h);
        yearsArray.push(c += 9 + (h - 2) * 4);
        yearsArray.push(d += 9 + (h - 2) * 5);
    }
    return yearsArray;
}