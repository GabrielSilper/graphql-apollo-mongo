const { mergeResolvers } = require('@graphql-tools/merge');

const userResolvers = require('./modules/users/resolvers');
const postResolvers = require('./modules/posts/resolvers');

const resolvers = [userResolvers, postResolvers];

module.exports = mergeResolvers(resolvers);
