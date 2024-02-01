import { gql } from "urql";

export const GET_PROFILE = gql`
  query {
    GetProfile {
      accessRights
      avatar
      bio
      createdAt
      deletedAt
      email
      firstName
      id
      isComplete
      isVerified
      lastName
      password
      phoneNumber
      role {
        permissions {
          permissionName
        }
        roleName
      }
      updatedAt
      username
    }
  }
`;
