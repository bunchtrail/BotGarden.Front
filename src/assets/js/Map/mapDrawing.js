/* eslint-disable import/no-cycle */
import L from 'leaflet';
import 'leaflet-draw';
import handleAddArea, {
  handleEditArea,
  handleDeleteArea,
  handleDeletePlantsInArea,
} from './mapAreaHandlers';

let drawControl;
export const drawnItems = new L.FeatureGroup();

export function disableOtherModes(map) {
  if (drawControl) {
    console.log('Отключение текущего режима');
    map.removeControl(drawControl);
    drawControl = null;
  }
}

export function enableDrawing(map, mode) {
  console.log('Включение режима рисования', mode);
  disableOtherModes(map);
  if (!map.hasLayer(drawnItems)) {
    map.addLayer(drawnItems);
  }
  drawControl = new L.Control.Draw({
    draw: {
      polygon: mode === 'addArea',
      rectangle: mode === 'addArea' || mode === 'deletePlants',
      circle: false,
      marker: false,
      polyline: false,
    },
    edit: {
      featureGroup: drawnItems,
      edit: false,
      remove: false,
    },
  });
  map.addControl(drawControl);
  map.on(L.Draw.Event.CREATED, (event) => {
    const { layer } = event;
    if (mode === 'deletePlants') {
      handleDeletePlantsInArea(layer, map);
    } else if (mode === 'addArea') {
      handleAddArea(layer, map); // Добавляем обработчик для новой области
    }
  });
}

export function enableEditing(map) {
  console.log('Включение режима редактирования');
  disableOtherModes(map);
  if (!map.hasLayer(drawnItems)) {
    map.addLayer(drawnItems);
  }
  drawControl = new L.Control.Draw({
    draw: {
      polygon: false,
      rectangle: false,
      circle: false,
      marker: false,
      polyline: false,
    },
    edit: {
      featureGroup: drawnItems,
      edit: {
        selectedPathOptions: {
          maintainColor: false,
          opacity: 0.3,
        },
      },
      remove: false,
    },
  });
  map.addControl(drawControl);
  map.on('draw:edited', (event) => {
    console.log('Редактирование области:', event);
    handleEditArea(event, map); // Добавляем обработчик для редактирования областей
  });
}

export function enableDeleting(map) {
  console.log('Включение режима удаления');
  disableOtherModes(map);
  if (!map.hasLayer(drawnItems)) {
    map.addLayer(drawnItems);
  }
  drawControl = new L.Control.Draw({
    draw: {
      polygon: false,
      rectangle: false,
      circle: false,
      marker: false,
      polyline: false,
    },
    edit: {
      featureGroup: drawnItems,
      edit: false,
      remove: true,
    },
  });
  map.addControl(drawControl);
  map.on('draw:deleted', (event) => {
    console.log('Удаление области:', event);
    handleDeleteArea(event, map); // Добавляем обработчик для удаления областей
  });
}
