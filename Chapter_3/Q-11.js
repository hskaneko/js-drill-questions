const text = 'This is a sample sample text, that contains '
           + 'repeated words words words consecutively.'
const newText = text.replace(/\b(\w+)(\s+\1)+\b/g, '$1')
console.log(newText)

const text = 'This is a sample sample text, that contains '
           + 'repeated words words words consecutively.'
const newText = text./* ① */(/\b(\w+)(\s+/* ② */)+\b/g, '/* ③ */')
console.log(newText) // 出力例：This is a sample text, that contains 
                     //         repeated words consecutively.