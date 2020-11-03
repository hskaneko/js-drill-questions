const http = require('http')
const url = require('url')
const port = 3000

const server = http.createServer((req, res) => {
    const reqUrl = url./* ① */(req.url, true)
    const response_text = `${reqUrl./* ② */.slice(1).replace(/\//gi, ' > ')}`
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(response_text)
})

server.listen(port, () => console.log('稼働しました'))
// 出力例：稼働しました