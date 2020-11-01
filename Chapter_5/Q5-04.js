if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
/******************************** 問題はここから */
    const ua = /* ① */
    const check = ua.match(/* ② */)
    if (check && check.length > 1 && /* ③ */) {
        window.alert("Windows 8以上を利用してください。")
    } else {
        console.log("別のURLへ移動")
    }
/******************************** 問題はここまで */
}