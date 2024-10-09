/**
 * 1^3 = 1
 * 5^3 = 125
 * 3^3 = 27
 */

// console.log(Math.pow(3,3))

//Lets break it down into steps

function isArmstrong(num) {
  //Convert the number to an array of strings
  const convertedN = num.toString().split('');

  //Determine the number of digits
  const numDigits = convertedN.length;
  let sum = 0; //we are going to store the sum of each iteration in here

  //Iterate through each number and raise it to the power of numDigits, store it in sum
  for (let i = 0; i < convertedN.length; i++) {
    sum += Math.pow(Number(convertedN[i]), numDigits);
  }

  //Compare wether or not our calculated sum is the same as the number we provided to begin with
  return sum === num;
}

console.log(isArmstrong(153));
