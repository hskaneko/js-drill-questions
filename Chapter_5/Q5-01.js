const catName = 'ルイ'
qItem = {
    question: `${catName}という名の猫はあなたが飼っていますか？`,
    answer: [
        `${catName}という猫を飼っていません。`,
        `${catName}という猫を飼っています。`
    ]
}
const result = window.confirm(qItem.question)
window.alert(qItem.answer[result ? 1 : 0])