function doHomework(subject, callback) {
  console.log(`${subject}の宿題始める`)
  setTimeout(() => console.log(`${subject}の宿題終わった`), 500)
  callback()
}
const haveFun = () => console.log("〜遊ぶ〜")

doHomework("国語", haveFun)

// 出力列：
/* ① */
/* ② */
/* ③ */
