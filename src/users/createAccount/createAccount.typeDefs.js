import {gql} from 'apollo-server';

export default gql`
  type Mutation {
    createAccount(
      name: String!
      nickName: String!
      password: String!
    )
  }
`;