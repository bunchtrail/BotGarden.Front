import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, iconClass, children }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      <i className={iconClass} /> {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
