const messages = ['おはよう', 'こんにちは', 'さようなら', 'おやすみ']

let index = 0
function delayMessage() {
  return /* ① */ Promise(resolve => {
    setTimeout(() => {
      console.log(messages[/* ② */])
      /* ③ */()
    }, 1000)
  })
}

function showMessages() {
  delayMessage()
    ./* ④ */(delayMessage)
    ./* ④ */(delayMessage)
    ./* ④ */(delayMessage)
}

showMessages()

// 実行結果
// 約 1 秒おきに以下の文字列が順に出力される
// おはよう
// こんにちは
// さようなら
// おやすみ
