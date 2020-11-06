class Triangle {
  constructor(base, height) {
    this._base = base
    this._height = height
  }
  /* ① */ base()         { return this._base }
  /* ① */ height()       { return this._height }
  /* ① */ area()         { return (this._base * this._height) / 2 }
  /* ② */ base(base)     { this._base = base }
  /* ② */ height(height) { this._height = height }
}

const shape = /* ③ */ Triangle(10, 20)
console.log(`底辺 ${shape.base}, 高さ ${shape.height}, 面積 ${shape.area}`)
shape./* ④ */ = 4
shape./* ⑤ */ = 5
console.log(`底辺 ${shape.base}, 高さ ${shape.height}, 面積 ${shape.area}`)

// 結果
// 底辺 10, 高さ 20, 面積 100
// 底辺 4, 高さ 5, 面積 10
