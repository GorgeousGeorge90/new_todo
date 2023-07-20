import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {LoginStateType, UserLoginType, UserType} from '../types/types';



const initialState:LoginStateType = {
    users: [
        { id:'12', name: 'Egor', password: '1111'}
    ],
    current: null,
}

const loginSlice = createSlice({
    name:'@login',
    initialState,
    reducers:{
        logIn(state,action:PayloadAction<UserLoginType>) {
            const { name,password } = action.payload
            const currentUser = state.users.find(user => user.name === name)

            if (currentUser) {
                if (currentUser.password === password) {
                    state.current = name
                }
            }
        },

        logOut(state) {
            state.current = null
        },

        addUser(state,action) {
            const { new_name, new_password } = action.payload
            const newUser:UserType = {
                id: Date.now().toString(),
                name:new_name,
                password:new_password,
            }
            state.users.push(newUser)
        }
    }
})

export default loginSlice.reducer
export const { logIn, logOut, addUser } = loginSlice.actions