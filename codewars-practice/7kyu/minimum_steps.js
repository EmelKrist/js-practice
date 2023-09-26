/**
 * https://www.codewars.com/kata/5a91a7c5fd8c061367000002
 */

function minimumSteps(numbers, value) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let steps = 0,
    sumOfNumbers = sortedNumbers[0],
    index = 1;
  while (sumOfNumbers < value && index < sortedNumbers.length) {
    sumOfNumbers += sortedNumbers[index++];
    steps++;
  }
  return steps;
}

function minimumStepsAlter(numbers, value) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  for (let step = 0, sumOfNumbers = 0; step < sortedNumbers.length; step++) {
    sumOfNumbers += sortedNumbers[step];
    if (sumOfNumbers >= value) {
      return step;
    }
  }
  return 0
}
