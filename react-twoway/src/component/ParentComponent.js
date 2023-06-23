import { useState } from 'react';
import ChildAComponent from './ChildAComponent';
import ChildBComponent from './ChildBComponent';

export default function ParentComponent() {
  const [data, setData] = useState('Ismaeil Alrewany');

  const handleChangeData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <ChildAComponent changeData={handleChangeData}></ChildAComponent>
      <ChildBComponent data={data}></ChildBComponent>
    </div>
  );
}