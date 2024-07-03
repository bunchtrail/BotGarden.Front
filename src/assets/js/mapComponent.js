// src/components/Dendrology/Map/mapComponent.js
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import botGardenMap from '../images/botGardenMap.png';

function MapComponent({ latitude, longitude, setLatitude, setLongitude }) {
  useEffect(() => {
    const map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -2,
    });

    const bounds = [
      [0, 0],
      [9933, 14043],
    ];
    L.imageOverlay(botGardenMap, bounds).addTo(map);

    map.fitBounds(bounds);

    const marker = L.marker([latitude, longitude], { draggable: true }).addTo(
      map
    );

    marker.on('dragend', function (event) {
      const position = event.target.getLatLng();
      setLatitude(position.lat);
      setLongitude(position.lng);
    });

    return () => {
      map.remove();
    };
  }, [latitude, longitude, setLatitude, setLongitude]);

  return <div id="map" style={{ height: '400px' }} />;
}

export default MapComponent;
