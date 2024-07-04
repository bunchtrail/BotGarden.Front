/* eslint-disable jsx-a11y/control-has-associated-label */
// components/Dendrology/PlantsTable.jsx
import React, { useContext } from 'react';
import { PlantsContext } from '../../../assets/js/PlantsContext';
import '../../../assets/css/plantsTable.css';

function PlantsTable() {
  const { plants } = useContext(PlantsContext);
  console.log(plants);

  // Проверка для исключения ошибки при отсутствии данных
  if (!plants || !Array.isArray(plants)) {
    return <div>Данные не найдены</div>;
  }

  // Фильтрация растений по SectorId для Дендрологии (например, SectorId = 1)
  const filteredPlants = plants.filter((plant) => plant.sectorId === 1);

  return (
    <div className="table-responsive">
      <table className="table table-hover table-fixed-header">
        <thead className="thead-dark">
          <tr>
            <th>
              <i className="fas fa-check select-all-icon" />
            </th>
            <th>ID</th>
            <th>Инв_номер</th>
            <th>Семейство</th>
            <th>Род</th>
            <th>Вид</th>
            <th>Синонимы</th>
            <th>Сорт</th>
            <th>Форма</th>
            <th>Местоположение на территории сада</th>
            <th>Происхождение образца</th>
            <th>Природный ареал</th>
            <th>Определитель</th>
            <th>Экология и биология вида</th>
            <th>Хозяйственное применение</th>
            <th>Год посадки</th>
            <th>Оригинатор</th>
            <th>Год</th>
            <th>Страна</th>
            <th>Охраняемый статус вида</th>
            <th>Наличие гербария</th>
            <th>Заполнял</th>
            <th>Иллюстрация</th>
            <th>Наличие дубликатов в других гербариях</th>
            <th>Состояние образца</th>
            <th>Широта</th>
            <th>Долгота</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlants.map((plant) => (
            <tr key={plant.plantId} data-plant-id={plant.plantId}>
              <td>
                <i className="fas fa-check select-row-icon" />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.plantId || ''}
                  name="PlantId"
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.inventorNumber || ''}
                  value={plant.inventorNumber || ''}
                  name="InventorNumber"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.family?.familyName || ''}
                  value={plant.family?.familyName || ''}
                  name="FamilyName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.genus?.genusName || ''}
                  value={plant.genus?.genusName || ''}
                  name="GenusName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.species || ''}
                  value={plant.species || ''}
                  name="Species"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.synonyms || ''}
                  value={plant.synonyms || ''}
                  name="Synonyms"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.variety || ''}
                  value={plant.variety || ''}
                  name="Variety"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.form || ''}
                  value={plant.form || ''}
                  name="Form"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.sector?.sectorName || ''}
                  value={plant.sector?.sectorName || ''}
                  name="SectorName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.plantOrigin || ''}
                  value={plant.plantOrigin || ''}
                  name="PlantOrigin"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.naturalHabitat || ''}
                  value={plant.naturalHabitat || ''}
                  name="NaturalHabitat"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.determined || ''}
                  value={plant.determined || ''}
                  name="Determined"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.ecologyBiology || ''}
                  value={plant.ecologyBiology || ''}
                  name="EcologyBiology"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.economicUse || ''}
                  value={plant.economicUse || ''}
                  name="EconomicUse"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.dateOfPlanting || ''}
                  value={plant.dateOfPlanting || ''}
                  name="DateOfPlanting"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.originator || ''}
                  value={plant.originator || ''}
                  name="Originator"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.date || ''}
                  value={plant.date || ''}
                  name="Date"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.country || ''}
                  value={plant.country || ''}
                  name="Country"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.protectionStatus || ''}
                  value={plant.protectionStatus || ''}
                  name="ProtectionStatus"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="input-field"
                  data-initial-value={plant.herbariumPresence}
                  checked={plant.herbariumPresence || false}
                  name="HerbariumPresence"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.filledOut || ''}
                  value={plant.filledOut || ''}
                  name="FilledOut"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.imagePath || ''}
                  value={plant.imagePath || ''}
                  name="ImagePath"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.herbariumDuplicate || ''}
                  value={plant.herbariumDuplicate || ''}
                  name="HerbariumDuplicate"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.note || ''}
                  value={plant.note || ''}
                  name="Note"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.latitude || ''}
                  value={plant.latitude || ''}
                  name="Latitude"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  data-initial-value={plant.longitude || ''}
                  value={plant.longitude || ''}
                  name="Longitude"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlantsTable;
