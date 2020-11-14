const path = require('path')
const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/api/gems", (req, res) => {
  const gemList = [ { id: "A-09", name: "エメラルド", price: 30000 },
                    { id: "A-12", name: "ダイアモンド", price: 90000 },
                    { id: "B-23", name: "オパール", price: 12000 } ]
  res.send(gemList)
})


const port = 3000
app.listen(port, () => {
  console.log('Start : Web Server for Q8-10')
  console.log(`[URL] http://localhost:${port}`)
  console.log("To stop this web server, press Ctrl-C")
})
