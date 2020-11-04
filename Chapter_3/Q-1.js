/* ① */ = function (num) {
    if (typeof (/* ② */) != "number") return
    const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' }
    const suffix = (num < 20) ?/* ③ */[num]: /* ③ */[num % 10]
    return num.toString()./* ④ */(suffix ? suffix : 'th')
}
console.log(toOrdinalString())   // 出力例：undefined
console.log(toOrdinalString(2))  // 出力例：2nd
console.log(toOrdinalString(11)) // 出力例：11th
console.log(toOrdinalString(20)) // 出力例：20th
console.log(toOrdinalString(21)) // 出力例：21st