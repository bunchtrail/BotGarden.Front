/* eslint-disable no-underscore-dangle */
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
          marker.bindPopup(popupContent);
          marker._plantId = plant.plantId;
          marker.species = plant.species;
          marker.variety = plant.variety;
          marker.note = plant.note;
          drawnItems.addLayer(marker);
        }
      });
    })
    .catch((error) => {
      throw new Error('Error loading plants:', error);
    });
};

const fetchAreas = (map, mod, setPath) => {
  fetch('https://localhost:7076/api/Map/GetAllAreas')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      let currentMarker = null;
      data.forEach((area) => {
        if (
          area.locationId &&
          area.geometry &&
          area.geometry.match(/^POLYGON\(\(/)
        ) {
          try {
            const polygon = WKT.parse(area.geometry);
            if (polygon && polygon.type === 'Polygon') {
              const latlngs = polygon.coordinates[0].map((coord) => [
                coord[1],
                coord[0],
              ]);
              const layer = L.polygon(latlngs, { interactive: true }).addTo(
                map
              );

              if (mod === 'marker') {
                layer.on('click', (e) => {
                  if (currentMarker) {
                    map.removeLayer(currentMarker);
                  }
                  currentMarker = L.marker(e.latlng, {
                    draggable: true,
                    icon: customIcon,
                  }).addTo(map);

                  map.eachLayer((mapLayer) => {
                    if (
                      mapLayer instanceof L.Polygon &&
                      mapLayer.getBounds().contains(e.latlng)
                    ) {
                      setPath(mapLayer.locationPath);
                    }
                  });
                });
              } else if (mod === 'info') {
                layer.bindPopup(area.locationPath);
              }

              layer.options.areaId = area.locationId;
              layer.locationPath = area.locationPath;
              drawnItems.addLayer(layer);
            }
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(
              `Error parsing WKT for area with ID ${area.locationId}: ${e}`
            );
          }
        }
      });

      if (mod === 'marker') {
        map.on('click', (e) => {
          if (currentMarker) {
            map.removeLayer(currentMarker);
          }
          currentMarker = L.marker(e.latlng, {
            draggable: true,
            icon: customIcon,
          }).addTo(map);

          let locationFound = false;

          map.eachLayer((mapLayer) => {
            if (
              mapLayer instanceof L.Polygon &&
              mapLayer.getBounds().contains(e.latlng)
            ) {
              setPath(mapLayer.locationPath);
              locationFound = true;
            }
          });

          if (!locationFound) {
            setPath('');
          }
        });
      }
    })
    .catch((error) => {
      throw new Error('Error loading areas:', error);
    });
};

function MapFetching({ mapRef, mod, setPath, setLocationOptions }) {
  useEffect(() => {
    if (
      mapRef.current &&
      mapRef.current.leaflet_map &&
      !mapRef.current.loaded
    ) {
      fetchPlants(mapRef.current.leaflet_map);
      fetchAreas(mapRef.current.leaflet_map, mod, setPath);
      mapRef.current.loaded = true;
    }

    const fetchLocations = async () => {
      try {
        const response = await fetch(
          'https://localhost:7076/api/Map/GetAllAreas'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const locations = data.map((location) => ({
          value: location.locationPath,
          label: location.locationPath,
        }));
        setLocationOptions(locations);
      } catch (error) {
        throw new Error('Error loading locations:', error);
      }
    };

    if (mod === 'marker') fetchLocations();
  }, [mapRef, mod, setPath, setLocationOptions]);

  return null;
}

export default MapFetching;
