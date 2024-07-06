import React, { useRef } from 'react';
import FormRow from './formRow';
import FormGroup from './formGroup';
import TextInput from './textInput';
import SelectInput from './selectInput';
import ToggleMapButton from './toggleMapButton';
import MapComponent from '../../assets/js/Map/mapComponent';

export default function FormFields({
  formState,
  handleInputChange,
  setLatitude,
  setLongitude,
  familyOptions,
  genusOptions,
  locationOptions,
  toggleMap, // получение функции toggleMap
  showMap, // получение состояния showMap
  sectorId,
}) {
  const mapRef = useRef(null);
  return (
    <>
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
            value={sectorId.toString()}
            onChange={handleInputChange}
            options={locationOptions}
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup colSize={6} label="" htmlFor="Latitude">
          <TextInput
            id="Latitude"
            name="Latitude"
            value={formState.Latitude}
            onChange={(e) => setLatitude(parseFloat(e.target.value))}
            hidden
          />
        </FormGroup>
        <FormGroup colSize={6} label="" htmlFor="Longitude">
          <TextInput
            id="Longitude"
            name="Longitude"
            value={formState.Longitude}
            onChange={(e) => setLongitude(parseFloat(e.target.value))}
            hidden
          />
        </FormGroup>
      </FormRow>
      <FormRow>
        <div style={{ width: '100%' }}>
          <ToggleMapButton toggleMap={toggleMap} showMap={showMap} />
          <div className={`map-container ${showMap ? 'show' : 'hide'}`}>
            <MapComponent
              latitude={formState.Latitude}
              longitude={formState.Longitude}
              setLatitude={setLatitude}
              setLongitude={setLongitude}
              allowMarker
              allowArea={false}
              mapStyle={{ marginTop: '20px', marginBottom: '20px' }}
              mapRef={mapRef}
            />
          </div>
        </div>
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
        <FormGroup label="Природный ареал" htmlFor="NaturalHabitat" colSize={6}>
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
    </>
  );
}
