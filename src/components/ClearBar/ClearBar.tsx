import { useAppDispatch } from '../../store/hooks';
import styles from './ClearBar.module.scss';
import { deleteAllTodos, deleteCompletedTodos } from "../../modules/Todos/store/todosSlice";



interface IClearBar {
    name:string
}

const ClearBar = ({name}:IClearBar) => {
   const dispatch = useAppDispatch()

    return (<section>
        <ul className={styles.clear_bar_list}>
            <li onClick={()=>dispatch(deleteAllTodos(name))}><i>clear all</i></li>
            <li onClick={()=>dispatch(deleteCompletedTodos(name))}><i>clear completed</i></li>
        </ul>
    </section>)
}

export default ClearBar