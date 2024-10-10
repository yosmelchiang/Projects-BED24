// console.log(Math.pow(3,3))

/**
 * We need to be able to iterate through each digit and do the mathematical operation on them
 *  - Convert the number to a string first, then split into an array
 *  - toString().split('')
 * We can use Math.pow and store the result in a variable that we can later use to compare with the number
 */

function isArmStrong(num) {
  const numArr = num.toString().split('') //We convert the number to a string then split it into an array
  const numDigits = numArr.length //The length (digits) of the array
  let sum = 0;
  
  //Using a for loop
  for(let i = 0; i < numArr.length; i++) {
    sum += Math.pow(Number(numArr[i]), numDigits)
  }

  // //Using a for of loop
  // for(let d of numArr) {
  //   sum += Math.pow(Number(d), numDigits)
  // }

  return sum === num
}

console.log(isArmStrong(153));
