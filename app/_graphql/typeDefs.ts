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

export const COMPLETE_TASK = gql`
  mutation ($data: TaskInput) {
    completeTask(input: $data) {
      name
      description
      dueDate
      priority
    }
  }
`;

export const EDIT_TASK = gql`
  mutation ($data: TaskInput) {
    editTask(input: $data) {
      name
      description
      dueDate
      priority
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($data: TaskInput) {
    deleteTask(input: $data) {
      name
      description
      dueDate
      priority
    }
  }
`;
