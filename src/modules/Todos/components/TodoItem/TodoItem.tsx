import { TodoItemType } from '../../types/types';
import styles from './TodoItem.module.scss';
import {useAppDispatch} from "../../../../store/hooks";
import {completeTodo, deleteTodo} from "../../store/todosSlice";




const TodoItem = ({id,name,title,text,complete,date,avatar}:TodoItemType) => {
    const dispatch = useAppDispatch()

    return (<li className={styles.todo_item_container}>
        <input type='checkbox'
               checked={complete}
               onClick={()=>dispatch(completeTodo(id))}
        />
        <main className={styles.todo_item_main}>
            <h3 className={styles.todo_item_title}>{title}</h3>
            <p>{text}</p>
        </main>
        <aside className={styles.todo_item_right}>
            <p>{date}</p>
            <img src={avatar} alt='avatar'/>
        </aside>
        <span onClick={()=>dispatch(deleteTodo(id))}>x</span>
    </li>)
}

export default TodoItem