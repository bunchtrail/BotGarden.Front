//  Home.jsx

import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Выбор отдела</h1>
        <p>Выберите отдел для дальнейшей работы:</p>
        <div className="btn-group">
          <Button href="/Dendrology/Index" iconClass="fas fa-tree">
            Дендрология
          </Button>
          <Button href="/Flora/Index" iconClass="fas fa-leaf">
            Флора
          </Button>
          <Button href="/Floriculture/Index" iconClass="fas fa-seedling">
            Цветоводство
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
