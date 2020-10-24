console.log(Number.MAX_SAFE_INTEGER) // 出力例：9007199254740991
const a = 100000000000000000
const b = 1
console.log(a + b) // 出力例：100000000000000000
const c = 100000000000000000/* ① */
const d = 1/* ① */
console.log(c + d) // 出力例：100000000000000001/* ① */
