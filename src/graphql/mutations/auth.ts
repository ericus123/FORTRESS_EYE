import { gql } from "urql";

export const SIGNIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    Signin(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
