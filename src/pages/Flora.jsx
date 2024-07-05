// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Sections/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import AddPlantForm from '../components/AddPlantForm/addPlantForm';
import { FormProvider } from '../assets/js/FormContext';

function Flora() {
  return (
    <FormProvider>
      <SectionNavbar sectorId={2} />
      <AddPlantForm sectorId={2} />
      <Footer />
    </FormProvider>
  );
}

export default Flora;
