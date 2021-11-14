const express = require('express')
const app = express()

app.get('/products', (req, res) => {
  res.send({
    products: ['all products']
  })
})

app.listen(3000, (err) => {
  if (err) {
    console.log('[ERRO]', err)
  } else {
    console.log('Server running...')
  }
})