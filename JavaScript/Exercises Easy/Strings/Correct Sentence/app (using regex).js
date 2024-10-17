log = console.log;


/**
 * The `correctSentence` function capitalizes the first letter of a sentence and adds a period at the
 * end if it is missing.
 * @param text - The `correctSentence` function takes a text input as a parameter and corrects it to
 * ensure that it starts with an uppercase letter and ends with a period.
 * @returns The function `correctSentence` takes a text input and corrects it by ensuring that the
 * first letter is capitalized and that it ends with a period. The corrected text is then returned.
 */
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
