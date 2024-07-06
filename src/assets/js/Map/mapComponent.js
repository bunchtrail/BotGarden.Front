import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import L from 'leaflet';
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
}) {
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!mapContainerRef.current) {
      console.log('mapContainerRef.current is null');
      return;
    }

    if (!mapContainerRef.current.leaflet_map) {
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
        mapContainerRef,
        markerRef
      );
      if (initializedMap) {
        setMap(initializedMap);
        console.log('Map initialized:', initializedMap);
      }
    } else {
      console.log('Using existing map instance');
      if (mapContainerRef.current.leaflet_map instanceof L.Map) {
        setMap(mapContainerRef.current.leaflet_map);
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
  ]);

  useEffect(() => {
    if (map) {
      if (map instanceof L.Map) {
        console.log('Adding map handlers...');
        addMapHandlers({ current: map }, setLatitude, setLongitude, markerRef);
        console.log('Map handlers added.');
      } else {
        console.error('Map object is not an instance of L.Map');
      }
    }
  }, [map, setLatitude, setLongitude]);

  useEffect(() => {
    if (map && markerRef.current) {
      console.log('Updating marker position...');
      markerRef.current.setLatLng([latitude, longitude]);
      console.log('Marker position updated:', [latitude, longitude]);
    }
  }, [latitude, longitude, map]);

  return <div id="map" style={mapStyle} ref={mapContainerRef} />;
}

export default MapComponent;
