/* External */
import React from "react";

/* Components */
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

/* Styles */
import "./TopBar.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

export const TopBar = ({ setOpenModal }) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);
  return (
    <div className="pkm-topBar">
      <Input
        placeholderText={POKEMON_MESSAGES["common.search"]}
        iconName="icon-search"
        size={300}
      />
      <Button iconName="icon-add" handleAction={() => setOpenModal(true)}>
        {POKEMON_MESSAGES["common.new"]}
      </Button>
    </div>
  );
};
