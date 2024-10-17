/**
 * countOccurrences("hello world hello", "hello"), 2);
 * countOccurrences("Hello World hello", "hello"), 2);
 * countOccurrences("hello", "world"), 0);
 * countOccurrences("hello world hello world hello", "world"),
 */

let myString = 'world hellohello';

function countOccurrences(mainStr, subStr) {
  let count = 0;
  let index = 0;
  mainStr = mainStr.toLowerCase()
  subStr = subStr.toLowerCase()

  while ((index = mainStr.indexOf(subStr, index)) !== -1) {
    count++;
    index++;
  }
  return count;
}

console.log(countOccurrences('world hellohello', 'hello'));
