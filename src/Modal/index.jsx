/* External */
import ReactDOM from "react-dom";

/* Styles */
import "./Modal.css";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
};
