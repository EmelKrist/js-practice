/**
 * https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
 */

function reverseList(list) {
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const tmp = list[left];
    list[left] = list[right];
    list[right] = tmp;
    left++;
    right--;
  }

  return list;
}

function reverseList(list) {
  return list.reverse();
}
