import { gql } from "urql";

export const GET_AREAS_QUERY = gql`
  query GetAreas {
    GetAreas {
      createdAt
      deletedAt
      id
      name
      updatedAt
      light {
        id
        isOn
        createdAt
      }
    }
  }
`;
