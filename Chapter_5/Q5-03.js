const tall = window./* ① */('あなたの身長は何cmですか？')
const weight = window./* ① */('あなたの体重は何kgですか？')
if (/* ② */) {
    const bmi = /* ③ */
    const borders = [18.5, 25, 30, 35, 40]
    const result = ['低体重', '普通体重', '肥満1度', '肥満2度', '肥満3度', '肥満4度']
    let judge = result[/* ④ */]
    for (let i = 0; i < borders.length; i++) {
        if (/* ⑤ */) {
            judge = result[i]
            break;
        }
    }
    const m = `あなたのBMI指数は ${bmi} です。判定は ${judge} です。`
    window.alert(m`)
} else {
    window.alert('入力していない項目があります。')
}