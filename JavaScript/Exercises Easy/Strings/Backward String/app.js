log = console.log;

function reverseString(str) {
  let splStr = str.split(''); //Split will make an array of 1 element unless we specify a separator, so we add '' to sort each char individually
  let revStr = splStr.reverse();
  let joiStr = revStr.join(''); //Join will concatenate them by commas, so here we specifiy we dont want commas, or spaces between them
  return joiStr;
}

function reverseStringTwo(str) {
  return str.split('').reverse().join(''); //Doing the same as above, but with one code block line
}

let reverseStringThree = (str) => str.split('').reverse().join(''); //Same as above, all in one line

//one function paremeter, dont need parenthesis ()
//one code statement, dont need return / curly braces

log(reverseString('Hello'));
log(reverseStringTwo('val'));
log(reverseStringThree('Deno'));
