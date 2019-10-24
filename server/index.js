const { gql, ApolloServer } = require('apollo-server')

const { port } = require('../constants')

const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    luckyNumber: String
  }
`;

const resolvers = {
  Query: {
    luckyNumber: () => `Your lucky number is ${Math.floor(Math.random() * 101)}`
  }
}

const server = new ApolloServer({
  cors: true,
  typeDefs, 
  resolvers,
  playground: process.env.NODE_ENV === 'production' ? false : true
});

console.log(process.env.NODE_ENV)

server.listen({
  port: process.env.PORT || port
}).then(
  (serverInformation) => console.log('Server running at', serverInformation.url)
  );