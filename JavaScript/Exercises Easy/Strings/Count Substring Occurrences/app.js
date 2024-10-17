/**
 * countOccurrences("hello world hello", "hello"), 2);
 * countOccurrences("Hello World hello", "hello"), 2);
 * countOccurrences("hello", "world"), 0);
 * countOccurrences("hello world hello world hello", "world"),
 */

// let myString = 'world hellohello';

// function countOccurrences(mainStr, subStr) {
//   let count = 0;
//   let index = 0;
//   mainStr = mainStr.toLowerCase();
//   subStr = subStr.toLowerCase();

//   while ((index = mainStr.indexOf(subStr, index)) !== -1) {
//     count++;
//     index++;
//   }
//   return count;
// }

// console.log(countOccurrences('world hellohello', 'hello')); //2
// console.log(countOccurrences('hello world hello', 'hello'));
// 2;
// console.log(countOccurrences('Hello World hello', 'hello'));
// 2;
// console.log(countOccurrences('hello', 'world'));
// 0;
// console.log(countOccurrences('hello world hello world hello', 'world'));
// 2;

function countOccurrencesV2(main, sub) {
  let total = 0; //This variable counts the number of occurrences of 'sub' in 'main'
  let index = 0; // This variable keeps track of the current position to search from in 'main'

  //indexOf will return -1 if no matches are found
  // 'indexOf' returns the position of the first occurrence of 'sub' starting from 'index'
  //If a match is found, then we are continuing the while loop and increasing index to 1
  //increasing index to 1 means we can look up a new match one up from what it last was assigned as
  while ((index = main.indexOf(sub, index)) !== -1) {
    total++; // Increment the total count for each match found
    index++; // Move the index to the next position to search for the next occurrence
    // Incrementing by 1 allows the search to look for the next match
    // instead of getting stuck on the same position
  }
  // After all matches have been counted, return the total occurrences found
  return total;
}

// Testing the function with a string that contains multiple occurrences of 'hello'
console.log(countOccurrencesV2('hello worldhello hello', 'hello'));
