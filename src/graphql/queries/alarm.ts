import { gql } from "urql";

export const GET_ALARM_QUERY = gql`
  query getAlarm($id: String!) {
    GetAlarm(id: $id) {
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

export const GET_ALARMS_QUERY = gql`
  query GetAlarms {
    GetAlarms {
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
