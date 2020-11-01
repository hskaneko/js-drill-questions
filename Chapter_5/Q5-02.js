if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
/******************************** 問題はここから */
    const ua = /* ① */
    if (ua.match(/* ① */) || ua.match(/* ③ */)) {
        window.alert("Internet Explorerでは使用できません")
    } else {
        console.log("別のURLへ移動")
    }
/******************************** 問題はここまで */
}