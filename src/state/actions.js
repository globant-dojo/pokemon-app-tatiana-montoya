export const ACTION_TYPES_GET_ALL = {
  GET: "GET_ALL",
  REQUEST: "GET_ALL_REQUEST",
  SUCCESS: "GET_ALL_SUCCESS",
  FAILURE: "GET_ALL_FAILURE",
  RESET: "GET_ALL_RESET",
};

export const ACTION_TYPES_SAVE = {
  SAVE: "SAVE",
  REQUEST: "SAVE_REQUEST",
  SUCCESS: "SAVE_SUCCESS",
  FAILURE: "SAVE_FAILURE",
  RESET: "SAVE_RESET",
};

export const ACTION_TYPES_DELETE = {
  DELETE: "DELETE",
  REQUEST: "DELETE_REQUEST",
  SUCCESS: "DELETE_SUCCESS",
  FAILURE: "DELETE_FAILURE",
  RESET: "DELETE_RESET",
};

// Get all

export const getAll = () => ({
  type: ACTION_TYPES_GET_ALL.GET,
});

export const getAllRequest = () => {
  return { type: ACTION_TYPES_GET_ALL.REQUEST };
};

export const getAllSuccess = (pokemons) => ({
  type: ACTION_TYPES_GET_ALL.SUCCESS,
  payload: pokemons,
});

export const getAllFailure = (error) => ({
  type: ACTION_TYPES_GET_ALL.FAILURE,
  payload: { ...error },
});

export const getAllReset = () => ({
  type: ACTION_TYPES_GET_ALL.RESET,
});

// SAVE

export const savePokemon = (pokemon) => ({
  type: ACTION_TYPES_SAVE.SAVE,
  payload: pokemon,
});

export const saveRequest = () => {
  return { type: ACTION_TYPES_SAVE.REQUEST };
};

export const saveSuccess = () => ({
  type: ACTION_TYPES_SAVE.SUCCESS,
});

export const saveFailure = (error) => ({
  type: ACTION_TYPES_SAVE.FAILURE,
  payload: { ...error },
});

export const resetPokemon = () => ({
  type: ACTION_TYPES_SAVE.RESET,
});

// DELETE

export const deletePokemon = (id) => ({
  type: ACTION_TYPES_DELETE.DELETE,
  payload: id,
});

export const deleteRequest = () => {
  return { type: ACTION_TYPES_DELETE.REQUEST };
};

export const deleteSuccess = () => ({
  type: ACTION_TYPES_DELETE.SUCCESS,
});

export const deleteFailure = (error) => ({
  type: ACTION_TYPES_DELETE.FAILURE,
  payload: { ...error },
});

export const deleteReset = () => ({
  type: ACTION_TYPES_DELETE.RESET,
});
