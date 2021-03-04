import { ADD_NEW_REPOSITORY, FAVORITE_REPOSITORY } from "./actionTypes";

export const addRepoAction = (value) => ({
  type: ADD_NEW_REPOSITORY,
  repos: value,
});

export const favRepoAction = (value) => ({
  type: FAVORITE_REPOSITORY,
  id: value,
});
