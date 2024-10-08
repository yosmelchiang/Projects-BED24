let myString = 'HeLlo wOrlD HOW ARE YOU';
let mySplit = myString.split(' '); //Split the string using spaces as a separator
console.log(mySplit);

for (let i = 0; i < mySplit.length; i++) {
  mySplit[i] = mySplit[i].charAt(0).toUpperCase() + mySplit[i].slice(1).toLowerCase();
}

const firstCap = mySplit.join(' ');
console.log(firstCap);

// Iterate through each item in an array as a string, therefore we can use string functions on it such as charAt
/**
 * charAt(0).toUpperCase() capitalizes the first character.
 * slice(1).toLowerCase() takes the rest of the word and ensures it's lowercase.
 */
