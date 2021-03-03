import { ADD_NEW_REPOSITORY } from "./actionTypes";

export const addRepoAction = (value) => ({
  type: ADD_NEW_REPOSITORY,
  repos: value,
});
