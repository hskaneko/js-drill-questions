/* ① */ Bottle {
  /* ② */(max) {
    this.max = max
    this.amount = 0
  }
  fill(water) {
    if (0 < this.max - (this.amount + water)) {
      this.amount += water
    } else {
      this.amount = this.max
    }
  }
  showAmount() {
    console.log(/* ③ */.amount)
  }
}

const miniBottle = /* ④ */ Bottle(150)
for (let i = 0; i < 5; i++) {
  miniBottle.fill(40)
  miniBottle.showAmount()
}
