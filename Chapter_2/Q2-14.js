function generateTruthTable(n) {
  let res = new Array() // 結果の配列を作る
  allBinaries(n, new Array(n), res)
  return res.sort()     // バイナリ文字列（2進数）を並び替える
}

function allBinaries(i, tempArray, res) {
  if (i === /* ① */) {
    // 1つのバイナリ文字列（2進数）を配列に追加する
    res.push(tempArray.join(''))
  } else {
    tempArray[/* ② */] = 0
    allBinaries(/* ③ */, tempArray, res)
    tempArray[/* ④ */] = 1
    allBinaries(/* ⑤ */, tempArray, res)
  }
}
