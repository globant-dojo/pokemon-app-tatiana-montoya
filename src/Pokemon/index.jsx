/* External */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { ToastContainer } from "react-toastify";

/* Components */
import { TopBar } from "@/Pokemon/TopBar";
import { Modal } from "@/components/Modal";
import { PokemonForm } from "@/Pokemon/PokemonForm";
import { PokemonList } from "@/Pokemon/PokemonList";

/* Styles */
import "react-toastify/dist/ReactToastify.css";

/* Actions */
import { getAll } from "@/state/pokemon/actions";

/* Other */
import { PokemonContext } from "@/Pokemon/PokemonProvider";
import { searchPokemonsByKeyword, showMessages } from "@/utils/misc";

export const Pokemon = () => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [pokemonToEdit, setPokemonToEdit] = useState({});
  const [pokemonsSearched, setPokemonsSearched] = useState(null);

  const {
    pokemons: { list: pokemons, status: statusGetPokemons },
    pokemon: {
      save: pokemonSaveReducer,
      edit: pokemonEditReducer,
      delete: pokemonDeleteReducer,
    },
  } = useSelector((store) => store);

  useEffect(() => {
    showMessages(
      dispatch,
      pokemonEditReducer,
      pokemonSaveReducer,
      pokemonDeleteReducer,
      POKEMON_MESSAGES["messages.success"],
      POKEMON_MESSAGES["messages.error"]
    );
  }, [pokemonEditReducer, pokemonSaveReducer, pokemonDeleteReducer]);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const onEditPokemon = (pokemon) => {
    setPokemonToEdit(pokemon);
    setOpenModal(true);
  };

  const clearPokemonToEdit = () => setPokemonToEdit({});

  const onSearchPokemons = (keyword) => {
    const pokemonsSearched = searchPokemonsByKeyword(pokemons, keyword);
    setPokemonsSearched(pokemonsSearched);
  };

  const pokemonsToShow = pokemonsSearched || pokemons;

  return (
    <>
      <ToastContainer />
      <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
      <h3>{POKEMON_MESSAGES["page.title"]}</h3>
      <TopBar setOpenModal={setOpenModal} onSearchPokemons={onSearchPokemons} />
      <PokemonList
        statusGetPokemons={statusGetPokemons}
        pokemons={pokemonsToShow}
        onEditPokemon={onEditPokemon}
        onSearchPokemons={onSearchPokemons}
      />
      {openModal && (
        <Modal>
          <PokemonForm
            setOpenModal={setOpenModal}
            pokemonToEdit={pokemonToEdit}
            clearPokemon={clearPokemonToEdit}
          />
        </Modal>
      )}
    </>
  );
};
