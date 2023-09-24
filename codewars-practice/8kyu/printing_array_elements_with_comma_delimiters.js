/**
 * https://www.codewars.com/kata/56e2f59fb2ed128081001328
 */

function printArray(array) {
    return array.join(",")
}


function printArrayAlter(array) {
    let printedArray = ""
    for (let i = 0; i < array.length; i++) {
        printedArray += array[i] + ","
    }
    return printedArray.slice(0, -1)
}