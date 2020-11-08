function doHomework(subject) {
  console.log(`${subject}の宿題始める`)
  // 500msの遅延を起こす
  setTimeout(() => console.log(`${subject}の宿題終わった`), 500)
}
const haveFun = () => console.log("〜遊ぶ〜")

doHomework("国語")
haveFun()

// 出力列：
/* ① */
/* ② */
/* ③ */
