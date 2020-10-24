if (!navigator) {
    console.log("ブラウザでの実行ではありません。")
} else {
    const ua = navigator.userAgent
    const check = ua.match(/Windows NT ([^;]+);/)
    if (check && check.length > 1 && parseFloat(check[1]) < 6.2) { // Windows 7は6.1、8は6.2
        window.alert("Windows 8以上を利用してください。")
    } else {
        console.log("別のURLへ移動")
    }
}