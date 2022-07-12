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

export const ACTION_TYPES_EDIT = {
  EDIT: "EDIT",
  REQUEST: "EDIT_REQUEST",
  SUCCESS: "EDIT_SUCCESS",
  FAILURE: "EDIT_FAILURE",
  RESET: "EDIT_RESET",
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

export const saveSuccess = (pokemon) => ({
  type: ACTION_TYPES_SAVE.SUCCESS,
  payload: pokemon,
});

export const saveFailure = (error) => ({
  type: ACTION_TYPES_SAVE.FAILURE,
  payload: { ...error },
});

export const saveReset = () => ({
  type: ACTION_TYPES_SAVE.RESET,
});

// EDIT

export const editPokemon = (pokemon) => ({
  type: ACTION_TYPES_EDIT.EDIT,
  payload: pokemon,
});

export const editRequest = () => {
  return { type: ACTION_TYPES_EDIT.REQUEST };
};

export const editSuccess = (pokemon) => ({
  type: ACTION_TYPES_EDIT.SUCCESS,
  payload: pokemon,
});

export const editFailure = (error) => ({
  type: ACTION_TYPES_EDIT.FAILURE,
  payload: { ...error },
});

export const editReset = () => ({
  type: ACTION_TYPES_EDIT.RESET,
});

// DELETE

export const deletePokemon = (id) => ({
  type: ACTION_TYPES_DELETE.DELETE,
  payload: id,
});

export const deleteRequest = () => {
  return { type: ACTION_TYPES_DELETE.REQUEST };
};

export const deleteSuccess = (id) => ({
  type: ACTION_TYPES_DELETE.SUCCESS,
  payload: id,
});

export const deleteFailure = (error) => ({
  type: ACTION_TYPES_DELETE.FAILURE,
  payload: { ...error },
});

export const deleteReset = () => ({
  type: ACTION_TYPES_DELETE.RESET,
});
