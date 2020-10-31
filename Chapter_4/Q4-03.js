const values = [27, 4, 28, 6, 10, 37, 7, 38, 32, 60]
/* ① */ index = 1
/* ② */ (const value /* ③ */ values) {
  if (index % 2 === 0 && value % 3 === 0) {
     console.log(value)
  }
  index++
}

// 出力例
// 6
// 60
