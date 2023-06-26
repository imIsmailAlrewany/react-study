import styles from '../style.module.css';
import ListItem from './ListItem';

const TodoList = ({ list, setList }) => {
  return (
    <div className={styles.todoList}>
      {list.map(item =>
        <ListItem key={item.id} item={item} list={list} setList={setList} ></ListItem>
      )}
    </div>
  );
};

export default TodoList;