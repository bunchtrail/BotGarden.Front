import React from 'react';
import InputField from './inputField';

function PlantRow({ plant, handleInputChange }) {
  return (
    <tr key={plant.plantId} data-plant-id={plant.plantId}>
      <td>
        <i className="fas fa-check select-row-icon" />
      </td>
      <InputField value={plant.plantId || ''} name="PlantId" disabled />
      <InputField
        value={plant.inventorNumber || ''}
        name="inventorNumber"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.family?.familyName || ''}
        name="familyName"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.genus?.genusName || ''}
        name="genusName"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.species || ''}
        name="species"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.synonyms || ''}
        name="synonyms"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.variety || ''}
        name="variety"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.form || ''}
        name="form"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.sector?.sectorName || ''}
        name="sectorName"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.plantOrigin || ''}
        name="plantOrigin"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.naturalHabitat || ''}
        name="naturalHabitat"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.determined || ''}
        name="determined"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.ecologyBiology || ''}
        name="ecologyBiology"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.economicUse || ''}
        name="economicUse"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.dateOfPlanting || ''}
        name="dateOfPlanting"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.originator || ''}
        name="originator"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.date || ''}
        name="date"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.country || ''}
        name="country"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.protectionStatus || ''}
        name="protectionStatus"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <td>
        <input
          type="checkbox"
          className="input-field"
          checked={plant.herbariumPresence || false}
          name="herbariumPresence"
          onChange={(e) => handleInputChange(e, plant.plantId)}
        />
      </td>
      <InputField
        value={plant.filledOut || ''}
        name="filledOut"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.imagePath || ''}
        name="imagePath"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.herbariumDuplicate || ''}
        name="herbariumDuplicate"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.note || ''}
        name="note"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.latitude || ''}
        name="latitude"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
      <InputField
        value={plant.longitude || ''}
        name="longitude"
        onChange={(e) => handleInputChange(e, plant.plantId)}
      />
    </tr>
  );
}

export default PlantRow;
