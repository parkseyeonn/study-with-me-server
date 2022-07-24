import { gql } from "apollo-server";

export default gql`
  type LoginResult {
    token: String
  }
  type Mutation {
    login(uid: String!, password: String!): LoginResult!
  }
`;