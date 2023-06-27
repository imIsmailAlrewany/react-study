import React, { Fragment } from 'react';
import '../style.module.css';
import CellComponent from './CellComponent';

const RowComponent = ({ cell }) => {
  return (
    <Fragment>
      <tr>
        {Array(cell).fill(cell).map((c, i) => <CellComponent key={i}></CellComponent>)}
      </tr>
      {console.log('from row component')}
    </Fragment>
  );
};

export default React.memo(RowComponent);