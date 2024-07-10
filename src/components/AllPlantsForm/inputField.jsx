import React from 'react';

function InputField({ value, name, onChange, disabled }) {
  return (
    <td data-category={name}>
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
