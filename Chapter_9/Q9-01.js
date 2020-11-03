const http = /* ① */('http')
const url = /* ① */('url')
const port = 3000

const server = http./* ② */((req, res) => {
  const reqUrl = url./* ③ */(req.url, true)
  if (reqUrl.path == "/" && req./* ④ */ == "GET") {
    res./* ⑤ */ = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!')
  } else {
    res./* ⑤ */ = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end('パスが存在しません')
  }
});

server./* ⑥ */(/* ⑦ */, () => console.log('稼働しました'))
// 出力例：稼働しました