import { gql } from "urql";

export const SIGNIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    Signin(input: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SignoutUser() {
    SignoutUser
  }
`;

export const VERIFICATION_MUTATION = gql`
  mutation VerifyUser($token: String!) {
    VerifyUser(token: $token) {
      accessToken
      refreshToken
    }
  }
`;

export const SEND_VERIFICATION_MUTATION = gql`
  mutation SendVerification($email: String!) {
    SendVerification(email: $email)
  }
`;

export const REQUEST_PASSWORD_RESET = gql`
  mutation RequestPasswordReset($email: String!) {
    RequestPasswordReset(email: $email)
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword($password: String!, $token: String!) {
    ResetPassword(password: $password, token: $token)
  }
`;
