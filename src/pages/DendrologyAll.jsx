// DendrologyAll.jsx
import React from 'react';
import PlantsAllNavbar from '../components/Dendrology/All/PlantsAllNavbar';
import { PlantsProvider } from '../assets/js/PlantsContext'; // Импортируем PlantsProvider
import SearchFilter from '../components/Dendrology/All/searchFilter';
import PlantsTable from '../components/Dendrology/All/plantsTable';
import '../assets/css/dendrologyAll.css';

function DendrologyAll() {
  return (
    <PlantsProvider sectorId={1}>
      <PlantsAllNavbar />
      <div className="dendrologyAllContainer">
        <h1>Список информации о всех растениях - Дендрология</h1>
        <div className="button-container">
          <SearchFilter />
        </div>
      </div>
      <PlantsTable />
    </PlantsProvider>
  );
}

export default DendrologyAll;
