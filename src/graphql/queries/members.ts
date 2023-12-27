import { gql } from "urql";

export const GET_MEMBERS_QUERY = gql`
  query GetUsers {
    GetUsers {
      avatar
      bio
      createdAt
      deletedAt
      email
      firstName
      id
      lastName
      phoneNumber
      updatedAt
      username
      isVerified
      role {
        roleName
        description
        permissions {
          permissionName
          description
        }
      }
    }
  }
`;
