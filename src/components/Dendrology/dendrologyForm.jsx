/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './dendrologyForm.css';
import 'bootstrap/dist/css/bootstrap.css';

function DendrologyForm() {
  return (
    <div className="container">
      <h1 id="departmentName" className="mt-4">
        Выбран отдел: Ботанический сад
      </h1>
      <form id="plantForm">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inventoryNumber">Инв_номер</label>
            <input
              type="text"
              className="form-control"
              id="inventoryNumber"
              name="InventorNumber"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="family">Семейство</label>
            <select id="family" className="form-control" name="FamilyId">
              <option>Нет данных</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="genus">Род</label>
            <select id="genus" className="form-control" name="GenusId">
              <option>Нет данных</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="species">Вид</label>
            <input
              type="text"
              className="form-control"
              id="species"
              name="Species"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="synonyms">Синонимы</label>
            <input
              type="text"
              className="form-control"
              id="synonyms"
              name="Synonyms"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="sort">Сорт</label>
            <input
              type="text"
              className="form-control"
              id="sort"
              name="Variety"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="form">Форма</label>
            <input type="text" className="form-control" id="form" name="Form" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="location">Местоположение на территории сада</label>
            <select id="location" className="form-control" name="LocationId">
              <option>Нет данных</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="latitude">Широта</label>
            <input
              type="text"
              className="form-control"
              id="latitude"
              name="Latitude"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="longitude">Долгота</label>
            <input
              type="text"
              className="form-control"
              id="longitude"
              name="Longitude"
            />
          </div>
        </div>
        <div className="form-group">
          <button
            id="toggle-map-btn"
            className="btn btn-info mb-3"
            type="button"
          >
            Показать/Скрыть карту
          </button>
          <div id="map-container" className="mb-3">
            <div id="map" style={{ height: '400px' }} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="plantOrigin">Происхождение образца</label>
            <input
              type="text"
              className="form-control"
              id="plantOrigin"
              name="PlantOrigin"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="naturalHabitat">Природный ареал</label>
            <input
              type="text"
              className="form-control"
              id="naturalHabitat"
              name="NaturalHabitat"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="determined">Определитель</label>
            <input
              type="text"
              className="form-control"
              id="determined"
              name="Determined"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="ecologyBiology">Экология и биология вида</label>
            <input
              type="text"
              className="form-control"
              id="ecologyBiology"
              name="EcologyBiology"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="economicUse">Хозяйственное применение</label>
            <input
              type="text"
              className="form-control"
              id="economicUse"
              name="EconomicUse"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="dateOfPlanting">Год посадки</label>
            <input
              type="text"
              className="form-control"
              id="dateOfPlanting"
              name="DateOfPlanting"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="originator">Оригинатор</label>
            <input
              type="text"
              className="form-control"
              id="originator"
              name="Originator"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="date">Год</label>
            <input type="text" className="form-control" id="date" name="Date" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="country">Страна</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="Country"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="protectionStatus">Охраняемый статус вида</label>
            <input
              type="text"
              className="form-control"
              id="protectionStatus"
              name="ProtectionStatus"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="herbariumPresence">Наличие гербария</label>
            <input
              type="checkbox"
              className="form-control"
              id="herbariumPresence"
              name="HerbariumPresence"
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="filledOut">Заполнял</label>
            <input
              type="text"
              className="form-control"
              id="filledOut"
              name="FilledOut"
              value="Лебедев А.Н."
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="illustration">Иллюстрация</label>
            <input
              type="text"
              className="form-control"
              id="illustration"
              name="ImagePath"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="duplicates">
              Наличие дубликатов в других гербариях
            </label>
            <input
              type="text"
              className="form-control"
              id="duplicates"
              name="HerbariumDuplicate"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="sampleState">Состояние образца</label>
            <input
              type="text"
              className="form-control"
              id="sampleState"
              name="Note"
              value="уд"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DendrologyForm;
