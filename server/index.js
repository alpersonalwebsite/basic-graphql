const { gql, ApolloServer } = require('apollo-server')

const typeDefs = gql`
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
  typeDefs, 
  resolvers,
  playground: process.env.NODE_ENV === 'production' ? false : true
});

console.log(process.env.NODE_ENV)

server.listen({
  port: 9090
}).then(
  (serverInformation) => console.log('Server running at', serverInformation.url)
  );