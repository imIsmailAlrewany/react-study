import styles from '../style.module.css';
import shortid from 'shortid';

const TodoForm = ({ todo, setTodo, list, setList }) => {
  const handleInput = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, { id: shortid.generate(), value: todo }]);
    setTodo('');
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.todoInput}
        type="text"
        value={todo}
        placeholder="Type a thing to do..."
        onChange={handleInput}
      />
      <button className={styles.submit} type="submit">Add</button>
    </form>
  );
};

export default TodoForm;