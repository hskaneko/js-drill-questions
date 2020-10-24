const weeks = 5
const dt = new Date()
console.log(dt) // 出力例：2020-07-25T05:12:15.223Z

let d = dt./* ① */()
d += weeks * 7
if(dt./* ② */() >= 18) {
  d += 1
}
dt./* ③ */(d)

const y = dt./* ④ */()
const m = dt./* ⑤ */()
d = dt./* ① */()

console.log(`${y}年${/* ⑥ */}月${d}日`) // 出力例：2020年8月29日
