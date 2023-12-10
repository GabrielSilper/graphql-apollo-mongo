const { start } = require('./server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

start({ typeDefs, resolvers });
