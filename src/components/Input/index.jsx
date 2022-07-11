/* External */
import PropTypes from "prop-types";

/* Styles */
import "./Input.css";

export const Input = ({ placeholderText, iconName, size, ...rest }) => {
  return (
    <div className="pkm-div-input" style={{ maxWidth: `${size}px` }}>
      {iconName && <span className={iconName} />}
      <input className="pkm-input" placeholder={placeholderText} {...rest} />
    </div>
  );
};

Input.prototypes = {
  placeholderText: PropTypes.string,
};
