var pjson = require('./package.json');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
      msg: "Hello world"
  })
})

app.listen(port, () => {
  console.log(`${pjson.name} listening at http://localhost:${port}`)
})