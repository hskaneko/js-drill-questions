if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
    const ua = navigator.userAgent
    if (ua.match(/MSIE/) && ua.match(/Trident/)) {
        window.alert("Internet Explorerでは使用できません")
    } else {
        console.log("別のURLへ移動")
    }
}