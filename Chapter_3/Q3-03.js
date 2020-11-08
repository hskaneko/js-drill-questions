capitalize = function (text) {
    if (!text || typeof (text) !== 'string') return
    const firstCharCap = text./* ① */(0)./* ② */
    const remainString = text./* ③ */(1)
    return firstCharCap + remainString
}
console.log(capitalize())   // 出力例：undefined
console.log(capitalize("")) // 出力例：undefined
console.log(capitalize("this is a sample text"))
                              // 出力例：This is a sample text