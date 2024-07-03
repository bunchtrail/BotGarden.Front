import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableRow from './tableRow';

function TableContainer({ data }) {
  return (
    <div className="table-container">
      <h2>Фенология</h2>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} row={row} />
          ))}
          <TableRow isInput />
        </tbody>
      </table>
    </div>
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

export default TableContainer;
