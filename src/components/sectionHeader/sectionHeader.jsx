import React from 'react';
import PropTypes from 'prop-types';

function SectionHeader({ title }) {
  return <h1>{title}</h1>;
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
