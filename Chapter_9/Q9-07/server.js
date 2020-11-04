const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true)
    const fruits = ['林檎', 'オレンジ', 'バナナ', 'メロン', '葡萄']
    if (reqUrl.pathname === '/fruits' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(fruits))
    } else {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end('エラー')
    }
})

module.exports = server