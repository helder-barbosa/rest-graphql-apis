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
  type Product {
    id: String
    name: String
  }
  type Mutation {
    createProduct(input: ProductInput): Product
  }
  input ProductInput{
    id: String!
    name: String!
  }
`
const resolvers = {
  Query: {
    getAllProducts: () => [{ id: '1', name: 'All products' }]
  },
  Mutation: {
    createProduct: (context, { input }) => {
      const { id, name } = input
      console.log(id, name);
      return {
        id, name
      }
    }
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
    console.log('[SERVER] Running...')
  }
})