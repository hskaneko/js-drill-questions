const urlGems = "/api/gems"
const gemSelector = document.getElementById("gem-selector")
const errorMessage = document.getElementById("error-message")

function updateGemSelector() {
  gemSelector.innerHTML = ""
  errorMessage.innerHTML = ""

  /* ① */(urlGems)
    ./* ② */(response => {
      if (!response.ok) {
        /* ③ */ new Error(`status code : ${response.status}`)
      }
      return response.json()
    })
    ./* ④ */(gems => {
      const optionElements = gems./* ⑤ */(gem => {
        const { id, name, price } = gem
        const optionElement = document.createElement("option")
        optionElement.id = id
        optionElement.value = name
        optionElement.innerHTML = `${name} / ${price}円`
        return optionElement
      })
      optionElements.forEach(
        optionElement => gemSelector.appendChild(optionElement))
    })
    ./* ⑥ */(err => {
      gemSelector.innerHTML = ""
      errorMessage.innerHTML = err.message
    })
}

// 実行結果
// ページをロードすると AJAX通信が始まり、通信終了後、セレクトボックスに以下の選択肢が設定される
//
// エメラルド / 30000円
// ダイアモンド / 90000円
// オパール / 12000円
