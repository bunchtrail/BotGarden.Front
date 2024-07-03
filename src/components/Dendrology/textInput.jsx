// textInput.jsx
import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ id, name, value, onChange }) {
  return (
    <input
      type="text"
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
