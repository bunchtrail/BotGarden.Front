/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import L from 'leaflet';
import { drawnItems } from './mapDrawing';

function removeLayerAndUpdateMap(layer, map) {
  if (!map) {
    console.error('Map object is undefined');
    return;
  }
  drawnItems.removeLayer(layer);
  layer.removeFrom(map);
  map.invalidateSize();
}

export default function handleAddArea(layer, map) {
  const coordinates = layer.getLatLngs()[0];

  if (coordinates.length < 3) {
    alert(
      'Недостаточно точек для создания полигона. Необходимо как минимум 3 точки.'
    );
    return;
  }

  const wkt = `POLYGON((${coordinates.map((coord) => `${coord.lng} ${coord.lat}`).join(',')},${coordinates[0].lng} ${coordinates[0].lat}))`;

  const modal = document.getElementById('areaModal');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('areaForm');

  modal.style.display = 'block';
  document.getElementById('geometryWKT').value = wkt;

  span.onclick = function () {
    modal.style.display = 'none';
    removeLayerAndUpdateMap(layer, map);
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      removeLayerAndUpdateMap(layer, map);
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();
    const areaName = document.getElementById('areaName').value;
    const newArea = {
      LocationPath: areaName,
      Geometry: wkt,
    };

    console.log('Отправка данных на сервер:', JSON.stringify(newArea));

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
        console.log('Область сохранена', data);
        layer.bindPopup(areaName).openPopup();
        layer.options.areaId = data.locationId;
        drawnItems.addLayer(layer);
        modal.style.display = 'none';
      })
      .catch((error) => console.error('Ошибка при сохранении области:', error));
  };
}

export function handleEditArea(event, map) {
  event.layers.eachLayer(function (layer) {
    const coordinates = layer.getLatLngs()[0];
    console.log('Редактирование области:', layer.options.areaId, coordinates);
    if (coordinates.length < 3) {
      alert(
        'Недостаточно точек для редактирования полигона. Необходимо как минимум 3 точки.'
      );
      return;
    }

    const wkt = `POLYGON((${coordinates.map((coord) => `${coord.lng} ${coord.lat}`).join(',')},${coordinates[0].lng} ${coordinates[0].lat}))`;
    const updatedArea = {
      LocationId: layer.options.areaId,
      Geometry: wkt,
    };

    console.log('Обновление данных на сервере:', JSON.stringify(updatedArea));

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
        console.log('Область обновлена', data);

        removeLayerAndUpdateMap(layer, map);

        const latlngs = coordinates.map((coord) => [coord.lat, coord.lng]);

        const polygon = L.polygon(latlngs, {
          areaId: data.locationId,
        }).addTo(drawnItems);
        polygon.bindPopup(data.locationPath).openPopup();

        console.log('Новый слой добавлен с areaId:', polygon.options.areaId);
      })
      .catch((error) => console.error('Ошибка при обновлении области:', error));
  });
}
