function findMultiples(integer, limit) {
    const size = Math.floor(limit / integer)
    const result = new Array(size)
    for (let i = 0; i < size; i++) {
        result[i] = integer * (i + 1)
    }

    return result
}

function findMultiplesAlt(integer, limit) {
    let result = []
    for (let i = integer; i <= limit; i+=integer) {
        result.push(i)
    }

    return result
}
