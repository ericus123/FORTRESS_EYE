import { gql } from "urql";

export const ADD_LIGHT_MUTATION = gql`
  mutation addLight($input: ILight) {
    addLight(input: $input) {
      areaID
      cameraID
      createdAt
      deletedAt
      id
      isOn
      updatedAt
    }
  }
`;

export const UPDATE_LIGHT_MUTATION = gql`
  mutation updateLight($input: ILight!, $id: String!) {
    updateLight(input: $input, id: $id) {
      areaID
      cameraID
      createdAt
      deletedAt
      id
      isOn
      updatedAt
    }
  }
`;
