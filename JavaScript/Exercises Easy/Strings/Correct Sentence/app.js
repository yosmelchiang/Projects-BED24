log = console.log;

/**
 * The function correctSentence takes a text input, capitalizes the first letter if it is lowercase,
 * and adds a period at the end if it is missing.
 * @param text - The `correctSentence` function takes a string `text` as input and ensures that it
 * starts with an uppercase letter and ends with a period. If the first character of the input string
 * is lowercase, it converts it to uppercase. Additionally, if the last character of the input string
 * is not a period
 * @returns The function `correctSentence` takes a text input and ensures that the first character is
 * capitalized and that the text ends with a period. The corrected text is then returned.
 */
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
