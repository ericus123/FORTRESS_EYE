import { gql } from "urql";

export const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile($input: ProfileInput!, $email: String!) {
    updateProfile(input: $input, email: $email) {
      email
      avatar
      firstName
      lastName
      username
    }
  }
`;
