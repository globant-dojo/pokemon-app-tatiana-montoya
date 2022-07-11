/* External */
import React, { useState, useEffect, useLayoutEffect } from "react";
import Slider from "rc-slider";
import { useDispatch } from "react-redux";

/* Components */
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

/* Actions */
import { savePokemon } from "@/state/actions";

/* Styles */
import "rc-slider/assets/index.css";
import "./PokemonForm.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

/* Constants */
const INPUT_SIZE = 200;
const SLIDER_STYLES = {
  backgroundColor: "#2771df",
};

export const PokemonForm = ({ setOpenModal, pokemonToEdit, clearPokemon }) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const [name, setName] = useState(pokemonToEdit.name || "");
  const [image, setImage] = useState(pokemonToEdit.image || "");
  const [attack, setAttack] = useState(pokemonToEdit.attack || 0);
  const [defense, setDefense] = useState(pokemonToEdit.defense || 0);

  const dispatch = useDispatch();

  const onSavePokemon = () => {
    const pokemonInfo = {
      ...pokemonToEdit,
      name,
      image,
      attack,
      defense,
    };

    dispatch(savePokemon(pokemonInfo));

    onCloseModal();
  };

  const onCloseModal = () => {
    setOpenModal(false);
    clearPokemon();
  };

  return (
    <form className="pkm-form">
      <div className="pkm-form-div-info">
        <label className="pkm-form-label">{`${POKEMON_MESSAGES["common.name"]}:`}</label>
        <Input
          size={INPUT_SIZE}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="pkm-form-label">{`${POKEMON_MESSAGES["common.attack"]}:`}</label>
        <div className="pkm-form-div-slider">
          {attack}
          <Slider
            min={0}
            max={100}
            trackStyle={SLIDER_STYLES}
            activeDotStyle={SLIDER_STYLES}
            defaultValue={50}
            value={attack}
            onChange={setAttack}
            className="pkm-form-slider"
          />
          100
        </div>
      </div>
      <div className="pkm-form-div-info">
        <label className="pkm-form-label">{`${POKEMON_MESSAGES["common.image"]}:`}</label>
        <Input
          size={INPUT_SIZE}
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <label className="pkm-form-label">{`${POKEMON_MESSAGES["common.defense"]}:`}</label>
        <div className="pkm-form-div-slider">
          {defense}
          <Slider
            min={0}
            max={100}
            trackStyle={SLIDER_STYLES}
            activeDotStyle={SLIDER_STYLES}
            defaultValue={50}
            value={defense}
            onChange={setDefense}
            className="pkm-form-slider"
          />
          100
        </div>
      </div>
      <div className="pkm-form-div-actions">
        <Button iconName="icon-create" handleAction={onSavePokemon}>
          {POKEMON_MESSAGES["common.save"]}
        </Button>
        <Button iconName="icon-cancel" handleAction={onCloseModal}>
          {POKEMON_MESSAGES["common.cancel"]}
        </Button>
      </div>
    </form>
  );
};
