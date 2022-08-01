/* External */
import { call, put, all, takeLatest } from "redux-saga/effects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

/* Actions */
import * as actions from "./actions";

/* Services */
import {
  getPokemons as getPokemonsService,
  addPokemon as addPokemonService,
  deletePokemon as deletePokemonService,
  editPokemon as editPokemonService,
} from "./services";

function* getPokemons() {
  yield put(showLoading());
  yield put(actions.getAllRequest());
  try {
    const { data = [] } = yield call(getPokemonsService);
    yield put(actions.getAllSuccess(data));
  } catch (error) {
    console.error(`getPokemons: ${error}`);
    yield put(actions.getAllFailure(error.response.data));
  } finally {
    yield put(hideLoading());
  }
}

function* savePokemon({ payload: pokemon }) {
  yield put(showLoading());
  yield put(actions.saveRequest());
  try {
    const { data: pokemonResult } = yield call(addPokemonService, pokemon);

    yield put(actions.saveSuccess(pokemonResult));
  } catch (error) {
    console.error(`save: ${error}`);
    yield put(actions.addFailure(error.response.data));
  } finally {
    yield put(hideLoading());
  }
}

function* editPokemon({ payload: pokemon }) {
  yield put(showLoading());
  yield put(actions.editRequest());
  try {
    const { data: pokemonResult } = yield call(editPokemonService, pokemon);

    yield put(actions.editSuccess(pokemonResult));
  } catch (error) {
    console.error(`edit: ${error}`);
    yield put(actions.editFailure(error.response.data));
  } finally {
    yield put(hideLoading());
  }
}

function* deletePokemon({ payload: id }) {
  yield put(showLoading());
  yield put(actions.deleteRequest());
  try {
    yield call(deletePokemonService, id);
    yield put(actions.deleteSuccess(id));
  } catch (error) {
    console.error(`delete: ${error}`);
    yield put(actions.deleteFailure(error.response.data));
  } finally {
    yield put(hideLoading());
  }
}

export default function* root() {
  yield all([
    takeLatest(actions.ACTION_TYPES_GET_ALL.GET, getPokemons),
    takeLatest(actions.ACTION_TYPES_SAVE.SAVE, savePokemon),
    takeLatest(actions.ACTION_TYPES_DELETE.DELETE, deletePokemon),
    takeLatest(actions.ACTION_TYPES_EDIT.EDIT, editPokemon),
  ]);
}
