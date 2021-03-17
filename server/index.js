const { gql, ApolloServer } = require('apollo-server')

const { port } = require('../constants').dev.apollo

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

server.listen({
  port: process.env.PORT || port
}).then(
  (serverInformation) => console.log('Apollo Server is running at', serverInformation.url, 'in', process.env.NODE_ENV)
  );