/**
 * https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
 */
String.prototype.isUpperCase = function () {
  let start = 0;
  let end = this.length - 1;

  while (start <= end) {
    const startChar = this[start++];
    const endChar = this[end--];
    if (startChar != startChar.toUpperCase() || endChar != endChar.toUpperCase)
      return false;
  }

  return true;
};

String.prototype.isUpperCase = function () {
    return this == this.toUpperCase()
};

String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this)
};

