const path = require('path')
const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/api/weathers", (req, res) => {
  res.send( { today: 'fine', tomorrow: 'rain' } )
})

const port = 3000
app.listen(port, () => {
  console.log('Start : Web Server for Q8-8')
  console.log(`[URL] http://localhost:${port}`)
  console.log("To stop this web server, press Ctrl-C")
})
