import styles from '../style.module.css';

const ButtonsComponent = ({ row, setRowNumber, cell, setCellNumber }) => {
  const increaseRow = () => {
    setRowNumber(row + 1);
  };

  const increaseCell = () => {
    setCellNumber(cell + 1);
  };

  return (
    <div className={styles.buttons}>
      <button type="button" onClick={increaseRow}>Add Row</button>
      <button type="button" onClick={increaseCell}>Add Cell</button>
    </div>
  );
};

export default ButtonsComponent;