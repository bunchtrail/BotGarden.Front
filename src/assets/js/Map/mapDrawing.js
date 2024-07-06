import L from 'leaflet';
import 'leaflet-draw';

let drawControl;
const drawnItems = new L.FeatureGroup();
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
    drawnItems.addLayer(layer);
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
}
