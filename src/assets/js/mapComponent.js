/* eslint-disable react-hooks/exhaustive-deps */
// src/components/Dendrology/Map/mapComponent.js
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import botGardenMap from '../images/botGardenMap.png';

function MapComponent({ latitude, longitude, setLatitude, setLongitude }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

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

    // Настройка иконки маркера
    const defaultIcon = L.icon({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41], // размер иконки
      iconAnchor: [12, 41], // точка якоря
      popupAnchor: [1, -34], // точка всплывающего окна
      shadowSize: [41, 41], // размер тени
    });

    const marker = L.marker([latitude, longitude], {
      draggable: true,
      icon: defaultIcon,
    }).addTo(map);

    marker.on('dragend', function (event) {
      const position = event.target.getLatLng();
      setLatitude(position.lat);
      setLongitude(position.lng);
    });

    map.on('click', function (event) {
      const { lat, lng } = event.latlng;
      setLatitude(lat);
      setLongitude(lng);
      marker.setLatLng([lat, lng]);
    });

    mapRef.current = map;
    markerRef.current = marker;

    return () => {
      map.remove();
    };
  }, []); // Этот useEffect будет вызван только один раз при монтировании компонента

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    }
  }, [latitude, longitude]); // Этот useEffect будет вызван при изменении latitude и longitude

  return <div id="map" style={{ height: '400px' }} />;
}

export default MapComponent;
