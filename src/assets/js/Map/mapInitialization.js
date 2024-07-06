/* eslint-disable no-param-reassign */
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
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
  mapRef,
  markerRef
) {
  if (!mapRef.current) {
    const map = L.map('map', {
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

    mapRef.current = map;

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
    }
  }
}

export default initializeMap;
