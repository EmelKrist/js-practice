/**
 * https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
 */

function isPalindrome(x) {
  let left = 0;
  let right = x.length - 1;

  while (left < right) {
    if (x[left].toLowerCase() != x[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
}

function isPalindromeAlter(x) {
  return x.split("").reverse().join("").toLowerCase() == x.toLowerCase()
    ? true
    : false;
}
