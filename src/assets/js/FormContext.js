import React, { createContext, useState, useMemo, useCallback } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formState, setFormState] = useState({
    InventorNumber: '',
    FamilyId: '',
    GenusId: '',
    Species: '',
    Synonyms: '',
    Variety: '',
    Form: '',
    LocationId: '',
    Latitude: '',
    Longitude: '',
    PlantOrigin: '',
    NaturalHabitat: '',
    Determined: '',
    EcologyBiology: '',
    EconomicUse: '',
    DateOfPlanting: '',
    Originator: '',
    Date: '',
    Country: '',
    ProtectionStatus: '',
    FilledOut: '',
    ImagePath: '',
    HerbariumDuplicate: '',
    Note: '',
    HerbariumPresence: false,
  });

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const setLatitude = useCallback((lat) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      Latitude: lat,
    }));
  }, []);

  const setLongitude = useCallback((lng) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      Longitude: lng,
    }));
  }, []);

  const setPath = useCallback((path) => {
    console.log(path, ' !!!!!!!');
    setFormState((prevFormState) => ({
      ...prevFormState,
      LocationId: path,
    }));
  }, []);

  const contextValue = useMemo(
    () => ({
      formState,
      handleInputChange,
      setLatitude,
      setLongitude,
      setPath,
    }),
    [formState, handleInputChange, setLatitude, setLongitude, setPath]
  );

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}
