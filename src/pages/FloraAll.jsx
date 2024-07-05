// DendrologyAll.jsx
import React from 'react';
import PlantsAllNavbar from '../components/AllPlantsForm/PlantsAllNavbar';
import { PlantsProvider } from '../assets/js/PlantsContext'; // Импортируем PlantsProvider
import SearchFilter from '../components/AllPlantsForm/searchFilter';
import PlantsTable from '../components/AllPlantsForm/plantsTable';
import '../assets/css/plantsAllForm.css';

function FloraAll() {
  return (
    <PlantsProvider sectorId={2}>
      <PlantsAllNavbar />
      <div className="plantsAllContainer">
        <h1>Список информации о всех растениях - Флора</h1>
        <div className="button-container">
          <SearchFilter />
        </div>
      </div>
      <PlantsTable sectorId={2} />
    </PlantsProvider>
  );
}

export default FloraAll;
