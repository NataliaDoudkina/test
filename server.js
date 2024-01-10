const express = require('express')
const app = express()
const HTTP_PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(HTTP_PORT, () => {
  console.log(`Example app listening on port ${HTTP_PORT}`)
})
