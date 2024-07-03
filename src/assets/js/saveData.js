export default async function saveData(formState) {
  const formData = new FormData();

  Object.keys(formState).forEach((key) => {
    let value = formState[key];
    if (value === undefined || value === null) {
      value = ' ';
    }
    if (typeof value === 'boolean' || typeof value === 'number') {
      value = value.toString();
    }
    formData.append(key, value);
  });

  const latitude = parseFloat(formState.Latitude).toString().replace('.', ',');
  const longitude = parseFloat(formState.Longitude)
    .toString()
    .replace('.', ',');

  formData.set('Latitude', latitude);
  formData.set('Longitude', longitude);

  // Убедимся, что широта и долгота отправляются как строки
  formData.set('Latitude', latitude);
  formData.set('Longitude', longitude);

  // Append additional fields
  formData.append('SectorId', '1');
  formData.set('HerbariumPresence', formState.HerbariumPresence.toString());

  // Output formData to the console for debugging
  formData.forEach((value, key) => {
    console.log(`${key}: ${value} (Type: ${typeof value})`);
  });

  console.log('Sending data to the server...', formData);

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
          const el = element;
          if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
          } else {
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
