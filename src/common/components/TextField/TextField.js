import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ id, label, name, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={id || name}>{label}</label>
    <input id={id || name}
           name={name}
           type="text"
           className="form-control"
           value={value}
           onChange={onChange} />
  </div>
);

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  id: undefined,
};

export default TextField;
