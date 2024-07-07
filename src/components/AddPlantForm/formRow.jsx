import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/formRow.css'; // Ensure you have the appropriate CSS file

function FormRow({ children, hidden }) {
  const rowClass = hidden ? 'form-row hide' : 'form-row show';

  return <div className={rowClass}>{children}</div>;
}

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
};

FormRow.defaultProps = {
  hidden: false,
};

export default FormRow;
