const sampleArray = [99, "qq", "99", "QQ", "99", 99]

let index = -1
while (/* ①  */ <= (index = sampleArray.indexOf("99", /* ② */))) {
  console.log(index)
}

// 出力結果
// 2
// 4
