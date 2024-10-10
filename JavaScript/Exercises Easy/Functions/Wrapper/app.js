const log = console.log; //Shorthand logger

const para = makeAppender('<p>', '</p>');
const div = makeAppender('<div>', '</div>');
const brackets = makeAppender('[', ']')
const curly = makeAppender('{', '}')

//Outer function - Takes two parameters and returns its inner function
function makeAppender(tagOpen, tagClose) { 

  //Inner function (closure)
  return function (innerText) { // 
    return tagOpen + innerText + tagClose;
  };
}

const myParagraphHTML = para('This is a long text inside a paragram');
const myDivHTML = div('This is a long text inside a div');

const bracketWrapper = brackets('Bracket me up!')
const curlyWrapper = curly('Curl me up!')

log(myParagraphHTML)
log(myDivHTML)
log(bracketWrapper)
log(curlyWrapper)