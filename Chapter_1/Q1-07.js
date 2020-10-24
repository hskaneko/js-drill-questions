const num = 23386774
const key = 38448833
const converted = num /* ① */ key
const reconverted = converted /* ① */ key
console.log(num === converted) // 出力例：false
console.log(num === reconverted) // 出力例：true
