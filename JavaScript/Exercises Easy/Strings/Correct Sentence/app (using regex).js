log = console.log;

function correctSentence(text) {
  const ISLOWER = /^[a-z]/.test(text);
  const MISSINGDOT = !/\.$/.test(text);

  if (ISLOWER) {
    let firstChar = text[0];
    let upperChar = firstChar.toUpperCase();
    text = text.replace(firstChar, upperChar);
  }

  if (MISSINGDOT) {
    text = text.concat('.');
  }

  return text;
}

log(correctSentence('greetings, young man'));
log(correctSentence('Greetings, friends'));
log(correctSentence('greetings, friends'));
