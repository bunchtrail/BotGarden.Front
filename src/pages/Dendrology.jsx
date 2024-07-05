// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Navbar/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import AddPlantForm from '../components/AddPlantForm/addPlantForm';
import { FormProvider } from '../assets/js/FormContext';

function Dendrology() {
  return (
    <FormProvider>
      <SectionNavbar sectorId={1} />
      <AddPlantForm sectorId={1} />
      <Footer />
    </FormProvider>
  );
}

export default Dendrology;
