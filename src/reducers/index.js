import { combineReducers } from "redux";
import { ADD_NEW_REPOSITORY } from "../actions/actionTypes";

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
