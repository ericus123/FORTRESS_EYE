import { gql } from "urql";

export const ADD_DOOR_MUTATION = gql`
  mutation addDoor($input: IDoor) {
    addDoor(input: $input) {
      areaID
      cameraID
      createdAt
      deletedAt
      id
      isLocked
      updatedAt
    }
  }
`;

export const UPDATE_DOOR_MUTATION = gql`
  mutation updateDoor($input: IDoor!, $id: String!) {
    updateDoor(input: $input, id: $id) {
      areaID
      cameraID
      createdAt
      deletedAt
      id
      isLocked
      updatedAt
    }
  }
`;
