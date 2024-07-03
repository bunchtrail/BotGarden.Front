import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SectionHeader from '../components/Sections/sectionHeader/sectionHeader';
import SectionDescription from '../components/Sections/sectionDesc/sectionDesc';
import ButtonGroup from '../components/Buttons/buttonGroups/buttonGroup_Main';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SectionHeader title="Выбор отдела" />
        <SectionDescription description="Выберите отдел для дальнейшей работы:" />
        <ButtonGroup />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
