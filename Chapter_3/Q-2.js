/* ① */ = function (word) {
    if (typeof (word) !== /* ② */ || word === '') return

    const reverseWord = word./* ③ */('').reverse().join('')
    return word./* ④ */ === reverseWord./* ④ */
}
console.log(isPalindrome())        // 出力例：undefined
console.log(isPalindrome(''))      // 出力例：undefined
console.log(isPalindrome('Madam')) // 出力例：true
console.log(isPalindrome('Book'))  // 出力例：false