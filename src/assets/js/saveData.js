export default async function saveData(formState) {
  const formData = new FormData();
  Object.keys(formState).forEach((key) => {
    let value = formState[key];
    if (value === undefined || value === null) {
      value = ' ';
    }
    // Конвертация boolean значений в строку
    if (typeof value === 'boolean') {
      value = value.toString();
    }

    // Конвертация числовых значений в строку
    if (typeof value === 'number') {
      value = value.toString();
    }

    formData.append(key, value);
  });

  // Parse latitude and longitude
  const latitude = 115; // Здесь должен быть код для получения значений широты и долготы из формы
  const longitude = 223;

  // Validate latitude and longitude
  if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
    console.error('Please select the correct location on the map.');
    return;
  }

  // Add latitude and longitude to formData
  formData.set('Latitude', latitude.toString().replace(',', '.'));
  formData.set('Longitude', longitude.toString().replace(',', '.'));

  // Append additional fields
  formData.append('SectorId', '1');
  formData.set('HerbariumPresence', formState.HerbariumPresence.toString());

  // Output formData to the console for debugging
  formData.forEach((value, key) => {
    console.log(`${key}: ${value} (Type: ${typeof value})`);
  });

  console.log('Sending data to the server...', formState);

  try {
    const response = await fetch(
      'https://localhost:7076/api/dendrology/plants/add',
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    if (result.success) {
      console.debug('Successfully sent to the server:', result);
      console.info('Plant successfully added!');

      // Reset form fields
      document
        .querySelectorAll('input, select, textarea')
        .forEach((element) => {
          if (element.type === 'checkbox' || element.type === 'radio') {
            const el = element;
            el.checked = false; // Изменено на корректный сброс состояния чекбоксов и радио кнопок
          } else {
            const el = element;
            el.value = '';
          }
        });

      // Reset all select elements to the first option
      document.querySelectorAll('select').forEach((select) => {
        const sel = select;
        sel.selectedIndex = 0;
      });
    } else {
      console.error('Error sending data:', result.error);
      console.error(`Error: ${result.message}`);
    }
  } catch (error) {
    console.error('An error occurred while adding the plant:', error);
  }
}
