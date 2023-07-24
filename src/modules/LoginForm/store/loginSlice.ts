import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AddUserFormType, ErrorType, LoginStateType, UserLoginType, UserType} from '../types/types';
import loginApi from "../api/api";
import { avatars } from '../../../utils/avatars';
import {RootState} from "../../../store/store";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;



export const fetchUsersBase = createAsyncThunk<UserType[],undefined,{rejectValue:string}>(
    'login/fetchUsersBase',
    async (_,{rejectWithValue}) => {
            const response = await loginApi.usersBase()

            if (response) {
                return response as UserType[]
            }

            return rejectWithValue('Something wrong!')
    })

export const addNewUser = createAsyncThunk<
    string,
    AddUserFormType,
    {
        state:RootState,
        rejectValue:string,
    }
    >(
    'login/addNewUser',
    async(payload,{getState,rejectWithValue,dispatch})=> {
        const {new_name, new_password} = payload
        const person = getState().login.users.filter(user => user.name === new_name)

        if (person.length === 0) {
            await loginApi.addNewUser(new_name, new_password)

            await dispatch(fetchUsersBase())
        }

        return rejectWithValue('This name is already taken!')
    }
)

const initialState:LoginStateType = {
    users: [],
    current: null,
    status:'idle',
    error:null,
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
                avatar:avatars.homer,
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
    },
    extraReducers:(builder => {
        builder
            .addCase(fetchUsersBase.pending,(state,action)=> {
                state.status = 'pending'
            })

            .addCase(fetchUsersBase.fulfilled, (state,action)=> {
                state.users = action.payload
                state.status = 'fulfilled'
            })

            .addCase(fetchUsersBase.rejected, (state,{payload})=> {
                if (payload) {
                    state.error = payload
                }
                state.status = 'rejected'
            })

            .addCase(addNewUser.pending, (state,action)=> {
                state.status = 'pending'
            })

            .addCase(addNewUser.rejected, (state,{payload}) => {
                if (payload) {
                    state.error = payload
                }
                state.status = 'rejected'
            })

            .addCase(addNewUser.fulfilled, (state,action)=> {
                state.status = 'fulfilled'
                state.error = null
            })
    })
})

export default loginSlice.reducer
export const { logIn, logOut, addUser, pickAvatar } = loginSlice.actions