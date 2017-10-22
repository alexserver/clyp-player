// app.js
const express = require('express')
const app = express()

// index
app.get('/', (req, res) => {
  res.send('sup')
})

app.listen(8080, () =>{
  console.log('server listening')
})