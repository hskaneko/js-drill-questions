const scoreTable = {
  math: 80,
  english: 90,
  history: 60,
  science: 70
}

const scores = Object./* ① */(scoreTable)
const totalScore = scores./* ② */((total, current) => {
  return (total + current)
})

const averageScore = totalScore / scores.<span class="qw" n="3"></span>

console.log(`[総得点] ${totalScore}`)   // 出力例 : [総得点] 300
console.log(`[平均点] ${averageScore}`) // 出力例 : [平均点] 75
