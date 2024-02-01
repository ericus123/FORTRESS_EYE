import { gql } from "urql";

export const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile($input: ProfileInput!) {
    updateProfile(input: $input) {
      email
      avatar
      firstName
      lastName
      username
    }
  }
`;
