const messages = ['おはよう', 'こんにちは', 'さようなら', 'おやすみ']

let index = 0
function delayMessage(resolve) {
  setTimeout(() => {
    console.log(messages[/* ① */])
    /* ② */()
  }, 1000)
}

function showMessages() {
  (new Promise(delayMessage))
    ./* ③ */(() => new Promise(delayMessage))
    ./* ③ */(() => new Promise(delayMessage))
    ./* ③ */(() => new Promise(delayMessage))
}

showMessages()

// 実行結果
// 約 1 秒おきに以下の文字列が順に出力される
// おはよう
// こんにちは
// さようなら
// おやすみ
