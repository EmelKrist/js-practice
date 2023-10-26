/**
 * https://www.codewars.com/kata/65128732b5aff40032a3d8f0
 */
function neutralise(s1, s2) {
    let neutraliseString = "";
    for (let i = 0; i < s1.length; i++) {
        const first = s1[i]
        const second = s2[i]
        if (first == second) neutraliseString += first 
        else neutraliseString += "0"
    }
    return neutraliseString
}

function neutralise(s1, s2) {
    let neutraliseString = "";
    for (let i = 0; i < s1.length; i++) {
        neutraliseString += s1[i] != s2[i] ? "0" : s1[i]
    }
    return neutraliseString
}