/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import L from 'leaflet';
import { initializeMap } from './mapInitialization';

function MapComponent({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  allowMarker,
  allowArea,
  allowEdit,
  allowDelete,
  mapStyle,
  mapRef,
}) {
  const mapContainerRef = useRef(null);

  console.log('MapComponent props:', {
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    allowMarker,
    allowArea,
    allowEdit,
    allowDelete,
    mapRef,
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const mapExists =
      mapRef.current && mapRef.current.leaflet_map instanceof L.Map;
    if (!mapExists) {
      console.log('Initializing map...');
      mapRef.current = {
        leaflet_map: initializeMap(
          latitude,
          longitude,
          setLatitude,
          setLongitude,
          allowMarker,
          allowArea,
          allowEdit,
          allowDelete,
          mapContainerRef
        ),
      };
    } else {
      console.log('Using existing map instance');
      const map = mapRef.current.leaflet_map;

      map.off('click').on('click', function (e) {
        const { lat, lng } = e.latlng;
        setLatitude(lat);
        setLongitude(lng);
        console.log('Map clicked at:', lat, lng);
      });
    }
  }, [
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    allowMarker,
    allowArea,
    allowEdit,
    allowDelete,
    mapRef,
  ]);

  return <div id="map" style={mapStyle} ref={mapContainerRef} />;
}

export default MapComponent;
