/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react';
import L from 'leaflet';
import MapNavbar from '../components/Navbar/MapNavbar';
import MapComponent from '../assets/js/Map/mapComponent';
import MapFetching from '../assets/js/Map/mapFetching';
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
  const mod = 'info';

  useEffect(() => {
    if (mapRef.current && mapRef.current.leaflet_map) {
      if (mapRef.current.leaflet_map instanceof L.Map) {
        switch (mapMode) {
          case 'addArea':
            enableDrawing(mapRef.current.leaflet_map, 'addArea');
            break;
          case 'editArea':
            enableEditing(mapRef.current.leaflet_map);
            break;
          case 'deleteArea':
            enableDeleting(mapRef.current.leaflet_map);
            break;
          case 'deletePlants':
            enableDrawing(mapRef.current.leaflet_map, 'deletePlants');
            break;
          default:
            disableOtherModes(mapRef.current.leaflet_map);
        }
      } else {
        throw new Error('MapRef is not an instance of L.Map');
      }
    }
  }, [mapMode, mapRef]);

  const customMapStyle = {
    height: '650px',
    width: '89%',
    margin: '0 auto',
    marginTop: '120px',
  };

  return (
    <>
      <MapNavbar setMapMode={setMapMode} />
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
      <MapFetching mapRef={mapRef} mod={mod} />
      <AreaModal />
    </>
  );
}

function AreaModal() {
  return (
    <div id="areaModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <form id="areaForm">
          <label htmlFor="areaName">Название области:</label>
          <input type="text" id="areaName" name="areaName" required />
          <input type="hidden" id="geometryWKT" name="geometryWKT" />
          <button type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default MapPage;
