/******************************** 問題はここから */
const excludePrefix = ["__", "test_"]
const movingHost = "msyk.net"
/******************************** 問題はここまで */
if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
/******************************** 問題はここから */
    const destHost = `${movingHost}${/* ① */}`
    let url = `${location.protocol}//${destHost}${location.pathname}?`
    const params = location.search.substr(1)./* ② */
    let newParams = []
    for (let i = 0; i < params.length; i++) {
        let isMatch = true
        for (let j = 0; j < excludePrefix.length; j++) {
            console.log(params[i].indexOf(excludePrefix[j]))
            if (params[i].indexOf(excludePrefix[j]) === 0) {
                isMatch = false
            }
        }
        if (isMatch) {
            newParams./* ③ */
        }
    }
    url += /* ④ */

    console.log(url) // 結果の確認用
    /* ⑤ */
/******************************** 問題はここまで */
}