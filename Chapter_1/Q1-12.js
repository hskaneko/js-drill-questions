console.log(false && false) // 出力例：false
console.log(false && true) // 出力例：false
console.log(true && true) // 出力例：true
console.log(false || false) // 出力例：false
console.log(true || false) // 出力例：true
console.log(true || true) // 出力例：true
console.log(true && 100) // 出力例：/* ① */
console.log(100 && true) // 出力例：/* ② */
console.log(0 && true) // 出力例：/* ③ */
console.log(false || 100) // 出力例：/* ④ */
console.log(100 || true) // 出力例：/* ⑤ */
console.log(0 || true) // 出力例：/* ⑥ */
let c = 0
console.log(false && (c = 200)) // 出力例：/* ⑦ */
console.log(c) // 出力例：/* ⑧ */
