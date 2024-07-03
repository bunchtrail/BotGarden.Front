/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './dendrologyForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormRow from './fomRow';
import FormGroup from './formGroup';
import TextInput from './textInput';
import SelectInput from './selectInput';
import FormButton from './formButton';
import MapContainer from './mapContainer';

function DendrologyForm() {
  const [formState, setFormState] = useState({
    inventoryNumber: '',
    family: '',
    genus: '',
    species: '',
    synonyms: '',
    sort: '',
    form: '',
    location: '',
    latitude: '',
    longitude: '',
    plantOrigin: '',
    naturalHabitat: '',
    determined: '',
    ecologyBiology: '',
    economicUse: '',
    dateOfPlanting: '',
    originator: '',
    date: '',
    country: '',
    protectionStatus: '',
    herbariumPresence: false,
    filledOut: '',
    illustration: '',
    duplicates: '',
    sampleState: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const familyOptions = [{ value: '', label: 'Нет данных' }];
  const genusOptions = [{ value: '', label: 'Нет данных' }];
  const locationOptions = [{ value: '', label: 'Нет данных' }];

  return (
    <div className="container">
      <h1 id="departmentName" className="mt-4">
        Выбран отдел: Ботанический сад
      </h1>
      <form id="plantForm">
        <FormRow>
          <FormGroup label="Инв_номер" htmlFor="inventoryNumber" colSize={6}>
            <TextInput
              id="inventoryNumber"
              name="inventoryNumber"
              value={formState.inventoryNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Семейство" htmlFor="family" colSize={6}>
            <SelectInput
              id="family"
              name="family"
              value={formState.family}
              onChange={handleInputChange}
              options={familyOptions}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Род" htmlFor="genus" colSize={6}>
            <SelectInput
              id="genus"
              name="genus"
              value={formState.genus}
              onChange={handleInputChange}
              options={genusOptions}
            />
          </FormGroup>
          <FormGroup label="Вид" htmlFor="species" colSize={6}>
            <TextInput
              id="species"
              name="species"
              value={formState.species}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Синонимы" htmlFor="synonyms" colSize={6}>
            <TextInput
              id="synonyms"
              name="synonyms"
              value={formState.synonyms}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Сорт" htmlFor="sort" colSize={6}>
            <TextInput
              id="sort"
              name="sort"
              value={formState.sort}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Форма" htmlFor="form" colSize={6}>
            <TextInput
              id="form"
              name="form"
              value={formState.form}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Местоположение на территории сада"
            htmlFor="location"
            colSize={6}
          >
            <SelectInput
              id="location"
              name="location"
              value={formState.location}
              onChange={handleInputChange}
              options={locationOptions}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup colSize={6} label="Широта" htmlFor="latitude">
            <TextInput
              id="latitude"
              name="latitude"
              value={formState.latitude}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup colSize={6} label="Долгота" htmlFor="longitude">
            <TextInput
              id="longitude"
              name="longitude"
              value={formState.longitude}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormButton
          id="toggle-map-btn"
          className="btn btn-info mb-3"
          type="button"
        >
          Показать/Скрыть карту
        </FormButton>
        <MapContainer id="map-container" height="400px" />
        <FormRow>
          <FormGroup
            label="Происхождение образца"
            htmlFor="plantOrigin"
            colSize={6}
          >
            <TextInput
              id="plantOrigin"
              name="plantOrigin"
              value={formState.plantOrigin}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Природный ареал"
            htmlFor="naturalHabitat"
            colSize={6}
          >
            <TextInput
              id="naturalHabitat"
              name="naturalHabitat"
              value={formState.naturalHabitat}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Определитель" htmlFor="determined" colSize={6}>
            <TextInput
              id="determined"
              name="determined"
              value={formState.determined}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Экология и биология вида"
            htmlFor="ecologyBiology"
            colSize={6}
          >
            <TextInput
              id="ecologyBiology"
              name="ecologyBiology"
              value={formState.ecologyBiology}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Хозяйственное применение"
            htmlFor="economicUse"
            colSize={6}
          >
            <TextInput
              id="economicUse"
              name="economicUse"
              value={formState.economicUse}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Год посадки" htmlFor="dateOfPlanting" colSize={6}>
            <TextInput
              id="dateOfPlanting"
              name="dateOfPlanting"
              value={formState.dateOfPlanting}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Оригинатор" htmlFor="originator" colSize={4}>
            <TextInput
              id="originator"
              name="originator"
              value={formState.originator}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Год" htmlFor="date" colSize={4}>
            <TextInput
              id="date"
              name="date"
              value={formState.date}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Страна" htmlFor="country" colSize={4}>
            <TextInput
              id="country"
              name="country"
              value={formState.country}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Охраняемый статус вида"
            htmlFor="protectionStatus"
            colSize={4}
          >
            <TextInput
              id="protectionStatus"
              name="protectionStatus"
              value={formState.protectionStatus}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Наличие гербария"
            htmlFor="herbariumPresence"
            colSize={4}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="herbariumPresence"
              name="herbariumPresence"
              checked={formState.herbariumPresence}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Заполнял" htmlFor="filledOut" colSize={4}>
            <TextInput
              id="filledOut"
              name="filledOut"
              value={formState.filledOut}
              readOnly
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Иллюстрация" htmlFor="illustration" colSize={6}>
            <TextInput
              id="illustration"
              name="illustration"
              value={formState.illustration}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Наличие дубликатов в других гербариях"
            htmlFor="duplicates"
            colSize={6}
          >
            <TextInput
              id="duplicates"
              name="duplicates"
              value={formState.duplicates}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Состояние образца"
            htmlFor="sampleState"
            colSize={12}
          >
            <TextInput
              id="sampleState"
              name="sampleState"
              value={formState.sampleState}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
      </form>
    </div>
  );
}

export default DendrologyForm;
