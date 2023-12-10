const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    active: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createUser(data: UserInput!): User!
    updateUser(id: ID!, data: UserInput!): User!
    deleteUser(id: ID!): Boolean
  }
`;