/* External */
import PropTypes from "prop-types";

/* Styles */
import "./Input.css";

export const Input = ({ placeholderText = "", iconName, size, onChange }) => {
  return (
    <div className="pkm-div-input" style={{ maxWidth: `${size}px` }}>
      {iconName && <span className={iconName} />}
      <input
        className="pkm-input"
        placeholder={placeholderText}
        onChange={onChange}
      />
    </div>
  );
};

Input.protTypes = {
  placeholderText: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholderText: "",
  size: 100,
};
