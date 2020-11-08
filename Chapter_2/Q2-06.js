const min = (x, y) => x < y ? x : y
console.log(min(8, 2, 1, 9, 0))      // 出力列：/* ① */
const positiveMax
  = (x, y, z = 0) => x < y ? (y < z ? z : y) : (x > z ? x : z)
console.log(positiveMax(7, 3))       // 出力列：/* ② */
console.log(positiveMax(7, 5, 3))    // 出力列：/* ③ */
console.log(positiveMax(3, 7, -5))   // 出力列：/* ④ */
console.log(positiveMax(3, 5, -7))   // 出力列：/* ⑤ */
console.log(positiveMax(-5, -7))     // 出力列：/* ⑥ */
console.log(positiveMax(-5, -3, -7)) // 出力列：/* ⑦ */
