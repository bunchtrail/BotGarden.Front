// DendrologyAll.jsx
import React from 'react';
import PlantsAllNavbar from '../components/Navbar/PlantsAllNavbar';
import { FormProvider } from '../assets/js/FormContext';
import SearchFilter from '../assets/js/DendrologyAll/searchFilter';
import PlantsTable from '../components/Dendrology/plantsTable';

function DendrologyAll() {
  return (
    <FormProvider>
      <div className="content-wrap">
        <PlantsAllNavbar />
        <div className="container">
          <h1>Список информации о всех растениях - Дендрология</h1>
          <SearchFilter />
          <PlantsTable />
        </div>
      </div>
    </FormProvider>
  );
}

export default DendrologyAll;
