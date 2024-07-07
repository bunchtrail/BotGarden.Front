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

  useEffect(() => {
    if (!mapContainerRef.current) {
      console.log('mapContainerRef.current is null');
      return;
    }

    if (!mapRef.current) {
      console.log('Initializing map...');
      const initializedMap = initializeMap(
        latitude,
        longitude,
        setLatitude,
        setLongitude,
        allowMarker,
        allowArea,
        allowEdit,
        allowDelete,
        mapContainerRef
      );
      if (initializedMap) {
        mapRef.current = { leaflet_map: initializedMap };
        console.log('Map initialized:', initializedMap);
      }
    } else {
      console.log('Using existing map instance');
      if (mapRef.current.leaflet_map instanceof L.Map) {
        console.log('MapRef is a valid L.Map instance');
      } else {
        console.error('Existing map instance is not a valid L.Map');
      }
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
