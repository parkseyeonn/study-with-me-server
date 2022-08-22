import { gql } from "apollo-server";

export default gql`
  type Group {
    id: Int!
    name: String!
    members: GroupMember
    cateogories: GroupCategory
  }
  type GroupMember {
    userId: Int!
    grouptId: Int!
    isCreator: Boolean!
  }
  type GroupCategory {
    groupId: Int!
    categoryId: Int!
  }
  type Category {
    id: Int!
    name: String!
  }
`;