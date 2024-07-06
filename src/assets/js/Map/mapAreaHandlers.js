/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import L from 'leaflet';
import { drawnItems } from './mapDrawing';

export default function handleAddArea(layer) {
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
    drawnItems.removeLayer(layer);
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      drawnItems.removeLayer(layer);
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
        layer.options.areaId = data.locationId; // Устанавливаем areaId в options
        drawnItems.addLayer(layer); // Добавляем слой в drawnItems после успешного сохранения
        modal.style.display = 'none';
      })
      .catch((error) => console.error('Ошибка при сохранении области:', error));
  };
}

export function handleEditArea(event) {
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
      LocationId: layer.options.areaId, // Используем options для доступа к areaId
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

        // Удаляем старый слой из drawnItems
        drawnItems.removeLayer(layer);

        // Создаем новый слой с обновленными координатами
        const latlngs = coordinates.map((coord) => [coord.lat, coord.lng]);

        const polygon = L.polygon(latlngs, {
          areaId: data.locationId, // Устанавливаем areaId для нового слоя
        }).addTo(drawnItems);
        polygon.bindPopup(data.locationPath).openPopup();

        console.log('Новый слой добавлен с areaId:', polygon.options.areaId);
      })
      .catch((error) => console.error('Ошибка при обновлении области:', error));
  });
}
