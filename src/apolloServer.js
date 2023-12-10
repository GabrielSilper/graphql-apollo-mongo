const { ApolloServer } = require('apollo-server');

async function start({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({
    port: process.env.SERVER_PORT || 4000,
  });
  console.log(`Server started at ${url}`);
}

module.exports = {start};