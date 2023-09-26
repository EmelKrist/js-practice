/**
 * https://www.codewars.com/kata/59f061773e532d0c87000d16
 */

function elevatorDistance(array) {
    let elevatorDistance = 0
    for (let i = 0; i < array.length - 1; i++) {
        elevatorDistance += Math.abs(array[i] - array[i + 1])
    }
    return elevatorDistance
}
