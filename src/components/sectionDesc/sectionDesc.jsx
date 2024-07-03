import React from 'react';
import PropTypes from 'prop-types';

function SectionDescription({ description }) {
  return <p>{description}</p>;
}

SectionDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default SectionDescription;
