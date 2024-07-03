import React from 'react';
import PropTypes from 'prop-types';

function FormGroupMd4({ label, htmlFor, children }) {
  return (
    <div className="form-group col-md-4">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}

FormGroupMd4.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormGroupMd4;
