const prefectures = ["徳島", "香川", "愛媛", "高知"]

const listItems = prefectures./* ① */(prefecture => `/* ② */${prefecture}/* ③ */`)

const listHtml = `<ul>
${listItems./* ④ */('\n')}
</ul>`

console.log(listHtml)

// 出力結果
// <ul>
// <li>徳島</li>
// <li>香川</li>
// <li>愛媛</li>
// <li>高知</li>
// </ul>
