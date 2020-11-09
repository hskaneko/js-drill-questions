let n = 0

setInterval(() => {
  console.log(n % 2 === 0 ? '/* ① */' : '/* ② */')
  n++
}, /* ③ */);

// 実行結果
// 約 1 秒おきに文字列 tick、tack が交互に出力される
// （Node.js利用時にプログラムを終了するには、「Ctrl-C」 を打鍵してください）
