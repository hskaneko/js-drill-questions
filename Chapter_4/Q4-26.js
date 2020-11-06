function Bottle(max) {
  this.max = max
  this.amount = 0
}

Bottle.prototype.fill = function (water) {
    if (0 < this.max - (this.amount + water)) {
      this.amount += water
    } else {
      this.amount = this.max
    }
}

Bottle.prototype.showAmount = function () {
  console.log(this.amount)
}

const miniBottle = new Bottle(150)
for (let i = 0; i < 5; i++) {
  miniBottle.fill(40)
  miniBottle.showAmount()
}

// 実行例
// /* ① */
// /* ② */
// /* ③ */
// /* ④ */
// /* ⑤ */
