log = console.log;

//Declaring variables with string  + array methods
function reverseString(str) {
  let splStr = str.split(''); //Split will make an array of 1 element unless we specify a separator, so we add '' to sort each char individually
  let revStr = splStr.reverse();
  let joiStr = revStr.join(''); //Join will concatenate them by commas, so here we specifiy we dont want commas, or spaces between them
  return joiStr;
}

//Chaining string + array methods
function reverseStringTwo(str) {
  return str.split('').reverse().join(''); //Doing the same as above, but with one code block line
}

//Shorthand function + chaining methods
let reverseStringThree = (str) => str.split('').reverse().join(''); //Same as above, all in one line

//one function paremeter, dont need parenthesis ()
//one code statement, dont need return / curly braces

//Using for loop instead of built-in methods
function reverseStringFour(str) {
  let reversedString = '';

  //We are initiating i as the str length, which is 5, but since we are iterating the string which is zero index based,
  //we have to remove 1, otherwise indexing 5 will give undefined
  // 0 = h, 1 = e, 2 = l, 3 = l, 4 = o (4 indexes)

  //Next we are conditioning this for loop until we get to a count of 0
  // i will then be decrementing after each iteration, until we are done with the word
  //all in all we are iterating thorugh 4 indexes and concatenating each iterated character in our variable reversedString

  for (let i = str.length - 1; i >= 0; i--) {
    // reversedString = reversedString + str[i];
    reversedString += str[i]; //We can also simplify this way
  }

  return reversedString;
}

log(reverseString('Hello'));
log(reverseStringTwo('val'));
log(reverseStringThree('Deno'));

log(reverseStringFour('Hello'));
