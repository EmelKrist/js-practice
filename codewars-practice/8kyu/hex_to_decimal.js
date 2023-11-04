/**
 * https://www.codewars.com/kata/57a4d500e298a7952100035d
 */

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

function hexToDec(hexString) {
  let hexVal = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  let clone = hexString.split("").map((x) => x.toLowerCase());
  let isNegative = false;

  if (clone[0] === "-") {
    isNegative = true;
    clone.splice(0, 1);
  }

  let output = Number(
    clone
      .reverse()
      .map((val, i) => (hexVal[val] ? hexVal[val] : val) * Math.pow(16, i))
      .reduce((a, b) => a + b),
    10
  ); // decimal number

  if (isNegative) {
    output *= -1;
  }

  return output;
}
