// assets/js/PlantsContext.js
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

  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  const value = useMemo(() => ({ plants }), [plants]);

  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
}
