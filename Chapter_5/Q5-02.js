const tall = window.prompt('あなたの身長は何cmですか？')
const weight = window.prompt('あなたの体重は何kgですか？')
if (tall && weight) {
    const bmi = Math.round(weight / (tall / 100) ** 2 * 100) / 100
    const borders = [18.5, 25, 30, 35, 40]
    const result = ['低体重', '普通体重', '肥満1度', '肥満2度', '肥満3度', '肥満4度']
    let judge = result[result.length - 1]
    for (let i = 0; i < borders.length; i++) {
        if (borders[i] > bmi) {
            judge = result[i]
            break;
        }
    }
    window.alert(`あなたのBMI指数は ${bmi} です。判定は ${judge} です。`)
} else {
    window.alert('入力していない項目があります。')
}