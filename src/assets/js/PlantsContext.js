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
      console.error('An error occurred while fetching the plants:', error);
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
          console.error('Error updating plants:', result.message);
        }
      } catch (error) {
        console.error('An error occurred while updating the plants:', error);
      }
    },
    [plants]
  );

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  const value = useMemo(
    () => ({
      plants,
      updatePlants,
    }),
    [plants, updatePlants]
  );

  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}
