import { gql } from "urql";

export const ADD_AREA_MUTATION = gql`
  mutation AddArea($input: InputArea!) {
    AddArea(input: $input) {
      name
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
