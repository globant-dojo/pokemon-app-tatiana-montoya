/* External */
import React from "react";
import Slider from "rc-slider";
import { useState } from "react";

/* Components */
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

/* Styles */
import "rc-slider/assets/index.css";
import "./PokemonForm.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

const INPUT_SIZE = 200;
const SLIDER_STYLES = {
  backgroundColor: "#2771df",
};

export const PokemonForm = ({ setOpenModal }) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);

  return (
    <form className="pkm-form">
      <div className="pkm-form-div-info">
        <label className="pkm-form-label">{`${POKEMON_MESSAGES["common.name"]}:`}</label>
        <Input size={INPUT_SIZE} />
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
        <Input size={INPUT_SIZE} />
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
        <Button iconName="icon-create">
          {POKEMON_MESSAGES["common.save"]}
        </Button>
        <Button iconName="icon-cancel" handleAction={() => setOpenModal(false)}>
          {POKEMON_MESSAGES["common.cancel"]}
        </Button>
      </div>
    </form>
  );
};
