// ButtonHref.jsx

import React from 'react';
import PropTypes from 'prop-types';

function Button({ href, iconClass, children }) {
  return (
    <a href={href}>
      <button type="button" className="btn btn-primary">
        <i className={iconClass} /> {children}
      </button>
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
