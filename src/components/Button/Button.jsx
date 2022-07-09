/* Styles */
import "./Button.css";

export const Button = ({ iconName, children, handleAction }) => {
  console.log(handleAction);
  return (
    <button
      className="pkm-btn"
      onClick={(e) => handleAction && handleAction(e)}
    >
      {iconName && <span className={iconName} />}
      {children}
    </button>
  );
};
