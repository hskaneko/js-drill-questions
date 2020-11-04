exports.sum = (a, b) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number')
        throw TypeError('Both value must be number')
    return a + b
}