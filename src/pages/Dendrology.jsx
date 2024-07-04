// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Sections/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import DendrologyForm from '../components/Dendrology/Form/dendrologyForm';
import { FormProvider } from '../assets/js/FormContext';

function Dendrology() {
  return (
    <FormProvider>
      <SectionNavbar />
      <DendrologyForm />
      <Footer />
    </FormProvider>
  );
}

export default Dendrology;
