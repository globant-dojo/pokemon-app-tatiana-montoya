/* External */
import { combineReducers } from "redux";

/* Actions */
import {
  ACTION_TYPES_GET_ALL,
  ACTION_TYPES_SAVE,
  ACTION_TYPES_DELETE,
  ACTION_TYPES_EDIT,
} from "./actions.js";

/* Other */
import { STATUS_TYPES } from "@/utils/constants.js";

const pokemonsInitialState = { status: STATUS_TYPES.UNLOAD_STATE, list: [] };
const actionInitialState = { status: STATUS_TYPES.UNLOAD_STATE };

function pokemons(state = pokemonsInitialState, { type, payload }) {
  switch (type) {
    case ACTION_TYPES_GET_ALL.REQUEST:
      return { ...state, status: STATUS_TYPES.INIT_STATE, list: [] };
    case ACTION_TYPES_GET_ALL.SUCCESS:
      return {
        ...state,
        status: STATUS_TYPES.SUCCEED_STATE,
        list: payload,
      };
    case ACTION_TYPES_DELETE.SUCCESS:
      const pokemonsFiltered = state.list.filter(
        (pokemon) => pokemon.id != payload
      );
      return {
        ...state,
        list: [...pokemonsFiltered],
      };
    case ACTION_TYPES_EDIT.SUCCESS: {
      const pokemonsUpdated = state.list.map((pokemon) => {
        if (pokemon.id === payload.id) return payload;
        return pokemon;
      });
      return {
        ...state,
        list: [...pokemonsUpdated],
      };
    }
    case ACTION_TYPES_SAVE.SUCCESS:
      const pokemonsUpdated = [...state.list, payload];
      return {
        ...state,
        list: pokemonsUpdated,
      };
    case ACTION_TYPES_GET_ALL.FAILURE:
      return {
        ...state,
        status: STATUS_TYPES.FAILED_STATE,
        error: payload.error,
      };
    default:
      return state;
  }
}

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
  pokemons,
  pokemon: combineReducers({
    save: createBaseReducer(ACTION_TYPES_SAVE, "save", actionInitialState),
    edit: createBaseReducer(ACTION_TYPES_EDIT, "edit", actionInitialState),
    delete: createBaseReducer(
      ACTION_TYPES_DELETE,
      "delete",
      actionInitialState
    ),
  }),
};
