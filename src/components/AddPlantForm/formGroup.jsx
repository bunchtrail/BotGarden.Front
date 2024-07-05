import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/formGroup.css';

function FormGroup({ label, htmlFor, colSize, children }) {
  const className = `form-group col-md-${colSize}`;
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <div className="form-input">{children}</div>
    </div>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  colSize: PropTypes.oneOf([4, 6, 12]).isRequired,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
