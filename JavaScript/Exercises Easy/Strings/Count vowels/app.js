const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(text) {
  const lowerText = text.toLowerCase(); //to make our check case insensitive
  const myTextArr = lowerText.split(''); //breaks the string down into iteratable individual characters
  let count = 0; //Keep track of matches found

  for (let char of myTextArr) {
    for (let i = 0; i < VOWELS.length; i++) {
      if (char == VOWELS[i]) {
        count++;
      }
    }
  }

  return count;
}

console.log('Example:');
console.log(countVowels('Hello'));
console.log(countVowels('openai'));
console.log(countVowels('typescript'));
