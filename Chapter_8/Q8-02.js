const messages = ['おはよう', 'こんにちは', 'さようなら', 'おやすみ']

let index = 0
setTimeout(() => {
  console.log(messages[/* ① */])
  setTimeout(() => {
    console.log(messages[/* ① */])
    setTimeout(() => {
      console.log(messages[/* ① */])
      setTimeout(() => {
        console.log(messages[/* ① */])
      }, /* ② */)
    }, /* ② */)
  }, /* ② */)
}, /* ② */)

// 実行結果
// 約 1 秒おきに以下の文字列が順に出力される
// おはよう
// こんにちは
// さようなら
// おやすみ
