/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import L from 'leaflet';
import { drawnItems } from './mapDrawing';

function removeLayerAndUpdateMap(layer, map) {
  if (!map) {
    if (!map) {
      throw new Error('Map object is undefined');
    }
    if (drawnItems.hasLayer(layer)) {
      drawnItems.removeLayer(layer);
    }
    if (map.hasLayer(layer)) {
      map.removeLayer(layer);
    }
  }
  map.invalidateSize();
}

export default function handleAddArea(layer, map) {
  const coordinates = layer.getLatLngs()[0];

  const wkt = `POLYGON((${coordinates.map((coord) => `${coord.lng} ${coord.lat}`).join(',')},${coordinates[0].lng} ${coordinates[0].lat}))`;

  const modal = document.getElementById('areaModal');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('areaForm');

  modal.style.display = 'block';
  document.getElementById('geometryWKT').value = wkt;

  function spanOnClick() {
    modal.style.display = 'none';
    removeLayerAndUpdateMap(layer, map);
  }
  span.onclick = spanOnClick;

  function windowOnClick(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      removeLayerAndUpdateMap(layer, map);
    }
  }
  window.onclick = windowOnClick;

  function formOnSubmit(e) {
    e.preventDefault();
    const areaName = document.getElementById('areaName').value;
    const newArea = {
      LocationPath: areaName,
      Geometry: wkt,
    };

    fetch('https://localhost:7076/api/Map/AddArea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArea),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        layer.bindPopup(areaName).openPopup();
        layer.options.areaId = data.locationId;
        drawnItems.addLayer(layer);
        modal.style.display = 'none';
      })
      .catch((error) => {
        throw new Error(`Ошибка при сохранении области: ${error}`);
      });
  }
  form.onsubmit = formOnSubmit;
}

export function handleEditArea(event, map) {
  event.layers.eachLayer((layer) => {
    const coordinates = layer.getLatLngs()[0];

    const wkt = `POLYGON((${coordinates.map((coord) => `${coord.lng} ${coord.lat}`).join(',')},${coordinates[0].lng} ${coordinates[0].lat}))`;
    const updatedArea = {
      LocationId: layer.options.areaId,
      Geometry: wkt,
    };

    removeLayerAndUpdateMap(layer, map);

    fetch('https://localhost:7076/api/Map/UpdateArea', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArea),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        const latlngs = coordinates.map((coord) => [coord.lat, coord.lng]);

        const polygon = L.polygon(latlngs, {
          areaId: data.locationId,
        }).addTo(drawnItems);
        polygon.bindPopup(data.locationPath).openPopup();
      })
      .catch((error) => {
        throw new Error('Ошибка при обновлении области:', error);
      });
  });
}

export function handleDeleteArea(event, map) {
  event.layers.eachLayer((layer) => {
    const { areaId } = layer.options;

    fetch(`https://localhost:7076/api/Map/DeleteArea/${areaId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        removeLayerAndUpdateMap(layer, map);
      })
      .catch((error) => {
        throw new Error(`Ошибка при удалении области: ${error}`);
      });
  });
}

export function handleDeletePlantsInArea(layer, map) {
  const bounds = layer.getBounds();
  const markersToRemove = [];

  drawnItems.eachLayer((marker) => {
    if (marker instanceof L.Marker && bounds.contains(marker.getLatLng())) {
      markersToRemove.push(marker._plantId);
    }
  });

  if (markersToRemove.length > 0) {
    fetch('https://localhost:7076/api/Map/DeletePlantsInArea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plantIds: markersToRemove }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text);
          });
        }
        markersToRemove.forEach((id) => {
          drawnItems.eachLayer((marker) => {
            if (marker instanceof L.Marker && marker._plantId === id) {
              map.removeLayer(marker);
            }
          });
        });
      })
      .catch((error) => {
        throw new Error(`Ошибка при удалении растений: ${error}`);
      });
  }

  map.removeLayer(layer);
}
