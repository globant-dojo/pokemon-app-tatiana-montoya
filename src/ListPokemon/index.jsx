/* External */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

/* Components */
import { ModalConfirmation } from "@/components/ModalConfirmation";
import { Modal } from "@/Modal";

/* Actions */
import { deletePokemon } from "@/state/pokemon/actions";

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

  const [openModal, setOpenModal] = useState(false);
  const [pokemonToDelete, setPokemonToDelete] = useState("");

  const dispatch = useDispatch();

  const getMessageStatus = () => {
    if (statusGetPokemons === STATUS_TYPES.INIT_STATE)
      return POKEMON_MESSAGES["common.loading"];
    if (statusGetPokemons === STATUS_TYPES.SUCCEED_STATE)
      return POKEMON_MESSAGES["common.successful"];
    if (statusGetPokemons === STATUS_TYPES.FAILED_STATE)
      return POKEMON_MESSAGES["common.failed"];
  };

  const onDeletePokemon = () => {
    dispatch(deletePokemon(pokemonToDelete));
    setOpenModal(false);
  };

  const confirmToDelete = (id) => {
    setPokemonToDelete(id);
    setOpenModal(true);
  };

  return (
    <>
      {openModal && (
        <Modal>
          <ModalConfirmation
            message={POKEMON_MESSAGES["table.messageToConfirm"]}
            setOpenModal={setOpenModal}
            handleConfirmed={onDeletePokemon}
          />
        </Modal>
      )}

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
                      role="icon-edit"
                      className="icon-edit"
                      onClick={() => onEditPokemon(pokemon)}
                    />
                    <span
                      className="icon-delete"
                      onClick={() => confirmToDelete(pokemon.id)}
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

ListPokemon.propTypes = {
  statusGetPokemons: PropTypes.string.isRequired,
  pokemons: PropTypes.array.isRequired,
  onEditPokemon: PropTypes.func.isRequired,
};
