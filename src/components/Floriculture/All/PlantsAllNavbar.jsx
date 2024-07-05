// PlantsAllNavbar.jsx

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../assets/css/Navbar.css';

function PlantsAllNavbar() {
  return (
    <div id="navbar" className="rounded-navbar">
      <a href="/" className="nav-item">
        <i className="fas fa-home" /> Вернуться на главную
      </a>
      <a href="/dendrology-all" className="nav-item">
        <i className="fas fa-tree" /> Дендрология - все записи
      </a>
      <a href="/flora-all" className="nav-item">
        <i className="fas fa-leaf" /> Флора - все записи
      </a>
      <a href="/floriculture-all" className="nav-item">
        <i className="fas fa-seedling" /> Цветоводство - все записи
      </a>
    </div>
  );
}

export default PlantsAllNavbar;
