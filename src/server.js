const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

async function start({ typeDefs, resolvers }) {
  await startMongo();
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({
    port: process.env.SERVER_PORT || 4000,
  });
  console.log(`Server started at ${url}`);
}

async function startMongo() {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI, { authSource: 'admin' });
    console.log('Good connection with database');
  } catch (error) {
    console.log(`You have a trouble with the connection: ${error}`);
  }
}

module.exports = { start };
