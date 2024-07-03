import React, { useContext } from 'react';
import '../../../assets/css/dendrologyForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormRow from './formRow';
import FormGroup from './formGroup';
import TextInput from './textInput';
import SelectInput from './selectInput';
import { FormContext } from '../../../assets/js/FormContext';
import MapComponent from '../../../assets/js/mapComponent';

export default function DendrologyForm() {
  const { formState, handleInputChange, setFormState } =
    useContext(FormContext);

  const familyOptions = [{ value: '', label: 'Нет данных' }];
  const genusOptions = [{ value: '', label: 'Нет данных' }];
  const locationOptions = [{ value: '', label: 'Нет данных' }];
  const setLatitude = (latitude) => {
    setFormState({ ...formState, Latitude: latitude });
  };

  const setLongitude = (longitude) => {
    setFormState({ ...formState, Longitude: longitude });
  };

  return (
    <div className="container">
      <h1 id="departmentName" className="mt-4">
        Выбран отдел: Ботанический сад
      </h1>
      <form id="plantForm">
        <FormRow>
          <FormGroup label="Инв_номер" htmlFor="InventorNumber" colSize={6}>
            <TextInput
              id="InventorNumber"
              name="InventorNumber"
              value={formState.InventorNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Семейство" htmlFor="FamilyId" colSize={6}>
            <SelectInput
              id="FamilyId"
              name="FamilyId"
              value={formState.FamilyId}
              onChange={handleInputChange}
              options={familyOptions}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Род" htmlFor="GenusId" colSize={6}>
            <SelectInput
              id="GenusId"
              name="GenusId"
              value={formState.GenusId}
              onChange={handleInputChange}
              options={genusOptions}
            />
          </FormGroup>
          <FormGroup label="Вид" htmlFor="Species" colSize={6}>
            <TextInput
              id="Species"
              name="Species"
              value={formState.Species}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Синонимы" htmlFor="Synonyms" colSize={6}>
            <TextInput
              id="Synonyms"
              name="Synonyms"
              value={formState.Synonyms}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Сорт" htmlFor="Variety" colSize={6}>
            <TextInput
              id="Variety"
              name="Variety"
              value={formState.Variety}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Форма" htmlFor="Form" colSize={6}>
            <TextInput
              id="Form"
              name="Form"
              value={formState.Form}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Местоположение на территории сада"
            htmlFor="LocationId"
            colSize={6}
          >
            <SelectInput
              id="LocationId"
              name="LocationId"
              value={formState.LocationId}
              onChange={handleInputChange}
              options={locationOptions}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup colSize={6} label="Широта" htmlFor="Latitude">
            <TextInput
              id="Latitude"
              name="Latitude"
              value={formState.Latitude}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup colSize={6} label="Долгота" htmlFor="Longitude">
            <TextInput
              id="Longitude"
              name="Longitude"
              value={formState.Longitude}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Происхождение образца"
            htmlFor="PlantOrigin"
            colSize={6}
          >
            <TextInput
              id="PlantOrigin"
              name="PlantOrigin"
              value={formState.PlantOrigin}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Природный ареал"
            htmlFor="NaturalHabitat"
            colSize={6}
          >
            <TextInput
              id="NaturalHabitat"
              name="NaturalHabitat"
              value={formState.NaturalHabitat}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Определитель" htmlFor="Determined" colSize={6}>
            <TextInput
              id="Determined"
              name="Determined"
              value={formState.Determined}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Экология и биология вида"
            htmlFor="EcologyBiology"
            colSize={6}
          >
            <TextInput
              id="EcologyBiology"
              name="EcologyBiology"
              value={formState.EcologyBiology}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Хозяйственное применение"
            htmlFor="EconomicUse"
            colSize={6}
          >
            <TextInput
              id="EconomicUse"
              name="EconomicUse"
              value={formState.EconomicUse}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Год посадки" htmlFor="DateOfPlanting" colSize={6}>
            <TextInput
              id="DateOfPlanting"
              name="DateOfPlanting"
              value={formState.DateOfPlanting}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Оригинатор" htmlFor="Originator" colSize={4}>
            <TextInput
              id="Originator"
              name="Originator"
              value={formState.Originator}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Год" htmlFor="Date" colSize={4}>
            <TextInput
              id="Date"
              name="Date"
              value={formState.Date}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Страна" htmlFor="Country" colSize={4}>
            <TextInput
              id="Country"
              name="Country"
              value={formState.Country}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup
            label="Охраняемый статус вида"
            htmlFor="ProtectionStatus"
            colSize={4}
          >
            <TextInput
              id="ProtectionStatus"
              name="ProtectionStatus"
              value={formState.ProtectionStatus}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Наличие гербария"
            htmlFor="HerbariumPresence"
            colSize={4}
          >
            <input
              type="checkbox"
              className="form-check-input"
              id="HerbariumPresence"
              name="HerbariumPresence"
              checked={formState.HerbariumPresence}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup label="Заполнял" htmlFor="FilledOut" colSize={4}>
            <TextInput
              id="FilledOut"
              name="FilledOut"
              value={formState.FilledOut}
              onChange={handleInputChange}
              readOnly
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Иллюстрация" htmlFor="ImagePath" colSize={6}>
            <TextInput
              id="ImagePath"
              name="ImagePath"
              value={formState.ImagePath}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Наличие дубликатов в других гербариях"
            htmlFor="HerbariumDuplicate"
            colSize={6}
          >
            <TextInput
              id="HerbariumDuplicate"
              name="HerbariumDuplicate"
              value={formState.HerbariumDuplicate}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup label="Состояние образца" htmlFor="Note" colSize={12}>
            <TextInput
              id="Note"
              name="Note"
              value={formState.Note}
              onChange={handleInputChange}
            />
          </FormGroup>
        </FormRow>
        <FormRow>
          <div style={{ width: '100%' }}>
            <MapComponent
              latitude={formState.Latitude}
              longitude={formState.Longitude}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
            />
          </div>
        </FormRow>
      </form>
    </div>
  );
}
