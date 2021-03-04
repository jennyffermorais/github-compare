import { combineReducers } from "redux";
import { ADD_NEW_REPOSITORY, FAVORITE_REPOSITORY, DELETE_REPOSITORY } from "../actions/actionTypes";
import { REPOSITORIES_MOCK } from "../mocks";

const initialState = {
  repositories: [],
};

const handlerRepository = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_REPOSITORY:
      return {
        ...state,
        repositories: addRepo(action.repos, state.repositories),
      };
    case FAVORITE_REPOSITORY:
      return {
        ...state,
        repositories: favoriteRepo(action.id, state.repositories),
      };
    case DELETE_REPOSITORY:
      return {
        ...state,
        repositories: deleteRepo(action.id, state.repositories),
      };
    default:
      return state;
  }
};

//A chave do objeto é o nome na qual o estado será acessado pela aplicação
//O valor é o Reducer, função pura que filtra os dados
export const Reducers = combineReducers({
  handlerRepository: handlerRepository,
});

function addRepo(repo, state) {
  const newState = state.filter((r) => r.full_name != repo.full_name);
  newState.push(repo);
  return newState;
}

function favoriteRepo(id, state) {
  const index = state.findIndex((r) => r.id == id);

  state[index].isFavorite = !state[index].isFavorite;

  return state.slice();
}

function deleteRepo(id, state) {
  const index = state.findIndex((r) => r.id == id);

  if(index <= -1)
    return state;

  state.splice(index, 1);

  return state.slice();
}
