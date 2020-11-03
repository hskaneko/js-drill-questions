const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const port = 3000
const baseDir = __dirname // スクリプトの存在するパス

const mimeTypes = {
    '.html': 'text/html', '.jgp': 'image/jpeg',
    '.css': 'text/css', '.js': 'text/javascript',
    '.png': 'image/png', '.ico': 'image/x-icon'
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)
    res.setHeader('Content-Type', getContentType(parsedUrl.pathname))
    const filePath = /* ① */(baseDir, parsedUrl.pathname)
  /* ② */(filePath, (error, data) => {
        if (!error) {
            res.statusCode = 200
            res.end(/* ③ */)
        } else {
            res.statusCode = 404
            res.end('404 - File Not Found')
        }
    })
})
// プログラムは次のページに続く

function getContentType(pathName) {
    let contentType = 'application/octet-stream'
    fileEXT = '.' + pathName.split('.')[1]
    if (mimeTypes.hasOwnProperty(fileEXT)) {
        contentType = mimeTypes[fileEXT]
    }
    return contentType
}

server.listen(port, () => console.log('稼働しました'))
// 出力例：稼働しました