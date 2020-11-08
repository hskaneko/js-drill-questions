const messages = ['おはよう', 'こんにちは', 'さようなら', 'おやすみ']

let index = 0
function delayMessage() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(messages[index++])
      resolve()
    }, 1000)
  })
}

/* ① */ function showMessages() {
  /* ② */ delayMessage()
  /* ② */ delayMessage()
  /* ② */ delayMessage()
  /* ② */ delayMessage()
}

showMessages()

// 実行結果
// 約 1 秒おきに以下の文字列が順に出力される
// おはよう
// こんにちは
// さようなら
// おやすみ
