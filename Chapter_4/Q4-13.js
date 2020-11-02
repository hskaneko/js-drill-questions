const scores = [80, 74, 96, 52, 100, 48, 71]
const sortedScores = [/* ① */scores].sort((a, b) => /* ② */ - /* ③ */)
const minPassedScore = sortedScores./* ④ */((score) => /* ⑤ */ <= /* ⑥  */)

console.log(`成績一覧(昇順) : ${sortedScores./* ⑦ */(', ')}`)
console.log(`最小の合格点 : ${minPassedScore}`)

// 出力結果
// 成績一覧(昇順) : 48, 52, 71, 74, 80, 96, 100
// 最小の合格点 : 71
