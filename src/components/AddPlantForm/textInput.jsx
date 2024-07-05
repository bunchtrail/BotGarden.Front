import React from 'react';

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

export default TextInput;
