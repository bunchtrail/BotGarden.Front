/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line jsx-a11y/control-has-associated-label

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import saveData from '../../assets/js/saveData'; // Импорт по умолчанию
import { FormContext } from '../../assets/js/FormContext';

function SectionNavbar({ sectorId }) {
  const { formState } = useContext(FormContext);

  return (
    <div id="navbar" className="rounded-navbar fixed-top navsect">
      <Link to="/" className="nav-item">
        <i className="fas fa-home" /> Вернуться на главный экран
      </Link>
      <button
        id="btn-Add"
        className="btn btn-warning"
        type="button"
        onClick={() => saveData(formState, sectorId)}
      >
        <i className="fas fa-save" />
      </button>
    </div>
  );
}

export default SectionNavbar;
