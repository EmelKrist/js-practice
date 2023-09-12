/**
 * https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
 */

function twoHighest(arr) {
    let max = -1 , preMax = -1
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i]
        if (elem > max) {
            preMax = max
            max = elem
        } else if (elem != max && elem > preMax){
            preMax = elem
        }
    }

    let result
    if (max == -1) {
        result = []
    } else if (preMax == -1) {
        result = [max]
    } else {
        result = [max, preMax]
    }

    return result
}

function twoHighestAlt(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}