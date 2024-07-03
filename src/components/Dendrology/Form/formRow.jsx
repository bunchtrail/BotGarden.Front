// formRow.jsx
import React from 'react';
import PropTypes from 'prop-types';

function FormRow({ children }) {
  return <div className="form-row">{children}</div>;
}

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormRow;
