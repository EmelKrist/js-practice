/**
 * https://www.codewars.com/kata/570597e258b58f6edc00230d
 */

function array(string) {
  const characters = string.split(",");
  if (characters.length <= 2) {
    return null;
  }

  let result = "";
  for (let i = 1; i < characters.length - 1; i++) {
    result += characters[i];
    if (i != characters.length - 2) {
      result += " ";
    }
  }

  return result;
}

function arrayAlter(string) {
  return string.split(",").slice(1, -1).join(" ") || null
}
