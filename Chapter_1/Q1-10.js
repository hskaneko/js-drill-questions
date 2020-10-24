const num = '100_000'
const z = '45'
console.log(num / z) // 出力例：NaN
console.log(parseInt(num) / z) // 出力例：/* ① */
console.log(num / parseInt(z)) // 出力例：/* ② */
console.log(parseInt(num) / parseInt(z)) // 出力例：/* ③ */