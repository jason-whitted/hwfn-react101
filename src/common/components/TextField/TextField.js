import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ id, label, name, value }) => (
  <div className="form-group">
    <label htmlFor={id || name}>{label}</label>
    <input id={id || name} name={name} type="text" className="form-control" value={value} />
  </div>
);

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

TextField.defaultProps = {
  id: undefined,
};

export default TextField;
