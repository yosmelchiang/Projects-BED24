log = console.log;

function correctSentence(text) {
  let isLower = /^[a-z]/.test(text);
  let missingDot = !/\.$/.test(text);

  if (isLower) {
    let firstChar = text[0];
    let upperChar = firstChar.toUpperCase();
    text = text.replace(firstChar, upperChar);
  }

  if (missingDot) {
    text = text.concat('.');
  }

  return text;
}

log(correctSentence('greetings, young man'));
log(correctSentence('Greetings, friends'));
log(correctSentence('greetings, friends'));
