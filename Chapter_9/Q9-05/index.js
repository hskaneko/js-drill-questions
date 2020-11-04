const ejs = /* ① */
const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  ejs./* ② */('index.ejs', {'name': 'Rakib'},
    (err, /* ③ */)=>{
    if(err){
      res.statusCode = 500
      res.end()
    } else {
      res.statusCode = 200
      res.end(/* ③ */)
    }
  })
})

server.listen(port, () => console.log('稼働しました'))
// 出力例：稼働しました
