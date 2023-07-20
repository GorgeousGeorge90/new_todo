import { getTodos } from './selectors/selectors';
import TodoItem from './components/TodoItem/TodoItem';
import { useAppSelector } from '../../store/hooks';





const Todos = () => {
    const todos = useAppSelector(getTodos)

    return (<section>
        {
            todos ?  <ul>
                {
                    todos.map(todo => <TodoItem key={todo.id}
                                                    {...todo}
                    />)
                }
            </ul>: <p>planning is the key to success</p>
        }
    </section>)
}

export default Todos