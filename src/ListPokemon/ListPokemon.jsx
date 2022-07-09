/* External */
import React from "react";

/* Styles */
import "./ListPokemon.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";

export const ListPokemon = () => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  return (
    <table className="pkm-table">
      <thead>
        <tr>
          <th>{POKEMON_MESSAGES["common.name"]}</th>
          <th>{POKEMON_MESSAGES["common.image"]}</th>
          <th>{POKEMON_MESSAGES["common.attack"]}</th>
          <th>{POKEMON_MESSAGES["common.defense"]}</th>
          <th>{POKEMON_MESSAGES["table.actions"]}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>
            <div className="pkm-table-div-img">
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                alt=""
              />
            </div>
          </td>
          <td>Germany</td>
          <td>Germany</td>
          <td>
            <div className="pkm-table-div-actions">
              <span className="icon-edit" />
              <span className="icon-delete" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
