/* External */
import React from "react";

/* Components */
import { TopBar } from "./TopBar/TopBar";
import { Modal } from "./Modal";
import { PokemonForm } from "./PokemonForm";

/* Other */
import { PokemonContext } from "./PokemonProvider";
import { ListPokemon } from "./ListPokemon";
import { useState } from "react";

export const PokemonApp = () => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <h3>{POKEMON_MESSAGES["page.title"]}</h3>
      <TopBar setOpenModal={setOpenModal} />
      <ListPokemon />
      {openModal && (
        <Modal>
          <PokemonForm setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
};
