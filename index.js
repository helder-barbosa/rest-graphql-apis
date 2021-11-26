const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const graphqlServer = require('./graphql')

// rest
app.use(bodyParser.json())
app.use(routes)

graphqlServer.applyMiddleware({ app })


app.listen(3000, (err) => {
  if (err) {
    console.log('[ERRO]', err)
  } else {
    console.log('[SERVER] Running...')
  }
})