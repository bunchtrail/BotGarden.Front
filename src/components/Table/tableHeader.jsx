import React from 'react';

function TableHeader() {
  return (
    <>
      <tr>
        <td colSpan="8">
          <button className="btn-image" type="button">
            <img src="seal_icon.png" alt="Seal icon" />
          </button>
        </td>
      </tr>
      <tr>
        <th>Код</th>
        <th>Инв_номер</th>
        <th>Год наблюд</th>
        <th>П1</th>
        <th>П61</th>
        <th>П62</th>
        <th>П63</th>
        <th>П64</th>
      </tr>
    </>
  );
}

export default TableHeader;
