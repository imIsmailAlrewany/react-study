import { useState } from 'react';
import styles from '../style.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoBody = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);

  return (
    <section className={styles.todoBody}>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        list={list}
        setList={setList}
      ></TodoForm>
      <TodoList
        list={list}
        setList={setList}
      ></TodoList>
    </section>
  );
};

export default TodoBody;