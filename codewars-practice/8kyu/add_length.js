/**
 * https://www.codewars.com/kata/559d2284b5bb6799e9000047
 */

function addLength(str) {
    let arrStr = str.split(' ')
    for (let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i] + ' ' + arrStr[i].length
    }
    return arrStr
}

function addLength(str) {
    return str.split(' ').map(s => `${s} ${s.length}`)
}
