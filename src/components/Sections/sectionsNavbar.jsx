/* eslint-disable react/button-has-type */
// src/components/Navbar/sectionsNavbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './sectionsNavbar.css';

function SectionNavbar() {
  return (
    <div id="navbar" className="rounded-navbar fixed-top">
      <Link to="/" className="nav-item">
        <i className="fas fa-home" /> Вернуться на главный экран
      </Link>
      <button id="btn-Add" className="btn btn-warning">
        <i className="fas fa-save" /> Сохранить
      </button>
    </div>
  );
}

export default SectionNavbar;
