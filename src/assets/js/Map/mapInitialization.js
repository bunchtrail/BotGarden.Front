/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import botGardenMap from '../../images/botGardenMapCut.png';

export function initializeMap(
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  allowMarker,
  _allowArea,
  _allowEdit,
  _allowDelete,
  mapContainerRef,
  markerRef
) {
  console.log('initializeMap called with:', {
    latitude,
    longitude,
    allowMarker,
    _allowArea,
    _allowEdit,
    _allowDelete,
    mapContainerRef,
    markerRef,
  });

  if (mapContainerRef.current && mapContainerRef.current.leaflet_map) {
    console.log('Returning existing map instance');
    if (mapContainerRef.current.leaflet_map instanceof L.Map) {
      console.log('Existing map instance is valid');
      return mapContainerRef.current.leaflet_map;
    }
    console.error('Existing map instance is not a valid L.Map');
  }

  console.log('Creating new map instance');
  const map = L.map(mapContainerRef.current, {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    zoom: 0,
    center: [latitude, longitude],
  });

  const bounds = [
    [0, 0],
    [6773, 12899],
  ];
  L.imageOverlay(botGardenMap, bounds).addTo(map);

  map.fitBounds(bounds);

  console.log('Map created:', map);

  if (allowMarker) {
    const defaultIcon = L.icon({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
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

    markerRef.current = marker;

    console.log('Marker created:', marker);
  }

  if (map instanceof L.Map) {
    console.log('Newly created map is an instance of L.Map');
  } else {
    console.error('Newly created map is NOT an instance of L.Map');
  }

  mapContainerRef.current.leaflet_map = map;

  console.log('Returning newly created map instance:', map);
  return map;
}

export default initializeMap;
