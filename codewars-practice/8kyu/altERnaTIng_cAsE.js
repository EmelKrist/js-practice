/**
 * https://www.codewars.com/kata/56efc695740d30f963000557
 */

String.prototype.toAlternatingCase = function () {
    let alterString = ""
    for (let i = 0; i < this.length; i++) {
        const letter = this[i]
        alterString += isUpperCase(letter) ? letter.toLowerCase() : letter.toUpperCase()
    }
    return alterString
}

function isUpperCase(letter) {
    return letter.toUpperCase() == letter
}


String.prototype.toAlternatingCase = function () {
    return this.split("")
    .map(letter => letter == letter.toUpperCase() 
        ? letter.toLowerCase() 
        : letter.toUpperCase())
    .join('')
}