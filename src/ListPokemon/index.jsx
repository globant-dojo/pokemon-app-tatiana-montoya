/* External */
import React from "react";
import { useDispatch } from "react-redux";

/* Actions */
import { deletePokemon } from "@/state/actions";

/* Styles */
import "./ListPokemon.css";

/* Other */
import { PokemonContext } from "@/PokemonProvider";
import { STATUS_TYPES } from "@/utils/constants.js";

export const ListPokemon = ({
  statusGetPokemons,
  pokemons = [],
  onEditPokemon,
}) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  const dispatch = useDispatch();

  const getMessageStatus = () => {
    if (statusGetPokemons === STATUS_TYPES.INIT_STATE)
      return POKEMON_MESSAGES["common.loading"];
    if (statusGetPokemons === STATUS_TYPES.SUCCEED_STATE)
      return POKEMON_MESSAGES["common.successful"];
    if (statusGetPokemons === STATUS_TYPES.FAILED_STATE)
      return POKEMON_MESSAGES["common.failed"];
  };

  const onDeletePokemon = (id) => {
    dispatch(deletePokemon(id));
  };

  return (
    <>
      {!pokemons?.length ? (
        <h3>{getMessageStatus()}</h3>
      ) : (
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
            {pokemons.map((pokemon) => (
              <tr key={pokemon.id}>
                <td>{pokemon.name}</td>
                <td>
                  <div className="pkm-table-div-img">
                    <img src={pokemon.image} alt="" />
                  </div>
                </td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>
                  <div className="pkm-table-div-actions">
                    <span
                      className="icon-edit"
                      onClick={() => onEditPokemon(pokemon)}
                    />
                    <span
                      className="icon-delete"
                      onClick={() => onDeletePokemon(pokemon.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
