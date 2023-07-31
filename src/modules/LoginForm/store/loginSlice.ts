import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddUserFormType, ErrorType, LoginStateType, UserLoginType, UserType } from '../types/types';
import loginApi from "../api/loginApi";
import { avatars } from '../../../utils/avatars';
import { RootState } from '../../../store/store';




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
    {
        new_name:string,
        new_password:string,
    },
    {
        state:RootState,
        rejectValue:string,
    }
    >(
    '@login/addNewUser',
    async(payload,{getState,rejectWithValue,dispatch})=> {
        const {new_name, new_password} = payload
        const person = getState().login.users.filter(user => user.name === new_name)

        if (person.length === 0) {
            const response = await loginApi.addNewUser(new_name, new_password)

            if(response) {
                dispatch(addUser(response))
            }
        }

        return rejectWithValue('This name is already taken!')
    }
)

export const fetchAvatars = createAsyncThunk(
    '@login/fetchAvatars',
    async (_,{dispatch,rejectWithValue}) => {

        const result = await loginApi.getAvatars()
        if (result) {
            dispatch(getAvatars(result))
        } else {
            return rejectWithValue('We have some problems!')
        }
    }
)

export const changeAvatar = createAsyncThunk<
    any,
    {
        id:number,
        avatar:string,
    }
    >(
    '@login/changeAvatar',
    async (payload,{dispatch}) => {
        const { id, avatar } = payload
        await loginApi.changeAvatar(id,avatar)
        dispatch(pickAvatar(payload))
    }
)

const initialState:LoginStateType = {
    users: [],
    current: null,
    status:'idle',
    avatars:null,
    error:null,
}

const loginSlice = createSlice({
    name:'@login',
    initialState,
    reducers:{
        getAvatars: (state,action:PayloadAction<string[]>) => {
            state.avatars = action.payload
        },

        logIn:(state,action:PayloadAction<UserLoginType>)=> {
            const { name,password } = action.payload
            const currentUser = state.users.find(user => user.name === name)

            if (currentUser) {
                if (currentUser.password === password) {
                    state.current = currentUser
                }
            }
        },

        logOut:(state) => {
            state.current = null
        },

        addUser:(state,action:PayloadAction<UserType[]>) => {
            state.users.push(action.payload[0])
        },

        pickAvatar:(state,action:PayloadAction<{id:number,avatar:string}>)=> {
            const { id, avatar } = action.payload
            const currentUser = state.users.find(user => user.id === id)

            if (currentUser) {
                currentUser.avatar = avatar

                if (state.current) {
                    state.current.avatar = avatar
                }
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
export const {
    logIn,
    logOut,
    pickAvatar,
    getAvatars,
    addUser,
} = loginSlice.actions