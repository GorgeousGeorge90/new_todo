import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoItemType, TodosType} from '../types/types';


const initialState:TodosType = {
    todos:[],
    status:'idle',
}

export type updateTodoPayload = Pick<TodoItemType, 'id'| 'text'>

const todosSlice = createSlice({
    name:'@todos',
    initialState,
    reducers:{
        addTodo(state) {
            const newTodo:TodoItemType = {
                id:'123',
                name:'Egor',
                title:'Hello!',
                text:'Do it!',
                complete:false,
                date: new Date().toLocaleTimeString(),
            }
            state.todos.push(newTodo)
        },
        completeTodo(state,action:PayloadAction<TodoItemType['id']>) {
            const todo = state.todos.find(todo => todo.id === action.payload)

            if (todo) {
                todo.complete = !todo.complete
            }
        },
        updateTodo(state,action:PayloadAction<updateTodoPayload>) {
            const {id,text} = action.payload
            const todo = state.todos.find(todo => todo.id === id)

            if (todo) {
                todo.text = text
            }
        },
        deleteTodo(state,action:PayloadAction<TodoItemType['id']>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const {addTodo,completeTodo,updateTodo,deleteTodo} = todosSlice.actions

export default todosSlice.reducer