import { TodosProps } from '../../types/types';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodosColumn.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';


const TodosColumn = ({todos,title,avatar}:TodosProps) => {
    const [parent] = useAutoAnimate({duration:500})

    return (<section className={styles.todos_column_container}>
        <h3 className={styles.todos_column_title}>{title}</h3>
        <ul className={styles.todos_column_list}
            ref={parent}
        >
        {
            todos.map(todo => {
                return {
                    ...todo,
                    avatar:avatar,
                }
            })
                .map(todo=> <TodoItem key={todo.id}
                                          {...todo}
                            />)
            }
        </ul>
    </section>)
}

export default TodosColumn