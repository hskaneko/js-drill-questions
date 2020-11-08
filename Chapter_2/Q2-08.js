function sumAll(/* ① */all) {
  let sum = 0
  for (let i = 0; i < all.length; ++i) // 各要素ごとに
    sum += all[i]                      // all[i]はallのi番目の要素
  return sum
}

console.log(sumAll(1))       // 出力列：1
console.log(sumAll(1, 3))    // 出力列：4
console.log(sumAll(1, 3, 5)) // 出力列：9
