const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.delete('/products/:id', (req, res) => {
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
})

app.patch('/products/:id', (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
})

app.put('/products/:id', (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: 'id ' + req.params.id
  })
})

app.post('/products', (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
})

app.get('/products/:id', (req, res) => {
  res.send({
    name: 'Product ' + req.params.id
  })
})

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