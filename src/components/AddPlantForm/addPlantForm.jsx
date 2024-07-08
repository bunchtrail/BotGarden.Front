import React, { useContext, useState } from 'react';
import '../../assets/css/plantsForm.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FormContext } from '../../assets/js/FormContext';
import { familyOptions, genusOptions } from './formOptions';
import FormFields from './FormFields';

export default function AddPlantForm({ sectorId }) {
  const { formState, handleInputChange, setLatitude, setLongitude, setPath } =
    useContext(FormContext);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

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
          setPath={setPath}
          familyOptions={familyOptions}
          genusOptions={genusOptions}
          toggleMap={toggleMap}
          showMap={showMap}
          sectorId={sectorId}
        />
      </form>
    </div>
  );
}
