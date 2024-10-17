/** Attemtping this while providing a prefix first
 * Then we figure out how to find the prefix in a different script
 *
 * longestPrefix(["flower", "flow", "flight"]), "fl"
 * longestPrefix(["dog", "racecar", "car"]), ""
 * longestPrefix(["apple", "application", "appetizer"]), "app"
 * longestPrefix(["a"]), "a"
 */

// let oString = 'Flower';
// let myString = oString.toLowerCase();
// let prefix = 'fl';
// let preIndex = myString.indexOf(prefix)

// let reduceLastChar = myString.slice(preIndex, prefix.length) //We can use the length of prefix
// console.log(reduceLastChar) //Logs the sliced prefix from myString
// console.log(reduceLastChar == prefix) //True or false?
//

// let arr = ['flower', 'flow', 'flight'];

// Loop through each character in the first string (prefix)
function findCommonPrefix(arr) {
  // Use the first string as a reference
  let prefix = arr[0];
  // Make it lower case
  const strLower = prefix.toLowerCase();

  if (arr.length === 0) {
    //Handle empty array
    return '';
  }

  // Loop through each character in the first string (prefix)
  for (let i = 0; i < prefix.length; i++) {
    // Compare this character with the corresponding character in all other strings
    for (let j = 1; j < arr.length; j++) {
      // If the characters don't match, return the substring up to this point
      if (prefix[i] !== arr[j][i]) {
        // prefix[i] - accesses the character at index i
        // prefix[i] - was started as 0, so its the first char by default

        // myArray[j][i] - accesses the index i of the string located at index j
        return prefix.slice(0, i);
      }
    }
  }
  return prefix; // If we finish the loop, the whole first string is the prefix
}

console.log(findCommonPrefix(['flower', 'flow', 'flight']));

// function longestPrefix(arr, prF) {
//   let count = 0;

//   while (prF != '') {
//     for (let i = 0; i < arr.length; i++) {
//       const strLower = arr[i].toLowerCase();
//       const prefStart = strLower.indexOf(prF);
//       const prefEnd = prefStart + prF.length;
//       const result = strLower.slice(prefStart, prefEnd);
//       if (result == prF) {
//         count++;
//       }
//     }
//     break;
//   }
//   return count;
// }
