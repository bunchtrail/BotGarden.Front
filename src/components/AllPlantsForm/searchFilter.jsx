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
            const rowData = [];
            row.querySelectorAll('input').forEach((input) => {
              rowData.push(input.value.toLowerCase());
            });
            cachedData.push({ row, rowData });
          });
          setPlantDataCache(cachedData);
          cacheInitialized.current = true;
          console.log('Кэшированные данные:', cachedData);
        }, 500);
      };

      cacheDataWithDelay();

      debouncedHandleSearch.current = debounce((searchValue, cache) => {
        const startTime = performance.now();
        let iterations = 0;

        cache.forEach(({ row, rowData }) => {
          const rowMatches = rowData.some((cellValue) => {
            iterations += 1;
            return cellValue.includes(searchValue);
          });

          row.style.display = rowMatches ? '' : 'none';
        });

        const endTime = performance.now();
        const duration = endTime - startTime;

        console.log(`Поиск занял ${duration.toFixed(2)} миллисекунд`);
        console.log(`Количество итераций: ${iterations}`); // Вывод количества итераций
      }, 300);
    }

    // Очищаем дебаунсированную функцию при размонтировании компонента
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
      debouncedHandleSearch.current(searchValue, plantDataCache);
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
        <option value="InventorNumber">Инв_номер</option>
        <option value="FamilyName">Семейство</option>
        <option value="GenusName">Род</option>
        <option value="Species">Вид</option>
        <option value="Synonyms">Синонимы</option>
        <option value="Variety">Сорт</option>
        <option value="Form">Форма</option>
        <option value="SectorName">Местоположение на территории сада</option>
        <option value="PlantOrigin">Происхождение образца</option>
        <option value="NaturalHabitat">Природный ареал</option>
        <option value="Determined">Определитель</option>
        <option value="EcologyBiology">Экология и биология вида</option>
        <option value="EconomicUse">Хозяйственное применение</option>
        <option value="DateOfPlanting">Год посадки</option>
        <option value="Originator">Оригинатор</option>
        <option value="Date">Год</option>
        <option value="Country">Страна</option>
        <option value="ProtectionStatus">Охраняемый статус вида</option>
        <option value="HerbariumPresence">Наличие гербария</option>
        <option value="FilledOut">Заполнял</option>
        <option value="ImagePath">Иллюстрация</option>
        <option value="HerbariumDuplicate">
          Наличие дубликатов в других гербариях
        </option>
        <option value="Note">Состояние образца</option>
        <option value="Latitude">Широта</option>
        <option value="Longitude">Долгота</option>
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
        <ButtonClick onClick={handleUpdate} iconClass="fas fa-save">
          Сохранить
        </ButtonClick>
        <ButtonClick onClick={handleDelete} iconClass="fas fa-trash-alt">
          Удалить
        </ButtonClick>
      </div>
    </div>
  );
}

export default SearchFilter;
