/**
 * https://www.codewars.com/kata/64fbfe2618692c2018ebbddb
 */
function flickSwitch(arr){
    let switchedArr = new Array()
    let isNotFliked = true
    for (const word of arr) {
        if (word == 'flick') isNotFliked = !isNotFliked
        switchedArr.push(isNotFliked)
    }
    return switchedArr
}

function flickSwitch(arr){
    let mapping = true
    return arr.map(word => {
        return word == 'flick' ? mapping = !mapping : mapping
    })
}