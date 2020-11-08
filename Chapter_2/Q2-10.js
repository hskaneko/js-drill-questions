function catchingDecorator(/* ① */) {
  return function (/* ② */) {
    try {
      return func./* ③ */(this, args)
    } catch (/* ④ */) {
      // メッセージを表示する
      console.log(`An unexpected /* ⑤ */{err.name} ` +
        `occurred during "/* ⑤ */{func.name}": /* ⑤ */{err.message}`)
    }
  }
}

let test = a => b
test = catchingDecorator(test)
test(3)
// An unexpected ReferenceError occurred during "test": b is not defined

let sum = (a, b) => a + b
sum = catchingDecorator(sum)
console.log(sum(3, 4))
