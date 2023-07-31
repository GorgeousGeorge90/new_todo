import {getActiveCurrentTodos, getCompleteCurrentTodos, getCurrentTodos, getTodos} from './selectors/selectors';
import { useAppSelector } from '../../store/hooks';
import { getCurrent } from '../LoginForm/selectors/selectors';
import TodosColumn from './components/TodosColumn/TodosColumn';
import styles from './Todos.module.scss';





const Todos = () => {
    const current = useAppSelector(getCurrent)
    const active_todos = useAppSelector(getActiveCurrentTodos)
    const complete_todos = useAppSelector(getCompleteCurrentTodos)


    return (<div className={'flex items-center justify-center'}>
        {
             current ? <div className={styles.todos_list}>
               <TodosColumn todos={active_todos}
                            title={'active todos'}
                            avatar={current?.avatar}

               />
               <TodosColumn todos={complete_todos}
                            title={'completed todos'}
                            avatar={current?.avatar}
               />
           </div>:<p>planning is the key to success</p>
        }
    </div>)
}

export default Todos