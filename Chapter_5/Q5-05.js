if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
    const lang = navigator.language
    const langIds = lang.toUpperCase().split("-")
    if (langIds.indexOf("JA") > -1 || langIds.indexOf("JP") > -1) {
        console.log("別のURLへ移動")
    } else {
        window.alert("Please set the language of your browser to Japanese.")
    }
}