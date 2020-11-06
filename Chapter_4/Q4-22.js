const cardInfo = { title: "灼熱の聖騎士", cost: 4, power: 2000 }
const shopInfo = { price: 500, stock: 24 }

const mergedInfo = Object./* ① */(/* ② */, cardInfo, /* ③ */)
for (const [key, value] of Object.entries(mergedInfo)) {
  console.log(`[${key}] ${value}`)
}

// 出力結果
// [title] 灼熱の聖騎士
// [cost] 4
// [power] 2000
// [price] 500
// [stock] 24
