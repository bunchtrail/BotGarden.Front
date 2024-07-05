// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Navbar/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import AddPlantForm from '../components/AddPlantForm/addPlantForm';
import { FormProvider } from '../assets/js/FormContext';

function Floriculture() {
  return (
    <FormProvider>
      <SectionNavbar sectorId={3} />
      <AddPlantForm sectorId={3} />
      <Footer />
    </FormProvider>
  );
}

export default Floriculture;
