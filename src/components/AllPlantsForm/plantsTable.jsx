import React, { useContext, useState, useEffect } from 'react';
import { PlantsContext } from '../../assets/js/PlantsContext';
import '../../assets/css/plantsTable.css';
import PlantRow from './plantRow';
import TableHeader from './tableHeader';

function PlantsTable({ sectorId }) {
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

  const filteredPlants = editedPlants.filter(
    (plant) => plant.sectorId === sectorId
  );

  return (
    <div className="table-responsive">
      <table className="table table-hover table-fixed-header">
        <TableHeader />
        <tbody>
          {filteredPlants.map((plant) => (
            <PlantRow
              key={plant.plantId}
              plant={plant}
              handleInputChange={handleInputChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlantsTable;
