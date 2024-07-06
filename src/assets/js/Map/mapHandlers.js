export function addMapHandlers(mapRef, setLatitude, setLongitude, markerRef) {
  const map = mapRef.current;

  if (map) {
    map.on('click', function (event) {
      const { lat, lng } = event.latlng;
      setLatitude(lat);
      setLongitude(lng);
      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
      }
    });
  }
}

export default addMapHandlers;
