const bookList = [
  {
    title: '人間失格',
    author: '太宰治'
  },
  {
    title: '銀河鉄道の夜',
    author: '宮沢賢治'
  },
  {
    title: '走れメロス',
    author: '太宰治'
  },
  {
    title: '吾輩は猫である',
    author: '夏目漱石'
  }
]

bookList./* ① */(book => book/* ② */ === '太宰治')
        ./* ③ */(book => console.log(book/* ④ */))

// 出力例
// 人間失格
// 走れメロス
