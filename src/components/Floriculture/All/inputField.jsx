import React from 'react';

function InputField({ value, name, onChange, disabled }) {
  return (
    <td>
      <input
        type="text"
        className="input-field"
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    </td>
  );
}

export default InputField;
