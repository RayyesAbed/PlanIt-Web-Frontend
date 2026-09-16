import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query {
    getUserData {
      name
      confirmedEmail
      birthDate
      preferredLanguage
      points
      picture
      subscription {
        name
        features
        price
        currency
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation ($data: TaskInput) {
    addTask(input: $data) {
      name
      description
      dueDate
      priority
    }
  }
`;
