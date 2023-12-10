const { start } = require('./apolloServer');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

start({ typeDefs, resolvers });
