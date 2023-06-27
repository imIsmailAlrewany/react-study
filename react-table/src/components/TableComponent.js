import styles from '../style.module.css';
import RowComponent from './RowComponent';

const TableComponent = ({ row, cell }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {Array(row).fill(row).map((r, i) => <RowComponent key={i} cell={cell}></RowComponent>)}
      </tbody>
    </table>
  );
};

export default TableComponent;