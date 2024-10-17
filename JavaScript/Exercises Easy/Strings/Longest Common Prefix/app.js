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

console.log(longestPrefix(['flower', 'FLow', 'flight'], 'fl')); // => 3
console.log(longestPrefix(['dog', 'racecar', 'car'], '')); // Returns 0
console.log(longestPrefix(['apple', 'application', 'appetizer', 'appPhone'], 'app')); // Returns 4
console.log(longestPrefix(['a'], 'a')); //Return 1

/**
 * The function `longestPrefix` takes an array of strings and a prefix, and returns the count of
 * strings in the array that start with the given prefix.
 * @param arr - An array of strings.
 * @param prF - The `prF` parameter in the `longestPrefix` function is used to specify the prefix that
 * you want to search for in the array of strings (`arr`). The function will count how many strings in
 * the array start with the specified prefix.
 * @returns The function `longestPrefix` is returning the count of how many strings in the `arr` array
 * have the prefix `prF`.
 */
function longestPrefix(arr, prF) {
  let count = 0;

  while (prF != '') {
    for (let i = 0; i < arr.length; i++) {
      const strLower = arr[i].toLowerCase();
      const prefStart = strLower.indexOf(prF);
      const prefEnd = prefStart + prF.length;
      const result = strLower.slice(prefStart, prefEnd);
      if (result == prF) {
        count++;
      }
    }
    break;
  }
  return count;
}
