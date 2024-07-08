import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw';
import 'terraformer';
import 'terraformer-arcgis-parser';
import 'terraformer-wkt-parser';
import '../../assets/css/map.css';
import botGardenMap from '../../assets/images/botGardenMap.png';

let map;

function MapComponent() {
  useEffect(() => {
    if (!map) {
      map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -4,
      });

      const bounds = [
        [0, 0],
        [9933, 14043],
      ];
      L.imageOverlay(botGardenMap, bounds).addTo(map); // Используем импортированное изображение
      map.fitBounds(bounds);

      const drawnItems = new L.FeatureGroup();
      map.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems,
        },
        draw: {
          polygon: true,
          polyline: true,
          rectangle: true,
          circle: false,
          marker: true,
        },
      });

      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (event) => {
        const { layer } = event;
        drawnItems.addLayer(layer);
      });
    }

    return () => {
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, []);

  return <div id="map" className="map-container" />;
}

export default MapComponent;
