import L from 'leaflet';
import 'leaflet-draw';

export function enableDrawing(mapRef, allowArea, allowDelete, allowEdit) {
  const map = mapRef.current;

  if (map && allowArea) {
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
        remove: allowDelete,
        edit: allowEdit,
      },
      draw: {
        polygon: true,
        polyline: true,
        rectangle: true,
        circle: false,
        marker: false,
      },
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (event) => {
      const { layer } = event;
      drawnItems.addLayer(layer);
    });
  }
}

export default enableDrawing;
