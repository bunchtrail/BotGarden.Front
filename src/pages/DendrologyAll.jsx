// DendrologyAll.jsx
import React from 'react';
import PlantsAllNavbar from '../components/AllPlantsForm/PlantsAllNavbar';
import { PlantsProvider } from '../assets/js/PlantsContext'; // Импортируем PlantsProvider
import SearchFilter from '../components/AllPlantsForm/searchFilter';
import PlantsTable from '../components/AllPlantsForm/plantsTable';
import '../assets/css/plantsAllForm.css';

function DendrologyAll() {
  return (
    <PlantsProvider sectorId={1}>
      <PlantsAllNavbar />
      <div className="plantsAllContainer">
        <h1>Список информации о всех растениях - Дендрология</h1>
        <div className="button-container">
          <SearchFilter />
        </div>
      </div>
      <PlantsTable sectorId={1} />
    </PlantsProvider>
  );
}

export default DendrologyAll;
