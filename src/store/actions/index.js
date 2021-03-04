import {
  ADD_NEW_REPOSITORY,
  FAVORITE_REPOSITORY,
  DELETE_REPOSITORY,
  FILTER_BY_NAME,
  FILTER_BY_FAVORITE,
  SORT_BY_AGE,
} from "./actionTypes";

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

export const filterByName = (value) => ({
  type: FILTER_BY_NAME,
  name: value,
});

export const filterByFavorite = (value) => ({
  type: FILTER_BY_FAVORITE,
  isFavorite: value,
});

export const sortByAge = (value) => ({
  type: SORT_BY_AGE,
  age: value,
});
