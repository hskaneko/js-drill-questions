function displayElements(text, separator) {
  if (typeof (text) !== 'string' || typeof (separator) !== 'string')
    return
  const words = text./* ① */(separator)
  console.log('Total: ' + words.length) // 出力例：Total: 3
}
const fruits = 'Apple,Orange,Banana'
const comma = ','
displayElements(fruits, comma)