/* eslint-disable no-param-reassign */
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import WKT from 'terraformer-wkt-parser';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { drawnItems } from './mapDrawing';

const customIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const fetchPlants = (map) => {
  console.log('Fetching plants');
  fetch('https://localhost:7076/api/Map/GetAll')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((plant) => {
        if (plant.latitude && plant.longitude) {
          const marker = L.marker([plant.latitude, plant.longitude], {
            icon: customIcon,
          }).addTo(map);
          const popupContent = `<div>
            <h4>${plant.species || 'Нет данных'}</h4>
            <p>Сорт: ${plant.variety || 'Нет данных'}</p>
            <p>Описание: ${plant.note || 'Нет данных'}</p>
            <button id="delete">Удалить</button>
          </div>`;
          console.log('Plant data:', plant);
          marker.bindPopup(popupContent);
          marker.plantId = plant.plantId;
          marker.species = plant.species;
          marker.variety = plant.variety;
          marker.note = plant.note;
          drawnItems.addLayer(marker);
        } else {
          console.warn(
            `Plant with ID ${plant.plantId} has invalid coordinates.`
          );
        }
      });
    })
    .catch((error) => console.error('Error loading plants:', error));
};

const fetchAreas = (map) => {
  console.log('Fetching areas');
  fetch('https://localhost:7076/api/Map/GetAllAreas')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((area) => {
        if (
          !area.locationId ||
          !area.geometry ||
          !area.geometry.match(/^POLYGON\(\(/)
        ) {
          console.warn(`Invalid data for area: ${JSON.stringify(area)}`);
          return;
        }
        try {
          const polygon = WKT.parse(area.geometry);
          if (polygon && polygon.type === 'Polygon') {
            const latlngs = polygon.coordinates[0].map((coord) => [
              coord[1],
              coord[0],
            ]);
            const layer = L.polygon(latlngs).addTo(map);
            layer.bindPopup(area.locationPath); // Используем LocationPath как имя
            layer.options.areaId = area.locationId; // Устанавливаем areaId в options
            console.log('Загружен areaId:', layer.options.areaId);
            layer.locationPath = area.locationPath;
            drawnItems.addLayer(layer);
          } else {
            console.warn(
              `Invalid polygon type or coordinates for area with ID ${area.locationId}`
            );
          }
        } catch (e) {
          console.error(
            `Error parsing WKT for area with ID ${area.locationId}:`,
            e
          );
        }
      });
    })
    .catch((error) => console.error('Error loading areas:', error));
};

function MapFetching({ mapRef }) {
  useEffect(() => {
    if (
      mapRef.current &&
      mapRef.current.leaflet_map &&
      !mapRef.current.loaded
    ) {
      console.log('MapFetching useEffect triggered');
      fetchPlants(mapRef.current.leaflet_map);
      fetchAreas(mapRef.current.leaflet_map);
      mapRef.current.loaded = true; // Флаг для предотвращения повторной загрузки
    }
  }, [mapRef]);

  return null;
}

export default MapFetching;
