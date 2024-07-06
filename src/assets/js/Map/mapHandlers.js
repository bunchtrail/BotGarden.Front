/* eslint-disable no-unused-vars */
import L from 'leaflet';

export function addMapHandlers(mapRef, setLatitude, setLongitude, markerRef) {
  console.log('addMapHandlers called with:', {
    mapRef,
    setLatitude,
    setLongitude,
    markerRef,
  });

  const map = mapRef.current;

  console.log('Map object in addMapHandlers:', map);

  if (!map) {
    console.error('Map object is null or undefined.');
    return;
  }

  if (!(map instanceof L.Map)) {
    console.error('Map object is not an instance of L.Map');
    console.log('Type of map object:', typeof map);
    console.log('Map object properties:', Object.keys(map));
    return;
  }

  console.log('Adding event handlers to map:', map);

  map.on('moveend', function () {
    const center = map.getCenter();
    setLatitude(center.lat);
    setLongitude(center.lng);
    console.log('Map moved. New center:', center);
  });

  // Другие обработчики событий
}

export default addMapHandlers;
