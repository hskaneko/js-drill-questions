function getPrice(food) {
  const priceTable = {
    cake: 450,
    cookie: 150,
    iceCream: 320,
  }
  return priceTable/* ① */
}

console.log(getPrice('cake'))     // 出力例 : 450
console.log(getPrice('iceCream')) // 出力例 : /* ② */
console.log(getPrice('donut'))    // 出力例 : /* ③ */

