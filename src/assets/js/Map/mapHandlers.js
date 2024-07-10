/* eslint-disable no-unused-vars */
import L from 'leaflet';

export function addMapHandlers(mapRef, setLatitude, setLongitude, markerRef) {
  const map = mapRef.current;

  if (!map) {
    return;
  }

  if (!(map instanceof L.Map)) {
    return;
  }

  function handleMoveEnd() {
    const center = map.getCenter();
    setLatitude(center.lat);
    setLongitude(center.lng);
  }

  map.on('moveend', handleMoveEnd);
}

export default addMapHandlers;
