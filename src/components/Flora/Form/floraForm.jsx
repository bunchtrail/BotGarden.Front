import React, { useContext, useState } from 'react';
import '../../../assets/css/plantsForm.css';
import 'bootstrap/dist/css/bootstrap.css';

import { FormContext } from '../../../assets/js/FormContext';

import { familyOptions, genusOptions, locationOptions } from './formOptions';
import FormFields from './FormFields';

export default function DendrologyForm() {
  const { formState, handleInputChange, setLatitude, setLongitude } =
    useContext(FormContext);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="dendrologyContainer">
      <h1 id="departmentName" className="mt-4">
        Выбран отдел: Флора
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
          toggleMap={toggleMap} // передача функции toggleMap
          showMap={showMap} // передача состояния showMap
        />
      </form>
    </div>
  );
}
