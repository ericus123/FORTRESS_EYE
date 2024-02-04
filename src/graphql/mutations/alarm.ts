import { gql } from "urql";

export const ADD_ALARM_MUTATION = gql`
  mutation addAlarm($input: IAlarm!) {
    addAlarm(input: $input) {
      areaID
      createdAt
      deletedAt
      id
      isOn
      name
      updatedAt
    }
  }
`;

export const UPDATE_ALARM_MUTATION = gql`
  mutation updateAlarm($id: String!, $input: IAlarm!) {
    updateAlarm(id: $id, input: $input) {
      areaID
      createdAt
      deletedAt
      id
      isOn
      name
      updatedAt
    }
  }
`;
