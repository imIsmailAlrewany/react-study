import styles from '../style.module.css';

const TodoHeader = () => {
  return (
    <header className={styles.todoHeader}>
      <h1 className={styles.heading}>Todo List</h1>
    </header>
  );
};

export default TodoHeader;