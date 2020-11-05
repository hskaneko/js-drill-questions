const monster = {
  name: 'ゴブリン',
  power: 100,
  speed: 10,
};

Object.entries(/* ① */)
      .forEach(([/* ② */, /* ③ */]) => {
        console.log(`${key} : ${value}`)
      })

// 出力結果
// name : ゴブリン
// power : 100
// speed : 10
