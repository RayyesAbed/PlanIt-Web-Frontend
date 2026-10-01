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

export const GET_USER_TASKS = gql`
  query {
    getUserTasks {
      _id
      name
      description
      dueDate
      priority
      points
      isCompleted
      isDue
    }
  }
`;
