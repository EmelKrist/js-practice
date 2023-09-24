/**
 * https://www.codewars.com/kata/563b74ddd19a3ad462000054
 */

function stringy(size) {
  let resultString = "1";
  let lastNum = 1

  for (let i = 2; i <= size; i++) {
    if (lastNum === 1) {
      resultString += 0
      lastNum = 0
    } else {
      resultString += 1
      lastNum = 1
    }
  }

  return resultString;
}

function stringyAlter(size) {
  let result = "";
  for (let i = 1; i <= size; i++) {
    result += i % 2
  }
  return result;
}

function stringySecondAlter(size) {
  return "10".repeat(size).slice(0, size)
}