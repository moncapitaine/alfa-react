import styles from "./ToDoList.module.css"
export interface ToDoListProps {
  itemList: string[],
  title: string
}

const ToDoList = (props: ToDoListProps) => { 
  return (
    <>
      <h2>{props.title}</h2>
      <ul className={styles['todo-list']}>
        {props.itemList.map((item: any) => 
          (<li>{item}</li>))
        }
      </ul>
    </>)
}

export default ToDoList
