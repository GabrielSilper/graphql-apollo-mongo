const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post!
  }

  input PostInput {
    title: String!
    content: String!
    author: ID!
  }

  type Mutation {
    createPost(data: PostInput!): Post!
    updatePost(id: ID!, data: PostInput!): Post!
    deletePost(id: ID!): Boolean
  }
`;
