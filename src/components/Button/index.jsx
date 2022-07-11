/* Styles */
import "./Button.css";

export const Button = ({ iconName, children, handleAction }) => {
  return (
    <button
      type="button"
      className="pkm-btn"
      onClick={(e) => handleAction && handleAction(e)}
    >
      {iconName && <span className={iconName} />}
      {children}
    </button>
  );
};
