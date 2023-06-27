import React, { Fragment } from 'react';
import CellComponent from './CellComponent';

const RowComponent = () => {
  return (
    <Fragment>
      <CellComponent></CellComponent>
    </Fragment>
  );
};

export default React.memo(RowComponent);