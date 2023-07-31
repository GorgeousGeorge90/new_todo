import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './TaskForm.module.scss';
import {NewTodoProps, NewTodoType, TaskType} from '../../modules/Todos/types/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {getCurrent} from "../../modules/LoginForm/selectors/selectors";
import {addNewTodo} from "../../modules/Todos/store/todosSlice";



const TaskForm = () => {
    const dispatch = useAppDispatch()
    const current = useAppSelector(getCurrent)
    const { register, reset, handleSubmit, formState:{errors}} = useForm<TaskType>()
    const onSubmit:SubmitHandler<NewTodoType> = data => {
        if (current) {
            const payload: NewTodoProps = {
                name: current.name,
                title: data.title,
                text: data.text,
            }
            dispatch(addNewTodo(payload))
            reset()
        }
    }

    return (<form className={styles.task_form}
                  onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.task_form_input}
               type='text'
               placeholder={'enter title'}
               {...register('title',{required: true})}
            />
        <input className={styles.task_form_input}
               type='text'
               placeholder={'enter task'}
               {...register('text',{required: true})}
        />
        <button className={styles.task_form_btn}>
            +
        </button>
    </form>)
}

export default TaskForm