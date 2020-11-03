const http = require('http')
const url = require('url')
const querystring = require('querystring')
const port = 3000
const header = (title) =>
  `<head><meta charset="utf-8"><title>${title}</title></head>`
const page = (title, contents) =>
  `<!DOCTYPE HTML><html>${header(title)}\
<body>${contents}</body></html>`
const output = (res, html) => {
  res.statusCode = 200
  res.setHeader('Content-Type',
    'text/html; charset=UTF-8'); res.end(html)
}

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true)
  if (reqUrl.pathname == '/' && req.method === 'GET') {
    output(res, page('Form Input', `<h4>名前を入力してください</h4>
      <form method="POST" action="/post_name">
        <input type="text" name="name"
               placeholder="名前を入力してください">
        <input type="submit" value="Submit">
      </form>`))
  } else if (reqUrl.pathname == '/post_name' &&
    req.method === /* ① */) {
    var body = ''
    req.on('data', function (chunk) { body += chunk })
    req.on('end', function () {
      const postBody = querystring./* ② */(body)
      const name = postBody./* ③ */  || ''
      output(res, page('Form Output',
        `<h1>こんにちは, ${name} さん!</h1>`))
    })
  }
})

server.listen(port, () => console.log('稼働しました'))
// 出力例：稼働しました