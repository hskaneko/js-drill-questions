const excludePrefix = ["__", "test_"]
const movingHost = "msyk.net"
if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
    const destHost = `${movingHost}${location.port?`:${location.port}`:""}`
    let url = `${location.protocol}//${destHost}${location.pathname}?`
    const params = location.search.substr(1).split("&")
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
            newParams.push(params[i])
        }
    }
    url += newParams.join("&")

    console.log(url) // 結果の確認用
    location.href = url
}