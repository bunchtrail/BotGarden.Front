import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import { initializeMap } from './mapInitialization';
import { addMapHandlers } from './mapHandlers';

function MapComponent({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  allowMarker = true,
  allowArea = false,
  allowEdit = false,
  allowDelete = false,
  mapStyle,
  mapRef,
}) {
  const markerRef = useRef(null);

  useEffect(() => {
    initializeMap(
      latitude,
      longitude,
      setLatitude,
      setLongitude,
      allowMarker,
      allowArea,
      allowEdit,
      allowDelete,
      mapRef,
      markerRef
    );
    addMapHandlers(mapRef, setLatitude, setLongitude, markerRef);
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

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    }
  }, [latitude, longitude]);

  return <div id="map" style={mapStyle} />;
}

export default MapComponent;
