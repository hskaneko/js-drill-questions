const sendai = {
  name: "仙台",
  population: 1_090_000
}
const saitama = {
  name: "さいたま",
  population: 1_320_000
}
const nagoya = {
  name: "名古屋",
  population: 2_330_000
}

const cityColorTable = new Map()
cityColorTable./* ① */(sendai, "blue")
cityColorTable./* ① */(saitama, "red")
cityColorTable./* ① */(nagoya, "orange")

console.log(`都市数 : ${cityColorTable.size}`)
for (const [city, color] /* ② */ cityColorTable) {
  console.log(`${city.name} : ${color}`)
}
cityColorTable./* ③ */()
console.log(`都市数 : ${cityColorTable.size}`)

// 出力結果
// 都市数 : 3
// 仙台 : blue
// さいたま : red
// 名古屋 : orange
// 都市数 : 0
