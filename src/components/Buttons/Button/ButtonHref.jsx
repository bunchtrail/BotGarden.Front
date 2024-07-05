import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick = () => {},
  iconClass,
  children,
  className = 'btn-primary',
  href,
}) {
  if (href) {
    return (
      <a href={href} className={`btn ${className}`}>
        <i className={iconClass} /> {children}
      </a>
    );
  }

  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      <i className={iconClass} /> {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: 'btn-primary',
  href: '',
};

export default Button;
