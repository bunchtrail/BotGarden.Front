import React from 'react';
import Button from '../Buttons/Button/ButtonClick';

function ToggleMapButton({ toggleMap, showMap }) {
  return (
    <Button
      onClick={toggleMap}
      iconClass="fas fa-map"
      className="btn btn-primary"
    >
      {showMap ? 'Скрыть карту' : 'Показать карту'}
    </Button>
  );
}

export default ToggleMapButton;
