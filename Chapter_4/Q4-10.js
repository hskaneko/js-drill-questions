const values = [51, 75, 9, 30, 61]
const sortedValues = [/* ① */values].sort((a, b) => /* ② */ - /* ③ */)

sortedValues.forEach(value => console.log(value))
// 出力例
// 75
// 61
// 51
// 30
// 9
