/* External */
import axios from "axios";

const BASE_URL = "https://bp-pokemons.herokuapp.com/";
const ID_AUTHOR = 2;

export const getPokemons = () => {
  return axios.get(`${BASE_URL}?idAuthor=${ID_AUTHOR}`, {
    headers: {
      Accept: "application/json",
    },
  });
};

export const addPokemon = (pokemon) => {
  const newPokemon = {
    hp: 1000,
    type: "Agua",
    idAuthor: ID_AUTHOR,
    ...pokemon,
  };

  return axios.post(BASE_URL, newPokemon, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export function editPokemon(pokemon) {
  const newPokemon = {
    hp: 1000,
    type: "Agua",
    idAuthor: ID_AUTHOR,
    ...pokemon,
  };
  return axios({
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    url: `${BASE_URL}${pokemon.id}`,
    data: newPokemon,
  });
}

export const deletePokemon = (id) => {
  return (
    axios.delete(`${BASE_URL}${id}`),
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};
