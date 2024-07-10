/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useContext, useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import ButtonClick from '../Buttons/Button/ButtonClick';
import { PlantsContext } from '../../assets/js/PlantsContext';
import '../../assets/css/searchFilter.css'; // Подключаем файл стилей

function SearchFilter() {
  const { updatePlants, deletePlants } = useContext(PlantsContext);
  const [searchField, setSearchField] = useState('');
  const [searchCategory, setSearchCategory] = useState('PlantId');
  const [plantDataCache, setPlantDataCache] = useState([]);
  const debouncedHandleSearch = useRef(null);
  const cacheInitialized = useRef(false);

  useEffect(() => {
    if (!cacheInitialized.current) {
      const cacheDataWithDelay = () => {
        setTimeout(() => {
          const cachedData = [];
          document.querySelectorAll('tr[data-plant-id]').forEach((row) => {
            const rowData = {};
            row.querySelectorAll('input').forEach((input) => {
              rowData[input.name] = input.value.toLowerCase();
            });
            cachedData.push({ row, rowData });
          });
          setPlantDataCache(cachedData);
          cacheInitialized.current = true;
          console.log('Кэшированные данные:', cachedData);
        }, 500); // Задержка в 500 миллисекунд
      };

      cacheDataWithDelay();

      // Создаем дебаунсированную версию handleSearch
      debouncedHandleSearch.current = debounce(
        (searchValue, searchCategory, cache) => {
          if (!Array.isArray(cache)) return; // Убедитесь, что cache является массивом
          const startTime = performance.now();
          let iterations = 0; // Инициализация счетчика итераций

          cache.forEach(({ row, rowData }) => {
            iterations += 1; // Увеличение счетчика итераций
            const cellValue = rowData[searchCategory];
            const rowMatches = cellValue.includes(searchValue);
            row.style.display = rowMatches ? '' : 'none';
          });

          const endTime = performance.now();
          const duration = endTime - startTime;

          console.log(`Поиск занял ${duration.toFixed(2)} миллисекунд`);
          console.log(`Количество итераций: ${iterations}`); // Вывод количества итераций
        },
        300
      );
    }

    return () => {
      if (debouncedHandleSearch.current) {
        debouncedHandleSearch.current.cancel();
      }
    };
  }, []);

  const handleUpdate = () => {
    const plantUpdates = [];
    document.querySelectorAll('tr[data-plant-id]').forEach((row) => {
      const plantId = parseInt(row.getAttribute('data-plant-id'), 10);
      const formState = {};
      row.querySelectorAll('input').forEach((input) => {
        const { name, value, type, checked } = input;
        formState[name] = type === 'checkbox' ? checked : value;
      });
      plantUpdates.push({ plantId, ...formState });
    });
    updatePlants(plantUpdates);
  };

  const handleDelete = () => {
    const plantIds = [];
    document
      .querySelectorAll('tr[data-plant-id] input[type="checkbox"]')
      .forEach((checkbox) => {
        if (checkbox.checked) {
          const plantId = parseInt(
            checkbox.closest('tr').getAttribute('data-plant-id'),
            10
          );
          plantIds.push(plantId);
        }
      });
    deletePlants(plantIds);
    console.log('Удаленные растения:', plantIds);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
    console.log('Поисковое значение:', searchValue);
    if (debouncedHandleSearch.current) {
      debouncedHandleSearch.current(
        searchValue,
        searchCategory,
        plantDataCache
      );
    }
  };

  return (
    <div className="search-filter-container">
      <select
        id="searchCategory"
        className="form-control search-category"
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option value="PlantId">ID</option>
        <option value="inventorNumber">Инв_номер</option>
        <option value="familyName">Семейство</option>
        <option value="genusName">Род</option>
        <option value="species">Вид</option>
        <option value="synonyms">Синонимы</option>
        <option value="variety">Сорт</option>
        <option value="form">Форма</option>
        <option value="sectorName">Местоположение на территории сада</option>
        <option value="plantOrigin">Происхождение образца</option>
        <option value="naturalHabitat">Природный ареал</option>
        <option value="determined">Определитель</option>
        <option value="ecologyBiology">Экология и биология вида</option>
        <option value="economicUse">Хозяйственное применение</option>
        <option value="dateOfPlanting">Год посадки</option>
        <option value="originator">Оригинатор</option>
        <option value="date">Год</option>
        <option value="country">Страна</option>
        <option value="protectionStatus">Охраняемый статус вида</option>
        <option value="herbariumPresence">Наличие гербария</option>
        <option value="filledOut">Заполнял</option>
        <option value="imagePath">Иллюстрация</option>
        <option value="herbariumDuplicate">
          Наличие дубликатов в других гербариях
        </option>
        <option value="note">Состояние образца</option>
        <option value="latitude">Широта</option>
        <option value="longitude">Долгота</option>
      </select>

      <input
        id="searchField"
        type="text"
        placeholder="Поиск..."
        className="form-control search-field"
        value={searchField}
        onChange={handleSearchChange}
      />

      <div className="button-container">
        <ButtonClick
          onClick={handleUpdate}
          iconClass="fas fa-save"
          className="btn btn-primary"
        />
        <ButtonClick
          onClick={handleDelete}
          iconClass="fas fa-trash-alt"
          className="btn btn-primary1"
        />
      </div>
    </div>
  );
}

export default SearchFilter;
