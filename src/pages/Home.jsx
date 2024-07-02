import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Выбор отдела</h1>
        <p>Выберите отдел для дальнейшей работы:</p>
        <div className="btn-group">
          <a href="/Dendrology/Index">
            <button type="button" className="btn btn-primary">
              <i className="fas fa-tree" /> Дендрология
            </button>
          </a>
          <a href="/Flora/Index">
            <button type="button" className="btn btn-primary">
              <i className="fas fa-leaf" /> Флора
            </button>
          </a>
          <a href="/Floriculture/Index">
            <button type="button" className="btn btn-primary">
              <i className="fas fa-seedling" /> Цветоводство
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
