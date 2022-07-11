/* External */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

/* Components */
import { TopBar } from "@/TopBar";
import { Modal } from "@/Modal";
import { PokemonForm } from "@/PokemonForm";
import { ListPokemon } from "@/ListPokemon";

/* Actions */
import { getAll } from "@/state/actions";

/* Other */
import { PokemonContext } from "@/PokemonProvider";
import { searchPokemonsByKeyword } from "@/utils/misc";

export const PokemonApp = () => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [pokemonToEdit, setPokemonToEdit] = useState({});
  const [pokemonsSearched, setPokemonsSearched] = useState(null);

  const { list: pokemons, status: statusGetPokemons } = useSelector(
    (store) => store.pokemons
  );

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
      <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
      <h3>{POKEMON_MESSAGES["page.title"]}</h3>
      <TopBar setOpenModal={setOpenModal} onSearchPokemons={onSearchPokemons} />
      <ListPokemon
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
