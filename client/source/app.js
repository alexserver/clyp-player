// app.js
const express = require('express')
const app = express()

import index from './views/index'

app.set('view engine', 'pug')
app.set('views', './source/templates')

app.get('/', index)

app.listen(3000, () => {
  console.log('Tadaaa')
})