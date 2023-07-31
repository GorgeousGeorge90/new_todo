import { RootState } from '../../../store/store';
import { createSelector } from "@reduxjs/toolkit";
import { getCurrent } from '../../LoginForm/selectors/selectors';


export const getTodos = (state:RootState) => state.todos.todos
export const getCurrentTodos = createSelector(
    [getTodos,getCurrent],
    (todos,current) => {
        return todos.filter(todo => todo.name === current?.name)
    }
)

export const getCompleteCurrentTodos = createSelector(
    getCurrentTodos,
    (todos) => {
        return todos.filter(todo => todo.complete === true)
    }
)

export const getActiveCurrentTodos = createSelector(
    getCurrentTodos,
    (todos) => {
        return todos.filter(todo => todo.complete === false)
    }
)

