// components/Dendrology/SearchFilter.jsx
import React from 'react';
import ButtonClick from '../../../components/Buttons/Button/ButtonClick';

function SearchFilter() {
  const handleUpdate = () => {
    // Обработка обновления данных
    console.log('Update clicked');
  };

  const handleDelete = () => {
    // Обработка удаления данных
    console.log('Delete clicked');
  };

  return (
    <div className="btn-container">
      <select id="searchCategory" className="form-control search-category">
        <option value="PlantId">ID</option>
        <option value="InventorNumber">Инв_номер</option>
        <option value="FamilyName">Семейство</option>
        <option value="GenusName">Род</option>
        <option value="Species">Вид</option>
        <option value="Synonyms">Синонимы</option>
        <option value="Variety">Сорт</option>
        <option value="Form">Форма</option>
        <option value="SectorName">Местоположение на территории сада</option>
        <option value="PlantOrigin">Происхождение образца</option>
        <option value="NaturalHabitat">Природный ареал</option>
        <option value="Determined">Определитель</option>
        <option value="EcologyBiology">Экология и биология вида</option>
        <option value="EconomicUse">Хозяйственное применение</option>
        <option value="DateOfPlanting">Год посадки</option>
        <option value="Originator">Оригинатор</option>
        <option value="Date">Год</option>
        <option value="Country">Страна</option>
        <option value="ProtectionStatus">Охраняемый статус вида</option>
        <option value="HerbariumPresence">Наличие гербария</option>
        <option value="FilledOut">Заполнял</option>
        <option value="ImagePath">Иллюстрация</option>
        <option value="HerbariumDuplicate">
          Наличие дубликатов в других гербариях
        </option>
        <option value="Note">Состояние образца</option>
        <option value="Latitude">Широта</option>
        <option value="Longitude">Долгота</option>
      </select>

      <input
        id="searchField"
        type="text"
        placeholder="Поиск..."
        className="form-control search-field"
      />
      <ButtonClick onClick={handleUpdate} iconClass="fas fa-save" />
      <ButtonClick
        onClick={handleDelete}
        iconClass="fas fa-trash-alt"
        disabled
      />
    </div>
  );
}

export default SearchFilter;
