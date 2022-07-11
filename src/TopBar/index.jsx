/* External */
import React, { useState } from "react";

/* Components */
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

/* Styles */
import "./TopBar.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

export const TopBar = ({ setOpenModal, onSearchPokemons }) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (event) => {
    const newKeywordValue = event.target.value;
    setKeyword(newKeywordValue);
    onSearchPokemons(newKeywordValue);
  };

  return (
    <div className="pkm-topBar">
      <Input
        placeholderText={POKEMON_MESSAGES["common.search"]}
        iconName="icon-search"
        size={300}
        value={keyword}
        onChange={onChangeKeyword}
      />
      <Button iconName="icon-add" handleAction={() => setOpenModal(true)}>
        {POKEMON_MESSAGES["common.new"]}
      </Button>
    </div>
  );
};
