import {gql} from 'apollo-server';

export default gql`
  type User {
    id: Int!
    name: String!
    nickname: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String
  }
`;