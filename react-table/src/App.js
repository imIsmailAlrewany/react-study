import React, { useState } from 'react';
import ButtonsComponent from "./components/ButtonsComponent";
import ModalComponent from "./components/ModalComponent";
import TableComponent from "./components/TableComponent";

function App() {
  const [row, setRowNumber] = useState(1);
  const [cell, setCellNumber] = useState(1);

  return (
    <div className="App">
      <TableComponent row={row} cell={cell}></TableComponent>
      <ButtonsComponent
        row={row}
        setRowNumber={setRowNumber}
        cell={cell}
        setCellNumber={setCellNumber}
      ></ButtonsComponent>
      <ModalComponent row={row} cell={cell}></ModalComponent>
    </div>
  );
}

export default App;
