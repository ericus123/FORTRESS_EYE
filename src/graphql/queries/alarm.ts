import { gql } from "urql";

export const GET_ALARM_QUERY = gql`
  query getAlarm($id: String!) {
    getAlarm(id: $id) {
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
  query getAlarms {
    getAlarms {
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
