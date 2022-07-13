/* External */
import PropTypes from "prop-types";

/* Styles */
import "./Button.css";

export const Button = ({ iconName, children = "", handleAction, ...rest }) => {
  return (
    <button
      type="button"
      className="pkm-btn"
      onClick={(e) => handleAction && handleAction(e)}
      {...rest}
    >
      {iconName && <span className={iconName} />}
      {children}
    </button>
  );
};

Button.propTypes = {
  iconName: PropTypes.string,
  handleAction: PropTypes.func,
  children: PropTypes.string,
};
