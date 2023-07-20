import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemType, TodosType, updateTodoPayload, NewTodoType } from '../types/types';
import homer from '../../../assets/img/homer.png';


const initialState:TodosType = {
    todos:[
        {
            id:'23',name:'Kate',title:'Hi',text:'Nice boobs!',avatar:homer,complete:false,date:'213123'
        }
    ],
    status:'idle',
}

const todosSlice = createSlice({
    name:'@todos',
    initialState,
    reducers:{
        addTodo(state,action:PayloadAction<NewTodoType>) {
            const {title,text,name} = action.payload
            const newTodo:TodoItemType = {
                id: Date.now().toLocaleString(),
                name,
                title,
                text,
                complete:false,
                avatar:homer,
                date: new Date().toLocaleTimeString(),
            }
            console.log(newTodo)
            state.todos = [...state.todos,newTodo]
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

export const { addTodo,completeTodo,updateTodo,deleteTodo } = todosSlice.actions

export default todosSlice.reducer