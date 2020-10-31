const stack = [80, 70, 85]

console.log(stack./* ① */()) // 出力例 : 85
console.log(stack./* ① */()) // 出力例 : 70

stack.forEach(element => console.log(element)) // 出力例 : 80

stack./* ② */(90)

stack.forEach(element => console.log(element))
// 出力例
// 80
// 90
