log = console.log;

function correctSentence(text) {
  const ISLOWER = text[0].toLowerCase();

  if (text[0] === ISLOWER) {
    let firstCharUpper = text[0].toUpperCase();
    text = firstCharUpper + text.slice(1); //Makes the first character UpperCase and concatenates it with the rest of the string.
  }

  if (text[text.length - 1] !== '.') {
    text += '.';
  }

  return text;
}

log(correctSentence('greetings, young man'));
log(correctSentence('Greetings, friends'));
log(correctSentence('greetings, friends'));
