import React from 'react';

function TextInput({ id, name, value, onChange, hidden }) {
  const inputType = hidden ? 'hidden' : 'text';

  return (
    <input
      type={inputType}
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
