import { useState, useEffect } from 'react';

const useFetchLocations = () => {
  const [locationOptions, setLocationOptions] = useState([
    { value: '', label: 'Нет данных' },
  ]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch(
          'https://localhost:7076/api/Map/GetAllAreas'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const locations = data.map((location) => ({
          value: location.LocationPath,
          label: location.LocationPath,
        }));
        setLocationOptions(locations);
      } catch (error) {
        console.error('Error loading locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return locationOptions;
};

export default useFetchLocations;
