import {createAsyncThunk, createSlice, current, PayloadAction} from '@reduxjs/toolkit';
import {TodoItemType, TodosType, updateTodoPayload, CompleteProps, NewTodoProps, UpdateProps} from '../types/types';
import todosApi from '../api/todosApi';
import { RootState } from '../../../store/store';



export const fetchTodos = createAsyncThunk<
    TodoItemType[],
    undefined,
    {
        rejectValue:string
    }
    >(
    '@todos/fetchTodos',
    async (_, { rejectWithValue } ) => {

        const response = await todosApi.fetchTodos()

        if (response) {
            return response
        } else {
            return rejectWithValue('Ooops! We have some problems!')
        }
    }
)

export const addNewTodo = createAsyncThunk<
    any,
    NewTodoProps
    >(
    '@todos/addNewTodo',
    async (payload,{ dispatch }) => {
        const { name, title, text } = payload

        const response = await todosApi.addNewTodo(name,title,text)
        if (response) {
            dispatch(addNewYourTodo(response))
        }
    }
)

export const completeTodo = createAsyncThunk<
    any,
    CompleteProps
    >(
    '@todos/completeTodo',
    async (payload,{dispatch})=> {
        const { id, complete } = payload
        await todosApi.completeTodo(id,!complete)
        dispatch(completeYourTodo(id))
    }
)

export const updateTodo = createAsyncThunk<
    any,
    {
        id:number,
        new_text:string,
    }
    >(
    '@todos/updateTodo',
    async (payload,{dispatch}) => {
        const { id, new_text } = payload

        await todosApi.updateTodo(id,new_text)
        dispatch(updateYourTodo(payload))
    }
)

export const deleteTodo = createAsyncThunk<
    any,
    number,
    { state: RootState }
    >(
    '@todos/deleteTodo',
    async (payload,{dispatch}) => {

        await todosApi.deleteTodo(payload)
        dispatch(deleteYourTodo(payload))
    }
)

export const deleteCompletedTodos = createAsyncThunk<
    any,
    string
    >(
    '@todos/deleteCompletedTodos',
    async (payload,{dispatch})=> {
        await todosApi.deleteCompleteTodos(payload)
        dispatch(deleteCompletedYourTodos(payload))
})

export const deleteAllTodos = createAsyncThunk<
    any,
    string
    >(
    '@todos/deleteAllTodos',
    async (payload,{dispatch})=> {
        await todosApi.deleteAllTodos(payload)
        dispatch(deleteAllYourTodos(payload))
    }
)

const initialState:TodosType = {
    todos:[],
    status:'idle',
    error:null,
}

const todosSlice = createSlice({
    name:'@todos',
    initialState,
    reducers:{
        addNewYourTodo:(state,action:PayloadAction<TodoItemType[]>)=>{
            state.todos.push(action.payload[0])
        },
        completeYourTodo:(state,action:PayloadAction<number>) => {
            const currentTodo = state.todos.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.complete = !currentTodo.complete
            }
        },
        updateYourTodo:(state,action:PayloadAction<{ id:number, new_text:string}>)=> {
            const { id, new_text } = action.payload
            const currentTodo = state.todos.find(todo => todo.id === id )
            if (currentTodo) {
                currentTodo.text = new_text
            }
        },
        deleteYourTodo:(state,action:PayloadAction<number>)=> {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        deleteCompletedYourTodos:(state,action:PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.name === action.payload)
                .filter(todo => todo.complete !== true)
        },
        deleteAllYourTodos:(state,action:PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.name !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state,action)=> {
                state.status = 'pending'
            })

            .addCase(fetchTodos.fulfilled, (state, {payload}) => {
                state.todos = payload
                state.status = 'fulfilled'
            })

            .addCase(fetchTodos.rejected, (state, {payload})=> {
                state.status = 'rejected'
                if (payload)
                state.error = payload
            })
    }
})

export const  {
    deleteYourTodo,
    updateYourTodo,
    completeYourTodo,
    addNewYourTodo,
    deleteCompletedYourTodos,
    deleteAllYourTodos
} = todosSlice.actions
export default todosSlice.reducer