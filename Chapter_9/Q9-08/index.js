const express = require("express")
const app = /* ① */
const port = 3000

app./* ② */("/", (req, res) => {
  res./* ③ */('Hello World!')
})

app./* ② */("/home", (req, res) => {
  res./* ③ */('これはホームページのコンテンツです')
})

app.listen(port, () => console.log('稼働しました'))
// 出力例：稼働しました