sampleText = 'Hello World!'

function getAllPositionFrom(str, regex) {
    while (result = regex./* ① */(str)) {
        console.log(result./* ② */) // 出力例：4／7
    }
}

getAllPositionFrom(sampleText, new RegExp(/o/g))