const express = require('express')
const app = express()
const port = 3000
// made change
app.get('/', (req, res) => {
  res.json({'name':'changed'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})