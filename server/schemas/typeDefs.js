const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedPlaces: [Place]
  }

  type Place {
    placeId: ID!
    placeName: String!
    description: String
    image: String
    attractionType: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input UserInput {
   placeName: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savedPlace(attractionData: UserInput!): User
    removePlace(placeID: ID!): User
  }
`;

module.exports = typeDefs;
