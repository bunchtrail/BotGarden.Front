import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ row = {}, isInput = false }) {
  if (isInput) {
    return (
      <tr>
        <td>
          <input type="text" name="code" />
        </td>
        <td>
          <input type="text" name="inventorNumber" />
        </td>
        <td>
          <input type="text" name="yearObserved" />
        </td>
        <td>
          <input type="text" name="P1" />
        </td>
        <td>
          <input type="text" name="P61" />
        </td>
        <td>
          <input type="text" name="P62" />
        </td>
        <td>
          <input type="text" name="P63" />
        </td>
        <td>
          <input type="text" name="P64" />
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{row.code}</td>
      <td>{row.inventorNumber}</td>
      <td>{row.yearObserved}</td>
      <td>{row.P1}</td>
      <td>{row.P61}</td>
      <td>{row.P62}</td>
      <td>{row.P63}</td>
      <td>{row.P64}</td>
    </tr>
  );
}

TableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string,
    inventorNumber: PropTypes.string,
    yearObserved: PropTypes.string,
    P1: PropTypes.string,
    P61: PropTypes.string,
    P62: PropTypes.string,
    P63: PropTypes.string,
    P64: PropTypes.string,
  }),
  isInput: PropTypes.bool,
};

TableRow.defaultProps = {
  row: {},
  isInput: false,
};

export default TableRow;
