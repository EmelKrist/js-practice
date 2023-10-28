/**
 * https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929
 */
function uglifyWord(s) {
  let uglifyString = "";
  let isUpper = true; 
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (isAlphabetChar(character)) {
      if (isUpper) {
        uglifyString += character.toUpperCase();
      } else {
        uglifyString += character.toLowerCase();
      }
      isUpper = !isUpper;
    } else {
      uglifyString += character;
      isUpper = true;
    }
  }
  return uglifyString;
}

function isAlphabetChar(character) {
  return /[a-zA-Z]/.test(character);
}

