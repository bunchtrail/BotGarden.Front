import React, { useState } from 'react';
import PlantsAllNavbar from '../components/AllPlantsForm/PlantsAllNavbar';
import { PlantsProvider } from '../assets/js/PlantsContext';
import SearchFilter from '../components/AllPlantsForm/searchFilter';
import PlantsTable from '../components/AllPlantsForm/plantsTable';
import '../assets/css/plantsAllForm.css';

function DendrologyAll() {
  const [selectedPlants, setSelectedPlants] = useState([]);

  return (
    <PlantsProvider sectorId={1}>
      <PlantsAllNavbar />
      <div className="plantsAllContainer">
        <h1>Список информации о всех растениях - Дендрология</h1>
        <div className="button-container">
          <SearchFilter selectedPlants={selectedPlants} />
        </div>
      </div>
      <PlantsTable sectorId={1} setSelectedPlants={setSelectedPlants} />
    </PlantsProvider>
  );
}

export default DendrologyAll;
