/* eslint-disable jsx-a11y/control-has-associated-label */
// components/Dendrology/PlantsTable.jsx
import React from 'react';

function PlantsTable() {
  // Заглушка для данных растений
  const plants = [
    {
      PlantId: 1,
      InventorNumber: 'INV123',
      FamilyName: 'Rosaceae',
      GenusName: 'Rosa',
      Species: 'R. chinensis',
      Synonyms: 'China Rose',
      Variety: 'Variety 1',
      Form: 'Shrub',
      SectorName: 'Sector 1',
      PlantOrigin: 'China',
      NaturalHabitat: 'Forests',
      Determined: 'Dr. Smith',
      EcologyBiology: 'Perennial',
      EconomicUse: 'Ornamental',
      DateOfPlanting: '2021',
      Originator: 'Dr. Smith',
      Date: '2021',
      Country: 'China',
      ProtectionStatus: 'Endangered',
      HerbariumPresence: true,
      FilledOut: 'Dr. Smith',
      ImagePath: 'path/to/image.jpg',
      HerbariumDuplicate: 'Yes',
      Note: 'Healthy',
      Latitude: '34.0522',
      Longitude: '-118.2437',
    },
    // Добавьте больше объектов растений по мере необходимости
  ];

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
          {plants.map((plant) => (
            <tr key={plant.PlantId} data-plant-id={plant.PlantId}>
              <td>
                <i className="fas fa-check select-row-icon" />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.PlantId}
                  name="PlantId"
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.InventorNumber}
                  name="InventorNumber"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.FamilyName}
                  name="FamilyName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.GenusName}
                  name="GenusName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Species}
                  name="Species"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Synonyms}
                  name="Synonyms"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Variety}
                  name="Variety"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Form}
                  name="Form"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.SectorName}
                  name="SectorName"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.PlantOrigin}
                  name="PlantOrigin"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.NaturalHabitat}
                  name="NaturalHabitat"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Determined}
                  name="Determined"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.EcologyBiology}
                  name="EcologyBiology"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.EconomicUse}
                  name="EconomicUse"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.DateOfPlanting}
                  name="DateOfPlanting"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Originator}
                  name="Originator"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Date}
                  name="Date"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Country}
                  name="Country"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.ProtectionStatus}
                  name="ProtectionStatus"
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  className="input-field"
                  checked={plant.HerbariumPresence}
                  name="HerbariumPresence"
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.FilledOut}
                  name="FilledOut"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.ImagePath}
                  name="ImagePath"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.HerbariumDuplicate}
                  name="HerbariumDuplicate"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Note}
                  name="Note"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Latitude}
                  name="Latitude"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="input-field"
                  value={plant.Longitude}
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
