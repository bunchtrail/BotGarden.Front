import React, { useContext, useState, useEffect } from 'react';
import '../../assets/css/plantsForm.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FormContext } from '../../assets/js/FormContext';

import { familyOptions, genusOptions, locationOptions } from './formOptions';
import FormFields from './FormFields';

export default function AddPlantForm({ sectorId }) {
  const { formState, handleInputChange, setLatitude, setLongitude } =
    useContext(FormContext);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  useEffect(() => {
    console.log('AddPlantForm mounted - setLatitude:', setLatitude);
    console.log('AddPlantForm mounted - setLongitude:', setLongitude);
  }, [setLatitude, setLongitude]);

  return (
    <div className="AddPlantContainer">
      <h1 id="departmentName" className="mt-4">
        Выбран отдел:{' '}
        {(() => {
          switch (sectorId) {
            case 1:
              return 'Дендрология';
            case 2:
              return 'Флора';
            case 3:
              return 'Цветоводство';
            default:
              return '';
          }
        })()}
      </h1>
      <form id="plantForm">
        <FormFields
          formState={formState}
          handleInputChange={handleInputChange}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          familyOptions={familyOptions}
          genusOptions={genusOptions}
          locationOptions={locationOptions}
          toggleMap={toggleMap}
          showMap={showMap}
          sectorId={sectorId}
        />
      </form>
    </div>
  );
}
