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
  setPath,
  allowMarker,
  allowArea,
  allowEdit,
  allowDelete,
  mapStyle,
  mapRef,
}) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const mapExists =
      mapRef.current && mapRef.current.leaflet_map instanceof L.Map;
    if (!mapExists) {
      mapRef.current = {
        leaflet_map: initializeMap(
          latitude,
          longitude,
          setLatitude,
          setLongitude,
          setPath,
          allowMarker,
          allowArea,
          allowEdit,
          allowDelete,
          mapContainerRef
        ),
      };
    }

    const map = mapRef.current.leaflet_map;

    map.on('click', function (e) {
      if (!allowMarker) return;

      const { lat, lng } = e.latlng;
      setLatitude(lat);
      setLongitude(lng);

      if (mapContainerRef.current.marker) {
        map.removeLayer(mapContainerRef.current.marker);
      }

      const clickMarker = L.marker([lat, lng], {
        draggable: true,
        icon: mapContainerRef.current.defaultIcon,
      }).addTo(map);

      clickMarker.on('dragend', function (event) {
        const position = event.target.getLatLng();
        setLatitude(position.lat);
        setLongitude(position.lng);
      });

      clickMarker.on('dblclick', function () {
        map.removeLayer(clickMarker);
        mapContainerRef.current.marker = null;
      });

      mapContainerRef.current.marker = clickMarker;
    });
  }, [
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    allowMarker,
    allowArea,
    allowEdit,
    allowDelete,
    setPath,
    mapRef,
  ]);

  return <div id="map" style={mapStyle} ref={mapContainerRef} />;
}

export default MapComponent;
