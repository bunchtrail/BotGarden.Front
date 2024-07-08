/* eslint-disable no-param-reassign */
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import botGardenMap from '../../images/botGardenMapCut.png';

export function initializeMap(
  latitude,
  longitude,
  setPath,
  setLatitude,
  setLongitude,
  allowMarker,
  allowArea,
  allowEdit,
  allowDelete,
  mapContainerRef
) {
  if (!mapContainerRef.current) {
    return null;
  }

  if (mapContainerRef.current && mapContainerRef.current.leaflet_map) {
    if (mapContainerRef.current.leaflet_map instanceof L.Map) {
      return mapContainerRef.current.leaflet_map;
    }
    return null;
  }

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

  const defaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  mapContainerRef.current.defaultIcon = defaultIcon;
  mapContainerRef.current.leaflet_map = map;

  return map;
}

export default initializeMap;
