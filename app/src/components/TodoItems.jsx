import Todoitem from "./Todoitem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ TodoItems,onDeleteClick }) => {
  return (
    <div className={styles.itemcontainer}> {/* it contains the css item container*/}
      {TodoItems.map((item) => ( /*todoitem.map will display all the todoitems details like name,date,delete.. */
        <Todoitem tododate={item.duedate} todoname={item.name} key={item.name}  onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
}


export default TodoItems;
