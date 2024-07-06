import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-draw';
import WKT from 'terraformer-wkt-parser';
import { drawnItems } from './mapDrawing';

const fetchPlants = (map) => {
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
          const marker = L.marker([plant.latitude, plant.longitude]).addTo(map);
          const popupContent = `<div>
            <h4>${plant.species || 'Нет данных'}</h4>
            <p>Сорт: ${plant.variety || 'Нет данных'}</p>
            <p>Описание: ${plant.note || 'Нет данных'}</p>
            <button id="delete">Удалить</button>
          </div>`;
          console.log(data);
          marker.bindPopup(popupContent);
          marker.plantId = plant.plantId; // Устанавливаем plantId на маркер
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
            layer.areaId = area.locationId;
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
    if (mapRef.current) {
      fetchPlants(mapRef.current);
      fetchAreas(mapRef.current);
    }
  }, [mapRef]);

  return null;
}

export default MapFetching;
