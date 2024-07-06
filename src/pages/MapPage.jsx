/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import axios from 'axios'; // Импортируем axios для отправки запросов
import wellknown from 'wellknown'; // Импортируем библиотеку для преобразования GeoJSON в WKT
import MapNavbar from '../components/Navbar/MapNavbar';
import MapComponent from '../assets/js/Map/mapComponent';
import MapFetching from '../assets/js/Map/mapFetching';
import {
  enableDrawing,
  enableEditing,
  enableDeleting,
  disableOtherModes,
  drawnItems,
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

  const sendAreaToServer = async () => {
    if (drawnItems.getLayers().length > 0) {
      const layer = drawnItems.getLayers()[0];
      const geoJson = layer.toGeoJSON();
      const wkt = wellknown.stringify(geoJson.geometry); // Преобразование GeoJSON в WKT

      try {
        const response = await axios.post('/api/AddArea', {
          LocationPath: 'some_path', // Укажите путь для локации
          Geometry: wkt,
        });

        if (response.status === 200) {
          alert('Область успешно добавлена!');
        } else {
          alert('Ошибка при добавлении области.');
        }
      } catch (error) {
        alert(`Ошибка при добавлении области: ${error.message}`);
      }
    } else {
      alert('Не выделено ни одной области.');
    }
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
      <MapNavbar setMapMode={setMode} sendAreaToServer={sendAreaToServer} />
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
      <MapFetching mapRef={mapRef} />

      {/* Модальное окно для добавления области */}
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
    </>
  );
}

export default MapPage;
