import styles from '../style.module.css';

const ListItem = ({ item, list, setList }) => {
  const deleteItem = () => {
    setList(list.filter(listItem => listItem.id !== item.id));
  };

  return (
    <article className={styles.listItem}>
      <h3 className={styles.itemHeading}>{item.value}</h3>
      <button type="button" onClick={deleteItem}>Done</button>
    </article>
  );
};

export default ListItem;