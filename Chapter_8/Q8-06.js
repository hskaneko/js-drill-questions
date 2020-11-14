function sleepRandom() {
  return new Promise(resolve => {
    const sleepTime = Math.floor(Math./* ① */() * 1000)
    setTimeout(() => { /* ② */(/* ③ */) }, sleepTime)
  })
}

console.log('おやすみなさい')
sleepRandom().then(/* ④ */ => console.log(`${time}ミリ秒眠ってしまいました。`))

// 実行結果
// 「おやすみなさい」と出力した後、ランダムな時間（～999ミリ秒）が経過。
// その後、「xxxミリ秒眠ってしまいました。」と出力される。（xxxは経過時間）
