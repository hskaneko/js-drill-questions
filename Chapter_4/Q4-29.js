class Label {
  constructor(text) { // 引数は半角英数のみで、それ以外の文字は消去する
    this.text = text./* ① */(/[^A-Za-z0-9]/g, "")
  }
  show() {
    console.log(this.text)
  }
}

class DecorationLabel /* ② */ Label {
  constructor(text) {
    /* ③ */(text)
  }

  show() {
    const line = "@".repeat(this.text.length + 2)
    console.log(`${line}\n@${this.text}@\n${line}`)
  }
}

const baseInstance = new Label("Apple")
baseInstance.show()
// 出力例
// Apple

const subInstance = new DecorationLabel("Donut")
subInstance.show()
// 出力例
// @@@@@@@
// @Donut@
// @@@@@@@
