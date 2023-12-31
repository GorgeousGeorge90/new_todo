import loginReducer, {
    addUser,
    logIn,
    logOut,
    pickAvatar,
} from './../store/loginSlice';
import { LoginStateType } from '../types/types';


const initialState:LoginStateType = {
    users: [
        { id:12, name: 'Egor', password: '1111', avatar:null}
    ],
    current: { id:132, name: 'Kate', password: '1111', avatar:null},
    status:'idle',
    error:null,
    avatars:null,
}

describe('login reducer cases',()=> {
    it('goal: default case',()=> {

        const result = loginReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: login and change current value to Egor',()=> {

        const action = {
            type:logIn.type,
            payload:{
                name:'Egor',
                password:'1111',
                avatar:null,
            },
        }

        const result = loginReducer(initialState,action)
        expect(result.current).toEqual(initialState.users[0])
    })

    it('goal: logout and change current value to null',()=> {

        const result = loginReducer(initialState,({type:logOut.type}))
        expect(result.current).toBeNull()
    })

    it('goal: add new user and get user array length:2',()=> {

        const action = {
            type: addUser.type,
            payload: [
                {
                    name: 'Joker',
                    password: '123',
                    avatar: null,
                }
            ]
        }

        const result = loginReducer(initialState,action)
        expect(result.users).toHaveLength(2)
    })

    it('goal: change avatar to bart',()=> {

        const action = {
            type:pickAvatar.type,
            payload:{
                id:12,
                avatar:'bart',
            }
        }

        const result = loginReducer(initialState,action)
        expect(result.users[0].avatar).toBe('bart')
    })
})