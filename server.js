const express = require('express')
const port = process.env.PORT || 8080
const baseURL = process.env.API_BASE_URL || 'http://localhost:3000/api'
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, '/dist/')))
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen(port, err => {
  if (err) console.log(err)
  console.log(`listen to port ${port}...`)
  console.log(`api is setted to ${baseURL}`)
})
