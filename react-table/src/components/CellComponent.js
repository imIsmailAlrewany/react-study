import React, { Fragment } from 'react';
import '../style.module.css';

const CellComponent = () => {
  return (
    <>
      <td>cell</td>
      {console.log('from cell component')}
    </>
  );
};

export default React.memo(CellComponent);