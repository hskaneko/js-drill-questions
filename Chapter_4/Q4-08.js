const points = [3, 12, 1, 9, 32]
const totalPoint = points.reduce( (total, current) => /* ① */ + /* ② */, /* ③ */ )

console.log(`${points./* ④ */('/* ⑤ */')}=${totalPoint}`) // 出力例 : 3+12+1+9+32=57
