// Navbar.jsx

import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/Navbar.css';

function Navbar() {
  return (
    <div id="navbar" className="rounded-navbar">
      <a href="/dendrology-all" className="nav-item">
        <i className="fas fa-tree" /> Дендрология - все записи
      </a>
      <a href="/flora-all" className="nav-item">
        <i className="fas fa-leaf" /> Флора - все записи
      </a>
      <a href="/floriculture-all" className="nav-item">
        <i className="fas fa-seedling" /> Цветоводство - все записи
      </a>
      <a href="/map" className="nav-item">
        <i className="fas fa-map" /> Карта
      </a>
    </div>
  );
}

export default Navbar;
