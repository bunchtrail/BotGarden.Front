import React from 'react';
import PropTypes from 'prop-types';

function FormButton({ id, className, children }) {
  return (
    <div className="form-group">
      <button id={id} className={className} type="button">
        {children}
      </button>
    </div>
  );
}

FormButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormButton;
