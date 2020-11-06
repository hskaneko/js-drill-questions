class CustomArray /* ① */ Array {
  average(callback) {
    const total = this.reduce((total, currentItem) => total + /* ② */(currentItem), /* ③ */)
    return (0 < this./* ④ */) ? total / this./* ④ */ : 0
  }
}

const numbers = new CustomArray(3, 9, 6 , 4, 8)
const averageNumber = numbers.average(number => {
  return number
})
console.log(`[平均] ${averageNumber}`) // 出力例 : [平均] 6

const students = new CustomArray(
  { name: "加藤", score: 60 },
  { name: "高山", score: 90 },
  { name: "藤野", score: 30 }
)
const averageScore = students.average(student => {
  return student.score
})
console.log(`[平均点] ${averageScore}`) // 出力例 : [平均点] 60
