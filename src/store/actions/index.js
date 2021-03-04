import { ADD_NEW_REPOSITORY, FAVORITE_REPOSITORY, DELETE_REPOSITORY } from "./actionTypes";

export const addRepoAction = (value) => ({
  type: ADD_NEW_REPOSITORY,
  repos: value,
});

export const favRepoAction = (value) => ({
  type: FAVORITE_REPOSITORY,
  id: value,
});

export const delRepoAction = (value) => ({
  type: DELETE_REPOSITORY,
  id: value,
});
