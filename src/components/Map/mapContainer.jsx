// mapContainer.jsx
import React from 'react';
import PropTypes from 'prop-types';

function MapContainer({ id, height }) {
  return (
    <div className="form-group">
      <div id={id} className="mb-3">
        <div style={{ height }} />
      </div>
    </div>
  );
}

MapContainer.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default MapContainer;
