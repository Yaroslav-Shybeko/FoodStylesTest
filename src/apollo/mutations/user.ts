import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($name: NonEmptyString!, $email: EmailAddress!, $password: Password!) {
    signUpWithEmail(name: $name, email: $email,  password: $password) {
      user {
        id
        email
        name
      },
      accessToken,
      refreshToken
    }
  }
`;

export const LOG_IN = gql`
  mutation LogIn($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
      },
      accessToken,
      refreshToken
    }
  }
`;

export const UPDATE = gql`
  mutation LogIn($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
