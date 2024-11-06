import { gql } from "urql";

export const GET_LIGHTS_QUERY = gql`
  query GetLights {
    GetLights {
      areaID
      createdAt
      deletedAt
      id
      isOn
      name
      updatedAt
      area {
        name
        id
      }
    }
  }
`;
