import React, { useRef, useEffect } from 'react';
import FormRow from './formRow';
import FormGroup from './formGroup';
import TextInput from './textInput';
import ToggleMapButton from './toggleMapButton';
import MapComponent from '../../assets/js/Map/mapComponent';

export default function FormFields({
  formState,
  handleInputChange,
  setLatitude,
  setLongitude,
  toggleMap,
  showMap,
}) {
  const mapRef = useRef(null);

  const latitude =
    formState.Latitude !== undefined ? formState.Latitude : 51.505;
  const longitude =
    formState.Longitude !== undefined ? formState.Longitude : -0.09;

  useEffect(() => {
    console.log('FormState updated:', formState);
  }, [formState]);

  const handleLatitudeChange = (lat) => {
    console.log('Latitude change handler called with:', lat);
    handleInputChange({
      target: {
        name: 'Latitude',
        value: lat,
      },
    });
    setLatitude(lat);
    console.log('Latitude changed:', lat);
  };

  const handleLongitudeChange = (lng) => {
    console.log('Longitude change handler called with:', lng);
    handleInputChange({
      target: {
        name: 'Longitude',
        value: lng,
      },
    });
    setLongitude(lng);
    console.log('Longitude changed:', lng);
  };

  return (
    <>
      <FormRow>
        <FormGroup colSize={6} label="Широта" htmlFor="Latitude">
          <TextInput
            id="Latitude"
            name="Latitude"
            value={latitude}
            onChange={(e) => handleLatitudeChange(parseFloat(e.target.value))}
          />
        </FormGroup>
        <FormGroup colSize={6} label="Долгота" htmlFor="Longitude">
          <TextInput
            id="Longitude"
            name="Longitude"
            value={longitude}
            onChange={(e) => handleLongitudeChange(parseFloat(e.target.value))}
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <div style={{ width: '100%' }}>
          <ToggleMapButton toggleMap={toggleMap} showMap={showMap} />
          <div className={`map-container ${showMap ? 'show' : 'hide'}`}>
            <MapComponent
              latitude={latitude}
              longitude={longitude}
              setLatitude={(lat) => {
                handleLatitudeChange(lat);
                console.log('Marker latitude updated to:', lat);
              }}
              setLongitude={(lng) => {
                handleLongitudeChange(lng);
                console.log('Marker longitude updated to:', lng);
              }}
              allowMarker
              allowArea={false}
              allowEdit={false}
              allowDelete={false}
              mapRef={mapRef}
            />
          </div>
        </div>
      </FormRow>
    </>
  );
}
