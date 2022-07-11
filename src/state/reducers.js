/* External */
import { combineReducers } from "redux";

/* Actions */
import {
  ACTION_TYPES_GET_ALL,
  ACTION_TYPES_SAVE,
  ACTION_TYPES_DELETE,
} from "./actions.js";

/* Other */
import { STATUS_TYPES } from "@/utils/constants.js";

const pokemonsInitialState = { status: STATUS_TYPES.UNLOAD_STATE, list: [] };
const actionInitialState = { status: STATUS_TYPES.UNLOAD_STATE };

export function createBaseReducer(ACTION_TYPES, name, initialStateValues) {
  const initialState = {
    status: STATUS_TYPES.UNLOAD_STATE,
    ...initialStateValues,
  };
  return function (state = initialState, { type, payload }) {
    switch (type) {
      case ACTION_TYPES.REQUEST:
        return { ...state, status: STATUS_TYPES.INIT_STATE };
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          status: STATUS_TYPES.SUCCEED_STATE,
          [name]: payload,
          error: initialState.error || null,
        };
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          status: STATUS_TYPES.FAILED_STATE,
          error: payload,
          [name]: initialState[name] || null,
        };
      case ACTION_TYPES.RESET:
        return initialState;
      default:
        return state;
    }
  };
}

export default {
  pokemons: createBaseReducer(
    ACTION_TYPES_GET_ALL,
    "list",
    pokemonsInitialState
  ),
  pokemon: combineReducers({
    save: createBaseReducer(ACTION_TYPES_SAVE, "save", actionInitialState),
    delete: createBaseReducer(
      ACTION_TYPES_DELETE,
      "delete",
      actionInitialState
    ),
  }),
};
