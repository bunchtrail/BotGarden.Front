import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Buttons/Button/ButtonHref';

function MapNavbar() {
  return (
    <div id="navbar" className="rounded-navbar fixed-top navsect">
      <Link to="/" className="nav-item">
        <i className="fas fa-home" /> Вернуться на главный экран
      </Link>
      <Button iconClass="fas fa-plus-circle" className="btn-primary">
        Добавить область
      </Button>
      <Button iconClass="fas fa-edit" className="btn-warning">
        Изменить область
      </Button>
      <Button iconClass="fas fa-trash-alt" className="btn-danger">
        Удалить область
      </Button>
      <Button iconClass="fas fa-seedling" className="btn-danger">
        Удалить растения в области
      </Button>
    </div>
  );
}

export default MapNavbar;
