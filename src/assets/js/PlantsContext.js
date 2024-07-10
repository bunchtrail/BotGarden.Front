import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';

export const PlantsContext = createContext();

export function PlantsProvider({ children, sectorId }) {
  const [plants, setPlants] = useState([]);

  const fetchPlants = useCallback(async () => {
    try {
      const response = await fetch(
        `https://localhost:7076/api/dendrology/plants?sectorId=${sectorId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      throw new Error('An error occurred while fetching the plants:', error);
    }
  }, [sectorId]);

  const updatePlants = useCallback(
    async (plantUpdates) => {
      try {
        const response = await fetch(
          'https://localhost:7076/api/dendrology/update',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(plantUpdates),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
          const updatedPlants = plants.map((plant) => {
            const update = plantUpdates.find(
              (p) => p.plantId === plant.plantId
            );
            return update ? { ...plant, ...update } : plant;
          });
          setPlants(updatedPlants);
        } else {
          throw new Error('Error updating plants:', result.message);
        }
      } catch (error) {
        throw new Error('An error occurred while updating the plants:', error);
      }
    },
    [plants]
  );

  const deletePlants = useCallback(async (plantIds) => {
    try {
      const responses = await Promise.all(
        plantIds.map((id) =>
          fetch(`https://localhost:7076/api/dendrology/delete/${id}`, {
            method: 'DELETE',
          })
        )
      );

      const success = responses.every((response) => response.ok);

      if (success) {
        setPlants((prevPlants) =>
          prevPlants.filter((plant) => !plantIds.includes(plant.plantId))
        );
      } else {
        throw new Error('Error deleting plants');
      }
    } catch (error) {
      throw new Error('An error occurred while deleting the plants:', error);
    }
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  const value = useMemo(
    () => ({
      plants,
      updatePlants,
      deletePlants,
    }),
    [plants, updatePlants, deletePlants]
  );

  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}
