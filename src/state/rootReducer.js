/* External */
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

/* Reducers */
import pokemons from "./pokemon/reducers";

export default combineReducers({
  loadingBar: loadingBarReducer,
  ...pokemons,
});
