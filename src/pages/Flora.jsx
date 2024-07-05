// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Sections/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import DendrologyForm from '../components/AddPlantForm/addPlantForm';
import { FormProvider } from '../assets/js/FormContext';

function Dendrology() {
  return (
    <FormProvider>
      <SectionNavbar sectorId={2} />
      <DendrologyForm sectorId={2} />
      <Footer />
    </FormProvider>
  );
}

export default Dendrology;
