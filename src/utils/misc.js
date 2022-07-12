/* External */
import { toast } from "react-toastify";

/* Actions */
import { saveReset, editReset, deleteReset } from "@/state/pokemon/actions";

/* Other */
import { STATUS_TYPES } from "./constants";

export const searchPokemonsByKeyword = (pokemons, keyword) => {
  const keywordLowerCase = keyword.toLowerCase();

  const pokemonsSearched = pokemons.filter(({ name }) =>
    name.toLowerCase().includes(keywordLowerCase)
  );
  return pokemonsSearched;
};

const showToastConfirmation = (message, type) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnFocusLoss: false,
  });
};

export const showMessages = (
  dispatch,
  pokemonEditReducer,
  pokemonSaveReducer,
  pokemonDeleteReducer,
  successMessage,
  errorMessage
) => {
  let messageForToast = "";
  let type = "";

  if (pokemonEditReducer.status === STATUS_TYPES.SUCCEED_STATE) {
    messageForToast = successMessage;
    type = "success";
    dispatch(editReset());
  }

  if (pokemonEditReducer.status === STATUS_TYPES.FAILED_STATE) {
    type = "error";
    messageForToast = errorMessage;
    dispatch(editReset());
  }

  if (pokemonSaveReducer.status === STATUS_TYPES.SUCCEED_STATE) {
    type = "success";
    messageForToast = successMessage;
    dispatch(saveReset());
  }

  if (pokemonSaveReducer.status === STATUS_TYPES.FAILED_STATE) {
    type = "error";
    messageForToast = errorMessage;
    dispatch(saveReset());
  }

  if (pokemonDeleteReducer.status === STATUS_TYPES.SUCCEED_STATE) {
    type = "success";
    messageForToast = successMessage;
    dispatch(deleteReset());
  }

  if (pokemonDeleteReducer.status === STATUS_TYPES.FAILED_STATE) {
    type = "error";
    messageForToast = errorMessage;
    dispatch(deleteReset());
  }

  if (messageForToast) showToastConfirmation(messageForToast, type);
};
