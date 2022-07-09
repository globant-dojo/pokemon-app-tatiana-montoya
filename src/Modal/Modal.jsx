/* External */
import ReactDOM from "react-dom";

/* Styles */
import "./Modal.css";

function Modal({ children }) {
  console.log(children);
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
