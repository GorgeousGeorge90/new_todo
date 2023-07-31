import { TodoItemType } from '../../types/types';
import styles from './TodoItem.module.scss';
import { useAppDispatch } from '../../../../store/hooks';
import { completeTodo, deleteTodo, updateTodo } from '../../store/todosSlice';
import { ChangeEvent, useState } from 'react';
import { ReactComponent as Edit } from './img/edit.svg';
import { ReactComponent as Trash } from './img/trash1.svg';



const InputStyle = {
    backgroundColor:'#a78bfa',
    border:'none',
    padding:'2px',
    color:'white',
}

const TodoItem = ({id,name,title,text,complete,avatar}:TodoItemType) => {
    const dispatch = useAppDispatch()
    const [editMode,setEditMode] = useState(false)
    const [new_text, setNewText] = useState(text)

    const handleClick = () => {
        const payload = {
            id,
            complete,
        }
        dispatch(completeTodo(payload))
    }
    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setNewText(event.target.value)
    }
    const onBlur = () => {
        const payload = {
            id,
            new_text,
        }
        dispatch(updateTodo(payload))
        setEditMode(false)
    }

    return (<li className={styles.todo_item_container}
                style={{backgroundColor: complete ? '#a78bfa':'#ddd6fe'}}>
        <header className={styles.todo_item_header}>
            {
                avatar ?  <img className={styles.todo_item_ava}
                               src={avatar}
                               alt='avatar'/>:null
            }
            <input className={styles.todo_item_checkbox}
                   type='checkbox'
                   defaultChecked={complete}
                   onClick={handleClick}
            />
        </header>
        <main className={styles.todo_item_main}>
            <h3 className={styles.todo_item_title}
                style={{textDecoration: complete ? 'line-through':'none'}}
            >{title}</h3>
            {
                editMode ? <input type='text'
                                  value={new_text}
                                  autoFocus={true}
                                  onChange={onChange}
                                  onBlur={onBlur}
                                  style={InputStyle}
                    />: <p style={{textDecoration: complete ? 'line-through':'none'}}>{text}</p>
            }
        </main>
        <div className={styles.todo_item_btn}>
            <Edit height={'15px'}
                  width={'15px'}
                  fill={'darkslateblue'}
                  onClick={()=> complete ? console.log('disabled'):setEditMode(true)}
            />
            <Trash height={'15px'}
                   width={'15px'}
                   onClick={()=>dispatch(deleteTodo(id))}
            />
        </div>
    </li>)
}

export default TodoItem