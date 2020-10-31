const values = [27, 4, 28, 6, 10, 37, 7, 38, 32, 60]
values
  ./* ① */((value, index) => /* ② */ % 2 === 0 && value % 3 === 0)
  ./* ③ */((value) => console.log(value))

// 出力例
// 6
// 60
