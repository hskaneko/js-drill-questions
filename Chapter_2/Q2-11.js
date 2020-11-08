function multiplyXByY1() {
  x *= y
  console.log(x)
}

function multiplyXByY2() {
  let x = 2
  x *= y
  console.log(x)
}

const multiplyXByY3 = (function () {
  let x = 2
  function innerMulti() {
    x *= y
    console.log(x)
    return x
  }
  return innerMulti
})()

const y = 5
let x
x = 4
multiplyXByY1() // /* ① */
multiplyXByY1() // /* ② */
console.log(x)  // /* ③ */

x = 4
multiplyXByY2() // /* ④ */
multiplyXByY2() // /* ⑤ */
console.log(x)  // /* ⑥ */

x = 4
multiplyXByY3() // /* ⑦ */
multiplyXByY3() // /* ⑧ */
console.log(x)  // /* ⑨ */
