function isEqual(menuA, menuB) {
  return (/* ① */) && (/* ② */)
}

const menu1 = {
  calory: 450,
  price: 800
}
const menu2 = {
  price: 400,
  calory: 320
}
const menu3 = {
  price: 800,
  calory: 450
}
const menu4 = {
  calory: '450',
  price: 800
}

console.log(isEqual(menu1, menu2)) // 出力例 : false
console.log(isEqual(menu1, menu3)) // 出力例 : true
console.log(isEqual(menu1, menu4)) // 出力例 : false
