const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const { ApolloServer, gql } = require('apollo-server-express')

// rest
app.use(bodyParser.json())
app.use(routes)

// graphql

const typeDefs = gql`
  type Query {
    getAllProducts : String
  }
`
const resolvers = {
  Query: {
    getAllProducts: () => 'All products'
  }
}

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
})

graphqlServer.applyMiddleware({ app })


app.listen(3000, (err) => {
  if (err) {
    console.log('[ERRO]', err)
  } else {
    console.log('Server running...')
  }
})