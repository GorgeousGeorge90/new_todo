import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AddUserFormType, LoginStateType, UserLoginType, UserType} from '../types/types';
import homer from '../../../assets/img/homer.png';



const initialState:LoginStateType = {
    users: [
        { id:'12', name: 'Egor', password: '1111', avatar:homer}
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
                    state.current = currentUser
                }
            }
        },

        logOut(state) {
            state.current = null
        },

        addUser(state,action:PayloadAction<AddUserFormType>) {
            const { new_name, new_password } = action.payload
            const newUser:UserType = {
                id: Date.now().toString(),
                name:new_name,
                password:new_password,
                avatar:homer,
            }
            state.users.push(newUser)
        },

        pickAvatar(state,action:PayloadAction<Pick<UserType, 'id'|'avatar'>>) {
            const { id, avatar } = action.payload
            const currentUser = state.users.find(user => user.id === id)

            if (currentUser) {
                currentUser.avatar = avatar
            }
        }
    }
})

export default loginSlice.reducer
export const { logIn, logOut, addUser, pickAvatar } = loginSlice.actions