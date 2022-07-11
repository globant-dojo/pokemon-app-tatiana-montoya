/* External */
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

/* Reducers */
import pokemons from "./reducers";

export default combineReducers({
  loadingBar: loadingBarReducer,
  ...pokemons,
});
