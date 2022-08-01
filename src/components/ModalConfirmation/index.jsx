/* External */
import React from "react";
import PropTypes from "prop-types";

/* Components */
import { Button } from "@/components/Button";

/* Styles */
import "./ModalConfirmation.css";

/* Other */
import { PokemonContext } from "@/Pokemon/PokemonProvider";

export const ModalConfirmation = ({
  message,
  setOpenModal,
  handleConfirmed,
}) => {
  const { POKEMON_MESSAGES } = React.useContext(PokemonContext);

  return (
    <form className="pkm-modal-confirmation">
      <p className="pkm-modal-confirmation-p">{message}</p>
      <Button aria-label="btnConfirm" handleAction={handleConfirmed}>
        {POKEMON_MESSAGES["common.accept"]}
      </Button>
      <Button aria-label="btnCancel" handleAction={() => setOpenModal(false)}>
        {POKEMON_MESSAGES["common.cancel"]}
      </Button>
    </form>
  );
};

ModalConfirmation.propTypes = {
  message: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  handleConfirmed: PropTypes.func.isRequired,
};
