// ButtonClick.jsx

import React from 'react';
import PropTypes from 'prop-types';

function Button({ onClick, iconClass, children, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
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
