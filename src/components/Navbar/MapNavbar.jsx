import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button/ButtonHref';

function MapNavbar({ setMapMode }) {
  return (
    <div className="navv">
      <div id="navbar" className="rounded-navbar fixed-top navsect">
        <Link to="/" className="nav-item">
          <i className="fas fa-home" /> Вернуться на главный экран
        </Link>
        <Button
          iconClass="fas fa-plus-circle"
          className="btn-primary"
          onClick={() => setMapMode('addArea')}
        >
          Добавить область
        </Button>
        <Button
          iconClass="fas fa-edit"
          className="btn-warning"
          onClick={() => setMapMode('editArea')}
        >
          Изменить область
        </Button>
        <Button
          iconClass="fas fa-trash-alt"
          className="btn-danger"
          onClick={() => setMapMode('deleteArea')}
        >
          Удалить область
        </Button>
        <Button
          iconClass="fas fa-seedling"
          className="btn-danger"
          onClick={() => setMapMode('deletePlants')}
        >
          Удалить растения в области
        </Button>
      </div>
    </div>
  );
}

export default MapNavbar;
