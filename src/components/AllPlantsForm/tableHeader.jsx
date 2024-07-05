/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function TableHeader() {
  return (
    <thead className="thead-dark">
      <tr>
        <th>
          <i className="fas fa-check select-all-icon" />
        </th>
        <th>ID</th>
        <th>Инв_номер</th>
        <th>Семейство</th>
        <th>Род</th>
        <th>Вид</th>
        <th>Синонимы</th>
        <th>Сорт</th>
        <th>Форма</th>
        <th>Местоположение на территории сада</th>
        <th>Происхождение образца</th>
        <th>Природный ареал</th>
        <th>Определитель</th>
        <th>Экология и биология вида</th>
        <th>Хозяйственное применение</th>
        <th>Год посадки</th>
        <th>Оригинатор</th>
        <th>Год</th>
        <th>Страна</th>
        <th>Охраняемый статус вида</th>
        <th>Наличие гербария</th>
        <th>Заполнял</th>
        <th>Иллюстрация</th>
        <th>Наличие дубликатов в других гербариях</th>
        <th>Состояние образца</th>
        <th>Широта</th>
        <th>Долгота</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
