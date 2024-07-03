// Dendrology.jsx
import React from 'react';
import SectionNavbar from '../components/Sections/sectionsNavbar';
import Footer from '../components/Footer/sectionsFooter';
import DendrologyForm from '../components/Dendrology/dendrologyForm';

function Dendrology() {
  return (
    <div className="content-wrap">
      <SectionNavbar />
      <DendrologyForm />
      <Footer />
    </div>
  );
}

export default Dendrology;
