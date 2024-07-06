import React, { useState, useRef } from 'react';
import MapNavbar from '../components/Navbar/MapNavbar';
import MapComponent from '../assets/js/Map/mapComponent';
import {
  enableDrawing,
  enableEditing,
  enableDeleting,
  disableOtherModes,
} from '../assets/js/Map/mapDrawing';

function MapPage() {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const [mapMode, setMapMode] = useState('view');
  const mapRef = useRef(null);

  const customMapStyle = {
    height: '650px',
    width: '89%',
    margin: '0 auto',
    marginTop: '120px',
  };

  const setMode = (mode) => {
    setMapMode(mode);
    switch (mode) {
      case 'addArea':
        enableDrawing(mapRef.current, 'addArea');
        break;
      case 'editArea':
        enableEditing(mapRef.current);
        break;
      case 'deleteArea':
        enableDeleting(mapRef.current);
        break;
      case 'deletePlants':
        enableDrawing(mapRef.current, 'deletePlants');
        break;
      default:
        disableOtherModes(mapRef.current);
    }
  };

  return (
    <>
      <MapNavbar setMapMode={setMode} />
      <MapComponent
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        allowMarker={mapMode === 'marker'}
        allowArea={mapMode === 'addArea'}
        allowEdit={mapMode === 'editArea'}
        allowDelete={mapMode === 'deleteArea' || mapMode === 'deletePlants'}
        mapStyle={customMapStyle}
        mapRef={mapRef}
      />
    </>
  );
}

export default MapPage;
