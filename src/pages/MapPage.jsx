import React, { useState } from 'react';
import MapNavbar from '../components/Navbar/MapNavbar';
import MapComponent from '../assets/js/Map/mapComponent';

function MapPage() {
  const [latitude, setLatitude] = useState(51.505);
  const [longitude, setLongitude] = useState(-0.09);
  const [mapMode, setMapMode] = useState('view'); // Добавляем состояние для режима карты

  const customMapStyle = {
    height: '650px', // Увеличение высоты карты
    width: '89%', // Уменьшение ширины карты
    margin: '0 auto', // Центрирование карты
    marginTop: '120px', // Отступ от навбара
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
      />
    </>
  );
}

export default MapPage;
