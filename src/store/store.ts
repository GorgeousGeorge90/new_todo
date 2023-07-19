import {
    configureStore
} from '@reduxjs/toolkit';
import todosReducer from '../modules/Todos/store/todosSlice';
import loginReducer from '../modules/LoginForm/store/loginSlice';

const store = configureStore({
    reducer: {
        todos:todosReducer,
        login:loginReducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store