const { mergeTypeDefs } = require('@graphql-tools/merge');
const userSchemaGql = require('./modules/users/schema');
const postSchemaGql = require('./modules/posts/schema');

const types = [userSchemaGql, postSchemaGql];

module.exports = mergeTypeDefs(types);
