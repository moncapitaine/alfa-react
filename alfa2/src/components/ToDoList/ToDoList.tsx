import styles from "./ToDoList.module.css"
const ToDoList = () => { 

  return (
  <ul className={styles['todo-list']}>
    <li>Aufräumen</li>
    <li>Waschen</li>
    <li>Kochen</li>
    <li>Programmieren</li>
  </ul>)
}

export default ToDoList
