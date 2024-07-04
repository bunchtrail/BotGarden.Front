/* eslint-disable jsx-a11y/control-has-associated-label */
// components/Dendrology/PlantsTable.jsx
import React, { useContext, useState, useEffect } from 'react';
import { PlantsContext } from '../../../assets/js/PlantsContext';
import '../../../assets/css/plantsTable.css';

function PlantsTable() {
  const { plants } = useContext(PlantsContext);
  const [editedPlants, setEditedPlants] = useState([]);

  useEffect(() => {
    setEditedPlants(plants.map((plant) => ({ ...plant })));
  }, [plants]);

  const handleInputChange = (event, plantId) => {
    const { name, value, type, checked } = event.target;
    setEditedPlants((prevState) =>
      prevState.map((plant) =>
        plant.plantId === plantId
          ? { ...plant, [name]: type === 'checkbox' ? checked : value }
          : plant
      )
    );
  };

  if (!plants || !Array.isArray(plants)) {
    return <div>Данные не найдены</div>;
  }

  const filteredPlants = editedPlants.filter((plant) => plant.sectorId === 1);

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
                  value={plant.inventorNumber || ''}
                  name="inventorNumber"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.family?.familyName || ''}
                  name="familyName"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.genus?.genusName || ''}
                  name="genusName"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.species || ''}
                  name="species"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.synonyms || ''}
                  name="synonyms"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.variety || ''}
                  name="variety"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.form || ''}
                  name="form"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.sector?.sectorName || ''}
                  name="sectorName"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.plantOrigin || ''}
                  name="plantOrigin"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.naturalHabitat || ''}
                  name="naturalHabitat"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.determined || ''}
                  name="determined"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.ecologyBiology || ''}
                  name="ecologyBiology"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.economicUse || ''}
                  name="economicUse"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.dateOfPlanting || ''}
                  name="dateOfPlanting"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.originator || ''}
                  name="originator"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.date || ''}
                  name="date"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.country || ''}
                  name="country"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.protectionStatus || ''}
                  name="protectionStatus"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="input-field"
                  checked={plant.herbariumPresence || false}
                  name="herbariumPresence"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.filledOut || ''}
                  name="filledOut"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.imagePath || ''}
                  name="imagePath"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.herbariumDuplicate || ''}
                  name="herbariumDuplicate"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.note || ''}
                  name="note"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.latitude || ''}
                  name="latitude"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.longitude || ''}
                  name="longitude"
                  onChange={(e) => handleInputChange(e, plant.plantId)}
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
