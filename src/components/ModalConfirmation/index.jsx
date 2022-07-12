/* Components */
import { Button } from "@/components/Button";

/* Styles */
import "./ModalConfirmation.css";

export const ModalConfirmation = ({
  message,
  setOpenModal,
  handleConfirmed,
}) => {
  return (
    <form className="pkm-modal-confirmation">
      <p className="pkm-modal-confirmation-p">{message}</p>
      <Button handleAction={handleConfirmed}>Aceptar</Button>
      <Button handleAction={() => setOpenModal(false)}>Cancelar</Button>
    </form>
  );
};
